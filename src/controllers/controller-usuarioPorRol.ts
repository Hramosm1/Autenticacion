import { Request, Response } from 'express'
import { getPool } from '../database'
import { Int, VarChar } from 'mssql/msnodesqlv8'
export class UsuariosPorRol {
  async getAll(req: Request, res: Response) {
    res.send('ok')
  }
  async getById(req: Request, res: Response) {
    const { id } = req.params
    try {
      const pool = await getPool()
      const request = pool?.request()
      request?.input('id', Int, id)
      const result = await request?.query('SELECT * FROM VW_RolPorUsuario WHERE idAplicacion = @id')
      res.send(result?.recordset)
    } catch (ex: any) {
      res.status(404).send({ message: 'error en la consulta', error: ex.message })
    }
  }
  async create(req: Request, res: Response) {
    const { idUsuario, idRol, idAplicacion } = req.body
    try {
      const pool = await getPool()
      const request = pool?.request()
      request?.input('idUsuario', Int, idUsuario)
      request?.input('idRol', Int, idRol)
      request?.input('idAplicacion', Int, idAplicacion)
      const result = await request?.query('INSERT into RolPorUsuario (idUsuario, idRol, idAplicacion) VALUES (@IdUsuario, @idRol, idAplicacion)')
      res.send(result)
    } catch (ex: any) {
      res.status(404).send({ message: 'error en la consulta', error: ex.message })
    }
  }
  async editById(req: Request, res: Response) {
    const { id } = req.params
    const { idUsuario, idRol, idAplicacion } = req.body
    try {
      const pool = await getPool()
      const request = pool?.request()
      request?.input('idUsuario', Int, idUsuario)
      request?.input('idRol', Int, idRol)
      request?.input('idAplicacion', Int, idAplicacion)
      request?.input('id', Int, id)
      const result = await request?.query('UPDATE RolPorUsuario SET idUsuario = @idUsuario, idRol = @idRol, idAplicacion = @idAplicacion WHERE id = @id')
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
      const result = await request?.query('DELETE RolPorUsuario WHERE id = @id')
      res.send(result)
    } catch (ex: any) {
      res.status(404).send({ message: 'error en la consulta', error: ex.message })
    }
  }
}