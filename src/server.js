import express from "express";

const app = express();

console.log("hello");

app.set("view engine","pug");
// views의 경로를 입력해준다
app.set("views",__dirname+"/views");

app.use("/public", express.static(__dirname+"/public"));
// route 생성, home.pug 를 render
app.get("/", (req, res) => res.render("home"));
// express 를 통해 구축된 웹사이트를 app.listen 메소드를 실행할 때 콘솔창에 로컬 주소를 띄우는 함수를 만듦
const handleListen = () => console.log('Listening on http://localhost:3000')
app.listen(3000, handleListen);


