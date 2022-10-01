let product = [
  {
    name: "product 1",
    price: 128000,
    discount: 0,
    brand: "apple",
    category: "mobile",
  },
  {
    name: "product 1",
    price: 35000,
    discount: 15,
    brand: "Samsung",
    category: "mobile",
  },
  {
    name: "product 1",
    price: 38000,
    discount: 0,
    brand: "VIVO",
    category: "mobile",
  },
];
let i = 0;
let html_str = "";
product.map((val, index) => {
  html_str += "<tr>";
  html_str += "<td>" + (index + 1) + "</td>";
  html_str += "<td>" + val.name + "</td>";
  html_str += "<td>" + val.category + "</td>";
  html_str += "<td>" + val.brand + "</td>";
  html_str += "<td>NPR. " + val.price + "</td>";
  html_str += "<td>" + val.discount + "%</td>";
  val.after_discount = val.price - (val.price * val.discount) / 100;
  html_str += "<td>NPR. " + val.after_discount + "</td>";
  html_str += "</tr>";
}); //forEach and map are same but forEach doesn't expect a return

document.getElementById("tbody").innerHTML = html_str;

let all_without_discount = product.filter((val, ind) => val.discount <= 0);
console.log(all_without_discount);
