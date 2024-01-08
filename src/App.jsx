import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
// import AllTheBooks from './components/AllTheBooks';
import horror from "./data/horror.json";
import { Col, Container, Row } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
  state = {
    selectedAsin: null,
  };

  selectBook = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <>
        <MyNav />
        <Welcome />
        <Container>
          <Row>
            <Col xs={10}>
              <BookList books={horror} onSelectBook={this.selectBook} selectedAsin={this.state.selectedAsin} />
            </Col>
            {/* <AllTheBooks /> */}
            <Col xs={2}>
              <CommentArea asin={this.state.selectedAsin} />
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    );
  }
}

export default App;
