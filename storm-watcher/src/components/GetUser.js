import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';

// Este componente es un ejemplo de como interactuar con la db, no tiene relacion con el proyecto
export const GetUser = () => {

  const [userName, setUserName] = useState('Usuario');

  useEffect(() => {
    
    const getData = async() => {
      await getDocs(collection(db ,"users"))
        .then(datos => {
          const uname = datos.docs[0].data().name;
          setUserName(uname);
        });
    }
    getData();
  }, []);
  
  return (
    <div>Bienvenido { userName }</div>
  )
}
