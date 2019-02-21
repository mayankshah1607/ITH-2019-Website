import React, { Component } from 'react';
import './Register.css';
import { form, FormGroup, Checkbox,ControlLabel, FormControl, Grid,Row,Col, Button } from 'react-bootstrap';
export default class Register extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            mobile: '',
            external: false,
            university: '',
            regno: '',
            city: '',
            ieee_member: false,
            ieee_id: '',
            q1: '',
            q2: '',
            q3: ''
        }

    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onMobChange = (event) => {
        this.setState({mobile: event.target.value})
    }

    onUniChange = (event) => {
        this.setState({university: event.target.value})
    }

    onRegChange = (event) => {
        this.setState({regno: event.target.value})
    }

    onCityChange = (event) => {
        this.setState({city: event.target.value})
    }

    onIMChange = (event) => {
        this.setState({ieee_id: event.target.value})
    }

    onQ1Change = (event) => {
        this.setState({q1: event.target.value})
    }

    onQ2Change = (event) => {
        this.setState({q2: event.target.value})
    }

    onQ3Change = (event) => {
        this.setState({q3: event.target.value})
    }

    onRegister = () => {
        alert('The registrations will begin shortly! Come back later.')
    }

    extCheck = () => {
        this.setState({external: !this.state.external})
    }

    ieeeCheck = () => {
        this.setState({ieee_member: !this.state.ieee_member})
    }

    mobValidator(){
        var mob_test = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/
        if (mob_test.test(this.state.mobile) || this.state.mobile === ''){
            return null
        }
        else{
            return 'error'
        }
    }

    emailValidator(){
        var email_test = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (email_test.test(this.state.email) || this.state.email === '')
        {
            return null
        }

        else{
            return 'error'
        }
    }
    
    render(){
        return(
            <div id='register'>
            <div id='reg-header'>
                <h3>Register for IEEE Techloop Hack, 2019</h3><br/><br/><br/>
                <h5>Enter your details</h5>
            </div>
            <Grid>
                <Row>
                    <Col>
                        <div id='form-holder'>
                            <form>
                                <FormGroup>
                                    <FormControl onChange={this.onNameChange} placeholder='Full Name' type="text" />                
                                </FormGroup>

                                <FormGroup validationState={this.emailValidator()}>
                                    <FormControl onChange={this.onEmailChange} placeholder='Email ID' type="text" />                
                                </FormGroup>

                                <FormGroup validationState={this.mobValidator()}>
                                    <FormControl onChange={this.onMobChange} placeholder='Mobile Number' type="text" />             
                                </FormGroup>
                                
                                <FormGroup>
                                    <Checkbox onClick={this.extCheck} readOnly>
                                    Check this box if you are an External Student
                                    </Checkbox>
                                </FormGroup>

                                <FormGroup>
                                    <FormControl onChange={this.onUniChange} placeholder='University / College Name' type="text" />                
                                </FormGroup>

                                <FormGroup>
                                    <FormControl disabled={this.state.external} onChange={this.onRegChange}  placeholder='Registration Number (Not for external students)' type="text" />                
                                </FormGroup>

                                <FormGroup>
                                    <FormControl onChange={this.onCityChange} placeholder='City' type="text" />                
                                </FormGroup>

                                <FormGroup>
                                    <Checkbox onClick={this.ieeeCheck} readOnly>
                                    Check this box if you are an IEEE Member
                                    </Checkbox>
                                </FormGroup>

                                <FormGroup>
                                    <FormControl disabled={!this.state.ieee_member} onChange={this.onIMChange} placeholder='IEEE Membership ID' type="text" />                
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel>Why do you want to attend ITH?</ControlLabel>
                                    <FormControl onChange={this.onQ1Change} placeholder='Enter your answer' type="text" />                
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel>Have you attended hack-a-thons before?<br/> If yes, list them.</ControlLabel>
                                    <FormControl onChange={this.onQ2Change} placeholder='Enter your answer' type="text" />                
                                </FormGroup>

                                <FormGroup>
                                    <ControlLabel>Kindly share details of your previous projects<br/> (if any).</ControlLabel>
                                    <FormControl onChange={this.onQ3Change} placeholder='Enter your answer' type="text" />                
                                </FormGroup>

                                <Button onClick={this.onRegister}>Register</Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}