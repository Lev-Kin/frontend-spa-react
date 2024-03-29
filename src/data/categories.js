import coatCategory from "../assets/category/_MG_5110ai.jpg";
import shortCoatCategory from "../assets/category/IMG_4042ai.jpg";
import trenchCoatCategory from "../assets/category/_MG_5081ai.jpg";
import dressCategory from "../assets/category/908934ai.jpg";

const categories = [
  {
    categoryId: "coat",
    title: "Coat",
    image: coatCategory,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    categoryId: "short-coat",
    title: "Short coat",
    image: shortCoatCategory,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    categoryId: "trench-coat",
    title: "Trench coat",
    image: trenchCoatCategory,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    categoryId: "dress",
    title: "Dress",
    image: dressCategory,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex((category) => category.categoryId === categoryId)
  ];
}
