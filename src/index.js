
import express from "express";
import cientificosRouter from "../src/routes/cientifico.router.js";
process.loadEnvFile()

const app = express()

const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use('/api', cientificosRouter)


app.listen(PORT, ()=>{
    console.log('server corriendo con mensajes ojala!');
})