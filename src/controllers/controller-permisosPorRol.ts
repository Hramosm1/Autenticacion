import { Request, Response, NextFunction } from 'express'
import { prisma } from '../database'
import { BadRequest, NotFound } from "http-errors";
export class Permisosporrol {
    async getById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        try {
            const result = await prisma.permisos.findMany({
                select: {
                    id: true,
                    ver: true,
                    crear: true,
                    editar: true,
                    eliminar: true,
                    Roles: {
                        select: {
                            id: true,
                            nombre: true
                        }
                    },
                    Modulos: {
                        select: {
                            id: true,
                            nombre: true,
                            Aplicaciones: {
                                select: {
                                    id: true,
                                    nombre: true
                                }
                            }
                        }
                    },
                },
                where: {
                    AND: [
                        { idModulo: Number(id) },
                        { Roles: { activo: { equals: true } } },
                        { Modulos: { activo: { equals: true } } }
                    ]
                }
            })
            res.send(result)
        } catch (ex: any) {
            next(new BadRequest(ex))
        }
    }
    async editPermisos(req: Request, res: Response, next: NextFunction) {
        const permisos = []
        try {
            for await (const { ver, crear, editar, eliminar, id } of req.body) {
                permisos.push(await prisma.permisos.update({ data: { ver, crear, editar, eliminar }, where: { id: Number(id) } }))
            }
            res.send(permisos)
        } catch (ex: any) {
            next(new BadRequest(ex))
        }
    }
}