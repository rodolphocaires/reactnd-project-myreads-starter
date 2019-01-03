import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
    static propTypes = {
        selected: PropTypes.string.isRequired
    }

    updateShelf = (value) => {
        // this.props.selected = value;
        this.props.shelfChanged(value);
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.selected} onChange={(e) => this.updateShelf(e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default ShelfChanger;
