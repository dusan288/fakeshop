class FakeShop {
    constructor () {
        this.cartService = new CartService()
        const form = document.getElementById('item-form')
        form.addEventListener('submit', this.submitItemForm)
        const printBtn = document.getElementById('btn-print')
        printBtn.addEventListener('click', this.printCartBtn)
        const sortItemsBtnAsc = document.getElementById('btn-sort-asc')
        sortItemsBtnAsc.addEventListener('click', this.sortItemsAsc)
        const sortItemsBtnDsc = document.getElementById('btn-sort-dsc')
        sortItemsBtnDsc.addEventListener('click', this.sortItemsDsc)
    }

    submitItemForm = (event) => {
        event.preventDefault();
        const itemName = document.getElementById('product-name').value
        const itemPrice = parseFloat(document.getElementById('product-price').value)
        this.cartService.addItem(new Item(itemName, itemPrice))
    }

    printCartBtn = (event) => {
        this.cartService.printCart()
    }

    sortItemsAsc = (event) => {
        this.cartService.sortItemsByPriceAsc()
        this.cartService.printCart()
    }

    sortItemsDsc = (event) => {
        this.cartService.sortItemsByPriceDsc()
        this.cartService.printCart()
    }

}

class Item {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}
class CartItem extends Item {
    constructor(quantity, item) {
        super(item.name, item.price)
        this.qty = quantity
    }
}




//const app = new TodoApp()
const fakeShop = new FakeShop()
fakeShop.cartService.printCartToConsole()
let watch = new Item('Smart Watch', 199.99)
fakeShop.cartService.addItem(watch)
fakeShop.cartService.addItem({name: "Gum", price: 1.99})
console.log('Item SmartWatch, and Gum added:')
fakeShop.cartService.printCartToConsole()

fakeShop.cartService.removeItem(watch)
console.log('Item SmartWatch removed:')
fakeShop.cartService.printCartToConsole()

fakeShop.cartService.removeItem({name: "T-Shirt", price: 10.99})
console.log('Item T-Shirt removed:')
fakeShop.cartService.printCartToConsole()

fakeShop.cartService.sortItemsByPriceAsc();
console.log('Items sorted in ASC order by price:')
fakeShop.cartService.printCartToConsole()

fakeShop.cartService.sortItemsByPriceDsc()
console.log('Items sorted in DSC order by price:')
fakeShop.cartService.printCartToConsole()