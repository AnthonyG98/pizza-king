import React from "react"
import pizzaMap from "../images/pizza-map.png"
import emailjs from "../../node_modules/emailjs-com"
const initialState = {
    name: '',
    email:'',
    phone:'', 
    message:'',
    nameError:'',
    emailError:'',
    phoneError:''
}

class ContactPg extends React.Component{
    constructor(){
        super()
        this.state = initialState
        this.handleChange = this.handleChange.bind(this);
        this.locationAnimation = this.locationAnimation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    validate = () => {
        let nameError ="";
        let emailError="";
        let phoneError="";
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const reg = /^\d+$/;
        
        if(this.state.name.length < 2){
            nameError = "Enter a valid name"
        }
        if(nameError){
            this.setState({ nameError })
            return false
        }
        if(this.state.phone.length < 10 || !this.state.phone.match(reg)){
            phoneError = "Enter a valid phone number"
        }
        if(phoneError){
            this.setState({ phoneError })
            return false
        }
        if(!this.state.email.match(re) || this.state.email < 10){
            emailError = "invalid email"
        }
        if(emailError){
            this.setState({ emailError })
            return false
        }
        return true
    }
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        const submitBtn = document.getElementById("submit");
        if(isValid){
            submitBtn.innerHTML= "Sent"
            this.setState(initialState);
        }
        emailjs.sendForm('service_ja5l08l', 'template_5kdp0zo', event.target, 'user_tF7OLHQ41f2A3l6UsEq8G')
    }
    locationAnimation(){
        const contactTop = document.querySelector(".location-container");
        const screenPosition = window.innerHeight;
        let bodyHeight = contactTop.getBoundingClientRect().top
        if(screenPosition > bodyHeight + 200){
            contactTop.style.left ="5%";
        }
    }
    render(){
        window.addEventListener ('scroll', this.locationAnimation);
        return(
            <div className="contact-container" id="contact" onScroll={this.locationAnimation}>
                <div className="contact-img-container">
                    <img src={pizzaMap} alt="map of pizza king" className="contact-img" />
                </div>
                <div className="location-container">
                    <div className="location-text-container">
                        <h1 className="location-text">Pizza King</h1>
                        <p>Located at 2500 Alondra Blvd, Compton, CA 90221</p>
                        <p>Place an order: (310) 638-0413</p>
                    </div>
                </div>
                <h1 className="contact-heading">Contact Us</h1>
                <form id="form" onSubmit={this.handleSubmit}>
                    <label className="label">Name</label>
                    <input 
                    name="name"
                    type="text" 
                    className="input" 
                    onChange={this.handleChange}
                    value={this.state.name}
                    />
                    <div className="test">{this.state.nameError}</div>
                    <label className="label">Email</label>
                    <input 
                    name="email"
                    className="input" 
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <div className="test">{this.state.emailError}</div>
                    <label className="label">Phone Number</label>
                    <input 
                    name="phone"
                    className="input"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.phone}
                    />
                    <div className="test">{this.state.phoneError}</div>
                    <label className="label">Message</label>
                    <textarea 
                    className="input" 
                    id="message" 
                    placeholder="type a message" 
                    name="message"
                    onChange={this.handleChange}
                    value={this.state.message}
                    ></textarea>
                    <button type="submit" id="submit" >Submit</button>
                </form>
            </div>
        )
    }
}
export default ContactPg