import React from "react";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/statquest.module.css";
import TopicCard from "../components/card";
import { Row, Col } from "react-bootstrap";
import CardGroup from "../components/cardgroup";
import FileUpload from "../components/fileupload";

// TODO: How to read the topics from the file?
// TODO: Link topic cards to their pages.
// TODO: Create a topics page template. I can include the list of
//       subtopics in the topic card.
// TODO: Ability to modify an already existing topic.

function readTopics() {
  // Read the topics.json file.
  let respose = fetch("/api/read-topics");
  let data = respose.text;
  // console.log("data: ", data.topics);
  return data;
}

const topics1 = readTopics();
console.log(typeof topics1);
console.log("topics1: ", topics1);

const topics = [
  {
    id: 2,
    uri: "https://i.ytimg.com/vi/5u0jaA3qAGk/maxresdefault.jpg",
    title: "ZtatQuest",
    topicUri: "https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw",
    description: "Statistics with Josh Starmer",
  },
  {
    id: 3,
    uri: "https://i.ytimg.com/vi/5u0jaA3qAGk/maxresdefault.jpg",
    title: "StatQuest",
    topicUri: "https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw",
    description: "Statistics with Josh Starmer",
  },
  {
    id: 1,
    uri: "https://i.ytimg.com/vi/5u0jaA3qAGk/maxresdefault.jpg",
    title: "AtatQuest",
    topicUri: "https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw",
    description: "Statistics with Josh Starmer",
  },
  {
    id: 5,
    uri: "https://i.ytimg.com/vi/5u0jaA3qAGk/maxresdefault.jpg",
    title: "StatQuest",
    topicUri: "https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw",
    description: "Statistics with Josh Starmer",
  },
  {
    id: 4,
    uri: "https://i.ytimg.com/vi/5u0jaA3qAGk/maxresdefault.jpg",
    title: "StatQuest",
    topicUri: "https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw",
    description: "Statistics with Josh Starmer",
  },
];

console.log(typeof topics);

export default function statquest() {
  return (
    <Layout>
      <div>{JSON.stringify(topics1)}</div>
      <div>
        <CardGroup topics={topics} />
      </div>
    </Layout>
  );
}
