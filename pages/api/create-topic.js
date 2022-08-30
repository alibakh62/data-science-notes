import fs from "fs";
import TopicTemplate from "../../components/topic-template";

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

  // Save the data to a file.
  saveTopic(body);

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.title || !body.description) {
    // Sends a HTTP bad request error code
    return res
      .status(400)
      .json({ data: "Topic title or description are not found" });
  }

  // Found the name.
  // Sends a HTTP success code

  res.status(200).json({ data: `${body.title} ${body.description}` });
}

const saveTopic = async (body) => {
  if (fs.existsSync("data/topics.json")) {
    console.log("File exists");
    //file exists
    var rawdata = fs.readFileSync("data/topics.json");
    var topics = JSON.parse(rawdata);
    console.log("topics: ", topics);
  } else {
    fs.make;
    var topics = [];
  }

  if (topics.length > 0) {
    console.log("Topics length is greater than 0");
    const lastId = sortByKey(topics, "id").slice(-1)[0].id;
    console.log("Last ID: " + lastId);
    const newTopic = {
      id: lastId + 1,
      uri: body.imageuri,
      title: body.title,
      topicUri: `../topics/${body.title.toLowerCase().replace(/ /g, "-")}.js`,
      description: body.description,
    };
    topics.push(newTopic);
  } else {
    console.log("Topics length is 0");
    const newTopic = {
      id: 1,
      uri: body.imageuri,
      title: body.title,
      topicUri: `../topics/${body.title.toLowerCase().replace(/ /g, "-")}.js`,
      description: body.description,
    };
    topics.push(newTopic);
  }
  console.log("Updated topics: ", topics);
  fs.writeFileSync("data/topics.json", JSON.stringify(topics));

  // Create the topic page

  if (
    fs.existsSync(
      `pages/topics/${body.title.toLowerCase().replace(/ /g, "-")}.js`
    )
  ) {
    //file exists
    console.log("Topic file exists");
    return;
  } else {
    fs.copyFileSync(
      "components/topic-template.js",
      `pages/topics/${body.title.toLowerCase().replace(/ /g, "-")}.js`,
      fs.constants.COPYFILE_EXCL
    );
    // fs.writeFileSync(
    //   `pages/topics/${body.title.toLowerCase().replace(/ /g, "-")}.js`,
    //   TopicTemplate("Test")
    // );
    console.log("Topic file created");
  }
};

function sortByKey(array, key) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}
