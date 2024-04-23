const d = new Date();
const year = d.getFullYear();

document.querySelector("#currentyear").textContent = year;
document.querySelector("#lastModified").innerHTML = `Last update: ${document.lastModified}`;