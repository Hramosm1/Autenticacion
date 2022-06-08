import { Router } from 'express';
import { Login } from "../controllers/controller-login";
const controller = new Login()
const router = Router()

router.get('/verifyToken/:token', controller.loginWithToken)
router.post('/:duracion?', controller.login)

export default router