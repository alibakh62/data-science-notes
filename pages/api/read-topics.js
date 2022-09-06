import fs from "fs";

export default function handler(req, res) {
  const rawdata = fs.readFileSync("data/topics.txt");
  //   const topics = JSON.parse(rawdata);
  //   console.log("topics", topics);
  return res.status(200).json(rawdata);
}
