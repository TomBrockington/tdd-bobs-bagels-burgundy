

// these become variable 'capacity'
const smallBasket = 5;
const mediumBasket = 10;
const largeBasket = 15;

class Basket {

    // set to default
    constructor(capacity = smallBasket) {
        this.basket = []
        this.basketSize = capacity
        this.menu ={
            bagel: 2.99,
            brownie: 3.99,
            chocolateBagel: 4.99 
        }


    }

    getBasket() {
        return this.basket
    } 

    addItem(itemName, itemQuantity) {
        if (!(itemName in this.menu)){
            return 'not in menu'
        }
        
           else if (itemQuantity > 0) {
                const insideBasket = {
                    item: itemName,
                    quantity: itemQuantity,
                    price: this.menu.itemName
                }
                this.basket.push(insideBasket)
                return true
                
            }
        
        return "Cant add negative numbers"
    }

    removeItem(itemName) {
        for (let i = 0; i < this.basket.length; i++) {
            if (this.basket[i].item === itemName) {
                this.basket.splice(i, 1)
                return this.basket
            }
        }
        return "This item is not in the basket."
    }

    basketCapacity() {
        // reduce gets total of array
        const totalCapacity = this.basket.reduce((total, quantity) => { return total + quantity.quantity }, 0)
        if (totalCapacity > this.basketSize) 
            return "Basket full, Please choose a bigger basket."
        
    }

    priceChecker(itemName) {
        const fullMenu = MENU.GetMenu()
        for (const items in fullMenu)
            if (itemName === items) // dont need brackets
                return fullMenu[items] 
            
    }

    basketTotal() {
        let eachItem = []
        for (let i = 0; i < this.basket.length; i++) {
            eachItem.push(this.basket[i].quantity * this.basket[i].price)
        }
        const totalPrice = eachItem.reduce((total, quantity) => { return total + quantity }, 0)
        return ("£" + totalPrice)
    }

    variantTotal(variant) {
        let itemTotal = 0
        for (let i = 0; i < this.basket.length; i++) {
            if (this.basket[i].item === variant) {
                itemTotal++
            }
        }
        return itemTotal
    }
}


module.exports = Basket