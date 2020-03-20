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
    customer: {name: "", email: "", gender: "", payMethod: "", x: 0, y: 0},
    burgers: [],
    submitted: false,
    orders: {},
    order: { details: {x: 0, y:0} },
    lastOrder: 0
  },
  methods: {
    printString: function() {
      console.log(this.copiedMenu + menu);
    },
    /*markDone: function() {
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

    },*/
    getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      /*let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;*/
      let lastOrder = 0;
      return lastOrder + 1;
    },
    addOrder: function() {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
     /*let offset = {
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
      */
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

      this.customer.x = this.order.details.x;
      this.customer.y = this.order.details.y;

      this.submitted = true;

      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: this.order.details,
        orderItems: this.burgers,
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

    },
  },
});
