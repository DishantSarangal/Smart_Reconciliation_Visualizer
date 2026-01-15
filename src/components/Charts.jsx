import { PieChart, Pie, Cell, Tooltip } from "recharts"

export default function Charts({ result }) {
  if (!result) return null

  const data = [
    { name: "Exact Matches", value: result.matches.length, color: "#22c55e" },
    { name: "Mismatches", value: result.mismatches.length, color: "#f97316" },
    {
      name: "Missing Records",
      value: result.missingInA.length + result.missingInB.length,
      color: "#ef4444",
    },
  ]

  return (
    <div className="flex flex-col items-center gap-6">
    
      <PieChart width={260} height={260}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
          stroke="#ffffff"
          strokeWidth={2}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <div className="flex gap-6">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-slate-700">
              {item.name}
              <span className="ml-1 font-medium text-slate-900">
                ({item.value})
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
