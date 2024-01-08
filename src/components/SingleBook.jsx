import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {

  render() {
    const { book, onSelectBook, isSelected } = this.props;

    return (
      <>
        <Card
          style={{ height: "620px", border: isSelected ? "3px solid blue" : "none" }}
          onClick={() => onSelectBook(book.asin)}
        >
          <Card.Img variant="top" style={{ width: "100%", height: "480px" }} src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text className="border border-primary border-2 rounded-3 p-1 d-inline">
              {this.props.book.price} $
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
}}

export default SingleBook;
