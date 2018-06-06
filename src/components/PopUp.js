import React from "react";

const PopUp = props => {
    return (
        <div>
            <div>
                Move to
            </div>
            <div>
                <span>Currently Reading</span>
                <i className={props.shelf === "currentlyReading" ? "show_mark" : "hide_mark"}>✔</i>
            </div>
            <div>
                <span>Want to Read</span>
                <i className={props.shelf === "wantToRead" ? "show_mark" : "hide_mark"}>✔</i>
            </div>
            <div>
                <span>Read</span>
                <i className={props.shelf === "read" ? "show_mark" : "hide_mark"}>✔</i>
            </div>
            <div>
                <span>None</span>
                <i className={props.shelf === "" ? "show_mark" : "hide_mark"}>✔</i>
            </div>
        </div>
    );
}

export default PopUp;
