import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';
class Navbar extends React.Component {
  logout = () => {
    localStorage.removeItem('user');
    this.props.dispatch(logoutUser());
  }
  render() {
    const { auth } = this.props;
    return (
      <nav className='nav'>
          <div className='left-div'>
            <img alt="logo" src="https://pbs.twimg.com/media/F1tzyteaEAArS_H?format=png&name=medium" style={{height:60,width:60}}/>
          </div>
          <div className='search-container'>
            <img alt="search-icon" src="https://cdn-icons-png.flaticon.com/128/149/149852.png" className='search-icon'/>
            <input placeholder='search' />
            <div className='search-results'>
              <ul>
                <li className='search-results-row'>
                  <img alt="user-dp" src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"/>
                  <span>Gaurav Khede</span>
                </li>
                <li className='search-results-row'>
                  <img alt="user-dp" src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"/>
                  <span> Gaurav khede</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='right-nav'>
            {auth.isLoggedin && (
              <div className='user'>
              <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="user-dp" id="user-dp"/>
              <span> {auth.user.name}</span>
            </div>
            )}
            <div className='nav-links'>
              <ul>
                {!auth.isLoggedin && (
                  <li>Log In</li>
                )}
                {auth.isLoggedin && (
                  <li onClick={this.logout}>Log Out</li>
                )}
                {!auth.isLoggedin && (
                  <li>Register</li>
                )}
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
function mapPropsToState(state) {
  return {
    auth: state.auth,
  }
}

export default connect(mapPropsToState)(Navbar);