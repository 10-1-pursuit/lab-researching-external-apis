import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import FetchingData from './components/fetchingData'

function App() {
  const [count, setCount] = useState(0)
const [allDepartments, setAllDepartments] = useState([])

  useEffect(() => {
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/departments"
    ).then((r) =>
      r
        .json()
        // .then(setAllDepartments(r))
        .then(console.log)
        .catch((err) => console.log(err))
    ),
      [];
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Researching The METS' API 🕵🏽 </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
     </div>
     <div>
      (setAllDepartments)
     </div>
    </>
  )
}

export default App