import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Bookshelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array
    };

    async updateShelf(book, shelf) {
        this.props.shelfChanged(book, shelf);
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book, index) => (
                            <Book key={index} image={book.imageLinks.smallThumbnail} title={book.title} authors={book.authors} shelf={book.shelf} shelfChanged={(shelf) => this.updateShelf(book, shelf)} />
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;