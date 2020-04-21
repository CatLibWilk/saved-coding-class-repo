import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.getBooks()
  }

  changeHandle = e => {
    const tar = e.target.name;
    const value = e.target.value;

    this.setState({
      [tar]: value
    })
    console.log(this.state)
  };

  deleteHandle = (id) => {
    console.log(id)
    API.deleteBook(id)
        .then( () => {
          this.getBooks();
        })
  }

  getBooks = () => {
    API.getBooks()
        .then(res =>
          this.setState({ books: res.data, title: "", author: "", synopsis: "" })
        )
        .catch(err => console.log(err));
  }

  saveBook = () => {
    console.log("save book run in book.js")
    const bookData = {
      title: this.state.title,
      author: this.state.author,
      synopsis: this.state.synopsis
    }
    API.saveBook(bookData)
    this.getBooks();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" onChange={this.changeHandle}/>
              <Input name="author" placeholder="Author (required)" onChange={this.changeHandle}/>
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" onChange={this.changeHandle}/>
              <FormBtn onClick={(event) => {event.preventDefault(); this.saveBook()}}>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick ={() => {this.deleteHandle(book._id)}}/>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
