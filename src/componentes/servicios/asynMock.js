const productos = [
  {
    id: 1,
    title: "Griferia Roca",
    stock: 10,
    description: "Modelo Coral monocomando para lavatorio",
    img: "https://www.roca.com.ar/RocaResourceServlet/resources/getTransformation?idObject=%7BBECA1971-FC54-4E0C-BD44-D48CF1DE564C%7D&trName=TF_Mob_prod_xxl_v2",
    price: 50000,
    category: "griferia",
  },
  {
    id: 2,
    title: "Griferia Roca",
    stock: 15,
    description: "Modelo varna monocomando para lavatorio",
    img: "https://www.roca.com.ar/RocaResourceServlet/resources/getTransformation?idObject=%7BBF0593A9-0384-4705-9E34-2760608B30D8%7D&trName=TF_Mob_prod_xxl_v2",
    price: 100000,
    category: "griferia",
  },
  {
    id: 3,
    title: "Ceramica",
    stock: 5,
    description: "San Lorenzo 30x60",
    img: "https://alberdi.com.ar/admin/img/producto/252/196/prod/lg/fusioncara01.jpg",
    price: 3500,
    category: "ceramica",
  },
  {
    id: 4,
    title: "Porcelanato",
    stock: 20,
    description: "Alberdi 80x80",
    img: "https://alberdi.com.ar/admin/img/producto/242/98/prod/lg/manhattannightpz.jpg",
    price: 9000,
    category: "porcelanato",
  },
  {
    id: 5,
    title: "Ceramica",
    stock: 8,
    description: "Cerro Negro 20x120 ",
    img: "https://alberdi.com.ar/admin/img/producto/369/201/prod/lg/goyacara01.jpg",
    price: 7600,
    category: "ceramicas",
  },
  {
    id: 6,
    title: "Porcelanato",
    stock: 12,
    description: "Alberdi 90x90",
    img: "https://alberdi.com.ar/admin/img/producto/407/26/prod/lg/calacatacara011.jpg",
    price: 10200,
    category: "porcelanato",
  },
  {
    id: 7,
    title: "Porcelanato",
    stock: 3,
    description: "Porcelanato 80x80",
    img: "https://alberdi.com.ar/admin/img/producto/384/61/prod/lg/brickellcara01web.jpg",
    price: 4900,
    category: "porcelanato",
  },
  {
    id: 8,
    title: "Accesorio",
    stock: 18,
    description: "Accesorio 6 piezas",
    img: "https://griferiapeirano.com/wp-content/uploads/2022/04/11006_set-de-6_1480x820-300x300.jpg",
    price: 13000,
    category: "accesorio",
  },
  {
    id: 9,
    title: "Accesorio",
    stock: 6,
    description: "Accesorio 6 piezas",
    img: "https://griferiapeirano.com/wp-content/uploads/2022/04/10005BL_set-de-5_1480x820-300x300.jpg",
    price: 4100,
    category: "accesorio",
  },
  {
    id: 10,
    title: "Accesorio",
    stock: 25,
    description: "Description of Product 10",
    img: "https://griferiapeirano.com/wp-content/uploads/2022/04/3006_set-de-6_1480x820-300x300.jpg",
    price: 8600,
    categoria: "accesorio",
  },
];

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
}

export function getProductData(idURL) {
  return new Promise((resolve, reject) => {
    const prodRequest = productos.find((item) => item.id === parseInt(idURL));

    setTimeout(() => {
      resolve(prodRequest);
    }, 2000);
  });
}
export function categoryData(categoriaURL) {
  return new Promise((resolve, reject) => {
    const categoriaRequested = productos.filter((item) => {
      return item.category === categoriaURL;
    });
    setTimeout(() => {
      resolve(categoriaRequested);
    }, 2000);
  });
}

export default getData;
