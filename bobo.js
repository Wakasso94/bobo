let para = document.getElementById("text");
let btn = document.getElementById("btn");
let img_src = document.getElementById("img");

btn.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      img_src.setAttribute("src", url="2.png");
      para.innerHTML = data.value;
    });
});