import react from "react";
import { InputGroup, FormControl, Card, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";

class Loancard extends react.Component {
  submit = (event) => {
    event.preventDefault();
    if(!window.sessionStorage.getItem("userid")){
      window.location.replace("/login");
      return false;
    }
    for(var i=0;i<event.target.length - 1;i++){
      if(event.target[i].value==="" || event.target[i].value===null){
        alert(`Enter the required field: ${event.target[i].name}`)
        return false;
      }
    }
    axios.post("http://localhost:5000/api/database",{
      method: "POST",
      type: "LoanOffer",
      lender:(window.sessionStorage.getItem("userid")),
      borrower:(this.props.borrower), 
      requestid : (this.props.requestid),
      amount: event.target.amt.value,
      interestrate: event.target.interestrate.value,
      time: event.target.borrowingperiod.value
    }).then((res)=>{
      if(res.data.success === true){
        alert("Loan Offer sent successfully !");
        return true;
      }
    })
  }
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
                  </tbody>
              </Table>
                  <form onSubmit={this.submit}>
                  {/* <tr> */}
                    {/* <td></td> */}
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                      <FormControl
                      name = "amt"
                        placeholder="Amount"
                        aria-label="Amount"
                        aria-describedby="basic-addon1"
                        type="number"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                      <FormControl
                      name= "interestrate"
                        placeholder="Interest Rate (%)"
                        aria-label="Interest Rate (%)"
                        aria-describedby="basic-addon1"
                        type="number"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                      <FormControl
                      name = "borrowingperiod"
                        placeholder="Borrowing Period (yrs)"
                        aria-label="Borrowing Period"
                        aria-describedby="basic-addon1"
                        type="number"
                      />
                    </InputGroup>
                    <button className="button_bg p-2 mt-1" type="submit">
                      <h6>Place a Bid</h6>
                    </button>
                    </form>
            </Card.Text>
            <hr className=""></hr>
          </Card.Body>
        </Card> 
        <hr className="h_break"></hr>
      </>
    );
  }
}

export default Loancard;
