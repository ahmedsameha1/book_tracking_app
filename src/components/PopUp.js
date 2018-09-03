import React from "react";
import PropTypes from "prop-types";

const PopUp = props => {
    const current_book = props.book;
    const update = (shelf) => {
                current_book.shelf = shelf;
                props.updateShelf(current_book);
                props.toggle_pop_up();
    }
    return (
        <div className="pop_up_menu">
            <div>
                Move to
            </div>
            <div onClick={() => { update("currentlyReading") }} className="pop_up_menu_shelf">
                <i className={current_book.shelf === "currentlyReading" ? "show_mark" : "hide_mark"}>✓</i>
                <span>Currently Reading</span>
            </div>
            <div onClick={() => { update("wantToRead") }} className="pop_up_menu_shelf">
                <i className={current_book.shelf === "wantToRead" ? "show_mark" : "hide_mark"}>✓</i>
                <span>Want to Read</span>
            </div>
            <div onClick={() => { update("read") }} className="pop_up_menu_shelf">
                <i className={current_book.shelf === "read" ? "show_mark" : "hide_mark"}>✓</i>
                <span>Read</span>
            </div>
            <div onClick={() => { update("none") }} className="pop_up_menu_shelf">
                <i className={current_book.shelf === "none" ? "show_mark" : "hide_mark"}>✓</i>
                <span>None</span>
            </div>
        </div>
    );
}

PopUp.propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired,
    toggle_pop_up: PropTypes.func.isRequired,
}

export default PopUp;
