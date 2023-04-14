import express from "express";
import bodyParser from "body-parser";

const app = express();
const router = express.Router();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("First middleware");
  next();
});

// app.use((req, res, next) => {
//   res.send("Hello World. I am custom middleware.");
// });

app.use(router);

router.get("/api/v1/users", (req, res, next) => {
  const users = [
    {
      id: 1,
      username: "DG",
    },
    {
      id: 2,
      username: "SSW",
    },
    {
      id: 3,
      username: "SW",
    },
  ];
  console.log(req.query.userid);
  const user = users.find((usr) => usr.id == req.query.userid);
  res.send(`User ${user?.username}`);
});

router.post("/api/v1/groups", (req, res, next) => {
  const groups = [
    {
      id: 1,
      groupname: "SSG",
    },
    {
      id: 2,
      groupname: "SS",
    },
    {
      id: 3,
      groupname: "SSW",
    },
  ];

  const group = groups.find((grp) => grp.id == req.body.groupid);
  res.send(`Group ${group.groupname}`);
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen({ port: 8000 }, () => {
  console.log("Express Node server has loaded!");
});
