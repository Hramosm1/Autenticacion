import { Request, Response } from 'express'
import { getPool } from '../database'
import { UniqueIdentifier } from 'mssql/msnodesqlv8'
export class Usuarios {
    async getAll(req: Request, res: Response) {
        try {
            const conn = await getPool()
            const result = await conn?.query('SELECT id, usuario, nombre, correo FROM Usuarios WHERE activo = 1')
            await conn?.close()
            res.send(result?.recordset)
        } catch (ex: any) {
            res.status(404).send({ message: 'error en la consulta', error: ex.message })
        }
    }
    async getById(req: Request, res: Response) {
        const { id } = req.params
        try {
            const pool = await getPool()
            const request = pool?.request()
            request?.input('id', UniqueIdentifier, id)
            const result = await request?.query('SELECT id, usuario, nombre, idPersonaUnica, idCobrador, correo, fechaCreacion  FROM Usuarios WHERE id = @id')
            res.send(result?.recordset[0])
        } catch (ex: any) {
            res.status(404).send({ message: 'error en la consulta', error: ex.message })
        }
    }
    async create(req: Request, res: Response) {
        const pool = await getPool()
        const body = req.body
        try {
            /* const request = pool.request()
             request.input()*/
        } catch (ex: any) {
            res.status(404).send({ message: 'error en la consulta', error: ex.message })
        }
    }
    async editById(req: Request, res: Response) {
        const pool = await getPool()
        const { id } = req.params
        try {
            /*const request = pool.request()
            request.input('id', Int, id)*/
        } catch (ex: any) {
            res.status(404).send({ message: 'error en la consulta', error: ex.message })
        }
    }
    async deleteById(req: Request, res: Response) {
        const pool = await getPool()
        const { id } = req.params
        try {
            /* const request = pool.request()
             request.input('id', Int, id)*/
        } catch (ex: any) {
            res.status(404).send({ message: 'error en la consulta', error: ex.message })
        }
    }
}