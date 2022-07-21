import { Router } from 'express';
import { Usuarios } from '../controllers/controller-usuarios'
const controller = new Usuarios()
const router = Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)

export default router