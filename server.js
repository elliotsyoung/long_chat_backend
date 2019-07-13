const express = require('express');
const app = express();

app.use(express.urlencoded({
  extended: false
}));

app.get("/", ((req, res) => {
  console.log(`Somebody visited the home route, their IP address is ${req.ip}`);
  res.send("Hello World");
}))


let people = ["Elliot", "Tony"];

app.get("/api/people", (req, res) => {
  const people_to_show = people.join(", ");
  res.send(`Here are the people:
    ${people_to_show}
    `)
})

app.post("/api/create_person", (req, res) => {
  if (req.body.person !== undefined) {
    people.push(req.body.person);
    console.log(`Added ${req.body.person} to people array`);
    res.redirect("/api/people");
  } else {
    res.send("You need to send a person to add to the people array")
  }
})


app.listen(3001, (req, res) => {
  console.log("server online running on port 3001");
});
