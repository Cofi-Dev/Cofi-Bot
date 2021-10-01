import "mocha"
import { server } from "../test_config"

var chai = require("chai"),
  chaiHttp = require("chai-http")
chai.use(chaiHttp)
const expect = chai.expect

describe("Guild ID", () => {
  it("Return a JSON, with the basic data of a guild", (done) => {
    chai
      .request(server)
      .get("/guild/699517667177922571")
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      })
  })

  it("Return a 404 with fake Guild-id", (done) => {
    chai
      .request(server)
      .get("/guild/699517667177922570")
      .end((err, res) => {
        expect(res).to.have.status(404)
        done()
      })
  })
})
