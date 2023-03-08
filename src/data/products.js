import _MG_0063 from "../assets/category/coat/_MG_0063.jpg";
import _MG_0293 from "../assets/category/coat/_MG_0293.jpg";
import _MG_0352 from "../assets/category/coat/_MG_0352.jpg";
import _MG_0477 from "../assets/category/coat/_MG_0477.jpg";
import _MG_0490 from "../assets/category/coat/_MG_0490.jpg";
import _MG_6223 from "../assets/category/coat/_MG_6223.jpg";

import _MG_135002705 from "../assets/category/dress/_MG_135002705.jpg";
import _MG_202112540 from "../assets/category/dress/_MG_202112540.jpg";
import _MG_219924598 from "../assets/category/dress/_MG_219924598.jpg";
import _MG_442062354 from "../assets/category/dress/_MG_442062354.jpg";

import _MG_0050 from "../assets/category/short-coat/_MG_0050.jpg";
import _MG_4983 from "../assets/category/short-coat/_MG_4983.jpg";
import _MG_8090 from "../assets/category/short-coat/_MG_8090.jpg";
import _MG_4042 from "../assets/category/short-coat/_MG_4042.jpg";

import _MG_3910 from "../assets/category/trench-coat/_MG_3910.jpg";
import _MG_5081 from "../assets/category/trench-coat/_MG_5081.jpg";
import _MG_5100 from "../assets/category/trench-coat/_MG_5100.jpg";
import _MG_6708 from "../assets/category/trench-coat/_MG_6708.jpg";

const products = [
  {
    image: _MG_0063,
    productId: "_MG_0063",
    categoryId: "coat",
    title: "Winter Сoat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 847,
  },
  {
    image: _MG_0293,
    productId: "_MG_0293",
    categoryId: "coat",
    title: "Demi-season Coat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 428,
  },
  {
    image: _MG_0352,
    productId: "_MG_0352",
    categoryId: "coat",
    title: "Winter Сoat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 754,
  },
  {
    image: _MG_0477,
    productId: "_MG_0477",
    categoryId: "coat",
    title: "Demi-season Coat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 345,
  },
  {
    image: _MG_0490,
    productId: "_MG_0490",
    categoryId: "coat",
    title: "Demi-season Coat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 289,
  },
  {
    image: _MG_6223,
    productId: "_MG_6223",
    categoryId: "coat",
    title: "Winter Сoat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 648,
  },
  {
    image: _MG_135002705,
    productId: "_MG_135002705",
    categoryId: "dress",
    title: "Summer dress",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 128,
  },
  {
    image: _MG_202112540,
    productId: "_MG_202112540",
    categoryId: "dress",
    title: "Summer dress",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 189,
  },
  {
    image: _MG_219924598,
    productId: "_MG_219924598",
    categoryId: "dress",
    title: "Summer dress",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 137,
  },
  {
    image: _MG_442062354,
    productId: "_MG_442062354",
    categoryId: "dress",
    title: "Summer dress",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 198,
  },
  {
    image: _MG_0050,
    productId: "_MG_0050",
    categoryId: "short-coat",
    title: "Demi-season Coat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 155,
  },
  {
    image: _MG_4042,
    productId: "_MG_4042",
    categoryId: "short-coat",
    title: "Demi-season Coat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 199,
  },
  {
    image: _MG_4983,
    productId: "_MG_4983",
    categoryId: "short-coat",
    title: "Demi-season Coat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 177,
  },
  {
    image: _MG_8090,
    productId: "_MG_8090",
    categoryId: "short-coat",
    title: "Winter Сoat",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 228,
  },
  {
    image: _MG_3910,
    productId: "_MG_3910",
    categoryId: "trench-coat",
    title: "Spring Autumn Trench",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 111,
  },
  {
    image: _MG_5081,
    productId: "_MG_5081",
    categoryId: "trench-coat",
    title: "Spring Autumn Trench",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 119,
  },
  {
    image: _MG_5100,
    productId: "_MG_5100",
    categoryId: "trench-coat",
    title: "Spring Autumn Trench",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 99,
  },
  {
    image: _MG_6708,
    productId: "_MG_6708",
    categoryId: "trench-coat",
    title: "Spring Autumn Trench",
    description:
      "Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    price: 127,
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter((product) => product.categoryId === categoryId);
  }
  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex((product) => product.productId === productId)
  ];
}
