import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import { search, getAll, update } from './BooksAPI'

class Search extends Component {
    state = {
        books: [],
        myBooks: []
    }

    async componentWillMount() {
        const books = await getAll();

        this.setState({
            myBooks: books
        });
    }

    async search(query) {
        if (query.length < 3) {
            return;
        }

        const books = await search(query);

        const booksFiltered = books.map(book => {
            book.shelf = 'none';

            this.state.myBooks.forEach(b => {
                if (book.id === b.id) {
                    book.shelf = b.shelf;
                }
            });

            return book;
        });

        console.log('booksFiltered', booksFiltered);

        this.setState({
            books: booksFiltered
        })
    }

    async updateShelf(book, shelf) {
        await update(book, shelf);
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={e => this.search(e.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.length > 0 && this.state.books.map((book, index) => (
                            <Book key={index} image={book.imageLinks.smallThumbnail} title={book.title} authors={book.authors} shelf={book.shelf} shelfChanged={(shelf) => this.updateShelf(book, shelf)} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;