import { sign, SignOptions, verify, JwtPayload } from 'jsonwebtoken'
import { prisma } from "../database";
import { RolPorUsuarioI } from '../interfaces/interface-login';
const secret: string = process.env.SECRET || 'recagua'

export function generateToken(data: { id: string, idAplicacion: number }, expiresIn: string | number) {
  const options: SignOptions = { expiresIn }
  return sign(data, secret, options)
}
export function validateToken(token: string): JwtPayload | string {
  const result = verify(token, secret)
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
export async function getUserByToken(id: string, idAplicacion: number) {
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
                where: { Modulos: { idAplicacion } }
              }
            }
          }
        },
        where: { idAplicacion },
        take: 1
      }
    },
    where: {
      id,
      activo: true
    }
  })
}
export function parseUser(id: string, usuario: string, nombre: string, idPersonaUnica: string | null, correo: string | null, RolPorUsuario: RolPorUsuarioI[]) {
  return {
    id,
    usuario,
    nombre,
    idPersonaUnica,
    correo,
    permisos: RolPorUsuario[0].Roles.Permisos,
    permisosEspeciales: RolPorUsuario[0].Roles.PermisosEspecialesPorRol
      .map(({ PermisosEspeciales }) => PermisosEspeciales)
  }
}