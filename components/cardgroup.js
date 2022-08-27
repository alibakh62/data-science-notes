import TopicCard from "./card";
import styles from "./cardgroup.module.css";

export default function CardGroup({ topics }) {
  return (
	<div className={styles.cardGroup}>
	  {topics.map((topic) => (
		<TopicCard
		  key={topic.id}
		  uri={topic.uri}
		  title={topic.title}
		  topicUri={topic.topicUri}
		  description={topic.description}
		  className={styles.card}
		/>
	  ))}
	</div>
  );
}