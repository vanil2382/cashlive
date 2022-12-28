import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import "../../pages/CommentBox.css"

function MeetupList(props) {
  return (
   <h3>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          description={meetup.description}
        />
      ))}
    </h3>
  );
}

export default MeetupList;