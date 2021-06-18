//Firebase have many utilities so we import only few which we want instead of complete firebase at once... like we imported firestore,suth etc
import firebase from 'firebase/app'; //this base import is useful because all the auth and firesotre are automatially connected to the firebase keyword which we impoted
import 'firebase/firestore';
import 'firebase/auth';


const config={
  apiKey: process.env.REACT_APP_ApiKey,
  authDomain: process.env.REACT_APP_AuthDomain,
  projectId: process.env.REACT_APP_ProjectId,
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.REACT_APP_MessagingSenderId,
  appId: process.env.REACT_APP_AppId,
  measurementId: process.env.REACT_APP_MeasurementId
}

  firebase.initializeApp(config);

  const auth=firebase.auth();
  const firestore=firebase.firestore();

  const googleprovider=new firebase.auth.GoogleAuthProvider();
  googleprovider.setCustomParameters({prompt:'select_account'});
  
  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth)// if user is signed out...i.e..this function being called on signinout of user
    {
      console.log(userAuth);
      return;
    } 

    const userRef= await firestore.doc('/users/'+userAuth.uid);
    const snapshot=await userRef.get();
    if(!snapshot.exists) // if sapshot donot exist then we will createuser
    {
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log(error.message);
      }
    }

    return userRef; 
  }


  export const addDocumentToCollection = async(collectionPath,dataArray)=>{
    const collecRef=firestore.collection(collectionPath);
    const batch = firestore.batch();
    dataArray.forEach(obj =>{
      const newDocRef=collecRef.doc() // this will give us a new doc referece
      batch.set(newDocRef,obj)
    })

    return await batch.commit() // it is aasync call and returns a promise .
  }

  export const convertSnapshotToMap =(snapshot) =>{
    const transformedData= snapshot.docs.map(doc =>{
      const {title,items}= doc.data();
      return {
        id:doc.id,
        routeName:encodeURI(title.toLowerCase()),
        title,
        items
      }
    });
    const final_map= transformedData.reduce((reduced_value,collection)=>{
        reduced_value[collection.title.toLowerCase()]=collection;
        return reduced_value;
    },{})
    return final_map;
  }

  export const getCurrentUser =()=>{
    return new Promise((resolve,reject)=>{
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      },reject);
    })
  }

  export default firebase;
  export {googleprovider,auth,firestore};