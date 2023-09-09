const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  res.json({
    slack_name,
    currentDay: daysOfWeek[new Date().getDay()],
    utc_time: new Date().toISOString().split(".")[0] + "Z",
    track,
    github_file_Url: "https://github.com/toyeuthman/",
    github_repo_url: "https://github.com/toyeuthman/Task-1.git",
    status_code: 200,
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
