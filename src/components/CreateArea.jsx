import React,{useState} from "react";


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
        <button onClick={addnew}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
