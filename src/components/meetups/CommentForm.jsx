import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import "./CommentForm.css";

function NewMeetupForm(props) {
    const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <p><div className={classes.control}>
          <label htmlFor="description">Leave your comments below (will be added to the end of the list) </label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        </p>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
