import Link from 'next/link'
import React, { Component } from "react";
import styles from '../styles/IntroTalkForm.module.css'
import swal from 'sweetalert';
export default class Introtalkform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: "",
            emptyName: 0,
            inputEmail: "",
            emptyEmail: 0,
            isValidEmail: true,
            inputNumber: null,
            emptyNumber: 0
        }
    }

    inputName = (e) => {
        this.setState({ inputName: e.target.value, emptyName: 1 })
    }

    inputEmail = (e) => {
        this.setState({ inputEmail: e.target.value })
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            this.setState({ isValidEmail: true });

            console.log("isEmptyEmail in inbjh", this.state.inputEmail);
        }
        else {
            this.setState({ isValidEmail: false });
        }
    }

    inputPhoneNumber = (e) => {
        this.setState({ inputNumber: e.target.value, emptyNumber: 1 })
    }

    InputDay = (e) => {
        console.log(e);
    }

    subscribeForm = () => {


        this.setState({ isValidName: false, isValidEmail: false })
        if (this.state.inputName == "") {
            this.setState({ emptyName: 1 })
        }
        else {
            this.setState({ emptyName: 0 });
        }
        if (this.state.inputName == "") {
            this.setState({ emptyNumber: 1 })
        }
        else {
            this.setState({ emptyNumber: 0 });
        }
        if (this.state.inputEmail == "") {
            this.setState({ emptyEmail: 1 })
        }
        else {
            this.setState({ emptyEmail: 0 })
        }
        if (this.state.inputName !== "" && this.state.inputEmail !== "" && this.state.isValidEmail == true) {
            this.setState({ inputName: "", inputEmail: "", isValidEmail: true })
            // this.handleSubmit(this.state.inputEmail)
            swal({
                title: "Good job!",
                text: "You submitted the form!",
                icon: "success",
                button: "Aww yiss!",
            });
        }

    }
    // validate = (evt) => {
    //     var theEvent = evt || window.event;

    //     // Handle paste
    //     if (theEvent.type === 'paste') {
    //         key = event.clipboardData.getData('text/plain');
    //     } else {
    //         // Handle key press
    //         var key = theEvent.keyCode || theEvent.which;
    //         key = String.fromCharCode(key);
    //     }
    //     var regex = /[0-9]|\./;
    //     if (!regex.test(key)) {
    //         theEvent.returnValue = false;
    //         if (theEvent.preventDefault) theEvent.preventDefault();
    //     }
    // }
    render() {
        return (
            <div>
                {/* <h1>yooo this is introtalkform</h1> */}
                < div className={styles.outer_container} >
                    <div className={styles.inner_container1}>
                        <div className={styles.inner_container2}>
                            <div className={styles.inner_container3}>
                                <div className={styles.form_header}>
                                    <p>Join 1000 people who took the free</p>
                                    <p> introduction in the last week</p>
                                </div>
                                <div>
                                    <div className={styles.form_feilds}>
                                        <label>Name*</label>
                                        <input className={styles.input_form} onChange={this.inputName} value={this.state.inputName}></input>
                                        {(this.state.inputName == "" && this.state.emptyName == 1) ? <p className={styles.error_msg}>Please fill out this field.</p> : ""}

                                        <label>Email*</label>
                                        <input className={styles.input_form} onChange={this.inputEmail} value={this.state.inputEmail}></input>
                                        {(this.state.inputEmail == "" && this.state.emptyEmail) ? <p className={styles.error_msg}>Please fill out this field.</p> : this.state.isValidEmail == false ? <p className={styles.error_msg}>Please enter valid email.</p> : ""}

                                        <label>Phone*</label>
                                        <input className={styles.input_form} onChange={this.inputPhoneNumber} type="number" maxLength={10}  ></input>
                                        {(this.state.inputNumber == null && this.state.emptyNumber == 1) ? <p className={styles.error_msg}> Please fill out this field.</p> : ""}

                                        <label for="cars">Select*</label>

                                        <select name="cars" id="cars" className={styles.input_form} onChange={this.InputDay}>
                                            <option value="Monday">Monday</option>
                                            <option value="Tuesday">Tuesday</option>
                                            <option value="Wednesday">Wednesday</option>
                                            <option value="Thursday">Thursday</option>
                                        </select>
                                        <label for="cars">Select Time*</label>

                                        <select name="cars" id="cars" className={styles.input_form}>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>

                                        <label>Have you learnt Sudarshan Kriya*</label>
                                        <div className={styles.radio_buttons}>
                                            <input type="radio" id="age1" name="age" value="30"></input>
                                            <label for="age1">Yes</label>
                                            <input type="radio" id="age2" name="age" value="60"></input>
                                            <label for="age2">No</label>
                                        </div>


                                        <div className={styles.submit_button} onClick={this.subscribeForm}>
                                            {
                                                (this.state.inputName == "" || this.state.inputEmail == "" || this.state.inputNumber == null) ?
                                                    <button className={styles.disabled_submit_form} disabled >Sign up for the introductory talk now</button> : <button className={styles.submit_form} >Sign up for the introductory talk now</button>
                                            }

                                        </div>
                                    </div>
                                    <div className={styles.ending_text}>
                                        <p>By registering for the workshop, you’ll get a Whatsapp and Email invite with further</p>
                                        <p> instructions.</p>
                                        <p>We’ll never share your information with anybody. See our privacy policy.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div >
            </div >
        )
    }
}