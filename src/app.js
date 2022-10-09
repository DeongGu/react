import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import IterationSample from "./IterationSample";
import Info from "./info";
import Averge from "./Average";

function App() {
  return (
    <div className="App">
      <MyComponent name="신성우" favoriteNumber={7}>
        리액트
      </MyComponent>
      <Counter></Counter>
      <Say></Say>
      <IterationSample></IterationSample>
      <Info />
      <Averge />
    </div>
  );
}

export default App;
