import React from "react"
import ReactDOM from "react-dom/client"

// 물리 DOM
// let pPhysicalDOM = document.createElement("p")
// pPhysicalDOM.innerHTML = "Hello physical DOM world!"
// document.body.appendChild(pPhysicalDOM)

// 가상 DOM
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const pVirtualDOM = React.createElement("p", null, "Hello virtual DOM world!")

root.render(pVirtualDOM)
