import { useState } from "react"

export default function ReconciliationTable({ title, data }) {
  const [query, setQuery] = useState("")

  if (!Array.isArray(data) || data.length === 0) return null

  const filtered = data.filter((row) =>
    row.invoice_id?.toString().includes(query)
  )

  if (filtered.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-6">
        <h3 className="text-base font-semibold text-slate-800 mb-4">
          {title}
        </h3>

        <input
          className="mb-4 w-full max-w-xs rounded-md border border-slate-300
                     px-3 py-2 text-sm focus:outline-none
                     focus:ring-2 focus:ring-blue-500"
          placeholder="Search invoice_id"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <p className="text-sm text-slate-500">
          No records match your search.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-6">
      <h3 className="text-base font-semibold text-slate-800 mb-4">
        {title}
      </h3>

      <input
        className="mb-4 w-full max-w-xs rounded-md border border-slate-300
                   px-3 py-2 text-sm focus:outline-none
                   focus:ring-2 focus:ring-blue-500"
        placeholder="Search invoice_id"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            {Object.keys(filtered[0]).map((key) => (
              <th
                key={key}
                className="border-b border-slate-200 px-3 py-2 text-left"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filtered.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50">
              {Object.values(row).map((val, j) => (
                <td
                  key={j}
                  className="border-b border-slate-200 px-3 py-2 text-slate-700"
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
