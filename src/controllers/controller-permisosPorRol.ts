import { Request, Response } from 'express'
import { getPool } from '../database'
import { Bit, Int } from 'mssql/msnodesqlv8'
import { BodyPermisos } from '../interfaces/interface-permisosPorRol'
export class Permisosporrol {
    async getById(req: Request, res: Response) {
        const { id } = req.params
        try {
            const pool = await getPool()
            const request = pool?.request()
            request?.input('id', Int, id)
            const result = await request?.query('SELECT * FROM VW_Permisos WHERE idModulo = @id AND activo = 1')
            res.send(result?.recordset)
        } catch (ex: any) {
            res.status(404).send({ message: 'error en la consulta', error: ex.message })
        }
    }
    async editPermisos(req: Request, res: Response) {
        const body: BodyPermisos[] = Object.values(req.body)
        const stIterable = body.map(({ ver, crear, editar, eliminar, id }) => `UPDATE Permisos SET ver=${Number(ver)}, crear=${Number(crear)}, editar=${Number(editar)}, eliminar=${Number(eliminar)} WHERE id = ${id}`)
        try {
            const pool = await getPool()
            for await (const query of stIterable) {
                await pool?.query(query)
            }
            res.send({ status: 200 })
        } catch (ex: any) {
            res.status(404).send({ message: 'error en la consulta', error: ex.message })
        }
    }
}