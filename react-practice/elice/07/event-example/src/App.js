import { useState } from "react";

const SOS = ({ onSOS }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count >= 2) {
      onSOS();
    }
    setCount(count + 1);
  };
  return (
    <button onClick={handleClick}>버튼 세 번 누르면 긴급호출 {count}</button>
  );
};

function App() {
  return (
    <div>
      <SOS
        onSOS={() => {
          alert("긴급!");
        }}
      />
    </div>
  );
}

export default App;
