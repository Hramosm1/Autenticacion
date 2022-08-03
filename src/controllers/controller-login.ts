import { Request, Response, NextFunction } from 'express';
import { generateToken, validateToken, getUserLogin, getUserByToken, parseUser } from '../core/utils';
import { Unauthorized, BadRequest, NotFound } from "http-errors";
import { JwtPayload } from 'jsonwebtoken';
export class Login {
  async login(req: Request, res: Response, next: NextFunction) {
    const exp = req.params.duracion || '24h'
    try {
      //-----------------VALIDACIÓN DE USUARIO
      const permisos = await getUserLogin(req.body)
      if (permisos) {
        //-----------------GENERACIÓN DE TOKEN
        const accessToken = generateToken({ id: permisos.id, idAplicacion: Number(req.body.aplicacion) }, exp)
        //-----------------GENERACIÓN DE RESULTADO
        const { id, usuario, nombre, idPersonaUnica, correo, RolPorUsuario } = permisos
        const user = parseUser(id, usuario, nombre, idPersonaUnica, correo, RolPorUsuario)
        res.send({ accessToken, user })
      }
      else {
        next(new Unauthorized('Usuario o contraseña no válidos'))
      }
    } catch (ex: any) {
      next(new BadRequest(ex))
    }
  }
  async loginWithToken(req: Request, res: Response, next: NextFunction) {
    const exp = '24h'
    if (req.headers.authorization) {
      const [tipo, accessToken] = req.headers.authorization.split(' ')
      try {
        const { id, idAplicacion } = validateToken(accessToken) as JwtPayload
        const permisos = await getUserByToken(id, idAplicacion)
        if (permisos) {
          const { id, usuario, nombre, idPersonaUnica, correo, RolPorUsuario } = permisos
          const user = parseUser(id, usuario, nombre, idPersonaUnica, correo, RolPorUsuario)
          res.send({ accessToken, user })
        } else {
          next(new NotFound())
        }
      } catch (ex: any) {
        next(new Unauthorized(ex))
      }
    } else {
      next(new Unauthorized('falta token'))
    }
  }
}