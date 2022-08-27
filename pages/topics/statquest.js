import React from "react";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../../styles/statquest.module.css";
import TopicCard from "../../components/card";
import { Row, Col } from "react-bootstrap";
import CardGroup from "../../components/cardgroup";

const topics = [
  {
    id: 1,
    uri: "https://i.ytimg.com/vi/5u0jaA3qAGk/maxresdefault.jpg",
    title: "StatQuest",
    topicUri: "https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw",
    description: "Statistics with Josh Starmer",
  },
  {
    id: 2,
    uri: "https://i.ytimg.com/vi/5u0jaA3qAGk/maxresdefault.jpg",
    title: "StatQuest",
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
    id: 4,
    uri: "https://i.ytimg.com/vi/5u0jaA3qAGk/maxresdefault.jpg",
    title: "StatQuest",
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
];

export default function statquest() {
  return (
    <Layout>
      <div>
        <h1 className={styles.title}>List of StatQuest Topics</h1>
        <ul>
          <li>
            <Link href="../statquest/pvalue/pvalue.html">p-value</Link>
          </li>
          <li>
            <Link href="../statquest/pvalue/pvalue.html">Ali</Link>
          </li>
        </ul>
      </div>
      <div>
        <TopicCard
          uri="/images/card-bg.png"
          title="ML Engineering"
          topicUri="../statquest/pvalue/pvalue.html"
          description="This is a description"
        />
      </div>
      <div>
        <CardGroup topics={topics} />
      </div>
    </Layout>
  );
}
