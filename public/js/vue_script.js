'use strict';
const socket = io();


/* Task 4- */
const mainObj = new Vue({
  el: '#main',
  data: {
    copiedMenu: menu, /* #burgers */
    //menuItems: [], /* #checked */
    name: "",
    email: "",
    /* street: "",
    number: "", */
    gender: "",
    payMethod: "",
    payment: [ /* #options */
      { value: 'kredit- eller bankkort'}, /*, value: 'kredit- eller bankkort' */
      { value: 'swish'}, /* , value: 'swish' */
      { value: 'faktura'}, /* , value: 'faktura' */
      { value: 'direktbetalning'} /*, value: 'direktbetalning' */
    ],
    customer: [], /* #order */
    order: [] /* #order */
  },
  methods: {
    printString: function() { /* #burgers */
      console.log(this.copiedMenu + menu);
    },
    markDone: function() {
      console.log("Clicked!");

      /*var info = document.getElementsByName('customerInfoForm');
      for (var i = 0; i < info.length; i++) {
        customer.push(info[i]);
      }*/

      this.customer.push(this.name);
      this.customer.push(this.email);
      //this.customer.push(this.gender);


      var gen = document.getElementsByName('gender');
      for (var i = 0; i < gen.length; i++) {
        if (gen[i].checked) {
          this.customer.push(this.gender);
        }
      }

      this.customer.push(this.payMethod);

      console.log("payMethod", this.payMethod);

      console.log("customer", this.customer);

      //console.log(order);

/*
      this.menuItem = [menuItem];
      this.name = name;
      this.email = email;
      this.gender = gender;
      this.payment = payment;
*/
      /* this.street = street; this.number = number; */


      /*
      var name = document.getElementById("fullname").value;
      var email = document.getElementById("email").value;
      var payment = document.getElementById("payment").value;
      var gender = document.getElementById("gender").value;

      this.customer = [name, email, payment, gender];

      console.log(customer);
      */

    },
  }
});

/* Messaging part */
const vm = new Vue({
  el: '#dots',
  data: {
    orders: {},
  },
  created: function() {
    /* When the page is loaded, get the current orders stored on the server.
     * (the server's code is in app.js) */
    socket.on('initialize', function(data) {
      this.orders = data.orders;
    }.bind(this));

    /* Whenever an addOrder is emitted by a client (every open map.html is
     * a client), the server responds with a currentQueue message (this is
     * defined in app.js). The message's data payload is the entire updated
     * order object. Here we define what the client should do with it.
     * Spoiler: We replace the current local order object with the new one. */
    socket.on('currentQueue', function(data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        },
        orderItems: ['Beans', 'Curry'],
      });
    },
  },
});





/* gammalt Task 4:

const burg = new Vue({
  el: '#burgers',
  data: {
    copiedMenu: menu,
  },
  methods: {
    printString: function () {
      console.log(this.copiedMenu + menu);
  }
  }
})


const checked = new Vue({
  el: "#check",
  data: {
    checkedBurgers: []
  }
})


const pay = new Vue({
  el: "#payment",
  data: {
    options: [
      { text: 'kredit- eller bankkort', value: 'kredit- eller bankkort' },
      { text: 'swish', value: 'swish' },
      { text: 'faktura', value: 'faktura' },
      { text: 'direktbetalning', value: 'direktbetalning' }
    ]
  }
})



let customer = [];
let order = [];
var orderInfo = {customer: [], order: []};

const orderButton = new Vue({
  el: "#order",
  data: orderInfo,
  methods: {
    markDone: function(){
      console.log("Button clicked!");

      var name = document.getElementById("fullname").value;
      var email = document.getElementById("email").value;
      //var street = document.getElementById("street").value;
      //var house = document.getElementById("house").value;
      var payment = document.getElementById("payment").value;
      var gender = document.getElementById("gender").value;

      //let customer = [name, email, street, house, payment, gender]
      this.customer = [name, email, payment, gender]; //street, house,

      console.log(this.customer);

      if (document.getElementById("eldCheck").checked) {
        this.order.push("Eldburgaren");
      }
      if (document.getElementById("kalkCheck").checked) {
        this.order.push("Kalkonburgaren");
      }
      if (document.getElementById("ostCheck").checked) {
        this.order.push("Dubbelburgare med ost");
      }
      if (document.getElementById("fiskCheck").checked) {
        this.order.push("Fiskburgaren");
      }
      if (document.getElementById("beanCheck").checked) {
        this.order.push("Bönburgaren");
      }

      console.log(this.order);

    }
  }
})
 */


/* gammalt, buggigt: */
/*const eldVue = new Vue({
  el: '#eld',
  data: {
    eldInfo: eld.info(),
  }
})

const kalkVue = new Vue({
  el: '#kalkon',
  data: {
    kalkonInfo: kalkon.info(),
  }
})

const ostVue = new Vue({
	el: '#ost',
  data: {
  	ostInfo: ost.info(),
  }
})

const fiskVue = new Vue({
	el: '#fisk',
  data: {
  	fiskInfo: fisk.info(),
  }
})

const beansVue = new Vue({
	el: '#beans',
  data: {
  	beansInfo: beans.info(),
  }
})*/
