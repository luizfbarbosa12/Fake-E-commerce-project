export const returnCategoryDescription = (category: string | undefined) => {
  switch (category) {
    case "electronics":
      return "Discover the latest gadgets and cutting-edge technology. Browse a wide range of electronics, including smartphones, laptops, tablets, smart home devices, and more.";
    case "jewelry":
      return "Add a touch of elegance and style to your look with our exquisite collection of jewelry. Explore stunning pieces such as necklaces, earrings, bracelets, rings, and accessories that will enhance your personal style.";
    case "men's clothing":
      return "Elevate your wardrobe with our fashionable and comfortable men's clothing. From casual essentials to formal attire, find stylish options including shirts, pants, jackets, suits, and accessories tailored to the modern man.";
    case "women's clothing":
      return "Embrace your individuality and express your style with our trendy and versatile women's clothing. Discover a wide selection of dresses, tops, bottoms, outerwear, and accessories that will make you look and feel confident in every occasion.";
  }
};
