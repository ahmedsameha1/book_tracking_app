import React from "react";

class Shelves extends React.Component {
    render() {
        return (
            <div>
                <header className="shelf_header">
                    <h2 className="shelf_name">Currently Reading</h2>
                </header>
                <header className="shelf_header">
                    <h2 className="shelf_name">Want to Read</h2>
                </header>
                <header className="shelf_header">
                    <h2 className="shelf_name">Read</h2>
                </header>
            </div>
        );
    }
}

export default Shelves;
