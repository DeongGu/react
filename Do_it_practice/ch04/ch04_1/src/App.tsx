import {useClock} from "./hooks"
import Clock from "./pages/Clock"

export default function App() {
  const today = useClock()
  return <Clock today={today} />
}

// import {useEffect, useState} from "react"
// import Clock from "./pages/Clock"
// import "./App.css"

// function App() {
//   const [today, setToday] = useState(new Date())

//   useEffect(() => {
//     const DURATION = 1000
//     const id = setInterval(() => {
//       setToday(new Date())
//       console.log("today", today.toLocaleTimeString())
//     }, DURATION)

//     return () => clearInterval(id)
//   }, [today])

//   return <Clock today={today} />
// }

// export default App
