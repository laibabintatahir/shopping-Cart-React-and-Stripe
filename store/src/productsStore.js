//data.js
const productsArray = [
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        img:"https://i.pinimg.com/564x/ad/db/92/addb92b5161f4a62cc06e22dc923cb7a.jpg",
        title: "Pink heels",
        price: 9.99
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        img:"https://i.pinimg.com/564x/b0/1a/0c/b01a0c7090f14973de88c18fec82e965.jpg",
        title: "Red Heels",
        price: 39.99
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        img:"https://i.pinimg.com/564x/e6/2d/ef/e62deff7d447ecc4cee2d22763aa3471.jpg",
        title: "White Flats",
        price: 4.99
    },
    //admore items
];
//helper function
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };