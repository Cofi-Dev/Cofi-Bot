import "mocha"
import { expect } from "chai"
import { timeFormat } from "../../src/Utils/Services/TimeFormat"

describe("TimeFormat Service", () => {
  const dateTime = Number(new Date())

  it("With 'standart' parameter", () => {
    const result = timeFormat(dateTime, "standart")
    expect(result).to.be.a("string")
  })

  it("Whitout parameters", () => {
    const result2 = timeFormat(dateTime, null)
    expect(result2).to.be.a("date")
  })
})
