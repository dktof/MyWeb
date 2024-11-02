// JavaScript code
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('images');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";                 
        }
    }
}






  const body = document.querySelector("body"),
    toggle = document.querySelector(".toggle");
  let getMode = localStorage.getItem("mode");
  if (getMode && getMode === "dark") {
    body.classList.add("dark");
    toggle.classList.add("active");
  }
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (!body.classList.contains("dark")) {
      return localStorage.setItem("mode", "light");
    }
    localStorage.setItem("mode", "dark");
  });
  toggle.addEventListener("click", () => toggle.classList.toggle("active"));
