const github = new Github;
const ui = new UI;
const searchUser = document.getElementById('searchUser');

// Note: keyup looses the last character when typing too fast. Using input instead
searchUser.addEventListener('input', (e) => {

    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert

                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                }
            })
        console.log(userText);
    } else {
        // Clear profile
    }
})