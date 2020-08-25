import {useState, useEffect} from 'react';
import {projectFirestore} from '../firebase/config';

const useFirestore =(collection)=>{
    const [docs, setDocs] = useState([]);

    useEffect(()=>{
        const unsub = projectFirestore.collection(collection)
        .onSnapshot((snap)=>{
            let documents = [];
            snap.forEach(doc =>{
                documents.push({...doc.data(), name: doc.name , id: doc.id})
            });
            console.log(documents);
            setDocs(documents)
        });

        return ()=> unsub();
    },[collection])

    return {docs}
}

export default useFirestore;