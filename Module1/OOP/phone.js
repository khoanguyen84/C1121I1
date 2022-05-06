class Phone{
    constructor(){
        // this.draff = [];
        this.sent = [];
        this.recive = []
    }
    useBattery(battery){
        this.battery = battery;
    }
    getStatus(){
        return this.battery.enery >0;
    }
    // composeMessage(content){
    //     this.draff.push(content);
    // }
    // sendMessage(recivePhone){
    //     let message = this.draff.pop();
    //     this.sent.push(message);
    //     recivePhone.recive.push(message);
    //     this.battery.incrementEnery();
    // }
    sendMessage(message, recivePhone){
        // let message = this.draff.pop();
        this.sent.push(message);
        recivePhone.recive.push(message);
        this.battery.incrementEnery();
    }
    showEnery(){
        return this.battery.getEnery();
    }
}

class Battery{
    constructor(enery){
        this.enery = enery;
    }
    incrementEnery(){
        if(this.enery - 1 == 0){
            this.enery = 0;
        }
        else{
            this.enery -= 1;
        }
    }
    getEnery(){
        return this.enery;
    }
    charge(value){
        if(this.enery + value > 100)
            this.enery = 100;
        else{
            this.enery += value;
        }
    }
}

let pin1 = new Battery(5);
let iphone6 = new Phone();
iphone6.useBattery(pin1);
let pin2 = new Battery(5);
let iphone7 = new Phone();
iphone7.useBattery(pin2);
console.log(iphone6.showEnery(), iphone7.showEnery())
// iphone6.composeMessage("Nhậu không?")
iphone6.sendMessage("Nhậu không?", iphone7);
console.log(iphone6.draff, iphone6.sent, iphone6.recive);
console.log(iphone7.draff, iphone7.sent, iphone7.recive);
// iphone7.composeMessage("Hết lúa");
iphone7.sendMessage("Hết lúa", iphone6);
console.log(iphone6.draff, iphone6.sent, iphone6.recive);
console.log(iphone7.draff, iphone7.sent, iphone7.recive);
console.log(iphone6.showEnery(), iphone7.showEnery())