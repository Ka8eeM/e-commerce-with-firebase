import { IShoppingCartItem } from "./IShoppingCarItem";

export class ShoppingCart {

    constructor(public items: IShoppingCartItem[]) {
    }

    get getTotalCount() {
        let counter = 0;
        for (let productId in this.items) {
            counter += this.items[productId].quantity;
        }
        return counter;
    }

    get productids() {
        return Object.keys(this.items);
    }

    get totalItemsPrice(): number {
        let total = 0;
        for (const productid in this.items) {
            if (this.items[productid].quantity) {
                let price = this.items[productid].product.price as number;

                total += price;
            }
        }
        return total;
    }
}