import React from 'react';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        // this.emailInputRef = React.createRef();
        // this.passwordInputRef = React.createRef();
        this.state= {
            email: '',
            password: ''
        }
    }
    handleSubmitButton = (e) => {
        e.preventDefault();
        // console.log("This.emailInputRef" , this.emailInputRef);
        // console.log("This.passwordInputRef ",this.passwordInputRef);
        console.log(this.state," is the State");
    }
    handleEmailChange = (e) => {
        this.setState({
            email:e.target.value
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
            password:e.target.value
        })
    }
    render() {
        return (
            <form className='login-form'>
                <span className='login-signup-header'>Log In</span>
                <div className='field'>
                    <input placeholder='Email' type='email' onChange={this.handleEmailChange} required value={this.state.email}/>
                </div>
                <div className='field'>
                <input placeholder='Password' type='password' onChange={this.handlePasswordChange} required value={this.state.password}/>
                </div>
                <div className='field'>
                    <button onClick={this.handleSubmitButton}>Log In</button>
                </div>
            </form>
        );
    }
}

export default LogIn;