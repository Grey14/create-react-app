/**
 * Mocking client-server processing
 */
import _dropdown from './data.json'

const TIMEOUT = 100

export default {
  getDropdown: (cb, timeout) => setTimeout(() => cb(_dropdown), timeout || TIMEOUT)
}
