class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    showPosts(posts) {
        let output = '';
        posts.forEach(post => {
           output += `
<div class="card mb-3">
    <div class="card-body">
        <h4 class="card-title">${post.title}</h4>
        <p class="card-text">${post.body}</p>
        <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fa fa-pencil"></i>
        </a>
        <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i>
        </a>
    </div>
</div>           
           `
        });
        this.post.innerHTML = output;
    }

    showAlert(message, className) {
        this.clearAlert();

        // Create a div
        const div = document.createElement('div');
        div.className = className;
        // Add test
        div.appendChild(document.createTextNode(message));
        // Insert div into the DOM

        // Get parent
        const container = document.querySelector('.postsContainer');
        // Get posts
        const posts = document.querySelector('#posts');
        // Insert the alert
        container.insertBefore(div, posts);

        setTimeout(() => {
            this.clearAlert()
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    // Fill form to edit
    fillForm(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;

        this.changeFormState('edit');
    }

    changeFormState(state) {
        if(state === 'edit') {
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';

            // Create a cancel button
            const button = document.createElement('button');
            button.className = 'post-cancel btn btn-light btn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));

            // Insert into the DOM

            // Get parent
            const cardForm = document.querySelector('.card-form');
            // Get the element to insert before
            const formEnd = document.querySelector('.form-end');
            // Insert the cancel button
            cardForm.insertBefore(button, formEnd);
        } else {
            this.postSubmit.textContent = 'Post it';
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';
            // Remove cancel button if it's there
            if (document.querySelector('.post-cancel')) {
                document.querySelector('.post-cancel').remove();
            }
            // Clear the id from the hidden field
            this.clearIdInput();
            // Clear the text fields
            this.clearFields();
        }
    }

    clearIdInput() {
        this.idInput.value = '';
    }
}

export const ui = new UI();