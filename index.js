const express = require('express');
const cors = require('cors'); // for transfer data local server to local server
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Leanne  ",
    email: "Sincere@april.biz",
    phone: "5436169163496111",
  },
  {
    id: 2,
    name: "Alom  ",
    email: "alom@april.biz",
    phone: "5436169163492222",
  },
  {
    id: 3,
    name: "Balom  ",
    email: "Balom@april.biz",
    phone: "543616916349333",
  },
  {
    id: 4,
    name: "Kodhu  ",
    email: "kodhu@april.biz",
    phone: "543616sdf49444",
  },
  {
    id: 5,
    name: "Leanne  ",
    email: "Sincere@april.biz",
    phone: "54361sdfsa4965555",
  },
  {
    id: 6,
    name: "Bodu  ",
    email: "bodu@april.biz",
    phone: "543616asdf346666",
  },
  {
    id: 7,
    name: "Sagol  ",
    email: "sagol@april.biz",
    phone: "54361sadfas777",
  }
];
app.get("/users", (req, res) => {
  if(req.query.name){
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
    res.send(matched);
  }
  else{
    res.send(users);
  }
});

app.get("/", (req, res) => {
  res.send("Look... I can code in Node now!!!");
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) =>{
  console.log("Request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user)
})

app.get('/fruits', (req, res) =>{
    res.send(['mango', 'banana', 'apple', 'orange'])
});
app.get('/fruits/fazle/mango', (req, res) =>{
    res.send('sour sour fazle flavor');
});

app.listen(port, () => {
  console.log("listening to port", port);
});
