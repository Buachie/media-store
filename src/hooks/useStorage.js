import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError]= useState(null);
    const [url, setUrl] = useState(null);
    const [name, setName] = useState(null);
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
            const name = file.name;
            const createdAt = timestamp();
            collectionRef.add({url, name, type, createdAt})
            setUrl(url);
            console.log(type);
        })
    }, [file])

    return {progress, name, url, type, error}
}

export default useStorage;