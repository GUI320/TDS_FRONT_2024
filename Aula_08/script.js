const body = window.document.getElementsByTagName("body")[0];

const h1 = window.document.createElement("h1");

h1.innerHTML = "Olá Mundo!";

const ol = window.document.createElement("ol");
const li = window.document.createElement("li");

li.innerHTML = "Guilherme"

ol.appendChild(li)

body.appendChild(h1)
body.appendChild(h1);
