import { Router } from 'express';
import { Permisosporrol } from '../controllers/controller-permisosPorRol'
const controller = new Permisosporrol()
const router = Router()


/**
 * 
 * @api {get} /permisos/:id Permisos de un modulo
 * @apiGroup /permisos
 * 
 * @apiParam  {String} id id de un modulo
 * [
 *    {
 *       "id":1,
 *       "ver":true,
 *       "crear":true,
 *       "editar":true,
 *       "eliminar":true,
 *       "Roles":{
 *          "id":1,
 *          "nombre":"Administrador"
 *       },
 *       "Modulos":{
 *          "id":1,
 *          "nombre":"Tickets",
 *          "Aplicaciones":{
 *             "id":1,
 *             "nombre":"Help Desk"
 *          }
 *       }
 *    },
 *    {
 *       "id":3,
 *       "ver":true,
 *       "crear":true,
 *       "editar":false,
 *       "eliminar":false,
 *       "Roles":{
 *          "id":2,
 *          "nombre":"Soporte"
 *       },
 *       "Modulos":{
 *          "id":1,
 *          "nombre":"Tickets",
 *          "Aplicaciones":{
 *             "id":1,
 *             "nombre":"Help Desk"
 *          }
 *       }
 *    },
 *    {
 *       "id":5,
 *       "ver":true,
 *       "crear":true,
 *       "editar":true,
 *       "eliminar":true,
 *       "Roles":{
 *          "id":3,
 *          "nombre":"Desarrollo"
 *       },
 *       "Modulos":{
 *          "id":1,
 *          "nombre":"Tickets",
 *          "Aplicaciones":{
 *             "id":1,
 *             "nombre":"Help Desk"
 *          }
 *       }
 *    },
 *    {
 *       "id":7,
 *       "ver":true,
 *       "crear":true,
 *       "editar":false,
 *       "eliminar":false,
 *       "Roles":{
 *          "id":4,
 *          "nombre":"Usuario"
 *       },
 *       "Modulos":{
 *          "id":1,
 *          "nombre":"Tickets",
 *          "Aplicaciones":{
 *             "id":1,
 *             "nombre":"Help Desk"
 *          }
 *       }
 *    }
 * ]
 * 
 */

/**
 * 
 * @api {post} /permisos Editar
 * @apiGroup /permisos
 * @apiDescription Recibe un listado de permisos por rol para editar
 * 
 * @apiBody {Number}  id        id del permiso a editar
 * @apiBody {Boolean} ver       permiso para realizar dicha accion
 * @apiBody {Boolean} crear     permiso para realizar dicha accion
 * @apiBody {Boolean} editar    permiso para realizar dicha accion
 * @apiBody {Boolean} eliminar  permiso para realizar dicha accion
 * 
 *
 * @apiSuccess (200) {json} body json de la aplicacion creada
 * 
 */


router.get('/:id', controller.getById)
router.put('/', controller.editPermisos)

export default router