import { Router } from 'express';
import { Modulos } from '../controllers/controller-modulos'
const controller = new Modulos()
const router = Router()

/**
 * 
 * @api {get} /modulos Varios Modulos
 * @apiGroup /modulos
 * 
 * @apiSucessExample {json} body
 * [
 *  {
 *    "id": 1,
 *    "nombre": "Tickets",
 *    "Aplicaciones": {
 *      "id": 1,
 *      "nombre": "Help Desk"
 *    }
 *  }
 * ]
 * 
 */

/**
 * 
 * @api {get} /modulos/:id Un modulo
 * @apiGroup /modulos
 * 
 * @apiParam  {Number} id id del modulo
 * 
 * @apiSucessExample {json} body
 * {
 *   "id": 1,
 *   "nombre": "Tickets",
 *   "Aplicaciones": {
 *     "id": 1,
 *     "nombre": "Help Desk"
 *   }
 * }
 * 
 */

/**
 * 
 * @api {post} /modulos Crear 
 * @apiGroup /modulos
 * 
 * @apiBody {string} nombre el nombre del modulo
 *
 * @apiSuccess (200) {json} body json del modulo creado
 * 
 */

/**
 * 
 * @api {put} /modulos/:id Editar 
 * @apiGroup /modulos
 * 
 * @apiParam {Number} id id del modulo a editar 
 * 
 * @apiBody {string} nombre nuevo nombre del modulo
 * 
 * @apiSuccess (200) {json} body json del modulo editado
 * 
 * 
 */

/**
 * 
 * @api {delete} /modulos/:id Eliminar
 * @apiGroup /modulos
 * 
 * @apiParam  {Number} id id del modulo a eliminar
 * 
 * @apiSuccess (200) {json} body json del modulo eliminado
 * 
 * 
 */

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.put('/:id', controller.editById)
router.delete('/:id', controller.deleteById)

export default router