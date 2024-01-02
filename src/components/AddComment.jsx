import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddCommment extends Component {
    state = {
        comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin
        },
    }

    send = async (e) => {
        e.preventDefault()
        try{
            let response = await fetch (
                'https://striveschool-api.herokuapp.com/api/comments',
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.comment),
                    headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZGFmOTBkOGEyMDAwMThhNDhhNjUiLCJpYXQiOjE3MDQwMzk5NjUsImV4cCI6MTcwNTI0OTU2NX0.FBqSN76rw1uQfAuG0YPyOKUsKGeTEUd4ga2Pe_hxKFY',
                    },
                }
            )
            if(response.ok) {
                alert('Recensione inviata')
                this.setState({
                    comment: {
                        commment: '',
                        rate: 1,
                        elementId: this.props.asin,
                    },
                })
            } else {
                throw new Error ("C'è stato un errore")
            }
        } catch (error) {
            alert(error)
        }
    }

    render () {
        return (
            <div className="my-2">
                <Form onSubmit={this.send}>
                    <Form.Group>
                    <Form.Label>Recensione</Form.Label>
                    <Form.Control className="mb-2"
                    type="text"
                    placeholder="Scrivi la tua recensione..."
                    value={this.state.comment.comment}
                        onChange={(e) =>
                            this.setState({
                                comment: {
                                    ...this.state.comment,
                                    comment: e.target.value,
                                },
                            })
                        }
                    />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Valutazione</Form.Label>
                    <Form.Control className="mb-2"
                        required
                        type="number" min="1" max="5"
                        placeholder="Lascia un voto..."
                        value={this.state.comment.rate}
                        onChange={(e) =>
                            this.setState({
                                comment: {
                                    ...this.state.comment,
                                    rate: e.target.value,
                                },
                            })
                        }
                    />
                    </Form.Group>
                    <Button type="submit" variant="primary">Invia</Button>
                </Form>
            </div>
        )
    }
}

export default AddCommment