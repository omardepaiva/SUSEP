import { all, create, deleteId, read, update } from "./controllers/pessoa";
import cors from "cors"; // importando biblioteca do cors
import express from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); //declarando o uso do cors
app.listen(port, () => {
  console.log(`Server ligado ${port}`);
});
// REQUISIÇÕES HTTP
app.get("/pessoas", all);
app.get("/pessoa/:id", read);
app.post("/pessoa", create);
app.put("/pessoa/:id", update);
app.delete("/pessoa/:id", deleteId);
