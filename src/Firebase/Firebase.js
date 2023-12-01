import { initializeApp } from "firebase/app";
import {doc, getDoc,getFirestore,collection,addDoc} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD5QJYoQs5Kb0pG64g4fKyIMuMap8rID08",
  authDomain: "massage-ab398.firebaseapp.com",
  projectId: "massage-ab398",
  storageBucket: "massage-ab398.appspot.com",
  messagingSenderId: "1046209470151",
  appId: "1:1046209470151:web:5159be368d61466ab6e8e2"
};


const app = initializeApp(firebaseConfig);



const auth = getAuth();

const db =  getFirestore();

export const getUserInformation= async (userId)=>{
    const userDocRef = doc(db, "users", userId);
    const userSnapshot = await getDoc(userDocRef);
    const userData = userSnapshot.data();
  
      return userData;
           
  }
     
  
  
  
export const SignInUser = async (email, password) => {
      if (!email || !password) return;
    
      return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async ()=> 
{
  return await signOut(auth)
}

export const onAuthStateChangedListener = (callback) =>
onAuthStateChanged(auth, callback);



export const AddNewService = async (formData) => {
 
  console.log(formData)
  const serviceDocRef = doc(db, "Services", formData.serviceTitle);
  const serviceSnapshot = await getDoc(serviceDocRef);
  

if (!serviceSnapshot.exists()) {
    
    try {
    
    await setDoc(serviceDocRef, {
      name: formData.serviceTitle, 
      serviceTitle: formData.serviceTitle,
      rubrik: formData.rubrik,
      info1: formData.info1,
      info2: formData.info2,
      specialOmServicen: formData.specialOmServicen,
      listor: formData.listor,
      imageOfService: formData.imageOfService,
      ovrigtInfomationTitle: formData.ovrigtInfomationTitle,
      ovrigtInfomation: formData.ovrigtInfomation,
      otherList: formData.otherList,
      serviceImage: formData.serviceImage,
    });

    
    } catch (error) {
    console.log("error creating the user", error.message);
    }
    }


  };