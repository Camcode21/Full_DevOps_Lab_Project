import { doctors, patients, appointments } from '../data/store.js'

export function getSystemMetrics () {
  return {
    uptime: process.uptime(),
    node: process.version,
    memoryMb: Math.round(process.memoryUsage().rss / 1024 / 1024)
  }
}

export function getHospitalMetrics () {
  return {
    doctors: doctors.length,
    patients: patients.length,
    appointments: appointments.length
  }
}

export function getMetrics () {
  return { system: getSystemMetrics(), hospital: getHospitalMetrics() }
}
