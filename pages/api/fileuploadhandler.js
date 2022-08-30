// export default (req, res) => {
//   if (req.method === "POST") {
//     res.status(200).json({ name: "POST method" });
//     post(req, res);
//     // Process a POST request
//   } else {
//     // Handle any other HTTP method
//     res.status(200).json({ name: "GET method" });
//   }
// };

import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    await saveFile(files.file);
    return res.status(201).send("");
  });
};

const saveFile = async (file) => {
  const data = fs.readFileSync(file.filepath);
  // fs.writeFileSync(`./public/${file.name}`, data);
  // console.log("file received");
  // console.log(`file path: ${String(file.filepath)}`);
  // console.log(`file name: ${String(file.originalFilename)}`);

  fs.writeFileSync(`./public/uploads/${file.originalFilename}`, data);
  await fs.unlinkSync(file.filepath);
  return;
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};
