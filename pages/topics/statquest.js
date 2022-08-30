import fs from "fs";
import React from "react";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/statquest.module.css";
import TopicCard from "../../components/card";
import { Row, Col } from "react-bootstrap";
import CardGroup from "../../components/cardgroup";
import FileUpload from "../../components/fileupload";

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

export default function statquest() {
  return (
    <Layout>
      <div>
        <CardGroup topics={topics} />
      </div>
    </Layout>
  );
}
