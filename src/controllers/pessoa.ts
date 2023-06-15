import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// CREATE - CRIAÇÃO DE PESSOA
export async function create(req: Request, res: Response) {
  const pessoa = await prisma.pessoa.create({
    data: req.body,
  });

  return res.json(pessoa);
}
// READ - LEITURA DE UM ÚNICO ID
export async function read(req: Request, res: Response) {
  const { id } = req.params;
  const data = await prisma.pessoa.findFirst({ where: { id: Number(id) } });
  return res.send(data);
}

// UPDATE - atualização de pessoa
export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const updatedData = await prisma.pessoa.update({
    where: { id: Number(id) },
    data: req.body,
  });
  return res.send(updatedData);
}

//deleteId = DELETAR UM ID
export async function deleteId(req: Request, res: Response) {
  const { id } = req.params;
  const deleteId = await prisma.pessoa.delete({
    where: { id: Number(id) },
  });
  return res.send(deleteId);
}

// ALL - ENCONTRAR TODOS OS IDS
export async function all(req: Request, res: Response) {
  const data = await prisma.pessoa.findMany();
  return res.send(data);
}
