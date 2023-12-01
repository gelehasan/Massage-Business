import { initializeApp } from "firebase/app";
import {doc, getDoc,getFirestore,collection,addDoc} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

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


export const postFormDataToDatabase = async (formData) => {
  try {
    // Ensure the user is signed in before posting data
    
    // Add the data to the 'services' collection
    const servicesCollection = collection(db, 'services');
    await addDoc(servicesCollection, {
      name: formData.serviceTitle, // Assuming you want to associate the data with a user
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

    console.log("Data posted to the database successfully!");
  } catch (error) {
    console.error("Error posting data to the database:", error.message);
  }
};



export const AddNewService = async (formData) => {

 


  const serviceDocRef = doc(db, "Services", formData.serviceTitle);
  //getting a snapshot of the user in the databse
  const serviceSnapshot = await getDoc(serviceDocRef);
  

if (!serviceSnapshot.exists()) {
    const createdAt = new Date();
    
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
    // Return the user object with the updated displayName property
    //if the create user runs successful
    // It retur//along with other properties like uid, email, etc.
    
  };