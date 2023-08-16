import React from "react";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm6qDGjZGVQc4XO78qB0qheM_bEuYwfFY",
  authDomain: "react-ecommerce-1ffaf.firebaseapp.com",
  projectId: "react-ecommerce-1ffaf",
  storageBucket: "react-ecommerce-1ffaf.appspot.com",
  messagingSenderId: "479681098055",
  appId: "1:479681098055:web:330c1ecea240c14bc75c62",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function getData() {
  const productRef = collection(db, "productos");
  const querySnapshot = await getDocs(productRef);
  const docsData = querySnapshot.map((doc) => doc.data());

  return docsData;
}
console.log(getData());

async function getProductData() {
  const productRef = doc(db, "productos", "id");
  const doctSnap = await getDoc(productRef);

  if (doctSnap.exists()) {
    return doctSnap.data();
  } else {
    throw new Error("No encontramos ese producto ");
  }
}

async function categoryData() {
  const q = query(collection(db, "productos"), where("category", "==", true));

  const querySnapshot = await getDocs(q);

  querySnapshot.map((doc) => {
    return doc.id, "=>", doc.data();
  });
}

console.log(categoryData());

async function createOrder(orderData) {
  const collectionRef = collection(db, "productos", orderData);
  const docCreated = await addDoc(collectionRef, orderData);
  return docCreated.id;
}
console.log(createOrder());
async function getOrder(id) {
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDocs(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto");
  }
}
export { getData, getOrder, getProductData, categoryData, createOrder };
