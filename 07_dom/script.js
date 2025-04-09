let ads = [
    {
        title: "Skoda octavia 2014",
        price: 9950,
        image: "https://i.auto-bild.de/ir_img/1/1/5/7/9/0/3/62ee2a43f8b0fb2b.jpg"
    },
    {
        title: "Audi A4",
        price: 8000,
        image: "https://www.autoscout24.de/cms-content-assets/3B9Y6H0d0IKW0ME1vvMYED-6c735012b9f221707af8eb7bf297c004-Audi-A4-2008-1280-0b-1100.jpg"
    }
];

let productsElement = document.getElementById("products");

for (let ad in ads) {
    productsElement.innerHTML += ads[ad]["title"] + "  " + ads[ad]["price"] + "  " + ads[ad]["image"] + "<br/>";
}
