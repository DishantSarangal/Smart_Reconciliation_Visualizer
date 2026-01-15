import { useState } from "react"
import FileUpload from "./components/FileUpload"
import SummaryCards from "./components/SummaryCards"
import Charts from "./components/Charts"
import ReconciliationTable from "./components/ReconciliationTable"
import { reconcile } from "./utils/reconcile"

export default function App() {
  const [dataA, setDataA] = useState([])
  const [dataB, setDataB] = useState([])
  const [result, setResult] = useState(null)

  const run = () => {
    try {
      setResult(reconcile(dataA, dataB))
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 py-8">
  <div className="mb-8">
  <h1 className="text-3xl font-semibold text-slate-900">
    Smart Reconciliation Visualizer
  </h1>
  <p className="text-slate-600 mt-1">
    Compare two financial datasets and instantly identify matches, mismatches, and missing records.
  </p>
</div>

      <div className="grid md:grid-cols-2 gap-4">
        <FileUpload label="Upload Dataset A" onData={setDataA} />
        <FileUpload label="Upload Dataset B" onData={setDataB} />
      </div>

      <button
  onClick={run}
  disabled={!dataA.length || !dataB.length}
  className="mt-6 inline-flex items-center gap-2
             rounded-lg bg-blue-600 px-5 py-2.5
             text-sm font-medium text-white
             shadow-sm hover:bg-blue-700
             disabled:opacity-50 disabled:cursor-not-allowed"
>
  Run Reconciliation
</button>


      <SummaryCards
        aCount={dataA.length}
        bCount={dataB.length}
        result={result}
      />

{result && (
  <>
    
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
      <h3 className="text-sm font-medium text-slate-700 mb-4">
        Reconciliation Overview
      </h3>

      <div className="flex justify-center">
        <Charts result={result} />
      </div>
    </div>

  
    <ReconciliationTable title="Matches" data={result.matches} />
    <ReconciliationTable title="Mismatches" data={result.mismatches} />
    <ReconciliationTable title="Missing in A" data={result.missingInA} />
    <ReconciliationTable title="Missing in B" data={result.missingInB} />
  </>
)}

    </div>
    </div>
  )
}
