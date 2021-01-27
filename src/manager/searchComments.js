const searchComments = (comments, postId, id, name, email, body) => {
    const filterByKey = (key, query, data) => data.filter(x => x[key] === query);
    let results = comments;
    if (postId) results = filterByKey("postId", postId, results);
    if (id) results = filterByKey("id", id, results);
    if (name) results = filterByKey("name", name, results);
    if (email) results = filterByKey("email", email, results);

    if (body) results = results.filter(x => x.body.indexOf(body) >= 0);

    return results;
}

module.exports = searchComments;