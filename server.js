const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;

  // current day and time of the week
  const now = new Date();
  const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
  const utc_time = now.toISOString();

  //Github links
  const github_file_Url = "https://github.com/toyeuthman/Task-1/blob/main/app.js"
  const github_repo_url = "https://github.com/toyeuthman/Task-1.git"

  res.json({
    slack_name,
    currentDay,
    utc_time,
    track,
    github_file_Url,
    github_repo_url,
    status_code: 200,
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
