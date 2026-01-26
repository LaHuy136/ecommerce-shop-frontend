import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function PopFullImage({ show, onHide, children }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton />
      <Modal.Body className="text-center">{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopFullImage;
