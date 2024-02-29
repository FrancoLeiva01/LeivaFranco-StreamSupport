const { readFileJSON, writeFileJSON } = require(".")

const dbPath = "users.json"

const addUser  = (user) => {
const data = readFileJSON(dbPath);
data.push(user);
writeFileJSON(dbPath, data);
} 

module.exports = { addUser }