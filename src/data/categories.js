const categories = [
  {
    categoryId: "сoat",
    title: "Coat",
  },
  {
    categoryId: "short-coat",
    title: "Short coat",
  },
  {
    categoryId: "trench-coat",
    title: "Trench coat",
  },
  {
    categoryId: "dress",
    title: "Dress",
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
