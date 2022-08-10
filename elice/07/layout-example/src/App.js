const Wrapper = ({ children }) => {
  const style = {
    border: "3px solid black",
    padding: 10,
  };
  return <div style={style}>{children}</div>;
};

function App() {
  return (
    <Wrapper>
      <h1>Title</h1>
      <p>description</p>
    </Wrapper>
  );
}

export default App;
