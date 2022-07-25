import { request } from "../src/app";
/*  GET  */
describe('GET /aplicaciones', () => {
  //status 200
  it('Obtiene status 200', async () => {
    const result = await request.get('/aplicaciones')
    expect(result.statusCode).toBe(200)
  })
  //obtiene un array
  it('Obtiene un array', async () => {
    const result = await request.get('/aplicaciones')
    expect(result.body).toBeInstanceOf(Array)
  })
})
/*  POST  */
describe('POST /aplicaciones', () => {
  //status 200
  it('Obtiene status 200', async () => {
    const result = await request.post('/aplicaciones').send({ nombre: 'jest test' })
    expect(result.statusCode).toBe(200)
  })
  //recibe el objeto creado
})
/*  PUT  */
describe('PUT /aplicaciones', () => {
  //status 200
})
/*  DELETE  */
describe('DELETE /aplicaciones', () => {
  //status 200
})