import { Router } from 'express';
import { Login } from "../controllers/controller-login";
const controller = new Login()
const router = Router()
/**
 * 
 * @api {get} /login/verifyToken Validacion por medio de token
 * @apiGroup /login
 * 
 * @apiHeader {string} token para que funcione es necesario enviar un hearer Authorization que contenga tipo_token
 * 
 * @apiHeaderExample {json} Ejemplo token:
 *     {
 *       "Authorization": "Bearer token"
 *     }

 * @apiSuccessExample {json} Respuesta 200:
 *{
 * "accessToken": "token"
 * "user": {
 *   "id": "UUID",
 *   "usuario": "USER",
 *   "nombre": "USER NAME",
 *   "idPersonaUnica": "UUDI",
 *   "correo": "example@gmail.com",
 *   "permisos": [],
 *   "permisosEspeciales": []
 *  }
 *}
 * 
 * 
 */
router.get('/verifyToken', controller.loginWithToken)


/**
 * 
 * @api {post} login/:duracion? Validacion con usuario contraseña
 * @apiGroup /login
 * 
 * @apiParam {string} [duracion = 24h] por defecto 24h parametro opcional que te permite decidir la duracion del token 
 * @apiParamExample {string}
 *  puedes enviar distintas opciones tales como 60, "2 days", "10h", "7d"
 *
 * @apiBody {string} user nombre de usuario
 * @apiBody {string} password contraseña
 * @apiBody {number} aplicacion id de la aplicacion
 * 
 * @apiSuccessExample {json} Respuesta 200:
 *{
 * "accessToken": "token"
 * "user": {
 *   "id": "UUID",
 *   "usuario": "USER",
 *   "nombre": "USER NAME",
 *   "idPersonaUnica": "UUDI",
 *   "correo": "example@gmail.com",
 *   "permisos": [],
 *   "permisosEspeciales": []
 *  }
 *}
 * 
 * 
 */
router.post('/:duracion?', controller.login)

export default router