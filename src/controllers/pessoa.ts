import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function create(req: Request, res: Response) {
  const pessoa = await prisma.pessoa.create({
    data: req.body,
  });

  return res.json(pessoa);
}

export async function read(req: Request, res: Response) {
  const { id } = req.params;
  const data = await prisma.pessoa.findFirst({ where: { id: Number(id) } });
  return res.send(data);
}

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const updatedData = await prisma.pessoa.update({
    where: { id: Number(id) },
    data: req.body,
  });
  return res.send(updatedData);
}

// export async function delete(req: Request, res: Response) {}

export async function all(req: Request, res: Response) {
  const data = await prisma.pessoa.findMany();
  return res.send(data);
}
