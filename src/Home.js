import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import { getAll, update } from './BooksAPI';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        shelves: []
    }

    async componentWillMount() {
        await this.getBooks();
    }

    async getBooks() {
        const books = await getAll();
        console.log(books);
        this.setState(() => ({
            shelves: [
                {
                    title: 'Currently Reading',
                    books: books.filter(b => b.shelf === 'currentlyReading')
                },
                {
                    title: 'Want to Read',
                    books: books.filter(b => b.shelf === 'wantToRead')
                },
                {
                    title: 'Read',
                    books: books.filter(b => b.shelf === 'read')
                }
            ]

        }));
    }

    async updateShelf(book, shelf) {
        await update(book, shelf);
        await this.getBooks();

    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.state.shelves.map((shelf, index) => (
                            <Bookshelf key={index} title={shelf.title} books={shelf.books} shelfChanged={(book, shelf) => this.updateShelf(book, shelf)} />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;
