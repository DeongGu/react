import * as D from "./data"

export default function App() {
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="100" alt="랜덤아바타이미지" />
      <img src={D.randomImage()} height="300" alt="랜덤이미지" />
    </div>
  )
}
