
import express from "express";
import cientificosRouter from "../src/routes/cientifico.router.js";
process.loadEnvFile()

const app = express()

const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use('/api', cientificosRouter)

console.log('MI CONTRASEÑA:', process.env.PASSWORD_PG);



app.listen(PORT, ()=>{
    console.log('server corriendo con mensajes ojala!');
})