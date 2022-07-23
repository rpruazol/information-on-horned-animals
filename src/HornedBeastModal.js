import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';

export default class HornedBeastModal extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.clicked} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.detail.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card id={this.props.detail._id} style={{ width: 'auto' }} className="h-100">
                            <Card.Body>
                                <Card.Title>{this.props.detail.id}</Card.Title>
                                <Card.Text>{this.props.detail.description}</Card.Text>
                                <Card.Img
                                    varient="top"
                                    src='./heart.png'
                                    style={{ width: '50px' }}
                                    onClick={this.handleClickUpVote}
                                />
                                <Card.Title>
                                   { this.props.detail.count === null ? 0 : this.props.detail.count }
                                </Card.Title>
                            </Card.Body>
                            <Card.Img
                                src={this.props.detail.image_url}
                            />
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.props.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}