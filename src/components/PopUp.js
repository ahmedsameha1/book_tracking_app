import React from "react";

const PopUp = props => {
    return (
        <div>
            <div>
                Move to
            </div>
            <div onClick={() => props.updateShelf(props.id, "currentlyReading")} >
                <span>Currently Reading</span>
                <i className={props.shelf === "currentlyReading" ? "show_mark" : "hide_mark"}>✔</i>
            </div>
            <div onClick={() => props.updateShelf(props.id, "wantToRead")} >
                <span>Want to Read</span>
                <i className={props.shelf === "wantToRead" ? "show_mark" : "hide_mark"}>✔</i>
            </div>
            <div onClick={() => {props.updateShelf(props.id, "read")}} >
                <span>Read</span>
                <i className={props.shelf === "read" ? "show_mark" : "hide_mark"}>✔</i>
            </div>
            <div onClick={() => props.updateShelf(props.id, "ii")} >
                <span>None</span>
                <i className={props.shelf === "" ? "show_mark" : "hide_mark"}>✔</i>
            </div>
        </div>
    );
}

export default PopUp;
