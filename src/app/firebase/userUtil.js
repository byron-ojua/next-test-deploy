"use server"
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '@/app/firebase/config'
import { useRouter } from 'next/navigation'
import { collection, doc, getDoc, query, where } from 'firebase/firestore'

export async function getUserDoc() {
    const [ user ] = useAuthState(auth)


    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "==", user.uid));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0].data(); // Take the first document that matches
        console.log("User data:", userDoc);
        return userDoc;
    } else {
        console.log("No user found with that UID.");
        return null;
    }
}