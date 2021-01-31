import React,{useState} from "react";
import AddIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
function CreateArea(props) {

 const [note,setNote] =useState({
   title: "",
   content: ""
 })
   function handlechange(event){
    const {name,value} = event.target;
  
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]:value
      };
      
    })
   
   }
   function addnew(event){
    props.onAdd(note);
     setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
   }


  return (
    <div>
      <form>
        <input 
        name="title" 
        onChange={handlechange} 
        placeholder="Title" 
        value={note.title}
         />
        <textarea
         name="content" 
         onChange={handlechange} 
         placeholder="Take a note..." 
         value={note.content} 
         rows="3" 
         />
        <Fab onClick={addnew}><AddIcon/></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
