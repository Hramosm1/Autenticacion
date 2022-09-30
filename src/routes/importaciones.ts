import { Router } from 'express';
import { Importaciones } from '../controllers/controller-importaciones'
const controller = new Importaciones()
const router = Router()

router.get('/:idAplicacion', controller.getUsuariosSinAsignar)
router.post('/', controller.asignarUsuariosAAplicacion)

export default router

