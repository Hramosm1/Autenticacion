import { sign, SignOptions, verify, JwtPayload } from 'jsonwebtoken'
import { prisma } from "../database";
const secret: string = process.env.SECRET || 'recagua'

export function generateToken(data: { id: string }, expiresIn: string | number) {
  const options: SignOptions = { expiresIn }
  return sign(data, secret, options)
}
export function validateToken(token: string) {
  const result = verify(token, secret)
  console.log(result)
  return result
}
export async function getUserLogin(body: { user: string, password: string, aplicacion: string }) {
  const { user, password, aplicacion } = body
  return await prisma.usuarios.findFirst({
    select: {
      id: true,
      usuario: true,
      nombre: true,
      idPersonaUnica: true,
      correo: true,
      RolPorUsuario: {
        select: {
          Roles: {
            select: {
              PermisosEspecialesPorRol: {
                select: {
                  PermisosEspeciales: {
                    select: {
                      id: true,
                      nombre: true,
                      activo: true,
                    }
                  }
                }
              },
              Permisos: {
                select: {
                  id: true,
                  ver: true,
                  crear: true,
                  editar: true,
                  eliminar: true,
                  activo: true,
                  Modulos: {
                    select: {
                      id: true,
                      nombre: true
                    }
                  }
                },
                where: { Modulos: { idAplicacion: Number(aplicacion) } }
              }
            }
          }
        },
        where: { idAplicacion: Number(aplicacion) },
        take: 1
      }
    },
    where: {
      usuario: user,
      contrase_a: Buffer.from(password),
      activo: true
    }
  })
}
function getUserByToken(token: string) {

}