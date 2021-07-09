class CartService {
    constructor() {
        const tempItem1 = new Item('Shoe', 29.99)
        const tempItem2 = new Item('T-Shirt', 10.99)
        const tempCartItem1 = new CartItem(1, tempItem1)
        const tempCartItem2 = new CartItem(2, tempItem2)

        this.items = [
            tempCartItem1,
            tempCartItem2
        ] 
    }
    fetchAllItems = () => {
        return this.items 
    }
    printCart = () => {
        const itemList = document.getElementById('item-list')
        itemList.innerHTML = ''
        this.items.forEach(item => {
            itemList.innerHTML += '<li> Quantity: <b>'
                                  + item.qty 
                                  +'</b> Item name: <b>'
                                  + item.name
                                  + ' </b>Item price: <b>' 
                                  + item.price 
                                  + '</b>  <button onclick=\'fakeShop.cartService.RemoveItemByName("'
                                  +item.name
                                  +'")\'>'
                                  + 'Remove</button></li>'
        })
        itemList.innerHTML += '</ul>'
    }
    printCartToConsole = () => {
        this.items.forEach(item => console.log(item))
    }
    getItemIndex = (item) => {
        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i].name == item.name) {
                return i;
            }
        }
        return null
    }
    addItem = (item) => {
        if(this.getItemIndex(item) === null) {
            //new item detected, create new cartItem
            const newCartItem = new CartItem(1, item)
            //insert new item into this.items list
            this.items.push(newCartItem)
        }
        else {
            //Item exists on this.items list, increment qty field
            let index = this.getItemIndex(item)
            let tempCartItem = {}
            tempCartItem = this.items[index]
            tempCartItem.qty++
            this.items[index] = tempCartItem

        }
        //display changes:
        this.printCart()
    }

    removeItem = (item) => {
        let tempCart = [] 
        this.items.forEach(cartItem => {
            if(cartItem.name == item.name) {
                if(cartItem.qty > 1) {
                    //let tempItem = new Item(cartItem.name, cartItem.price)
                    let tempCartItem = new CartItem(cartItem.qty -1, item)
                    tempCart.push(tempCartItem);
                   /* tempCart.push({
                        name: cartItem.name, 
                        price: cartItem.price,
                         qty: cartItem.qty -1 })
                         */
                }
            } else {
                tempCart.push(cartItem)
            }
        })
        this.items = tempCart;
         //display changes:
         this.printCart()
    }
    RemoveItemByName = (name) => {
        let tempCart = [] 
        this.items.forEach(cartItem => {
            if(cartItem.name == name) {
                if(cartItem.qty > 1) {
                    //let tempItem = new Item(cartItem.name, cartItem.price)
                    let tempCartItem = new CartItem(cartItem.qty -1,
                         {name: cartItem.name, price: cartItem.price})
                    tempCart.push(tempCartItem);
                   /* tempCart.push({
                        name: cartItem.name, 
                        price: cartItem.price,
                         qty: cartItem.qty -1 })
                         */
                }
            } else {
                tempCart.push(cartItem)
            }
        })
        this.items = tempCart;
         //display changes:
         this.printCart()
    }

    sortItemsByPriceAsc = () => {
        let tempEl
        for(let i = 0; i < this.items.length; i++) {
            let minEl = this.items[i]
            for(let j = i+1; j < this.items.length; j++) {
                if(this.items[j].price < minEl.price) {
                    minEl = this.items[j]
                    tempEl = this.items[i]
                    this.items[i] = this.items[j]
                    this.items[j] = tempEl
                }
            }   
        }

    }

    sortItemsByPriceDsc = () => {
        let tempEl
        for(let i = 0; i < this.items.length; i++) {
            let maxEl = this.items[i]
            for(let j = i+1; j < this.items.length; j++) {
                if(this.items[j].price > maxEl.price) {
                    maxEl = this.items[j]
                    tempEl = this.items[i]
                    this.items[i] = this.items[j]
                    this.items[j] = tempEl
                }
            }   
        }
    }

}