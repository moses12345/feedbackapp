import "./App.css";
import db from "./firebase";
import uuid from "react-uuid";
import toast, { Toaster } from "react-hot-toast";

function Feedback_form({
  name,
  email,
  feedback,
  setname,
  setemail,
  setfeedback,
}) {
  const handleform = (e) => {
    const uid = uuid();
    e.preventDefault();
    db.collection("feedback")
      .doc(uid)
      .set({
        id: uid,
        name: name,
        email: email,
        feedback: feedback,
      })
      .then(() => {
        toast.success(
          `Your feedback has been submitted and feedback reference is ${uid}  👏`,
          {
            duration: 5000,
            style: { width: 1000, height: 100 },
          }
        );
      })
      .catch((error) => console.log(error));

    setname("");
    setemail("");
    setfeedback("");
  };
  console.log(name, email, feedback);
  return (
    <form className='form' onSubmit={handleform}>
      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          style: {
            margin: "40px",
            background: "#363636",
            color: "#fff",
            zIndex: 1,
          },
          duration: 5000,
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <h1>Feedback form</h1>
      <label>NAME</label>
      <input
        type='text'
        value={name}
        placeholder='Your name please'
        onChange={(e) => setname(e.target.value)}
      />

      <label>YOUR EMAIL ID</label>
      <input
        type='text'
        value={email}
        placeholder='Your email_id please'
        onChange={(e) => setemail(e.target.value)}
      />
      <label>YOUR FEEDBACK</label>
      <textarea
        placeholder='your feedback please'
        value={feedback}
        onChange={(e) => setfeedback(e.target.value)}></textarea>

      <button type='submit'>submit</button>
    </form>
  );
}

export default Feedback_form;
