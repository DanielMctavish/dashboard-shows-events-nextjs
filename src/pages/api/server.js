import database from "../../database/tickets.json"

export default function (req, res) {
  res.send(database)
}
