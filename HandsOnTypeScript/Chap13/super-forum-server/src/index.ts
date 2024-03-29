import express from "express";
import session from "express-session";
import RedisStore from "connect-redis";
import Redis from "ioredis";

require("dotenv").config();
console.log(process.env.NODE_ENV);

const app = express();
const router = express.Router();

const redis = new Redis({
  port: Number(process.env.REDIS_PORT),
  host: process.env.REDIS_HOST,
});

redis.connect().catch(console.error);

const redisStore = new RedisStore({
  client: redis,
});

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
router.get("/", (req, res, next) => {
  if (!req.session!.userid) {
    req.session!.userid = req.query.userid;
    console.log("Userid is set");
    req.session!.loadedCount = 0;
  } else {
    req.session!.loadedCount = Number(req.session!.loadedCount) + 1;
  }

  res.send(
    `userid: ${req.session!.userid}, loadedCount: ${req.session!.loadedCount}`
  );
});

app.listen({ port: process.env.SERVER_PORT }, () => {
  console.log(`Server ready on port ${process.env.SERVER_PORT}`);
});
