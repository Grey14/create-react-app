/**
 * Mocking client-server processing
 */
import _dropdown from './data.json';

const TIMEOUT = 100;

export default {
  //cb => callback
  getDropdown: (cb, timeout) => setTimeout(() => cb(_dropdown), timeout || TIMEOUT)
  // getDropdown: function getDropdown(cb, timeout) {
  //   return setTimeout(function () {
  //     return cb(_dropdown);
  //   }, timeout || TIMEOUT);
  // }
};
