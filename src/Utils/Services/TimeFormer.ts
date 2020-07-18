import moment = require("moment");

export function timeFormat(ms: number, format?: String): String | Date {
  let date;
  switch (format) {
    case "standart":
      date = moment(ms).format("MMMM Do YYYY, h:mm:ss a");
      break;
    default:
      date = moment(ms).toDate();
      break;
  }
  return date;
}
