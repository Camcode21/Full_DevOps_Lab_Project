import express from 'express'
import request from 'supertest'
import { describe, it, expect } from 'vitest'
import boomRouter from '../../src/routes/auto/boom.route.js'
import { errorHandler } from '../../src/utils/errorHandler.js'

describe('boom route', () => {
  it('forwards a 500 error to the error handler', async () => {
    const app = express()
    app.use(boomRouter)
    app.use(errorHandler)
    const res = await request(app).get('/boom')
    expect(res.status).toBe(500)
    expect(res.body.error).toBe(true)
    expect(typeof res.body.message).toBe('string')
  })
})