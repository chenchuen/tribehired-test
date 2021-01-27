const totalComments = (comments, curPostId) => {
    const posts = comments.filter(post => post.postId === curPostId);
    return posts.length;
}

module.exports = totalComments;