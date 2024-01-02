import { Component } from "react";
import {Col, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";


class BookList extends Component {


  state = {
    searchQuery: "",
  };

  render() { 
    const { selected } = this.state;
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={6} sm={4} md={3} xxl={2} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {this.props.books
          .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
            .map((b) => (
              <Col xs={6} sm={4} md={3} xxl={2} key={b.asin}>
                <SingleBook book={b} selected={selected} asin={b.asin}/>
              </Col>
            ))}
        </Row>
      </>
    )
  }
}

export default BookList
