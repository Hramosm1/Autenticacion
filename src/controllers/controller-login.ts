import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { generateToken, validateToken, getUserLogin } from '../core/utils';
import { Unauthorized, BadRequest } from "http-errors";
import { prisma } from '../database';
export class Login {
  async login(req: Request, res: Response, next: NextFunction) {
    const exp = req.params.duracion || '24h'
    try {
      //-----------------VALIDACION DE USUARIO

      const consulta = await getUserLogin(req.body)
      if (consulta) {
        //-----------------GENERACION DE TOKEN
        const accessToken = generateToken({ id: consulta.id }, exp)
        //-----------------GENERACION DE RESULTADO
        const { id, usuario, nombre, idPersonaUnica, correo, RolPorUsuario } = consulta
        const user = {
          id,
          usuario,
          nombre,
          idPersonaUnica,
          correo,
          permisos: RolPorUsuario[0].Roles.Permisos,
          permisosEspeciales: RolPorUsuario[0].Roles.PermisosEspecialesPorRol
            .map(({ PermisosEspeciales }) => PermisosEspeciales)
        }
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
    try {
      console.log(req.headers.authorization)
      // const res = validateToken(req.params.token) as JwtPayload
      const exp = '24h'
      try {

        res.send('res')
      } catch (ex: any) {
        next(new BadRequest(ex))
      }
    } catch (error) {
      next(new Unauthorized('token no valido'))
    }
  }
}