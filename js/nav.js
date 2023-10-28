const nav = ["Home", "Delivery", "Catalog", "Contact"];

const links = ["index.html", "delivery.html", "catalog.html", "contacts.html"];

let navtext = '<ul class="flex">';

for (i = 0; i < nav.length; i++) {
  navtext += '<li><a href="' + links[i] + '">' + nav[i] + "</a></li>";
}

navtext += "</ul>";

document.getElementById("nav").innerHTML = navtext;
