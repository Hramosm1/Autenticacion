import { Router } from 'express';
import { UsuariosPorRol } from '../controllers/controller-usuarioPorRol'
const controller = new UsuariosPorRol()
const router = Router()


router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.put('/:id', controller.editById)
router.delete('/:id', controller.deleteById)

export default router