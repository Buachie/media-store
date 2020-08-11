import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError]= useState(null);
    const [url, setUrl] = useState(null);
    const [type, setType] = useState(null);

    useEffect(()=>{
        //References
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('audio');

        storageRef.put(file).on('state_changed', (snap) =>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err)=>{
            setError(err);
        }, async () =>{
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url, type, createdAt})
            setUrl(url);
            setType(type);
            console.log(type);
        })
    }, [file])

    return {progress, url, type, error}
}

export default useStorage;