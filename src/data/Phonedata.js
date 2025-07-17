const phoneData = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    brand: "Apple",
    version: "14 Pro Max",
    price: 129900,
    image: require("../images/Phones-images/Google Pixel 6a.jpeg"),
    rating: 4.8,
    stock: 10,
    description:
      "6.7-inch Super Retina XDR display with ProMotion for ultra-smooth visuals. Powered by A16 Bionic chip with 6-core CPU. Features 48MP triple-camera system with Photonic Engine, Always-On display, Dynamic Island, and advanced crash detection."
  },
  {
    id: 2,
    name: "iPhone 13",
    brand: "Apple",
    version: "13",
    price: 69900,
    image: require("../images/Phones-images/Google Pixel 7.jpeg"),
    rating: 4.7,
    stock: 8,
    description:
      "6.1-inch OLED Super Retina XDR display with cinematic color accuracy. A15 Bionic chip delivers smooth performance. Dual 12MP cameras with Photographic Styles and Smart HDR 4. Excellent battery life and 5G support."
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    version: "S23",
    price: 84999,
    image: require("../images/Phones-images/iPhone 13.jpeg"),
    rating: 4.6,
    stock: 12,
    description:
      "6.1-inch AMOLED display with adaptive 120Hz refresh rate. Snapdragon 8 Gen 2 for Galaxy, 50MP triple-camera system with AI enhancements. Gorilla Glass Victus 2, IP68 water resistance, and long-lasting 3900mAh battery."
  },
  {
    id: 4,
    name: "Samsung Galaxy A54",
    brand: "Samsung",
    version: "A54 5G",
    price: 37999,
    image: require("../images/Phones-images/iPhone 14 Pro.jpeg"),
    rating: 4.5,
    stock: 14,
    description:
      "6.4-inch Super AMOLED 120Hz display with vivid colors. Powered by Exynos 1380 chipset, triple rear camera (50MP + 12MP + 5MP), 5000mAh battery with 25W fast charging, and 5G connectivity support."
  },
  {
    id: 5,
    name: "OnePlus 11R",
    brand: "OnePlus",
    version: "11R 5G",
    price: 39999,
    image: require("../images/Phones-images/iQOO Neo 7.jpeg"),
    rating: 4.4,
    stock: 15,
    description:
      "6.74-inch Fluid AMOLED display with 120Hz refresh rate. Powered by Snapdragon 8+ Gen 1, 50MP Sony IMX890 main camera, 100W SuperVOOC charging, and HyperBoost Gaming Engine for ultra-smooth performance."
  },
  {
    id: 6,
    name: "OnePlus Nord CE 3 Lite",
    brand: "OnePlus",
    version: "Nord CE 3 Lite",
    price: 19999,
    image: require("../images/Phones-images/iQOO Z7.jpeg"),
    rating: 4.3,
    stock: 20,
    description:
      "6.72-inch FHD+ LCD display, Snapdragon 695 chipset, 108MP primary camera with EIS, 5000mAh battery, and 67W SUPERVOOC charging. Affordable mid-range choice with a clean OxygenOS experience."
  },
  {
    id: 7,
    name: "Google Pixel 7",
    brand: "Google",
    version: "7",
    price: 59999,
    image: require("../images/Phones-images/Motorola Edge 40.jpeg"),
    rating: 4.6,
    stock: 10,
    description:
      "6.3-inch FHD+ OLED with 90Hz refresh rate, Google Tensor G2 processor, excellent AI-based camera system with Real Tone and Magic Eraser, clean Android 13 experience with 5 years of updates."
  },
  {
    id: 8,
    name: "Google Pixel 6a",
    brand: "Google",
    version: "6a",
    price: 31999,
    image: require("../images/Phones-images/Motorola G73.jpeg"),
    rating: 4.4,
    stock: 11,
    description:
      "Compact 6.1-inch OLED display, powered by Google Tensor SoC. 12MP dual camera system with AI features, Titan M2 security chip, and guaranteed Android updates for years."
  },
  {
    id: 9,
    name: "Realme Narzo 60",
    brand: "Realme",
    version: "Narzo 60 5G",
    price: 17999,
    image: require("../images/Phones-images/Nothing Phone (1).jpeg"),
    rating: 4.2,
    stock: 25,
    description:
      "6.43-inch AMOLED display, Dimensity 6020 processor, 90Hz refresh rate, 64MP main camera, 5000mAh battery with 33W fast charging. Sleek design with smooth performance for budget users."
  },
  {
    id: 10,
    name: "Realme 11x",
    brand: "Realme",
    version: "11x 5G",
    price: 12999,
    image: require("../images/Phones-images/OnePlus 11R.jpeg"),
    rating: 4.1,
    stock: 18,
    description:
      "6.72-inch LCD display, Dimensity 6100+ chipset, 64MP rear camera, 5000mAh battery with 33W SuperVOOC charging. Best suited for entry-level users seeking performance and design."
  },
  {
    id: 11,
    name: "Redmi Note 12",
    brand: "Redmi",
    version: "Note 12 5G",
    price: 17999,
    image: require("../images/Phones-images/OnePlus Nord CE 3 Lite.jpeg"),
    rating: 4.3,
    stock: 13,
    description:
      "6.67-inch AMOLED display, Snapdragon 4 Gen 1 chipset, 120Hz refresh rate, 48MP triple-camera setup, 5000mAh battery with 33W fast charging. Slim and lightweight with MIUI 14 experience."
  },
  {
    id: 12,
    name: "Redmi K50i",
    brand: "Redmi",
    version: "K50i 5G",
    price: 23999,
    image: require("../images/Phones-images/Redmi K50i.jpeg"),
    rating: 4.4,
    stock: 9,
    description:
      "6.6-inch FHD+ LCD with 144Hz refresh rate, MediaTek Dimensity 8100, 64MP triple camera, LiquidCool technology, and 5080mAh battery with 67W fast charging. Ideal for performance users and gamers."
  },
  {
    id: 13,
    name: "Motorola Edge 40",
    brand: "Motorola",
    version: "Edge 40",
    price: 29999,
    image: require("../images/Phones-images/Motorola Edge 40.jpeg"),
    rating: 4.5,
    stock: 10,
    description:
      "6.55-inch pOLED display, 144Hz refresh rate, Dimensity 8020 chip, 50MP OIS main camera, IP68 rating, 4400mAh battery with 68W TurboPower charging. Stylish and lightweight with near-stock Android."
  },
  {
    id: 14,
    name: "Motorola G73",
    brand: "Motorola",
    version: "G73 5G",
    price: 18999,
    image: require("../images/Phones-images/Motorola G73.jpeg"),
    rating: 4.2,
    stock: 16,
    description:
      "6.5-inch FHD+ LCD with 120Hz refresh rate, MediaTek Dimensity 930, stereo speakers with Dolby Atmos, 5000mAh battery with 30W TurboPower, clean UI experience with ThinkShield security."
  },
  {
    id: 15,
    name: "Vivo V27",
    brand: "Vivo",
    version: "V27 5G",
    price: 32999,
    image: require("../images/Phones-images/Vivo T2.jpeg"),
    rating: 4.3,
    stock: 12,
    description:
      "6.78-inch curved AMOLED display, Dimensity 7200 chip, 50MP Sony IMX766V camera with OIS, 4600mAh battery with 66W FlashCharge, and color-changing back panel under sunlight."
  },
  {
    id: 16,
    name: "Vivo T2",
    brand: "Vivo",
    version: "T2 5G",
    price: 15999,
    image: require("../images/Phones-images/Vivo V27.jpeg"),
    rating: 4.1,
    stock: 14,
    description:
      "6.38-inch AMOLED display with 90Hz refresh rate, Snapdragon 695 processor, 64MP OIS camera, ultra-slim design, and 4500mAh battery with 44W fast charging."
  },
  {
    id: 17,
    name: "iQOO Z7",
    brand: "iQOO",
    version: "Z7 5G",
    price: 18999,
    image: require("../images/Phones-images/iQOO Z7.jpeg"),
    rating: 4.4,
    stock: 11,
    description:
      "6.38-inch AMOLED with 1300 nits brightness, MediaTek Dimensity 920 SoC, 64MP OIS rear camera, 4500mAh battery, 44W fast charging, and ultra-gaming mode support."
  },
  {
    id: 18,
    name: "iQOO Neo 7",
    brand: "iQOO",
    version: "Neo 7 5G",
    price: 31999,
    image: require("../images/Phones-images/iQOO Neo 7.jpeg"),
    rating: 4.6,
    stock: 8,
    description:
      "6.78-inch AMOLED 120Hz display, Dimensity 8200 processor, 64MP OIS camera, 5000mAh battery, 120W FlashCharge. Excellent performance for gaming and content creation."
  },
  {
    id: 19,
    name: "Nothing Phone (1)",
    brand: "Nothing",
    version: "Phone 1",
    price: 29999,
    image: require("../images/Phones-images/Nothing Phone (1).jpeg"),
    rating: 4.5,
    stock: 7,
    description:
      "Unique transparent design with Glyph LED interface, 6.55-inch OLED 120Hz display, Snapdragon 778G+, dual 50MP cameras, wireless charging, and clean Nothing OS."
  },
  {
    id: 20,
    name: "Nothing Phone (2)",
    brand: "Nothing",
    version: "Phone 2",
    price: 44999,
    image: require("../images/Phones-images/Nothing Phone (2).jpeg"),
    rating: 4.7,
    stock: 6,
    description:
      "6.7-inch LTPO OLED with adaptive 120Hz, Snapdragon 8+ Gen 1 processor, improved Glyph Interface 2.0, 4700mAh battery, 50MP dual cameras, wireless and reverse charging, and premium build."
  }
];

export default phoneData;
