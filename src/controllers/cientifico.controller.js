import { pool } from "../db.js";

// get all
export const getAllCientifico = async(req, res)=>{
    const {rows} = await pool.query('SELECT * FROM cientificos')
    res.json(rows)
}

// post
export const postCientifico = async(req, res)=>{
    const {nombre, nacionalidad} = req.body
    await pool.query('INSERT INTO cientificos (nombre, nacionalidad) values($1, $2)', [nombre, nacionalidad])
    res.json({"message": "Guardado!!!"})
}


// get one
export const getOneCientifico = async(req, res)=>{
    const {id} = req.params

    const {rows} = await pool.query('SELECT * FROM cientificos WHERE id=$1', [id])
    res.json(rows)
}

// delete
export const deleteCientifico = async(req, res)=>{

    const {id} = req.params

    await pool.query('DELETE FROM cientificos WHERE id=$1', [id])
    res.json({"message": "ELiminado!"})

}

// update
export const updateCientifico = async(req, res)=>{

    const {id} = req.params
    const {nombre, nacionalidad} = req.body

    await pool.query('UPDATE cientificos SET nombre=$1, nacionalidad=$2, WHERE id=$3', [nombre, nacionalidad, id])
    res.json({"message": "Actualizado!!"})

}