# Imagem do container
FROM node:alpine

# Indica qual é o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Arquivos gerados pelo Prisma
COPY prisma ./prisma/

# Copia as variáveis de ambiente (env)
COPY ./.env /app/

# Copia o arquivo tsconfig.json
COPY tsconfig.json ./

# Copia os outros arquivos e diretórios
COPY . .

# Instalando o NODE. REDHAT
# RUN yum install node 

RUN apt get install node

# Executa a instalação das dependências
RUN npm install

# Gera os arquivos do Prisma
RUN npx prisma generate


# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Comando para iniciar o servidor
CMD npm start

