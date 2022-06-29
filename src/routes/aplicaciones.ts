import { Router } from 'express';
import { Aplicaciones } from '../controllers/controller-aplicaciones'
const controller = new Aplicaciones()
const router = Router()

router.get('/',controller.getAll)
router.get('/:id',controller.getById)
router.post('/',controller.create)
router.put('/:id',controller.editById)
router.delete('/:id',controller.deleteById)

export default router