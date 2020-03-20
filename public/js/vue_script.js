'use strict';
const socket = io();


const mainObj = new Vue({
  el: '#main',
  data: {
    copiedMenu: menu,
    name: "",
    email: "",
    /* street: "",
    number: "", */
    gender: "",
    payMethod: "",
    payment: [ /* #options */
      { value: 'kredit- eller bankkort'},
      { value: 'swish'},
      { value: 'faktura'},
      { value: 'direktbetalning'}
    ],
    customer: {name: "", email: "", gender: "", payMethod: ""},
    burgers: [],
    submitted: false,
    orders: {},
    order: { details: {x: 0, y:0} }
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
    printString: function() {
      console.log(this.copiedMenu + menu);
    },
    markDone: function() {
      console.log("Clicked!");

      this.customer.name = this.name;
      this.customer.email = this.email;

      var gen = document.getElementsByName('gender');
      for (var i = 0; i < gen.length; i++) {
        if (gen[i].checked) {
          this.customer.gender = this.gender;
        }
      }

      this.customer.payMethod = this.payMethod;

      menu.forEach(item => {
        if (item.checked) {
          this.burgers.push(item.name);
        }
      })

      this.submitted = true;

    },
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

    displayOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };

      this.order.details.x = event.clientX - 10 - offset.x;
      this.order.details.y = event.clientY - 10 - offset.y;

      console.log(this.order.details.x);
      console.log(this.order.details.y);

      /*socket.emit('displayOrder', {
        orderId: this.getNext(),
        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        },
        orderItems: ['Beans', 'Curry'],
      });
      */
      //console.log(this.orders);
    },
  },
});
