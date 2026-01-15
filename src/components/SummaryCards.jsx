export default function SummaryCards({ aCount, bCount, result }) {
    if (!result) return null
  
    const issues =
      result.mismatches.length +
      result.missingInA.length +
      result.missingInB.length
  
    const cards = [
      { label: "Dataset A Records", value: aCount },
      { label: "Dataset B Records", value: bCount },
      { label: "Matches", value: result.matches.length },
      { label: "Issues", value: issues },
    ]
  
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">

        {cards.map((c) => (
          <div key={c.label} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <p className="text-sm text-slate-500">{c.label}</p>
  <p className="mt-2 text-3xl font-semibold text-slate-900">
    {c.value}
  </p>

          </div>
        ))}
      </div>
    )
  }
  