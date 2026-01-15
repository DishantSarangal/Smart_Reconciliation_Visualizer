import Papa from "papaparse"

export default function FileUpload({ label, onData }) {
  const handleFile = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (!file.name.endsWith(".csv")) {
      alert("Only CSV files are allowed")
      return
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.errors.length) {
          alert("Error parsing CSV")
          return
        }
        onData(results.data)
      },
    })
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">

<label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
<input
  type="file"
  accept=".csv"
  onChange={handleFile}
  className="block w-full text-sm text-slate-600
             file:mr-4 file:py-2 file:px-4
             file:rounded-md file:border-0
             file:bg-slate-100 file:text-slate-700
             hover:file:bg-slate-200 cursor-pointer"
/>

    </div>
  )
}
