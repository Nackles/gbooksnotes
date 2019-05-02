// Importing React and our components.
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// Class object to gain access to state and class methods
class Saved extends Component {
  state = {
    books: []
  };

  // Get all of our saved books once the page finishes loading.
  componentDidMount() {
    this.getSavedBooks();
  }

  // Defining how to ge the saved books.
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // On click, this is called with the ID of the book to delete.
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  // What to show on the page.
  render() {
    return (
      // Delicious, Bootstrappy gooodness.
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {/* Instantiating a list of books when the state is updated with books to display. */}
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2> 
                // But just in case it can't find books, ya gotta tell the client.
              )} 
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

// Export it!
export default Saved;
