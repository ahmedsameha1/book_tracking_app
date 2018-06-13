import React from "react";

const PopUp = props => {
    return (
        <div className="pop_up_menu">
            <div>
                Move to
            </div>
            <div onClick={() => {props.updateShelf(props.id, "currentlyReading"); props.toggle_pop_up()}} className="pop_up_menu_shelf">
                <i className={props.shelf === "currentlyReading" ? "show_mark" : "hide_mark"}>✓</i>
                <span>Currently Reading</span>
            </div>
            <div onClick={() => {props.updateShelf(props.id, "wantToRead"); props.toggle_pop_up()}} className="pop_up_menu_shelf">
                <i className={props.shelf === "wantToRead" ? "show_mark" : "hide_mark"}>✓</i>
                <span>Want to Read</span>
            </div>
            <div onClick={() => {props.updateShelf(props.id, "read"); props.toggle_pop_up()}} className="pop_up_menu_shelf">
                <i className={props.shelf === "read" ? "show_mark" : "hide_mark"}>✓</i>
                <span>Read</span>
            </div>
            <div onClick={() => {props.updateShelf(props.id, "ii"); props.toggle_pop_up()}} className="pop_up_menu_shelf">
                <i className={props.shelf === "" ? "show_mark" : "hide_mark"}>✓</i>
                <span>None</span>
            </div>
        </div>
    );
}

export default PopUp;
