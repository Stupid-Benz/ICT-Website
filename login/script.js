const inputs = document.querySelectorAll(".input");
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("id_password");
const username = document.getElementById("id_username");
const submit = document.getElementById("submit");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  if (type == "text") {
    this.className = "far fa-eye";
  } else {
    this.className = "far fa-eye-slash";
  }
});

function checkPassword() {
  const disabled = username.value == '' || password.value == '';
  submit.disabled = disabled;
  submit.style = (disabled) ? 'background-image: linear-gradient(to right, #ff584d, #ff6359, #ff8880)' : 'background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f)';
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
  input.addEventListener("keyup", checkPassword);
  input.value = "";
});