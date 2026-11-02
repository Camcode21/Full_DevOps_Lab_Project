import { Router } from 'express'
import { getMetrics } from '../../utils/metrics.js'

const router = Router()

router.get('/api/metrics', (_req, res) => {
  res.status(200).json(getMetrics())
})

export default router
