import react from "react";
import {InputGroup, FormControl, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";

class Loancard extends react.Component {
  render(props) {
    return (
      <>
        <Card className="blue">
          <Card.Header as="h5"></Card.Header>
          <Card.Body>
            <Card.Title>{this.props.requestid}</Card.Title>
            <Card.Text>
              <Table striped bordered hover responsive="md">
                <thead>
                  <tr>
                    <th>Borrower</th>
                    <th>Amount</th>
                    <th>Interest Rate (%)</th>
                    <th>Borrowing Period</th>
                    <th>Date of post</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.borrower}</td>
                    <td>{this.props.amount}</td>
                    <td>{this.props.interestrate}</td>
                    <td>{this.props.time}</td>
                    <td>{this.props.date}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                    <FormControl
                      placeholder="Amount"
                      aria-label="Amount"
                      aria-describedby="basic-addon1"
                      type="number"
                    />
                  </InputGroup></td>
                    <td><InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                    <FormControl
                      placeholder="Interest Rate"
                      aria-label="Interest Rate"
                      aria-describedby="basic-addon1"
                      type="number"
                    />
                  </InputGroup></td>
                    <td><InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                    <FormControl
                      placeholder="Borrowing Period"
                      aria-label="Borrowing Period"
                      aria-describedby="basic-addon1"
                      type="number"
                    />
                  </InputGroup></td>
                    <td></td>
                    <td>{this.props.date}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
            <hr className=""></hr>
            <button className="button_bg p-2 mt-1">
              <h6>Place a Bid</h6>
            </button>
          </Card.Body>
        </Card>
      </>
    );
  }
    render(props){

        return (
            <>
                <Card>
                <Card.Header as="h5"></Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </>
        );
    }
}

export default Loancard;