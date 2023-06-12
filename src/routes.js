import { Router } from "express";

import {criarTabela, atualizarPessoa, obterPessoaPorId } from './app.ts';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api rodando"
    })
})

router.get('/pessoa', obterPessoaPorId);
router.put('/pessoa', atualizarPessoa);
router.post('/pessoa', criarTabela);

export default router;