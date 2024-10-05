const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const courseDetails = require("./data/courseDetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(`Sareng tech server is running `);
});

app.get("/coursedetails", (req, res) => {
  res.send(courseDetails);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedCourse = courseDetails.find((aCourse) => {
    return aCourse.course_id === id;
  });
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`Sareng tech server is running ${port}`);
});
