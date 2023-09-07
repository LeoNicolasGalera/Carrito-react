import React from "react";
import CartContainer, { orderData } from "../CartContainer/CartContainer";
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

  const documents = querySnapshot.docs;
  const docsData = documents.map(item => {
    return { ...item.data(), id: item.id };
  });

  return docsData;
}

async function getProductData(id) {
  const productRef = doc(db, "productos", id);
  const doctSnap = await getDoc(productRef);

  if (doctSnap.exists()) {
    return { ...doctSnap.data(), id: doctSnap.id };
  } else {
    throw new Error("No encontramos ese producto ");
  }
}

async function categoryData() {
  const productsRef = collection(db, "productos");
  const q = query(productsRef, where("category", "==", "griferia"));

  const querySnapshot = await getDocs(q);
  const documents = querySnapshot.docs;
  const docsData = documents.map(item => {
    return { ...item.data(), id: item.id };
  });

  return docsData;
}

async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");
  const docCreated = await addDoc(collectionRef, orderData);
  return docCreated.id;
}

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
