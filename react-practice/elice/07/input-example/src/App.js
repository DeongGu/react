import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "Elice",
    school: "elice",
    phone: "010-",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newUser = { ...user };
    newUser[name] = value;
    setUser(newUser);
  };
  // const [inputValue, setInputValue] = useState();
  // const [name, setName] = useState("");
  // const [school, setSchool] = useState("");

  // const handleNameChange = (event) => {
  // setName(event.target.value);
  // };
  // const handleSchoolChange = (e) => {
  // setSchool(e.target.value);
  // };

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  return (
    <div>
      Name: <input name="name" value={user.name} onChange={handleChange} />
      School:
      <input name="school" value={user.school} onChange={handleChange} />
      Phone Number:{" "}
      <input name="phone" value={user.phone} onChange={handleChange} />
      <br /> 입력 값: {user.name}님은 {user.school}에 재학 중입니다. 전화번호는{" "}
      {user.phone} 입니다.
    </div>
  );
}

export default App;
