import Card from "react-bootstrap/Card";
import styles from "./card.module.css";
import Link from "next/link";

function TopicCard({ uri, title, topicUri, description }) {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={uri} className={styles.image} />
      <Card.Body className={styles.body}>
        <Card.Title className={styles.title}>
          <Card.Link href={topicUri} className={styles.link}>
            {title}
          </Card.Link>
        </Card.Title>
        <Card.Text className={styles.description}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TopicCard;
