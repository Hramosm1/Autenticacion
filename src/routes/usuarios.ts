import { Router } from 'express';
import { Usuarios } from '../controllers/controller-usuarios'
const controller = new Usuarios()
const router = Router()

/**
 * 
 * @api {get} /usuarios Varios usuarios
 * @apiGroup /usuarios
 * 

/**
 * 
 * @api {get} /usuarios/:id Un usuario
 * @apiGroup /usuarios
 * 
 * @apiParam  {String} id id del usuario
 * 
 * 
 */


router.get('/', controller.getAll)
router.get('/:id', controller.getById)

export default router