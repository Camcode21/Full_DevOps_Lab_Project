import { describe, it, expect } from 'vitest'
import { listPatients, addPatient } from '../../src/utils/patients.js'

describe('patients utils', () => {
  it('lists the initial patients', () => {
    expect(listPatients().length).toBeGreaterThanOrEqual(2)
  })

  it('adds a patient with an id', () => {
    const patient = addPatient({ name: 'Marie', age: 29 })
    expect(patient).toHaveProperty('id')
    expect(patient.name).toBe('Marie')
  })

  it('throws when a field is missing', () => {
    expect(() => addPatient({ name: 'Marie' })).toThrow('Missing required fields')
    expect(() => addPatient()).toThrow('Missing required fields')
  })
})
