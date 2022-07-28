import { Request, Response, NextFunction } from 'express'
import { prisma } from '../database'
import { BadRequest, NotFound } from "http-errors";
export class Usuarios {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await prisma.usuarios.findMany({
                select: {
                    id: true,
                    usuario: true,
                    nombre: true,
                    correo: true
                },
                where: {
                    activo: {
                        equals: true
                    }
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
            const result = await prisma.usuarios.findMany({
                select: {
                    id: true,
                    usuario: true,
                    nombre: true,
                    idPersonaUnica: true,
                    idCobrador: true,
                    correo: true,
                    fechaCreacion: true
                },
                where: {
                    id
                }
            })
            res.send(result)
        } catch (ex: any) {
            next(new BadRequest(ex))
        }
    }
}