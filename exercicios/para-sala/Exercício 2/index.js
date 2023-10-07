class InvoiceItem {
    id;
    description;
    quantity;
    unityPrice;

    constructor(id, description, quantity, unityPrice) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.unityPrice = unityPrice;
    }
}

const newPurchase = new InvoiceItem(1, "Sabonete", 2, 1.5)

console.log(newPurchase);