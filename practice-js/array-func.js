let brands = []; //brands index is empty
let brand_1 = "apple";
brands.push(brand_1);
console.log(brands); //brands at index 0
brand_1 = "Samsung";
brands[1] = brand_1; //either this or above push methos can be used to add elements to an array
console.log(brands);
brand_1 = "Philips";
//pushing at the top of an array using unshift
brands.unshift(brand_1);
console.log(brands);

/*let size = brands.length;
brands[size] = "Hwawei"; //this methos also adds element to the end of the array
console.log(brands);

let first = brands.shift(); //remove top element
let last = brands.pop(); //removes the last element
console.log(brands);
delete brands[1]; //deltes the element but craetes an empty slot
console.log(brands)
//brands.splice(1, 1); //deletes element without creating an empty slot
//here 1st no. is index and 2nd is count
console.log(brands);
*/

let result = brands.slice(0, 2);
console.log(result);

let product = {
  name: "iphone12",
  price: 128000,
  stock: 5,
  sold: 10,
  brand: "apple",
  Store: "evo store",
}; //this is called key value pair

console.log(product.price); // this is how the element in key value pair is accessed
