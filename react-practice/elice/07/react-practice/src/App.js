const MyComponent = (props) => {
  const { user, color, children } = props;
  return (
    <div style={{ color }}>
      <p>{user.name}님의 하위 element는!</p>
      {children}
    </div>
  );
};

function Board(props) {
  const isAdmin = true;

  return (
    <div>
      <h1 style={{ color: props.color, padding: 20 }}>{props.title}</h1>
      <p>{props.title.length === 10 ? <button>length is 10</button> : null}</p>
      <User
        name={props.user.name}
        profile_image={props.user.profile_image}
      ></User>
      {isAdmin ? <button>수정</button> : null}
    </div>
  );
}

function User(props) {
  return (
    <div>
      <img src={props.profile_image}></img>
      <p>{props.name}</p>
    </div>
  );
}

const contents = [
  {
    title: "게시글 입니다. 1",
    color: "red",
    user: {
      name: "DG",
      profile_image: "https://placeimg.com/32/32/any",
    },
  },
  {
    title: "게시글 입니다. 2",
    color: "blue",
    user: {
      name: "DG",
      profile_image: "https://placeimg.com/32/32/any",
    },
  },
  {
    title: "게시글 입니다. 3",
    color: "yellow",
    user: {
      name: "DG",
      profile_image: "https://placeimg.com/32/32/any",
    },
  },
];

function App() {
  return (
    <div>
      {contents.map((content) => (
        <Board
          title={content.title}
          color={content.color}
          user={content.user}
        ></Board>
      ))}

      {/* <Board
        title={contents.title}
        color={contents.color}
        user={contents.user}
      ></Board> */}
      {/* <Board title="게시글입니다. 1" color="blue" name="DG"></Board>
      <Board title="게시글입니다. 1" color="yellow" name="DG"></Board>
      <Board title="게시글입니다. 1" color="green" name="DG"></Board>
      <Board title="게시글입니다. 1" color="brown" name="DG"></Board> */}
    </div>
  );
}
// function App() {
//   return (
//     <MyComponent user={{ name: "엘리스" }} color="blue">
//       <div>Hello</div>
//     </MyComponent>
//   );
// }
export default App;
