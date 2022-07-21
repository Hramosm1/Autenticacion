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

dotenv.config()
function settings(): void {
  app.set("port", process.env.PORT || 9401);
}
//midlewares a implementar
function midlewares(): void {
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: false }));
}
//rutas
function routes(): void {
  app.use('/aplicaciones', aplicaciones)
  app.use('/modulos', modulos)
  app.use('/permisos', permisos)
  app.use('/permisosEspeciales', permisosEspeciales)
  app.use('/roles', roles)
  app.use('/usuarios', usuarios)
  app.use('/usuarioPorRol', upr)
  app.use('/login', login)
}
export const app: Application = express()
settings()
midlewares()
routes()
