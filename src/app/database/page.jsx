// 'use client'
// import {db} from '../firebase/firebaseConfig.js'
// import {collection, addDoc} from 'firebase/firestore'
// import React, {useState} from 'react'


// async function addData(){
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// }

export default function Database() {
  return (
    <main>
      <h1>Add data to Firestore Database</h1>
    </main>
  );
}
