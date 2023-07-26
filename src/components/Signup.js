import React from 'react';
import { connect } from 'react-redux'
import { signup, startSignup } from '../actions/auth';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            name: '',
            confirmPassword:'',
        }
    }
    handleInputChange=(field, value)=>{
        this.setState({
            [field]: value,
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        const { email, password, confirmPassword, name} = this.state;
        if( email && password && confirmPassword && name) {
            this.props.dispatch(startSignup());
            this.props.dispatch(signup(email, password, confirmPassword, name));
        }
    }
    render() {
        const {inProgress, error} = this.props.auth;
        return (
            <form className='login-form'>
                <span className='login-signup-header'>Sign Up</span>
                {error && <div className='alert error-dailog'>{error}</div>}
                <div className='field'>
                    <input placeholder='Email' type='email' onChange={(e)=> this.handleInputChange('email',e.target.value) } required value={this.state.email}/>
                </div>
                <div className='field'>
                <input placeholder='Password' type='password' onChange={(e)=> this.handleInputChange('password',e.target.value) } required value={this.state.password}/>
                </div>
                <div className='field'>
                <input placeholder='confirm-password' type='text' onChange={(e)=> this.handleInputChange('confirmPassword',e.target.value) } required value={this.state.confirmPassword}/>
                </div>
                <div className='field'>
                <input placeholder='name' type='text' onChange={(e)=> this.handleInputChange('name',e.target.value) } required value={this.state.name}/>
                </div>
                <div className='field'>
                    {inProgress? <button onClick={this.onFormSubmit} disabled={inProgress}>Signing Up...</button>: <button onClick={this.onFormSubmit} >Log In</button>}
                </div>
            </form>
        );
    }
}

const mapStateToProps = ({auth}) => ({
    auth,
})

export default connect(mapStateToProps)(Signup);