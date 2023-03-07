import _MG_0063 from "../assets/_MG_0063.jpg";
import _MG_0293 from "../assets/_MG_0293.jpg";
import _MG_0352 from "../assets/_MG_0352.jpg";
import _MG_0477 from "../assets/_MG_0477.jpg";
import _MG_0490 from "../assets/_MG_0490.jpg";
import _MG_6223 from "../assets/_MG_6223.jpg";

const products = [
  {
    image: _MG_0063,
    productId: "_MG_0063",
    title: "Winter Сoat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 847,
  },
  {
    image: _MG_0293,
    productId: "_MG_0293",
    title: "Demi-season Coat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 428,
  },
  {
    image: _MG_0352,
    productId: "_MG_0352",
    title: "Winter Сoat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 754,
  },
  {
    image: _MG_0477,
    productId: "_MG_0477",
    title: "Demi-season Coat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 345,
  },
  {
    image: _MG_0490,
    productId: "_MG_0490",
    title: "Demi-season Coat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 289,
  },
  {
    image: _MG_6223,
    productId: "_mg_6223",
    title: "Winter Сoat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 648,
  },
];

export function getProducts() {
  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex((product) => product.productId === productId)
  ];
}
