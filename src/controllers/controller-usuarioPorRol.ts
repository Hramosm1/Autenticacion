import {Request, Response, NextFunction} from 'express'
import {prisma} from '../database'
import {BadRequest, NotFound, Unauthorized} from "http-errors";

export class UsuariosPorRol {
    async getAll(req: Request, res: Response, next: NextFunction) {
        next(new Unauthorized())
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        const {id} = req.params
        try {
            const result = await prisma.rolPorUsuario.findMany({
                select: {
                    id: true,
                    Usuarios: {
                        select: {
                            nombre: true,
                            usuario: true
                        }
                    },
                    Roles: {
                        select: {
                            nombre: true
                        }
                    }
                },
                where: {
                    idAplicacion: Number(id)
                },
                orderBy: {
                    Roles: {id: 'asc'},
                }
            })
            res.send(result.map(({id, Usuarios, Roles}) => ({
                id,
                nombre: Usuarios.nombre,
                usuario: Usuarios.usuario,
                rol: Roles.nombre
            })))
        } catch (ex: any) {
            next(new BadRequest(ex))
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        const data = req.body
        try {
            const result = await prisma.rolPorUsuario.create({data})
            res.send(result)
        } catch (ex: any) {
            next(new BadRequest(ex))
        }
    }

    async editById(req: Request, res: Response, next: NextFunction) {
        const {id} = req.params
        const data = req.body
        try {
            const result = await prisma.rolPorUsuario.update({data, where: {id: Number(id)}})
            res.send(result)
        } catch (ex: any) {
            next(new BadRequest(ex))
        }
    }

    async deleteById(req: Request, res: Response, next: NextFunction) {
        const {id} = req.params
        try {
            const result = await prisma.rolPorUsuario.delete({where: {id: Number(id)}})
            res.send(result)
        } catch (ex: any) {
            next(new BadRequest(ex))
        }
    }
}