export default function Form() {
  return (
    <form action="/api/form" method="post">
      <label htmlFor="title">Topic Title</label>
      <input type="text" id="title" name="title" required />

      <label htmlFor="description">Topic Description</label>
      <input type="text" id="description" name="description" />

      <label htmlFor="imageuri">Image Uri</label>
      <input type="text" id="imageuri" name="imageuri" />

      <button type="submit">Submit</button>
    </form>
  );
}
