import request from 'supertest'
import app from '../src/app.js'
import { describe, it, expect } from 'vitest'

describe('Metrics API', () => {
  it('GET /api/metrics returns system and hospital stats', async () => {
    const res = await request(app).get('/api/metrics')
    expect(res.status).toBe(200)
    expect(typeof res.body.system.uptime).toBe('number')
    expect(res.body.system.node).toMatch(/^v\d+\.\d+\.\d+/)
    expect(res.body.hospital.doctors).toBeGreaterThanOrEqual(2)
    expect(res.body.hospital.patients).toBeGreaterThanOrEqual(2)
  })

  it('counts a newly added patient', async () => {
    const before = await request(app).get('/api/metrics')
    await request(app).post('/api/patients').send({ name: 'Paul', age: 52 })
    const after = await request(app).get('/api/metrics')
    expect(after.body.hospital.patients).toBe(before.body.hospital.patients + 1)
  })
})
