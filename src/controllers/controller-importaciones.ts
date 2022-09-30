import { NextFunction, Request, RequestHandler, Response } from "express";
import { prisma } from '../database'
import { BadRequest } from "http-errors";
import { number, z } from "zod";

export class Importaciones {
  async getUsuariosSinAsignar(req: Request, res: Response, next: NextFunction) {
    const { idAplicacion } = req.params
    try {
      const result: any = await prisma.$queryRaw`
      SELECT COUNT(*) usuariosSinAsignar
      FROM Usuarios
      WHERE activo = 1 AND
            NOT id IN ( SELECT idUsuario 
                        FROM RolPorUsuario 
                        WHERE idAplicacion = ${idAplicacion})`
      res.send(result[0] || { usuariosSinAsignar: 0 })
    } catch (error: any) {
      next(new BadRequest(error.message))
    }
  }
  async asignarUsuariosAAplicacion(req: Request, res: Response, next: NextFunction) {
    const { idAplicacion } = req.body
    try {
      const data: any = await prisma.$queryRaw`
      SELECT  id idUsuario, 
              4 idRol,
              cast(${idAplicacion} as int)  idAplicacion
      FROM Usuarios
      WHERE activo = 1 AND
            NOT id IN ( SELECT idUsuario 
                        FROM RolPorUsuario 
                        WHERE idAplicacion = ${idAplicacion})`
      const result = await prisma.rolPorUsuario.createMany({ data })
      res.send(result)
    } catch (error: any) {
      next(new BadRequest(error.message))
    }
  }
}