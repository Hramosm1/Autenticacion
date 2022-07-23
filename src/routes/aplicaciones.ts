import { Router } from 'express';
import { Aplicaciones } from '../controllers/controller-aplicaciones'
const controller = new Aplicaciones()
const router = Router()

/**
 * 
 * @api {get} /aplicaciones Varias aplicaciones
 * @apiName GetAplicaciones
 * @apiGroup /aplicaciones
 * 
 * @apiSucessExample {json} body
 * [
 *  {
 *    "id" : 3,
 *    "nombre":"aplicacion"
 *    "activo":false
 *  }
 * ]
 * 
 */

/**
 * 
 * @api {get} /aplicaciones/:id Una aplicacion 
 * @apiName GetAplicacion
 * @apiGroup /aplicaciones
 * 
 * @apiParam  {String} id id de aplicacion
 * 
 * @apiSucessExample {json} body
 * {
 *   "id" : 3,
 *   "nombre":"aplicacion"
 *   "activo":false
 * }
 * 
 * 
 */

/**
 * 
 * @api {post} /aplicaciones Crear
 * @apiName CreateAplicacion
 * @apiGroup /aplicaciones
 * 
 * @apiBody {string} nombre el nombre de la aplicacion
 *
 * @apiSuccess (200) {json} body json de la aplicacion creada
 * 
 */


/**
 * 
 * @api {put} /aplicaciones/:id Editar 
 * @apiGroup /aplicaciones
 * 
 * @apiParam {Number} id id de la aplicacion a editar 
 * 
 * @apiBody {string} nombre nuevo nombre de la aplicacion
 * 
 * @apiSuccess (200) {json} body json de la aplicacion editada
 * 
 * 
 */

/**
 * 
 * @api {delete} /aplicaciones/:id Eliminar 
 * @apiGroup /aplicaciones
 * 
 * @apiParam  {Number} id id de la aplicacion a eliminar
 * 
 * @apiSuccess (200) {json} body json de la aplicacion eliminada
 * 
 * 
 */
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.put('/:id', controller.editById)
router.delete('/:id', controller.deleteById)

export default router

