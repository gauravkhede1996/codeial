import React, { Component } from 'react';

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post.id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                  alt="user-pic"
                />
                <div>
                  <span className="post-author">{post.userId}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.body}</div>

              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                    alt="likes-icon"
                  />
                  <span>3</span>
                </div>

                <div className="post-comments-icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/13/13673.png"
                    alt="comments-icon"
                  />
                  <span>2</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="Start typing a comment" />
              </div>

              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Bill</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-likes">22</span>
                  </div>

                  <div className="post-comment-content">Random comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostsList;
