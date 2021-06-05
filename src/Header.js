import React, {Component} from 'react';
import './Header.css';
import {Input, Label, Form, FormGroup, Button, ModalBody, ModalHeader, Modal} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {

    constructor(props){
        super(props)
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert("Name: " + this.firstname.value + " " + this.lastname.value + "\n"
             + "Email: " + this.email.value + "\n"
             + "Phone Number: " + this.phonenumber.value)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render(){
        return(
            <>
                <div id="header">
                    <img id="header-img" src="logo.png" alt="hello"/>
                    <button onClick={this.toggleModal} className="button">
                        Popup
                    </button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Enter Info</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label htmlFor="firstname">
                                    First Name
                                </Label>
                                <Input type="text" 
                                    id="firstname" 
                                    name="firstname"
                                    placeholder="First Name"
                                    innerRef={(input) => this.firstname = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">
                                    Last Name
                                </Label>
                                <Input type="text" 
                                    id="lastname" 
                                    name="lastname"
                                    placeholder="Last Name"
                                    innerRef={(input) => this.lastname = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">
                                    Email
                                </Label>
                                <Input type="text" 
                                    id="email" 
                                    name="email"
                                    placeholder="Email"
                                    innerRef={(input) => this.email = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="phonenumber">
                                    Phone Number
                                </Label>
                                <Input type="text" 
                                    id="phonenumber" 
                                    name="phonenumber"
                                    placeholder="Phone Number"
                                    innerRef={(input) => this.phonenumber = input}/>
                            </FormGroup>
                            <Button type="submit" value="submit" onClick={this.handleSubmit}>Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;