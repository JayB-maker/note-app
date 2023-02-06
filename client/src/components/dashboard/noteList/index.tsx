import { noteDetails } from "../../../data/Data";
import "./NoteList.scss";
const NoteList = () => {
  return (
    <div className="note-lists-container">
      <h4>Personal Files</h4>
      <div className="note-lists">
        {noteDetails.map((note, index) => (
          <div className="note-list" key={index}>
            <h4>{note.note}</h4>
            <p className="type3">{note.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
