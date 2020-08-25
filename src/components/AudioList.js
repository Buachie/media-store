import React from 'react';
import useFirestore from '../hooks/useFirestore';
import ReactPlayer from 'react-player';

const AudioList =() =>{

    const {docs} = useFirestore('audio');
    console.log(docs);
    return(
        <div className="audio-collection">
            <h1>My Audio Files</h1>
            {docs && docs.map(doc =>(
                
                <audio controls>
                    <h2>{doc.name}</h2>
                    <source key={doc.id} src ={doc.url} type={doc.type}/>
                </audio>
            ))}
            
        </div>
    )
}

export default AudioList;