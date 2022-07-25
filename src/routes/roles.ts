import { Router } from 'express';
import { Roles } from '../controllers/controller-roles'
const controller = new Roles()
const router = Router()

/**
 * 
 * @api {get} /roles Varios roles
 * @apiGroup /roles
 * 
 * @apiSucessExample {json} body
 * [
 *  {
 *    "id" : 3,
 *    "nombre":"rol"
 *    "activo":false
 *  }
 * ]
 * 
 */

/**
 * 
 * @api {get} /roles/:id Un rol
 * @apiGroup /roles
 * 
 * @apiParam  {String} id id de aplicacion
 * 
 * @apiSucessExample {json} body
 * {
 *   "id" : 3,
 *   "nombre":"rol"
 *   "activo":false
 * }
 * 
 */

/**
 * 
 * @api {post} /roles Crear
 * @apiGroup /roles
 * 
 * @apiBody {string} nombre el nombre del rol
 *
 * @apiSuccess (200) {json} body json del rol creado
 * 
 */

/**
 * 
 * @api {put} /roles/:id Editar
 * @apiGroup /roles
 * 
 * @apiParam {Number} id id del rol a editar 
 * 
 * @apiBody {string} nombre nuevo nombre del rol
 * 
 * @apiSuccess (200) {json} body json del rol editado
 * 
 */

/**
 * 
 * @api {delete} /roles/:id Eliminar 
 * @apiGroup /roles
 * 
 * @apiParam  {Number} id id del rol a eliminar
 * 
 * @apiSuccess (200) {json} body json del rol eliminada
 * 
 * 
 */

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.put('/:id', controller.editById)
router.delete('/:id', controller.deleteById)

export default router