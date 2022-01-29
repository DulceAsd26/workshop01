/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const url = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.querySelector("#app");
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN",{
        style: "currency",
        currency: "USD",
    }).format(price)
    return newPrice;
};
//web api
window
.fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convertirla en JSON
.then(respuesta => respuesta.json())
//JSON -> Data -> Renderizar info browser
.then((responseJson) => {
    const todosLosItems = [];
    responseJson.data.forEach((item) => {
        //crear imagen
        const image = document.createElement('img');
        image.className = 
        "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
        //URL de la imagen
        image.src = `${baseUrl}${item.image}`;
        
        //crear titulo 
        const title = document.createElement("h2");
        title.className = "text-lg";
        title.textContent = item.name;
        
        //crear precio
        const price = document.createElement("div");
        price.className = "text-gray-600";
        price.textContent = formatPrice(item.price);

        const priceTitle = document.createElement("div");
        priceTitle.className = "text-center md:text-left";
        priceTitle.appendChild(title);
        priceTitle.appendChild(price);
        
        const card = document.createElement("div");
        card.className = "md:flex bg-white rounded-lg p-8 hover:bg-gray-300";
        card.appendChild(image);
        card.appendChild(priceTitle);

        todosLosItems.push(card);

    });
    appNode.append(...todosLosItems);

})
