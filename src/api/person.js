/**
 * Mocking client-server processing
 */
import _student from './student.json'

const TIMEOUT = 100

export default {
  getStudents: (cb, timeout) => setTimeout(() => cb(_student), timeout || TIMEOUT)
}
