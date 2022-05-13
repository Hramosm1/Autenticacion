import { Router } from 'express';
import { Permisosporrol } from '../controllers/controller-permisosPorRol'
const controller = new Permisosporrol()
const router = Router()

router.get('/:id', controller.getById)
router.put('/:id', controller.editById)

export default router