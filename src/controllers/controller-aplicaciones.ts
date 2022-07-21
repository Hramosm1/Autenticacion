import { Request, Response, NextFunction } from 'express'
import { prisma } from '../database'
import { BadRequest } from "http-errors";
export class Aplicaciones {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await prisma.aplicaciones.findMany({
                select: {
                    id: true,
                    nombre: true,
                },
                where: {
                    activo: true
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
            const result = await prisma.aplicaciones.findMany({
                select: {
                    id: true,
                    nombre: true,
                    activo: true
                },
                where: {
                    id: Number(id)
                }
            })
            res.send(result)
        } catch (ex: any) {
            next(new BadRequest(ex))
        }
    }
    async create(req: Request, res: Response, next: NextFunction) {
        const data = req.body
        try {
            const result = await prisma.aplicaciones.create({ data })
            res.send(result)
        } catch (ex: any) {
            next(new BadRequest(ex))
        }
    }
    async editById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        const data = req.body
        try {
            const result = await prisma.aplicaciones.update({ data, where: { id: Number(id) } })
            res.send(result)
        } catch (ex: any) {
            next(new BadRequest(ex))
        }
    }
    async deleteById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        try {
            const result = await prisma.aplicaciones.update({ data: { activo: false }, where: { id: Number(id) } })
            res.send(result)
        } catch (ex: any) {
            next(new BadRequest(ex))
        }
    }
}