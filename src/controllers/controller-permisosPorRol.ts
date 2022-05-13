import { Request, Response } from 'express'
import { getPool } from '../database'
import { Bit, Int } from 'mssql/msnodesqlv8'
export class Permisosporrol {
    async getById(req: Request, res: Response) {
        const { id } = req.params
        try {
            const pool = await getPool()
            const request = pool?.request()
            request?.input('id', Int, id)
            const result = await request?.query('SELECT * FROM VW_Permisos WHERE idModulo = @id')
            res.send(result?.recordset)
        } catch (ex: any) {
            res.status(404).send({ message: 'error en la consulta', error: ex.message })
        }
    }
    async editById(req: Request, res: Response) {
        const { id } = req.params
        const { ver, crear, editar, eliminar } = req.body
        try {
            const pool = await getPool()
            const request = pool?.request()
            request?.input('id', Int, id)
            request?.input('ver', Bit, ver)
            request?.input('crear', Bit, crear)
            request?.input('editar', Bit, editar)
            request?.input('eliminar', Bit, eliminar)
            const result = await request?.query('UPDATE Permisos SET ver = @ver, crear = @crear, editar = @editar, eliminar = @eliminar WHERE id = @id')
            res.send(result)
        } catch (ex: any) {
            res.status(404).send({ message: 'error en la consulta', error: ex.message })
        }
    }
}