//importaciones de express
import express, { Application } from "express";

//importaciones midlewares
import cors from "cors";
import dotenv from 'dotenv'
import { json, urlencoded } from "body-parser";
//importacion de rutas
import aplicaciones from './routes/aplicaciones'
import modulos from './routes/modulos'
import permisos from './routes/permisosPorRol'
import permisosEspeciales from './routes/permisosEspeciales'
import roles from './routes/roles'
import usuarios from './routes/usuarios'
import upr from './routes/usuarioPorRol'
import login from './routes/login'
import importaciones from './routes/importaciones'
import supertest from 'supertest'
dotenv.config()
class ExpressApp {
  private app: Application
  constructor() {
    this.app = express()
    this.settings()
    this.midlewares()
    this.routes()
  }
  private settings(): void {
    this.app.set("port", process.env.PORT || 9401);
  }
  //midlewares a implementar
  private midlewares(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
  }
  //rutas
  private routes(): void {
    this.app.use('/aplicaciones', aplicaciones)
    this.app.use('/modulos', modulos)
    this.app.use('/permisos', permisos)
    this.app.use('/permisosEspeciales', permisosEspeciales)
    this.app.use('/roles', roles)
    this.app.use('/usuarios', usuarios)
    this.app.use('/usuarioPorRol', upr)
    this.app.use('/login', login)
    this.app.use('/importaciones', importaciones)
  }
  async start() {
    await this.app.listen(this.app.get('port'))
    console.info('Server on port:', this.app.get('port'))
  }
  getRequestSupertest() {
    return supertest(this.app)
  }
}
export const server = new ExpressApp()
export const request = server.getRequestSupertest()