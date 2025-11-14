
import { Router } from "express";
import { deleteCientifico, getAllCientifico, getOneCientifico, postCientifico, updateCientifico } from "../controllers/cientifico.controller.js";

const router = Router()


router.get('/cientificos', getAllCientifico)
router.post('/cientificos', postCientifico)
router.get('/cientificos/:id', getOneCientifico)
router.delete('/cientificos/:id', deleteCientifico)
router.put('/cientificos/:id', updateCientifico)

export default router;