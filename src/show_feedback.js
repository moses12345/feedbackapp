import React from 'react'
import './show_feedback.css'

function Show_feedback({name,email,feedback}) {
    return (
        <div className="widgets__widgetContainer">
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>          
                {name}{" "} 
                <span className="post__headerSpecial">
                {/*  <DeleteIcon onClick={()=>delete_doc(id_post)} className = "deletebutton" /> */} 
                </span>
              </h3>
              <h2>{email}</h2>
            </div>
            <div className="post__headerDescription">
              <p>{feedback}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Show_feedback
