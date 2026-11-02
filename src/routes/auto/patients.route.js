import { Router } from 'express'
import { listPatients, addPatient } from '../../utils/patients.js'

const router = Router()

router.get('/api/patients', (_req, res) => {
  res.status(200).json(listPatients())
})

router.post('/api/patients', (req, res) => {
  try {
    res.status(201).json(addPatient(req.body))
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

export default router
