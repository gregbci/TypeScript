//
//  This is a dummy class to test mixed ts / js module inclusions
//
class Greg {
   constructor() {
      this.name = 'Greg';
   }

   sayHello() {
      console.log(this.name + ' says hello from JavaScript');
   }
}

module.exports = Greg;  // ES5
//export default Greg;  // ES6
//export = Greg;

