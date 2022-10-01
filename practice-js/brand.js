let all_brands = [];
class Brand {
  name;
  constructor(name) {
    this.name = name;
  }
  // setNmae = (name) => {
  //     this.name = name;
  // }
  showTable = (all_brands) => {
    let html = "";
    all_brands.map((brand, i) => {
      html += "<tr>";
      html += "<td>" + (i + 1) + "</td>";
      html += "<td>" + brand.name + "</td>";
      html += "</tr>";
    });
    return html;
  };
}
//let brand = new Brand();
const addBrand = () => {
  let name = prompt("Enter the name of the brand");
  let brand = new Brand(name);
  //brand.setNmae(name);
  all_brands.push(brand);
  let html_rep = brand.showTable(all_brands);
  document.getElementById("brand_content").innerHTML = html_rep;
  console.log(all_brands);
};
