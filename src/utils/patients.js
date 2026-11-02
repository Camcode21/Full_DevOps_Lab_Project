const patients = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'John', age: 45 }
]

export function listPatients () {
  return patients
}

export function addPatient ({ name, age } = {}) {
  if (!name || !age) {
    throw new Error('Missing required fields')
  }
  const patient = { id: patients.length + 1, name, age }
  patients.push(patient)
  return patient
}
