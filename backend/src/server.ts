import express from 'express';

//Rota = conjunto
//Recurso = usuario

//metodos http = GET, POST, PUT, DELETE
//parametros

//GET = buscar informação {lista, item}
//POST = criando uma informação
//PUT =  editando uma informação
//DELETE =deletar informação

const app = express();

app.get('/users', (request, Response) =>{
    return Response.json({message: 'Hellou'});
});
app.listen(3333);