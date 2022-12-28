import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";
import CommentForm from "../components/meetups/CommentForm";
import AllMeetupsPage from "./AllMeetups";

function NewMeetupPage() {
  // return <div> My New Meetup Page</div>;
  {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
      {
        {
          fetch(
            "https://cashlive-b2886-default-rtdb.firebaseio.com/meetups.json",
            {
              method: "POST",
              body: JSON.stringify(meetupData),
              headers: {
                "Content-Type": "application/json",
              },
            }
          ).then(() => {
            history.replace("/");
          });
        }
      }
    }

    return (
      <section>
        <h1></h1>
        <CommentForm onAddMeetup={addMeetupHandler} />
        <AllMeetupsPage />
      </section>
    );
  }
}

export default NewMeetupPage;
