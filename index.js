const addDays = require("date-fns/addDays");

const result = (days) => addDays(new Date("7 / 22 / 2020"), days);

module.exports = result;
