import { fileURLToPath } from "url";
import path from "path";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.port || 3000;
const users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const indexHtml = path.join(__dirname, "public/index.html");

app.get("/", (req, res) => {
  res.sendFile(indexHtml);
});
app.get("/getCurrentDate", (req, res) => {
  const date = new Date();
  const text = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  res.json({ date: text });
});
app.post("/addPerson", (req, res) => {
  console.log("test");
  const user = req.body;
  if (user.firstName && user.lastName) {
    users.push(user);
  }
  res.json({ user: user });
});
app.get("/getPeople", (req, res) => {
  res.json({ users: users });
});
app.post("/getPerson", (req, res) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].firstName === req.body) {
      res.redirect("/");
      break;
    }
  }
  res.redirect("/");
});

// see documentation on expressjs for more detail

// something also useful to know
// fetch can have different methods, like post as well

// routing
// app.method(path, handler)
// route paths
// app.get('/ab?cd') match a, optional character, then cd, ex acd, abcd aicd
// app.get('/ab*cd') match ab, anything can be between, then ends in cd
// app.get(/.*fly$/) anything that ends with fly, $ means nothing after, .* means any amount of any character before following rules
/* 
  "/users/:parameter/stuff/:anotherParameter"
  allows things like req.params.parameter and req.params.anotherParameter
  multiple parameters in the same location
  "/users/:parameter-:anotherParameter"

  multiple methods on the same route path
  app.route("/url")
    .get((req, res) => {
      stuff
    })
    .post((req, res) => {
      stuff
    })
    .put((req, res) => {
      stuff
    })
*/

app.listen(port, () => {
  console.log(`running server from port ${port}`);
});
