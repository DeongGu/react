import * as D from "../data"

export default function TailwindcssTest() {
  return (
    <div className="bg-black/70">
      <p className="w-full p-4 text-3xl text-white">Tailwindcss</p>
      <p className="itlic text-gray-50 line-clamp-3">{D.randomParagraphs(10)}</p>
      <button className="btn btn-primary" style={{textTransform: "none"}}>
        Button
      </button>
    </div>
  )
}
