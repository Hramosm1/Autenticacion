//importaciones de express
import express, { Application, json, urlencoded } from "express";
import cors from "cors";
import dotenv from 'dotenv'
//importacion de rutas
import usuarios from './routes/usuarios'

dotenv.config()
function settings(): void {
  app.set("port", process.env.PORT || 3000);
}
//midlewares a implementar
function midlewares(): void {
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: false }));
}
//rutas
function routes(): void {
  app.use('/usuarios', usuarios)
}
export const app: Application = express()
settings()
midlewares()
routes()
