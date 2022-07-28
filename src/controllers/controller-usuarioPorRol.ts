import { Request, Response, NextFunction } from 'express'
import { prisma } from '../database'
import { BadRequest, NotFound } from "http-errors";
export class UsuariosPorRol {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await prisma.rolPorUsuario.findMany({
        select: {
          id: true,
          Usuarios: {
            select: {
              id: true,
              idCobrador: true,
              nombre: true,
              usuario: true
            }
          },
          Roles: {
            select: {
              id: true,
              nombre: true
            }
          },
          Aplicaciones: {
            select: {
              id: true,
              nombre: true
            }
          },
        }
      })
      res.send(result)
    } catch (ex: any) {
      next(new BadRequest(ex))
    }
  }
  async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    try {
      const result = await prisma.rolPorUsuario.findMany({
        select: {
          id: true,
          Usuarios: {
            select: {
              id: true,
              idCobrador: true,
              nombre: true,
              usuario: true
            }
          },
          Roles: {
            select: {
              id: true,
              nombre: true
            }
          },
          Aplicaciones: {
            select: {
              id: true,
              nombre: true
            }
          },
        },
        where: { idAplicacion: Number(id) }
      })
      res.send(result)
    } catch (ex: any) {
      next(new BadRequest(ex))
    }
  }
  async create(req: Request, res: Response, next: NextFunction) {
    const data = req.body
    try {
      const result = await prisma.rolPorUsuario.create({ data })
      res.send(result)
    } catch (ex: any) {
      next(new BadRequest(ex))
    }
  }
  async editById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    const data = req.body
    try {
      const result = await prisma.rolPorUsuario.update({ data, where: { id: Number(id) } })
      res.send(result)
    } catch (ex: any) {
      next(new BadRequest(ex))
    }
  }
  async deleteById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    try {
      const result = await prisma.rolPorUsuario.delete({ where: { id: Number(id) } })
      res.send(result)
    } catch (ex: any) {
      next(new BadRequest(ex))
    }
  }
}