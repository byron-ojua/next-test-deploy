'use client'
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, db } from '@/app/firebase/config'
import { useRouter } from 'next/navigation'
import { collection, addDoc} from 'firebase/firestore'

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter()

  const handleSignUp = async () => {
    try {
      const authRes = await createUserWithEmailAndPassword(email, password)
      console.log({authRes})
      sessionStorage.setItem('user', true)

      const docRes = await addDoc(collection(db, "users"), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        uid: authRes.user.uid
      });
      console.log("Document written with ID: ", docRes.id);

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('')

      router.push('/')
    } catch(e){
        console.error(e)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign Up</h1>
        <input
          type='text'
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500" />
        
        <input
          type='text'
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500" />



        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <button 
          onClick={handleSignUp}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;