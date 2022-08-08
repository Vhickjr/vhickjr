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
          <Form.Text className="text-muted vic4">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="vic4">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className="vic4" type="checkbox" label="send" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Mailer;
