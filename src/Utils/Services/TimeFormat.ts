import moment = require("moment")

/**
 * This function formats a date specified in milliseconds.
 *
 * @category Services
 * @param {Number} ms - Time in miliseconds.
 * @param {String} format - (Optional parameter) Format Format for the date.
 * @returns {String} Formatted date.
 */

export function timeFormat(ms: number, format?: String): String | Date {
  let date
  switch (format) {
    case "standart":
      date = moment(ms).format("MMMM Do YYYY, h:mm:ss a")
      break
    default:
      date = moment(ms).toDate()
      break
  }
  return date
}
