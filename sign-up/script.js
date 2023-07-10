const inputs = document.querySelectorAll(".input");
const togglePassword = document.getElementById("togglePassword");
const toggleRetypePassword = document.getElementById("toggleRetypePassword");
const password = document.getElementById("id_password");
const retypePassword = document.getElementById("id_retype_password");
const submit = document.getElementById("submit");
const same = document.getElementById("same");
const name = document.getElementById("id_name");
const username = document.getElementById("id_username");
const pet = document.getElementsByName("pet");

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
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    if (type == "text") {
        this.className = 'far fa-eye';
    } else {
        this.className = 'far fa-eye-slash';
    }
})

toggleRetypePassword.addEventListener("click", function () {
    const type = retypePassword.getAttribute("type") === "password" ? "text" : "password";
    retypePassword.setAttribute("type", type);

    if (type == "text") {
        this.className = 'far fa-eye';
    } else {
        this.className = 'far fa-eye-slash';
    }
})

function checkPassword() {
    const disabled = password.value !== retypePassword.value || name.value == '' || username.value == '' || password.value == '' || retypePassword == '' || (username.value).length < 3 || (password.value).length < 8 || (retypePassword.value).length < 8;
    submit.disabled = disabled;
    submit.style = (disabled) ? 'background-image: linear-gradient(to right, #ff584d, #ff6359, #ff8880)' : 'background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f)';
    same.innerText = (password.value !== retypePassword.value) ? "*Passwords do not match" : "";
}

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
    input.addEventListener("keyup", checkPassword);
    input.value = "";
});