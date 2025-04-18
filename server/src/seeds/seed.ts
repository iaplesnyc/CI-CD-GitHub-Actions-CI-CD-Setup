import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";

import fs from "fs";
const data = fs.readFileSync("./src/seeds/pythonQuestions.json", "utf8");
const pythonQuestions = JSON.parse(data);

db.once("open", async () => {
  await cleanDB("Question", "questions");

  await Question.insertMany(pythonQuestions);

  console.log("Questions seeded!");
  process.exit(0);
});
