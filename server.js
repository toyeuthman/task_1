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
    github_file_url: "https://github.com/toyeuthman/task_1/blob/main/server.js",
    github_repo_url: "https://github.com/toyeuthman/",
    status_code: 200,
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
