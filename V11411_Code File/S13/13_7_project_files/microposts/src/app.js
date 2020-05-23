import { http } from "./http";
import { ui } from "./ui";

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

function submitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    // ES6 syntax. If the key is the same as the value, no need to specify it twice
    // Equivalent to: title: title, body: body
    const data = {
        title,
        body
    }

    // Create post
    http.post('http://localhost:3000/posts', data)
        .then(data => {
            ui.showAlert('Post added', 'alert alert-success');
            ui.clearFields();
            getPosts();
        })
        .catch(err => console.log(err));
}

function enableEdit(e) {
    if(e.target.parentElement.classList.contains('edit')) {
        // Enabled by HTML5 and the 'data' attribute. See ui.showPosts() function
        const id = e.target.parentElement.dataset.id;
        const body = e.target.parentElement.previousElementSibling.textContent;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

        const data = {
            id,
            title,
            body
        }
        ui.fillForm(data);
    }
    e.preventDefault();
}