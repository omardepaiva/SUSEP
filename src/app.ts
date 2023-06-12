import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Criar uma pessoa
async function criarPessoa(
  nome: string,
  cpf: string,
  dataNascimento: Date,
  email: string,
  unidadeId: number,
  tipoFuncaoId: number,
  cargaHoraria: number,
  situacaoPessoa: number
) {
  const pessoa = await prisma.pessoa.create({
    data: {
      nome,
      cpf,
      dataNascimento,
      email,
      unidadeId,
      tipoFuncaoId,
      cargaHoraria,
      situacaoPessoa,
    },
  });

  return pessoa;
}

// Obter uma pessoa pelo ID
async function obterPessoaPorId(id: number) {
  const pessoa = await prisma.pessoa.findUnique({
    where: { id },
  });

  return pessoa;
}

// Atualizar uma pessoa pelo ID
async function atualizarPessoa(
  id: number,
  dadosAtualizacao: {
    nome?: string;
    cpf?: string;
    dataNascimento?: Date;
    email?: string;
    unidadeId?: number;
    tipoFuncaoId?: number;
    cargaHoraria?: number;
    situacaoPessoa?: number;
  }
) {
  const pessoa = await prisma.pessoa.update({
    where: { id },
    data: dadosAtualizacao,
  });

  return pessoa;
}

// Deletar uma pessoa pelo ID
async function deletarPessoa(id: number) {
  const pessoa = await prisma.pessoa.delete({
    where: { id },
  });

  return pessoa;
}

// Exemplo de uso
async function exemploCRUD() {
  const pessoaCriada = await criarPessoa(
    "João Silva",
    "123456789",
    new Date(1990, 0, 1),
    "joao.silva@example.com",
    1,
    1,
    8,
    1
  );
  console.log("Pessoa criada:", pessoaCriada);

  const pessoaObtida = await obterPessoaPorId(pessoaCriada.id);
  console.log("Pessoa obtida:", pessoaObtida);

  const pessoaAtualizada = await atualizarPessoa(pessoaCriada.id, {
    nome: "João da Silva",
  });
  console.log("Pessoa atualizada:", pessoaAtualizada);

  const pessoaDeletada = await deletarPessoa(pessoaCriada.id);
  console.log("Pessoa deletada:", pessoaDeletada);
}

// Executar o exemplo
exemploCRUD()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
