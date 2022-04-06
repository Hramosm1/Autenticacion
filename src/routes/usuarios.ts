import { Router } from 'express';
import { Usuarios } from '../controllers/controller-usuarios'
const controller = new Usuarios()
const router = Router()

router.get('/',controller.getAll)
router.get('/:id',controller.getById)
router.post('/',controller.create)
router.put('/:id',controller.editById)
router.delete('/:id',controller.deleteById)

export default router