import { Component } from "react";
import CommentList from "./CommentList";
import AddCommment from "./AddComment";
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {
    state = {
        comments: [],
        isLoading: true,
        isError: false,
    }

  componentDidMount = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZGFmOTBkOGEyMDAwMThhNDhhNjUiLCJpYXQiOjE3MDQwMzk5NjUsImV4cCI6MTcwNTI0OTU2NX0.FBqSN76rw1uQfAuG0YPyOKUsKGeTEUd4ga2Pe_hxKFY",
        },
      });
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments: comments, isLoading: false, isError: false });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddCommment asin={this.props.asin} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea
