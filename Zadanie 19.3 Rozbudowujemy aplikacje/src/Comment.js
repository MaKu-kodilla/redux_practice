import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment}) => 
<li>
{text}
<span>votes: {votes}</span>
<button onClick={() => thumbUpComment(id)}>ThumbUp!</button>
<button onClick={() => thumbDownComment(id)}>ThumbDown!</button>
<button onClick={() => removeComment(id)}>Remove comment</button>
<button onClick={() => editComment(id, prompt('Edit this comment'))}>Edit comment</button>
</li>

export default Comment;