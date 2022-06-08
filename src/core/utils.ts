import { sign, SignOptions, verify, JwtPayload } from 'jsonwebtoken'
const secret: string = process.env.SECRET || 'recagua'

export function generateToken(data: { user: string, password: string, aplicacion: number }, expiresIn: string | number) {
  const options: SignOptions = { expiresIn }
  return sign(data, secret, options)
}
export function validateToken(token: string) {
  const result = verify(token, secret)
  console.log(result)
  return result
}