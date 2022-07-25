import { Router } from 'express';
import { Permisosespeciales } from '../controllers/controller-permisosEspeciales'
const controller = new Permisosespeciales()
const router = Router()



router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.put('/:id', controller.editById)
router.delete('/:id', controller.deleteById)

export default router