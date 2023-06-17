// NewTodoForm.jsx
import React, { useState } from "react";
export default function NewTodoForm({ onSubmit1 }){
    const [newItem,setNewItem] = useState("");
  
    function handleSubmit(e){
      e.preventDefault();
      if(newItem==="") return
       
       onSubmit1(newItem)
         
      setNewItem("");
    }
  
    return (
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" value={newItem} id="item" onChange={e => setNewItem(e.target.value)} />
        </div>
        <button className="btn">ADD</button>
      </form>
    );
  }
  