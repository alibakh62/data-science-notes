//TODO: Need to add the login stuff similar to admin-upload.js

import Layout from "../../components/layout";
import fs from "fs";

export default function PageWithJSbasedForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      title: event.target.title.value,
      description: event.target.description.value,
      imageuri: event.target.imageuri.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
    console.log("JSONdata :", JSONdata);

    // API endpoint where we send form data.
    const endpoint = "/api/create-topic";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    console.log("Response: ", response);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log("result :", result);
    alert(
      `Topic Submitted:\nTitle: ${JSONdata.title}\nDescription: ${JSONdata.description}\nImage URI: ${JSONdata.imageuri}`
    );
  };
  return (
    // We pass the event to the handleSubmit() function on submit.
    <Layout>
      <form onSubmit={handleSubmit} className="topic-form">
        <label htmlFor="title" className="form-title">
          Topic Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-input"
          required
        />

        <label htmlFor="description" className="form-title">
          Topic Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          className="form-input"
        />

        <label htmlFor="imageuri" className="form-title">
          Image Uri
        </label>
        <input
          type="text"
          id="imageuri"
          name="imageuri"
          className="form-input"
        />

        <button type="submit" className="submit-form">
          Submit
        </button>
      </form>
      <style jsx>{`
        .topic-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 500px;
          margin: auto;
          margin-top: 50px;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 15px;
          background-color: #f2f2f2;
        }
        .submit-form {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #fff;
          cursor: pointer;
        }
        .submit-form:hover {
          background-color: #ccc;
        }
        .form-title {
          margin-top: 1rem;
        }
        .form-input {
          padding: 0.5rem 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #fff;
        }
      `}</style>
    </Layout>
  );
}
