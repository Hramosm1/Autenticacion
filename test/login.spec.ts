import { request } from "../src/app";

describe('/login', () => {
  it('Con credenciales incorrectas regresa 401', async () => {
    const result = await request.post('/login').send({ user: 'dos', password: '654894', aplicacion: 1 })
    expect(result.statusCode).toBe(401)
  })
  it('Con credenciales correctas regresa status 200', async () => {
    const result = await request.post('/login').send({ user: process.env.USERTEST, password: process.env.PASSTEST, aplicacion: 1 })
    expect(result.statusCode).toBe(200)
  })
  it('Con credenciales correctas devuelve user', async () => {
    const result = await request.post('/login').send({ user: process.env.USERTEST, password: process.env.PASSTEST, aplicacion: 1 })
    expect(result.body.user).toBeDefined()
  })
  it('Con credenciales correctas devuelve permisos', async () => {
    const result = await request.post('/login').send({ user: process.env.USERTEST, password: process.env.PASSTEST, aplicacion: 1 })
    expect(result.body.user.permisos).toBeDefined()
  })
})

describe('/Login/verifyToken', () => {
  it('No se envia token y recibe 401', async () => {
    const result = await request.get('/Login/verifyToken')
    expect(result.statusCode).toBe(401)
  })
  it('Se envía token y recibe 200', async () => {
    const result = await request.get('/Login/verifyToken').set('Authorization', 'bearer ' + process.env.TOKENTEST)
    expect(result.body.user).toBeDefined()
  })
  it('Se envía token y devuelve user', async () => {
    const result = await request.get('/Login/verifyToken').set('Authorization', 'bearer ' + process.env.TOKENTEST)
    expect(result.body.user.permisos).toBeDefined()
  })
  it('Se envía token y devuelve permisos', async () => {
    const result = await request.get('/Login/verifyToken').set('Authorization', 'bearer ' + process.env.TOKENTEST)
    expect(result.body.user.permisosEspeciales).toBeDefined()
  })
})