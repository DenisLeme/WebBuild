import React, { useState, useEffect } from 'react';

import Markdown from 'markdown-to-jsx';


function GetAllPosts(props) {
    const [post, setPost] = useState('');

    useEffect(() => {
        
        import(`../markdown/${props.name}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <div className="container">
            <Markdown>
                {post}
            </Markdown>
        </div>
    );
}

export default GetAllPosts;