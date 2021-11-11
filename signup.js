let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let username = document.getElementById("username");
let mobile = document.getElementById("mobile");
let desc = document.getElementById("desc");
let submit = document.getElementById("submit");

function Signup() {
  let data = {
    name: name.value,
    email: email.value,
    password: password.value,
    username: username.value,
    mobile: mobile.value,
    description: desc.value,
  };
  fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((d) => {
      alert(d.message);
    })
    .catch((err) => {
      console.log(err);
    });
}

submit.addEventListener("click", () => {
  Signup();
});
