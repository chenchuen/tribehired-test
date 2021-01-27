const express = require('express');
const getRequest = require('./util/apiRequest');
const totalComments = require('./manager/totalComments');
const searchComments = require('./manager/searchComments');

const app = express();

app.get('/question1', async (req, res) => {
    const posts = await getRequest("posts");
    const comments = await getRequest("comments");

    let response = [];
    posts.map(({ id, title, body}) => {
        response.push({
            post_id: id,
            post_title: title,
            post_body: body,
            total_number_of_comments: totalComments(comments, id)
        });
    });

    response.sort((a, b) => { 
        a.total_number_of_comments > b.total_number_of_comments
    })

    res.send(response);
})

app.get('/question2', async (req, res) => {
    const { postId, id, name, email, body = "" } = req?.query || { };

    const parsedPostId = postId ? Number(postId) : postId;
    const parsedId = id ? Number(id) : id;
    
    const comments = await getRequest("comments");
    const response = searchComments(comments, parsedPostId, parsedId, name, email, body)
    res.send(response);
})

const server = app.listen(8081, () => {
    const host = server.address().address
    const port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})