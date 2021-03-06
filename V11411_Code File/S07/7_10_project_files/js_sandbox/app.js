document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApiData);

function getText() {
  fetch('test.txt')
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        console.log(data);
        document.getElementById('output')
            .innerHTML = data;
      })
      .catch(function (error) {
        console.log(error);
      });
}

function getJson() {
  fetch('posts.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let output = '';
        data.forEach(function (post) {
          output += `<li>${post.title}</li>`;
        });
        document.getElementById('output')
            .innerHTML = output;
      })
      .catch(function (error) {
        console.log(error);
      });
}

function getApiData() {
  fetch('https://api.github.com/users')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let output = '';
        data.forEach(function (user) {
          output += `<li>${user.login}</li>`;
        });
        document.getElementById('output')
            .innerHTML = output;
      })
      .catch(function (error) {
        console.log(error);
      });
}