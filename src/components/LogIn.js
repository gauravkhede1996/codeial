import React from 'react';
import { login } from '../actions/auth';
import { connect } from 'react-redux';

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
        const {email, password} = this.state;
        if( email && password ) {
        this.props.dispatch(login(email,password));
        }
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
        const {error, inProgress } = this.props.auth;
        return (
            <form className='login-form'>
                <span className='login-signup-header'>Log In</span>
                {error && <div className='alert error-dailog'>{error}</div>}
                <div className='field'>
                    <input placeholder='Email' type='email' onChange={this.handleEmailChange} required value={this.state.email}/>
                </div>
                <div className='field'>
                <input placeholder='Password' type='password' onChange={this.handlePasswordChange} required value={this.state.password}/>
                </div>
                <div className='field'>
                    {inProgress? <button onClick={this.handleSubmitButton} disabled={inProgress}>Logging In...</button>: <button onClick={this.handleSubmitButton} >Log In</button>}
                </div>
            </form>
        );
    }
}
function mapStateToProps (state) {
    return {
        auth:state.auth,
    }
}
export default connect(mapStateToProps)(LogIn);