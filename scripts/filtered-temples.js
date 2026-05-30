const temples = [
{
templeName: "Aba Nigeria",
location: "Aba, Nigeria",
dedicated: "2005, August, 7",
area: 11500,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},
{
templeName: "Manti Utah",
location: "Manti, Utah, United States",
dedicated: "1888, May, 21",
area: 74792,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},
{
templeName: "Payson Utah",
location: "Payson, Utah, United States",
dedicated: "2015, June, 7",
area: 96630,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},
{
templeName: "Yigo Guam",
location: "Yigo, Guam",
dedicated: "2020, May, 2",
area: 6861,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},
{
templeName: "Washington D.C.",
location: "Kensington, Maryland, United States",
dedicated: "1974, November, 19",
area: 156558,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},
{
templeName: "Lima Perú",
location: "Lima, Perú",
dedicated: "1986, January, 10",
area: 9600,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},
{
templeName: "Mexico City Mexico",
location: "Mexico City, Mexico",
dedicated: "1983, December, 2",
area: 116642,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},

{
templeName: "Tegucigalpa",
location: "Tegucigapa, Honduras",
dedicated: "2013, March, 27",
area: 21184,
imageUrl: "https://media.ldscdn.org/images/media-library/temples/tegucigalpa-honduras/tegucigalpa-honduras-temple-lds-1075426-wallpaper.jpg?download=true"
},
{
templeName: "Quetzaltenango",
location: "Quetzaltenango, Guatemala",
dedicated: "2011, December, 11",
area: 27000,
imageUrl: "https://i.pinimg.com/736x/e0/b2/47/e0b2477fc493e0e067994966eb31ecb9--mormon-temples-lds-temples.jpg"
},
{
templeName: "Bogota",
location: "Bogota, Colombia",
dedicated: "1984, April, 24",
area: 53500,
imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/9d/b6/74/getlstd-property-photo.jpg?w=800&h=-1&s=1"
}
];

const container = document.querySelector(".gallery");

function displayTemples(filteredTemples) {

container.innerHTML = "";

filteredTemples.forEach(temple => {

const card = document.createElement("figure");

card.innerHTML = `
<img src="${temple.imageUrl}"
     alt="${temple.templeName}"
     loading="lazy">

<figcaption>
    <h3>${temple.templeName}</h3>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
</figcaption>
`;

container.appendChild(card);
});
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", () => {
displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
displayTemples(
temples.filter(t => parseInt(t.dedicated) < 1900)
);
});

document.querySelector("#new").addEventListener("click", () => {
displayTemples(
temples.filter(t => parseInt(t.dedicated) > 2000)
);
});

document.querySelector("#large").addEventListener("click", () => {
displayTemples(
temples.filter(t => t.area > 90000)
);
});

document.querySelector("#small").addEventListener("click", () => {
displayTemples(
temples.filter(t => t.area < 10000)
);
});

