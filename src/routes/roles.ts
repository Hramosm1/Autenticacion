import { Router } from 'express';
import { Roles } from '../controllers/controller-roles'
const controller = new Roles()
const router = Router()

router.get('/',controller.getAll)
router.get('/:id',controller.getById)
router.post('/',controller.create)
router.put('/:id',controller.editById)
router.delete('/:id',controller.deleteById)

export default router