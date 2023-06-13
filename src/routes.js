const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const express = require("express");
const app = express();
const port = 3000;

app.get("/up", (req, res) => {
  res.send("SERVER LIGADO");
});

app.listen(port, () => {
  console.log(`Server ligado ${port}`);
});

app.get("/", async (req, res) => {
  const data = await prisma.Pessoa.findMany();
  res.send(data);
});

app.post("/", async (req, res) => {
  const data = req.body;
  const createdData = await prisma.Pessoa.create({ data });
  res.send(createdData);
});

app.put("/", async (req, res) => {
  const { id } = req.params;
  const updatedData = await prisma.Pessoa.update({
    where: { id },
    data: req.body,
  });
  res.send(updatedData);
});
