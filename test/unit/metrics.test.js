import { describe, it, expect } from 'vitest'
import { getSystemMetrics, getHospitalMetrics, getMetrics } from '../../src/utils/metrics.js'

describe('metrics utils', () => {
  it('returns system stats', () => {
    const system = getSystemMetrics()
    expect(system.uptime).toBeGreaterThanOrEqual(0)
    expect(system.memoryMb).toBeGreaterThan(0)
  })

  it('returns hospital counts', () => {
    const hospital = getHospitalMetrics()
    expect(hospital.doctors).toBeGreaterThanOrEqual(2)
    expect(hospital.appointments).toBeGreaterThanOrEqual(0)
  })

  it('merges both sections', () => {
    const metrics = getMetrics()
    expect(metrics).toHaveProperty('system')
    expect(metrics).toHaveProperty('hospital')
  })
})
