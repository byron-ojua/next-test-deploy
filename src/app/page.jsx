'use client'
import Link from "next/link";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '@/app/firebase/config'
import { useRouter } from 'next/navigation'
// import { collection, doc, getDocs, query, where } from 'firebase/firestore'
// import { getUserDoc } from '@/app/firebase/userUtil'

export default function Home() {
  const [ user ] = useAuthState(auth)
  const router = useRouter()
  // // const userSession = sessionStorage.getItem('user')

  // // if(!user && !userSession){
  if(!user){
      router.push('/sign-in')
  }


  // async function getUserDoc() {
  //   const usersRef = collection(db, "users");
  //   const q = query(usersRef, where("uid", "==", user.uid));
  //   const querySnapshot = await getDocs(q);
  
  //   if (!querySnapshot.empty) {
  //     const userDoc = querySnapshot.docs[0].data(); // Take the first document that matches
  //     console.log("User data:", userDoc);
  //     return userDoc;
  //   } else {
  //     console.log("No user found with that UID.");
  //     return null;
  //   }
  // }

  // var userDoc = getUserDoc()
  // var firstName = userDoc.firstName



  return (
    <main>
      {/* <h1>Hello,{getUserDoc().firstName}</h1> */}
      <h1>Hello</h1>
      <Link href="/database">Database examples</Link>
      <br />
      <Link href="/sign-up">Example Sign-Up</Link>
      <br />
      <button onClick={() => {
        auth.signOut()
        sessionStorage.removeItem('user')
        }}>Sign Out
      </button>
    </main>
  );
}
