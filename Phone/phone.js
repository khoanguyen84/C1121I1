class Phone {
    constructor() {
        this.sent = [];
        this.recive = [];
        this.state = false;
    }
    turnOn() {
        this.state = true;
    }
    turnOff() {
        this.state = false;
    }
    getState() {
        return this.state;
    }
    useBattery(battery) {
        this.battery = battery;
    }
    getStatus() {
        return this.battery.enery > 0;
    }
    sendMessage(message, recivePhone) {
        this.sent.push(message);
        recivePhone.recive.push(message);
        this.battery.incrementEnery();
    }
    showEnery() {
        return this.battery.getEnery();
    }
}

class Battery {
    constructor(enery) {
        this.enery = enery;
    }
    incrementEnery() {
        if (this.enery - 1 == 0) {
            this.enery = 0;
        }
        else {
            this.enery -= 1;
        }
    }
    getEnery() {
        return this.enery;
    }
    charge(value) {
        if (this.enery + value > 100)
            this.enery = 100;
        else {
            this.enery += value;
        }
    }
}

const isIPhone6 = "iphone6";
const isIPhone7 = "iphone7";
let iphone6 = new Phone();
let iphone7 = new Phone();

function setup() {
    let pin1 = new Battery(55);
    iphone6.useBattery(pin1);
    let pin2 = new Battery(50);
    iphone7.useBattery(pin2);
    iphone6.turnOn();
    iphone7.turnOn();
    checkState(isIPhone6);
    checkState(isIPhone7);
}

function checkState(type) {
    switch (type) {
        case isIPhone6: {
            switchIP6(!iphone6.getState())
            break;
        }
        case isIPhone7: {
            switchIP7(!iphone7.getState())
            break;
        }
    }
}

function power(type) {
    switch (type) {
        case isIPhone6: {
            let ip6 = document.getElementById("powerIP6");
            switchIP6(ip6.innerText == "On");
            break;
        }
        case isIPhone7: {
            let ip7 = document.getElementById("powerIP7");
            switchIP7(ip7.innerText == "On");
            break;
        }
    }
}

function sendMessage(type){
    switch (type) {
        case isIPhone6: {
            let msg = document.getElementById("msgIP6").value;
            if(msg == null || msg == ""){
                alert("Message is empty")
                return;
            }
            iphone6.sendMessage(msg, iphone7);
            let inboxIP7 = document.getElementById("inboxIP7");
            inboxIP7.innerHTML = "";
            for(let msg of iphone7.recive){
                inboxIP7.innerHTML += `<li>${msg}</li>`
            }
            document.getElementById("msgIP6").value = "";
            document.getElementById("eneryIP6").innerText = `${iphone6.showEnery()}%`
            break;
        }
        case isIPhone7: {
            let msg = document.getElementById("msgIP7").value;
            if(msg == null || msg == ""){
                alert("Message is empty")
                return;
            }
            iphone7.sendMessage(msg, iphone6);

            let inboxIP6 = document.getElementById("inboxIP6");
            inboxIP6.innerHTML = "";
            for(let msg of iphone6.recive){
                inboxIP6.innerHTML += `<li>${msg}</li>`
            }
            document.getElementById("msgIP7").value = "";
            document.getElementById("eneryIP7").innerText = `${iphone7.showEnery()}%`
            break;
        }
    }
}

function switchIP6(status) {
    status ? iphone6.turnOn() : iphone6.turnOff();
    document.getElementById("sendIP6").disabled = status;
    document.getElementById("msgIP6").disabled = status;
    document.getElementById("eneryIP6").innerText = !status ? `${iphone6.showEnery()}%` : "0%";
    document.getElementById("powerIP6").innerText = status ? "Off" : "On";
}

function switchIP7(status) {
    status ? iphone7.turnOn() : iphone7.turnOff();
    document.getElementById("sendIP7").disabled = status;
    document.getElementById("msgIP7").disabled = status;
    document.getElementById("eneryIP7").innerText = !status ? `${iphone7.showEnery()}%` : "0%";
    document.getElementById("powerIP7").innerText = status ? "Off" : "On";
}

(function () {
    setup();
})();