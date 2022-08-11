import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./mailerr.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Mailer = () => {
  return (
    <div className="containerr">
      <Form bacground-color="black">
        <h1 className="vic3">Contact Form</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="vic4">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="vic4">leave a message</Form.Label>
          <textarea
            id="txtid"
            name="txtname"
            rows="4"
            cols="50"
            maxlength="200"
          ></textarea>
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Mailer;
