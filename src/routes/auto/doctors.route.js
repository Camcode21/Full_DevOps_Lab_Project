import { Router } from 'express'
import { doctors } from '../../data/store.js'

const router = Router()

router.get('/api/doctors', (_req, res) => {
  res.status(200).json(doctors)
})

router.post('/api/doctors', (req, res) => {
  const { name, specialty } = req.body

  if (!name || !specialty) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const newDoctor = {
    id: doctors.length + 1,
    name,
    specialty
  }

  doctors.push(newDoctor)
  res.status(201).json(newDoctor)
})

export default router
