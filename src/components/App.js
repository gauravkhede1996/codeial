
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/posts';
import PostsList from './PostsList';
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  
  render() {
    console.log("PROPS", this.props);
    const { posts } = this.props;
    return (
      <div>
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
            <div className='user'>
              <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="user-dp" id="user-dp"/>
              <span> Gaurav Khede</span>
            </div>
            <div className='nav-links'>
              <ul>
                <li>Log In</li>
                <li>Log Out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
        <PostsList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}
App.propTypes = {
  posts: PropTypes.string.isRequired,
}
export default connect(mapStateToProps)(App);
// https://pbs.twimg.com/media/F1tzyteaEAArS_H?format=png&name=medium

