import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
      <Card
        style={{ height: "620px", border: this.state.selected ? '3px solid blue' : 'none'}}
        onClick={() => {
          this.setState ({ selected: !this.state.selected })

        }}
      >
        <Card.Img variant="top" style={{ width: "100%", height: "480px" }} src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text className="border border-primary border-2 rounded-3 p-1 d-inline">
            {this.props.book.price} $
          </Card.Text>
        </Card.Body>
      </Card>
      {this.state.selected && (
          <CommentArea  asin={this.props.asin}/>
        )}
      </>
    );
  }
}

export default SingleBook;
