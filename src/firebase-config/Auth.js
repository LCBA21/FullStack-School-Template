// import React,{useEffect,useState} from 'react';
// import {db} from './firebase'
// import {collection,getDocs} from 'firebase/firestore';


// function Auth() {
//   // change state
//   const [users, setUsers] = useState([]);
// // change collection to your collection
//   const userCollectionRef= collection(db,"employee");

//   // 
//   useEffect(() => {
//    const fetchData = async ()=>{
//     try{
//       const data = await getDocs(userCollectionRef);
//       if(data.docs){
//         setUsers((data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
//       }else{
//         console.log('error connection')
//       }
//     }catch(error){
//       console.error(error)
//     }

//    }
//    fetchData();
   
//   }, []);
//   console.log(users)
  
//   return (
//     <div><button  >send data</button></div>
//   )
// }

// export default Auth