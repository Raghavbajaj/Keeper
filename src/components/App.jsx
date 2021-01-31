import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

 const [notes,setnotes] = useState([]);
  
 function addNote(note){
    setnotes( prevValue => {
      return [...prevValue, note];
});
}
function deleteNote(id) {
  setnotes(prevNotes => {
    return prevNotes.filter((notes, index) => {
      return index !== id;
    });
  });
}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note, index) => {
        return(
            <Note
            key={index}
            id={index}
             title={note.title}
              content={note.content}
              onDelete = {deleteNote}
            /> 
       ) })}
      <Footer />
    </div>
  );
}

export default App;
