<<<<<<< HEAD

=======
>>>>>>> origin/main
import { patients } from '../data/store.js'

export function listPatients () {
  return patients
}

export function addPatient ({ name, age } = {}) {
  if (!name || !age) {
    throw new Error('Missing required fields')
  }

  const patient = {
    id: patients.length + 1,
    name,
    age
  }

  patients.push(patient)
  return patient
}

