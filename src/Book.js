import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

class Book extends Component {
    static propTypes = {
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired
    };

    updateShelf(shelf) {
        this.props.shelfChanged(shelf);
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image})` }}></div>
                        <ShelfChanger selected={this.props.shelf} shelfChanged={(shelf) => this.updateShelf(shelf)} />
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    {this.props.authors.map((author, index) => (
                        <div key={index} className="book-authors">{author}</div>
                    ))}
                </div>
            </li>
        );
    }
}

export default Book;