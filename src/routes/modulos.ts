import { Router } from 'express';
import { Modulos } from '../controllers/controller-modulos'
const controller = new Modulos()
const router = Router()

router.get('/',controller.getAll)
router.get('/:id',controller.getById)
router.post('/',controller.create)
router.put('/:id',controller.editById)
router.delete('/:id',controller.deleteById)

export default router