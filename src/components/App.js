
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './Home';
import Navbar from './Navbar';
import PageNotFound from './PageNotFound';
import { fetchPosts } from '../actions/posts';
import LogIn from './LogIn';
import Signup from './Signup';
import { authenticateUser } from '../actions/auth';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user," is the user");
    if ( user ) {
      this.props.dispatch(authenticateUser({
        email:user.email,
        _id:user._id,
        name: user.name,
        password: user.password,
      }))
    }
    console.log(this.props);
  }
  render() {
    console.log("PROPS", this.props);
    const { posts } = this.props;
    return (
      <Router>
      <div>
        <Navbar />
        {/* <PostsList posts={posts} /> */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/logIn">LogIn</Link></li>
          <li><Link to="/signUp">SignUp</Link></li>
        </ul>
        <Routes>
        <Route exact path="/" element={<Home posts={posts}/>} />
        <Route path="/login/*" element={<LogIn />} />
        <Route path="/signUp" element= {<Signup/>} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}
App.propTypes = {
  posts: PropTypes.array.isRequired,
}
export default connect(mapStateToProps)(App);
// https://pbs.twimg.com/media/F1tzyteaEAArS_H?format=png&name=medium

