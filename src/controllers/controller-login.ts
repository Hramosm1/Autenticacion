import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { Int, VarChar } from 'mssql/msnodesqlv8';
import { generateToken, validateToken } from '../core/utils';
import { getPool } from '../database';
export class Login {
  async login(req: Request, res: Response) {
    const exp = req.params.duracion || '24h'
    const { user, password, aplicacion } = req.body
    try {
      const pool = await getPool()
      const request = pool?.request()
      request?.input('user', VarChar(150), user)
      request?.input('pass', VarChar(150), password)
      request?.input('idApp', Int, aplicacion)
      const result = await request?.execute('SP_Login')
      if (result?.recordsets.length == 3) {
        const [usuario, permisos, permisosEspeciales] = result?.recordsets as Array<any[]>
        res.send({ accessToken: generateToken({ user, password, aplicacion }, exp), user: { ...usuario[0], permisos, permisosEspeciales } })
      } else res.status(401).send(result?.recordset[0])
    } catch (ex: any) {
      res.status(404).send({ message: 'error en la consulta', error: ex.message })
    }
  }
  async loginWithToken(req: Request, res: Response) {
    try {
      const { user, password, aplicacion } = validateToken(req.params.token) as JwtPayload
      const exp = '24h'
      try {
        const pool = await getPool()
        const request = pool?.request()
        request?.input('user', VarChar(150), user)
        request?.input('pass', VarChar(150), password)
        request?.input('idApp', Int, aplicacion)
        const result = await request?.execute('SP_Login')
        if (result?.recordsets.length == 3) {
          const [usuario, permisos, permisosEspeciales] = result?.recordsets as Array<any[]>
          res.send({ accessToken: generateToken({ user, password, aplicacion }, exp), user: { ...usuario[0], permisos, permisosEspeciales } })
        } else res.status(401).send(result?.recordset[0])
      } catch (ex: any) {
        res.status(404).send({ message: 'error en la consulta', error: ex.message })
      }
    } catch (error) {
      res.status(403).send('token no valido')
    }
  }
}