const form = document.querySelector("form");
const input = document.querySelector("input");
const submit = document.querySelector(".submit");
const label = document.querySelector("label")
const invalid = document.querySelector('.invalid')



submit.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();

    if (isEmail(inputValue)) {
        label.style.visibility = ("hidden")
        invalid.style.visibility = ("hidden")
    } else {
        label.style.visibility = ("visible")
        invalid.style.visibility = ("visible")
    }

});


function isEmail(a) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a)
}