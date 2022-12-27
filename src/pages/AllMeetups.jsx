import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  // return <div> All Meetups Page</div>;

  {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
      setIsLoading(true);
      fetch("https://cashlive-b2886-default-rtdb.firebaseio.com/meetups.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const meetups = [];

          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };

            meetups.push(meetup);
          }

          setIsLoading(false);
          setLoadedMeetups(meetups);
        });
    }, []);

    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }

    return (
      <div style={{marginLeft: '200px'}}>
      <section>
        <h2>Payment Accounts</h2>
        <MeetupList meetups={loadedMeetups} />
      </section>
      </div>
    );
  }
}

export default AllMeetupsPage;
