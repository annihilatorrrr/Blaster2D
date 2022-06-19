const express = require("express");
const app = express();
const server = require("http").Server(app);
const hcaptcha = require("hcaptcha");
const bcrypt = require("bcrypt");
const socketio = require("socket.io");
const session = require("express-session");

global.io = socketio(server, {
  cors: {
    origin: ["https://blaster2d.ruiwenge2.repl.co", "https://blaster2d.herokuapp.com", "https://191bb644-256e-48ce-b188-a2dde4c165f4.id.repl.co"],
    methods: ["GET", "POST"]
  }
});
global.rooms = {
  main: {
    players: {},
    bullets: {},
    coins: []
  }
};
global.playersize = 50;
global.size = 6000;
global.treesize = 300;
global.coinsize = 37.5;

app.use(express.static("public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.urlencoded({extended: true}));
app.use(session({secret: process.env["secret"]}));

const { random, generateCode, loggedIn, getUser, deleteUser } = require("./functions.js");

const api = require("./api.js");
const socketfunc = require("./socket.js");
const skins = require("./skins.js");
const update = require("./update.js");
const Database = require("./db.js");

global.db = new Database();

// require("./tests.js");
require("./trees.js");
require("./webpack.config.js");

db.get("users").then(obj => {
  if(obj == "Not Found") db.set("users", {});
});

const saltRounds = 10;
const allchars = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i",
  "j", "k", "l", "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x", "y", "z", "A",
  "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S",
  "T", "U", "V", "W", "X", "Y", "Z", "0", "1",
  "2", "3", "4", "5", "6", "7", "8", "9", "_"
];

io.on("connection", socketfunc);
update();

app.use("/api", api);

app.get("/", (req, res) => {
  res.render("index.html", {loggedIn: loggedIn(req), username: (loggedIn(req) ? req.session.username: null)});
});

app.get("/login", (req, res) => {
  if(loggedIn(req)){
    res.redirect("/");
    return;
  }
  res.render("login.html", {error: false});
});

app.get("/signup", (req, res) => {
  if(loggedIn(req)){
    res.redirect("/");
    return;
  }
  res.render("signup.html", {error: false});
});

app.get("/skins", (req, res) => {
  res.render("skins.html", {skins: skins, loggedIn: loggedIn(req)});
});

app.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  db.get("users").then(users => {
    if(!Object.keys(users).includes(username)){
      res.render("login.html", {error: "Invalid username and/or password."});
      return;
    }
    bcrypt.compare(password, users[username].p, function(err, result){
      if(!result){
        res.render("login.html", {error: "Invalid username and/or password."});
        return;
      }
      req.session.username = username;
      res.redirect("/");
    });
  });
});

app.post("/signup", (req, res) => {
  var newusername = req.body.newusername;
  var newpassword = req.body.newpassword;
  let secret = process.env["captcha_secret"];
  let token = req.body["h-captcha-response"];
  for(let i of newusername){
    if(!allchars.includes(i)){
      res.render("signup.html", {error: "Username can only contain alphanumeric characters and underscores"});
      return;
    }
  }
  hcaptcha.verify(secret, token).then(data => {
    if(data.success){
      db.get("users").then(users => {
        if(Object.keys(users).includes(newusername)){
          res.render("signup.html", {error: "Username taken."});
          return;
        }
        if(newusername == "" || newpassword == ""){
          res.render("signup.html", {error: "All fields are required."});
          return;
        }
        console.log(newusername);
        bcrypt.hash(newpassword, saltRounds, function(err, hash){
          users[newusername] = {
            p: hash,
            s: [0],
            c: 0,
            g: "pistol",
            b: 0
          };

          /* 
          REMEMBER:
          p = password,
          s = skins,
          c = current skin,
          g = gun,
          b = balance (how much gold a player owns)
          */
          db.set("users", users);
          console.log("new account created");
          req.session.username = newusername;
          res.redirect("/");
        });
      });
    } else {
      res.render("signup.html", {error: "No bots allowed!"});
    }
  });
});


app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

server.listen(process.env.PORT || 3000, () => {
  console.log("server started");
  console.log(`${db.db_url}/users`);
});

// https://gamedevacademy.org/create-a-basic-multiplayer-game-in-phaser-3-with-socket-io-part-2/

// https://www.creativebloq.com/how-to/build-a-progressive-web-app

// https://javascript.plainenglish.io/develop-your-first-multiplayer-browser-game-io-99931c7d3a5b

// https://code.tutsplus.com/tutorials/create-a-multiplayer-pirate-shooter-game-in-your-browser--cms-23311
