import { Request, Response } from 'express'
import { getPool } from '../database'
import { Int, VarChar } from 'mssql/msnodesqlv8'
export class Permisosespeciales {
    async getAll(req: Request, res: Response) {
        try {
            const pool = await getPool()
            const result = await pool?.query('SELECT id, nombre, aplicacion, idAplicacion FROM VW_PermisosEspeciales WHERE activo = 1')
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
            request?.input('id', Int, id)
            const result = await request?.query('SELECT id, nombre, aplicacion FROM VW_PermisosEspeciales WHERE activo = 1 AND idAplicacion = @id')
            res.send(result?.recordset)
        } catch (ex: any) {
            res.status(404).send({ message: 'error en la consulta', error: ex.message })
        }
    }
    async create(req: Request, res: Response) {
        const { nombre, idAplicacion } = req.body
        try {
            const pool = await getPool()
            const request = pool?.request()
            request?.input('nombre', VarChar(150), nombre)
            request?.input('idAplicacion', Int, idAplicacion)
            const result = await request?.query('INSERT INTO PermisosEspeciales (nombre, idAplicacion) VALUES (@nombre, @idAplicaciones)')
            res.send(result)
        } catch (ex: any) {
            res.status(404).send({ message: 'error en la consulta', error: ex.message })
        }
    }
    async editById(req: Request, res: Response) {
        const { id } = req.params
        const { nombre, idAplicacion } = req.body
        try {
            const pool = await getPool()
            const request = pool?.request()
            request?.input('id', Int, id)
            request?.input('nombre', VarChar(150), nombre)
            request?.input('idAplicacion', Int, idAplicacion)
            const result = await request?.query('UPDATE PermisosEspeciales SET nombre = @nombre idAplicacion = @idAplicacion WHERE id = @id')
            res.send(result)
        } catch (ex: any) {
            res.status(404).send({ message: 'error en la consulta', error: ex.message })
        }
    }
    async deleteById(req: Request, res: Response) {
        const { id } = req.params
        try {
            const pool = await getPool()
            const request = pool?.request()
            request?.input('id', Int, id)
            const result = await request?.query('UPDATE PermisosEspeciales SET activo = 0 WHERE id = @id')
            res.send(result)
        } catch (ex: any) {
            res.status(404).send({ message: 'error en la consulta', error: ex.message })
        }
    }
}