// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";
import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
   {
     id: "01",
     title: "Poha",
     price: 149.0,
     image01: product_01_image_01,
     image02: product_01_image_02,
     image03: product_01_image_03,
     category: "Healthy",
   
     desc: "Simple, soulful poha with onions and potatoes, topped with peanut masala. [Flattened Rice Flakes, Peanut masala, Onion, Potato]",
   },

  {
    id: "02",
    title: "Aloo Parota",
    price: 139.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Healthy",
    
    desc: "An immortal love for paratha begins with good old aloo stuff, topped with Indian spices and green chillies. The paratha is served with curd, pickle, and butter.",
  },

  {
    id: "03",
    title: "Black Channa",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Healthy",
    
    desc: "Protein packed black chana cooked in roasted coconut spiced tomato gravy and finished up with our in house masala. A heartfelt meal served along with steamed rice.",
  },

  {
    id: "04",
    title: "Sambar & Aloo Fry with Steamed Rice",
    price: 150.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Healthy",
    
    desc: "Hot & tasty Southie special sambar with special Aloo fry, served with Steamed rice. Add Appadam & Ghee for the best experience.",
  },

   {
     id: "05",
     title: "Kadhai Paneer Deluxe Thali",
     price: 15.0,
     image01: product_05_image_01,
     image02: product_05_image_02,
     image03: product_05_image_03,
     category: "Healthy",

    desc: "This deluxe thali is sure to satiate you with a bonus of amazing tasty combination of soft parathas, comforting jeera pulao, kadhai paneer, dal makhani, aloo gobhi adraki, salad and badam kheer.Served with Pickle of the day",
  },
   {
     id: "06",
     title: "Poha with juice",
     price: 24.0,
     image01: product_01_image_01,
     image02: product_01_image_02,
     image03: product_01_image_03,
     category: "Healthy",

     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
   },

  {
    id: "07",
    title: "Aloo Parota with juice",
    price: 170.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Healthy",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Black Channa with juice",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Healthy",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Sambar Rice",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Healthy",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

   {
     id: "10",
     title: "Paneer Special",
     price: 24.0,
     image01: product_05_image_02,
     image02: product_05_image_01,
     image03: product_05_image_03,
     category: "Healthy",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

 {
   id: "11",
   title: "Crunchy Bread ",
   price: 35.0,
   image01: product_06_image_01,
   image02: product_06_image_02,
   image03: product_06_image_03,
   category: "Bread",

   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
 },

 {
   id: "13",
   title: "Loaf Bread ",
   price: 35.0,
   image01: product_06_image_03,
   image02: product_06_image_02,
   image03: product_06_image_03,
   category: "Bread",

     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
   },
];

export default products;
