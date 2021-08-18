const postSelector = async (event) => {
    event.preventDefault();
    const postId = document.getElementById('postRef').innerText;
    const postID = parseInt(postId)

    const response = await fetch(`/api/post/${postID}`, {
        method: 'DELETE',
        body: JSON.stringify({
            id: postID
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        console.log('not sure this work')
        alert(`post deleted`)
        document.location.replace('/dashboard');
    } else {
        alert('Failed to travel');
    }
}

document.querySelector('.deletePost').addEventListener('click', postSelector);