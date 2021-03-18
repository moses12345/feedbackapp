import "./App.css";
import React, { useState, useEffect } from "react";
import Feedback_form from "./feedback_form";
import Show_feedback from "./show_feedback";
import Nav from "./nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import db from "./firebase";

function App() {
  // global states
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [feedback, setfeedback] = useState("");
  const [data_in, setdata_in] = useState([]);

  // home component
  const home = () => {
    return <h1>home</h1>;
  };

  //useEffect for fetching data from firestore
  useEffect(() => {
    //fetching the data from firestore
    db.collection("feedback").onSnapshot((Snapshot) => {
      setdata_in(Snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={home} />
          <div className='App'>
            <Route path='/feedbackform'>
              <Feedback_form
                name={name}
                email={email}
                feedback={feedback}
                setemail={setemail}
                setname={setname}
                setfeedback={setfeedback}
              />
            </Route>
            <Route path='/show_feedback'>
              <h1>All feedback </h1>
              {data_in.map((dataum, index) => (
                <Show_feedback
                  key={index}
                  name={dataum.name}
                  email={dataum.email}
                  feedback={dataum.feedback}
                />
              ))}
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
