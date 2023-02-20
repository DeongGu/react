import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import NoMatch from "./NoMatch"
import Board from "../pages/Board"
import Card from "./Card"

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/welcome"
        element={<Home title="환영합니다. 나의 페이지에 온 당신을" />}
      />
      <Route path="/board" element={<Board />} />
      <Route path="/board/card/:cardid" element={<Card />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
