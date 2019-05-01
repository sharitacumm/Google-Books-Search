import React, { Component } from "react";
// import logo from "./commponents/logo";
import "./App.css";
import Search from "./components/Search";
import Results from "./commponents/Results";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            keyword: "",
            fetchBooks: false,
            fetchSuccess: false,
            fetchError: false,

        };
        this.searchAction = this.searchAction.bind(this);
        this.fetchBooks = this.fetchBooks.bind(this);
    }
    handleKeywordChange = (event => {
        this.setState({
            keyword: eventtatrget.value
        });
    });

    searchAction () {
        this.clearBook();
        this.fetchBook();
    }

    async fetchBook() {
        if(!this.state.fetchingBooks) {
            const query = "q=${this.state.keyword}";
            const key = "key=users api key";
            const startingIndex = "statingIndex=${this.state.books.length}";
            const maxResults = "maxResults=${40}";
            const url = "http://www.googleapis.com/books/v1/volumes${query}&${query}&${key}&${startingIndex}&${maxResults}";

            this.setState({
                fetchingBook: true,
                fetchSuccess: false,
                fetchError: false
            });

            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    books:  [...this.state.books,...data.items],
                    fetchingBook: false,
                    fetchSuccess: true,
                    fetchError: false
                });

            }).catch((error) => {
                console.log(error);
                this.setState({
                    fetchingBook: false,
                    fetchSuccess: false,
                    fetchError: true

                });
            });

        }

    };
    clearBook() {
        this.set/state({
            book: []            
        });
    }

    render() {
        retrurn (
            <div className="searchApp">
                <logo loading={this.state.fetchingBook} />
                <Search
                    keyword={this.state.keyword}
                    handleKeywordChange={this.handleKeywordChange}
                    searchAction={this.searchAction}/>
                <Results
                    books={this.state.books}
                    fetchBook={this.fetchBook}/>

            </div>
        );
    }

}
export default App;