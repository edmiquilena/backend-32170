import express from "express";
import crypto from "crypto";
const app = express();
const users = {};

app.use((req, res) => {});

app.get("/newUser", (req, res) => {
  let username = req.query.username || "";
  const password = req.query.password || "";

  username = username.replace(/[!@#$%^&*]/g, "");
  if (!username || !password || users[username]) {
    // process.exit(1)
    return res.sendStatus(400);
  }
  // =>
  const salt = crypto.randomBytes(128).toString("base64");
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");
  users[username] = { salt, hash };
  console.log(users);
  res.sendStatus(200);
});
app.get("/auth-bloq", (req, res) => {
  let username = req.query.username || "";
  const password = req.query.password || "";

  username = username.replace(/[!@#$%^&*]/g, "");

  if (!username || !password || !users[username]) {
    // process.exit(1)
    return res.sendStatus(400);
  }

  const { salt, hash } = users[username];
  const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

  if (crypto.timingSafeEqual(hash, encryptHash)) {
    res.sendStatus(200);
  } else {
    // process.exit(1)
    res.sendStatus(401);
  }
});

app.get("/auth-nobloq", (req, res) => {
  let username = req.query.username || "";
  const password = req.query.password || "";

  username = username.replace(/[!@#$%^&*]/g, "");

  if (!username || !password || !users[username]) {
    // process.exit(1)
    return res.sendStatus(400);
  }

  crypto.pbkdf2(
    password,
    users[username].salt,
    10000,
    512,
    "sha512",
    (err, hash) => {
      if (users[username].hash.toString() === hash.toString()) {
        res.sendStatus(200);
      } else {
        // process.exit(1)
        res.sendStatus(401);
      }
    }
  );

  // ....
});
app.all("*", (req, res) => {});
app.listen(8080, () => console.log("escuchando puerto 8080"));
