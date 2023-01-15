import ClassComponent from "./ClassComponent"
import ArrowComponent from "./ArrowComponent"

// class App extends Component {
//   render() {
//     const isLoading = true
//     if (isLoading) return <p>Loaindg...</p>

//     return (
//       <ul>
//         <li>
//           <a href="http://www.google.com">
//             <p>go to Google</p>
//           </a>
//         </li>
//       </ul>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     const isLoading = true
//     const children = (
//       <li>
//         <a href="http://www.google.com">
//           <p>go to Google</p>
//         </a>
//       </li>
//     )

//     return (
//       <div>
//         {isLoading && <p>Loading...</p>}
//         {!isLoading && <ul>{children}</ul>}
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     const isLoading = true
//     const children = isLoading ? (
//       <p>Loading...</p>
//     ) : (
//       <ul>
//         <li>
//           <a href="http://www.google.com">
//             <p>go to Google</p>
//           </a>
//         </li>
//       </ul>
//     )

//     return <div>{children}</div>
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent href="http://www.google.com" text="go to Google" />
//         <ArrowComponent href="http://www.twitter.com" text="go to Twitter" />
//       </ul>
//     )
//   }
// }

export default function App() {
  return (
    <ul>
      <ClassComponent href="http://www.google.com" text="go to Google" />
      <ArrowComponent href="http://www.twitter.com" text="go to Twitter" />
    </ul>
  )
}

// export default App
