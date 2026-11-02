
import express from 'express'
import { appointments, doctors, patients } from '../../data/store.js'

const router = express.Router()

// GET all appointments
router.get('/api/appointments', (req, res) => {
  res.status(200).json(appointments)
})

// POST a new appointment
router.post('/api/appointments', (req, res) => {
  const { doctorId, patientId, date } = req.body

  if (!doctorId || !patientId || !date) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const doctor = doctors.find((d) => d.id === doctorId)
  const patient = patients.find((p) => p.id === patientId)

  if (!doctor || !patient) {
    return res.status(404).json({ error: 'Doctor or patient not found' })
  }

  const newAppointment = {
    id: appointments.length + 1,
    doctorId,
    patientId,
    date
  }

  appointments.push(newAppointment)
  res.status(201).json(newAppointment)
})

export default router
