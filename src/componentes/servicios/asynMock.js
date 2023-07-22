import { Link } from "react-router-dom";

function getData() {
  return new Promise((resolve, reject) => {
    const producto = [
      {
        id: 1,
        title: "Product 1",
        stock: 10,
        description: "Description of Product 1",
        img: "src: ",
        price: 2000,
      },
      {
        id: 2,
        title: "Product 2",
        stock: 15,
        description: "Description of Product 2",
        img: "path/to/image2.jpg",
        price: 1000,
      },
      {
        id: 3,
        title: "Product 3",
        stock: 5,
        description: "Description of Product 3",
        img: "path/to/image3.jpg",
        price: 4000,
      },
      {
        id: 4,
        title: "Product 4",
        stock: 20,
        description: "Description of Product 4",
        img: "path/to/image4.jpg",
        price: 90000,
      },
      {
        id: 5,
        title: "Product 5",
        stock: 8,
        description: "Description of Product 5",
        img: "path/to/image5.jpg",
        price: 9.99,
      },
      {
        id: 6,
        title: "Product 6",
        stock: 12,
        description: "Description of Product 6",
        img: "/.carrito/imagenes/coral",
        price: 34.99,
      },
      {
        id: 7,
        title: "Product 7",
        stock: 3,
        description: "Description of Product 7",
        img: "path/to/image7.jpg",
        price: 42.99,
      },
      {
        id: 8,
        title: "Product 8",
        stock: 18,
        description: "Description of Product 8",
        img: "path/to/image8.jpg",
        price: 14.99,
      },
      {
        id: 9,
        title: "Product 9",
        stock: 6,
        description: "Description of Product 9",
        img: "path/to/image9.jpg",
        price: 39.99,
      },
      {
        id: 10,
        title: "Product 10",
        stock: 25,
        description: "Description of Product 10",
        img: "path/to/image10.jpg",
        price: 49.99,
      },
    ];

    setTimeout(() => {
      resolve(producto);
    }, 2000);
  });
}

export function getProductData(idURL) {
  return new Promise((resolve, reject) => {
    const productos = [
      {
        id: 1,
        title: "Product 1",
        stock: 10,
        description: "Description of Product 1",
        img: "path/to/image1.jpg",
        price: 2000,
      },
      {
        id: 2,
        title: "Product 2",
        stock: 15,
        description: "Description of Product 2",
        img: "path/to/image2.jpg",
        price: 1000,
      },
      {
        id: 3,
        title: "Product 3",
        stock: 5,
        description: "Description of Product 3",
        img: "path/to/image3.jpg",
        price: 4000,
      },
      {
        id: 4,
        title: "Product 4",
        stock: 20,
        description: "Description of Product 4",
        img: "path/to/image4.jpg",
        price: 90000,
      },
      {
        id: 5,
        title: "Product 5",
        stock: 8,
        description: "Description of Product 5",
        img: "path/to/image5.jpg",
        price: 9.99,
      },
      {
        id: 6,
        title: "Product 6",
        stock: 12,
        description: "Description of Product 6",
        img: "path/to/image6.jpg",
        price: 34.99,
      },
      {
        id: 7,
        title: "Product 7",
        stock: 3,
        description: "Description of Product 7",
        img: "path/to/image7.jpg",
        price: 42.99,
      },
      {
        id: 8,
        title: "Product 8",
        stock: 18,
        description: "Description of Product 8",
        img: "path/to/image8.jpg",
        price: 14.99,
      },
      {
        id: 9,
        title: "Product 9",
        stock: 6,
        description: "Description of Product 9",
        img: "path/to/image9.jpg",
        price: 39.99,
      },
      {
        id: 10,
        title: "Product 10",
        stock: 25,
        description: "Description of Product 10",
        img: "path/to/image10.jpg",
        price: 49.99,
      },
    ];

    const prodRequest = productos.find((item) => item.id === parseInt(idURL));

    setTimeout(() => {
      resolve(prodRequest);
    }, 2000);
  });
}

export default getData;
