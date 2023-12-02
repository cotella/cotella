class Product{
    imgLink;
    productName;
    productPrice; 


    constructor (link,name,price){
        this.imgLink = link;
        this.imgName = name;
        this.imgPrice = price;
        const container = document.createElement("div");
        container.className = 'card';
        container.innerHTML = 
        `
            <img src="${this.imgLinkLink}">
            <h4>${this.productName}</h4>
            <h5>${this.productPrice}</h5>
            <button>купить</button>
        `
        document.body.append(container);
    }
}





new Product ("https://risunki-dlja-srisovki.ru/wp-content/uploads/jel-primo2.png","gachiMen",20);