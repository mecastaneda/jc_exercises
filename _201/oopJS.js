/**
 * [Constructor that will be the parent class]
 * @method BevergeContainer
 * @param  {[Number]}         liquidAmount [Oz]
 * @param  {[Boolean]}         hasEar [i.e. handle]
 * @param  {[String]}         material [The material that the container is made of]
 */
function BevergeContainer(liquidAmount, hasEar, material) {
  this.liquidAmount = liquidAmount;
  this.hasEar = hasEar;
  this.material = material;
  this.getLiquidAmount = function() {
    return liquidAmount;
  }
}


/** [A child class of BevergeContainer]
 *	@method Mug
 *	@param {[String]}  purpose [The purpose of this mug]
 */
function Mug(purpose) {
  /** [Returns a string ] */
  this.getPurpose = function() {
    return purpose;
  }
  // This will get the functionality of the parent Class
  BevergeContainer.call(this, 8, true, 'ceramic');
}

/** [A child class of Mug]
 *	@method CoffeeMug
 */
function CoffeMug() {
  // This will get the functionality of the parent Class (Mug)
  Mug.call(this, 'Drinking coffee');
}

var coffeeMug = new CoffeMug();
console.log(coffeeMug.getPurpose()); // functionality of the parent class
console.log(coffeeMug.getLiquidAmount()); // functionality of the parent of the parent class
console.log(coffeeMug.hasEar); // A property defined in the parent of the parent class

// Until now all of the functionality works great
// But if we add a prototype functionality to the BevergeContainer class,
// then the child objects have no way to access it:
BevergeContainer.prototype.break = function() {
  this.hasEar = false;
} // Will cause problems, as coffeMug cannot call break (coffeeMug.break())

// Also instace of does not work well:
console.log('coffeeMug instance of BevergeContainer?', coffeeMug instanceof BevergeContainer);

// So we fix these issues with:
CoffeMug.prototype = Object.create(BevergeContainer.prototype);

coffeeMug = new CoffeMug(); // No we just need to re-instantiate
coffeeMug.break(); // this works now
console.log(coffeeMug.hasEar); // this works as well
console.log('coffeeMug instance of BevergeContainer?', coffeeMug instanceof BevergeContainer); // :-)
