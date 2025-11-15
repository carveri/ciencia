
import express from "express";
import cientificosRouter from "../src/routes/cientifico.router.js";



const app = express()

const PORT = 3000

app.use(express.json())
app.use('/api', cientificosRouter)

console.log('MI host!!!:', process.env.HOST_PG);

const res = process.env.HOST_PG ? 'Si existe': 'vacia'

console.log('respuesta si existe o no:', res);



app.listen(PORT, ()=>{
    console.log('server corriendo con mensajes ojala!');
})