
import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../src/app.js'

describe('Appointments API', () => {
  it('GET /api/appointments should return an array', async () => {
    const res = await request(app).get('/api/appointments')

    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  it('POST /api/appointments should create an appointment', async () => {
    const res = await request(app)
      .post('/api/appointments')
      .send({ doctorId: 1, patientId: 1, date: '2026-11-10' })

    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
  })

  it('POST /api/appointments should return 404 for unknown doctor', async () => {
    const res = await request(app)
      .post('/api/appointments')
      .send({ doctorId: 999, patientId: 1, date: '2026-11-10' })

    expect(res.status).toBe(404)
  })

  it('POST /api/appointments should reject missing fields', async () => {
    const res = await request(app)
      .post('/api/appointments')
      .send({ doctorId: 1 })

    expect(res.status).toBe(400)
  })

  it('should create an appointment with a newly created doctor', async () => {
    const doctorRes = await request(app)
      .post('/api/doctors')
      .send({ name: 'Dr. Test', specialty: 'Neurology' })

    expect(doctorRes.status).toBe(201)

    const appointmentRes = await request(app)
      .post('/api/appointments')
      .send({
        doctorId: doctorRes.body.id,
        patientId: 1,
        date: '2026-11-15'
      })

    expect(appointmentRes.status).toBe(201)
    expect(appointmentRes.body.doctorId).toBe(doctorRes.body.id)
  })

  it('should create an appointment with a newly created patient', async () => {
    const patientRes = await request(app)
      .post('/api/patients')
      .send({ name: 'Test Patient', age: 25 })

    expect(patientRes.status).toBe(201)

    const appointmentRes = await request(app)
      .post('/api/appointments')
      .send({
        doctorId: 1,
        patientId: patientRes.body.id,
        date: '2026-11-20'
      })

    expect(appointmentRes.status).toBe(201)
    expect(appointmentRes.body.patientId).toBe(patientRes.body.id)
  })
})

