import React from 'react';
import PostsList from './PostsList';
function Home(props) {
    console.log(props," Props");
    return (
        <div>
            <PostsList {...props} />
        </div>
    );
}

export default Home;