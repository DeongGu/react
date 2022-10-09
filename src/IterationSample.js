const { useState } = require("react");

// const IterationSample = () => {
//   const names = ["라켓", "전용화", "셔틀콕", "코트"];
//   const nameList = names.map((name, index) => <li key={index}>{name}</li>);
//   return <ul>{nameList}</ul>;
// };

// export default IterationSample;

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "라켓" },
    { id: 2, text: "전용화" },
    { id: 3, text: "셔틀콕" },
    { id: 4, text: "코트" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = (id) => {
    const newNames = names.filter((name) => name.id !== id);
    setNames(newNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
