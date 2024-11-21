import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SelectedBeast(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{props.selectedBeast.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <img
                    src={props.selectedBeast.image_url}
                    alt={props.selectedBeast.title}
                    style={{ width: '100%' }}
                />
                <p>{props.selectedBeast.description}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SelectedBeast;