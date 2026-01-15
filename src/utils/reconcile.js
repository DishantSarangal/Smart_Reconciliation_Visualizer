export function reconcile(dataA, dataB) {
    const required = ["invoice_id", "date", "amount"]
  
    const validate = (row) =>
      required.every((key) => row.hasOwnProperty(key))
  
    if (!dataA.every(validate) || !dataB.every(validate)) {
      throw new Error("CSV must contain invoice_id, date, amount columns")
    }
  
    const mapA = new Map()
    const mapB = new Map()
  
    dataA.forEach((r) =>
      mapA.set(r.invoice_id, { ...r, amount: Number(r.amount) })
    )
    dataB.forEach((r) =>
      mapB.set(r.invoice_id, { ...r, amount: Number(r.amount) })
    )
  
    const matches = []
    const mismatches = []
    const missingInA = []
    const missingInB = []
  
    dataA.forEach((a) => {
      const b = mapB.get(a.invoice_id)
      if (b) {
        if (Number(a.amount) === Number(b.amount)) {
          matches.push(a)
        } else {
          mismatches.push({
            invoice_id: a.invoice_id,
            amount_A: a.amount,
            amount_B: b.amount,
            reason: "Amount mismatch",
          })
        }
      } else {
        missingInB.push(a)
      }
    })
  
    dataB.forEach((b) => {
      if (!mapA.has(b.invoice_id)) {
        missingInA.push(b)
      }
    })
  
    return { matches, mismatches, missingInA, missingInB }
  }
  