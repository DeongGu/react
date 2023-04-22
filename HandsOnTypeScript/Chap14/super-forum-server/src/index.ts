import express from "express";
import session from "express-session";
import RedisStore from "connect-redis";
import Redis from "ioredis";
import { createConnection } from "typeorm";
import { register, login, logout } from "./repo/UserRepo";
import bodyParser from "body-parser";
import { createThread } from "./repo/ThreadRepo";
import { getThreadsByCategoryId } from "./repo/ThreadRepo";
require("dotenv").config();

const main = async () => {
  const app = express();
  const router = express.Router();

  await createConnection();

  const redis = new Redis({
    port: Number(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
  });

  redis.connect().catch(console.error);

  const redisStore = new RedisStore({
    client: redis,
  });

  app.use(bodyParser.json());
  app.use(
    session({
      store: redisStore,
      name: process.env.COOKIE_NAME,
      sameSite: "Strict",
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        path: "/",
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
      },
    } as any)
  );

  app.use(router);
  router.post("/register", async (req, res, next) => {
    try {
      console.log("params", req.body);
      const { email, userName, password } = req.body;
      const userResult = await register(email, userName, password);

      if (userResult && userResult.user) {
        res.send(`new user created, userId: ${userResult.user.id}`);
      } else if (userResult && userResult.messages) {
        res.send(userResult.messages[0]);
      } else {
        next();
      }
    } catch (err) {
      res.send(err.messages);
    }
  });

  router.post("/login", async (req, res, next) => {
    try {
      console.log("params", req.body);

      const { userName, password } = req.body;

      const userResult = await login(userName, password);

      if (userResult && userResult.user) {
        req.session!.userId = userResult.user?.id;
        res.send(`user logged in, userId: ${req.session!.userId}`);
      } else if (userResult && userResult.messages) {
        res.send(userResult.messages[0]);
      } else {
        next();
      }
    } catch (err) {
      res.send(err.message);
    }
  });

  router.post("/logout", async (req, res, next) => {
    try {
      console.log("params", req.body);
      const { userName } = req.body;
      const msg = await logout(userName);

      if (msg) {
        req.session!.userId = null;
        res.send(msg);
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  });

  router.post("/createthread", async (req, res, next) => {
    try {
      console.log("userId", req.session);
      console.log("body", req.body);

      const { categoryId, title, body } = req.body;

      const msg = await createThread(
        req.session!.userId,
        categoryId,
        title,
        body
      );
      res.send(msg);
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  });

  router.post("/threadsbycategory", async (req, res, next) => {
    try {
      const threadResult = await getThreadsByCategoryId(req.body.categoryId);

      if (threadResult && threadResult.entities) {
        let items = "";
        console.log(threadResult.entities);
        threadResult.entities.forEach((th) => {
          items += th.title + ", ";
        });
        res.send(items);
      } else if (threadResult && threadResult.messages) {
        res.send(threadResult.messages[0]);
      }
    } catch (ex) {
      console.log(ex);
      res.send(ex.message);
    }
  });

  app.listen({ port: process.env.SERVER_PORT }, () => {
    console.log(`Server ready on port ${process.env.SERVER_PORT}`);
  });
};

main();
