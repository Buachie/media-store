import React from 'react';
import useFirestore from '../hooks/useFirestore';

const AudioList =() =>{

    const {docs} = useFirestore('audio');
    console.log(docs);
    return(
        <div className="audio-collection">
            {docs && docs.map(doc =>(
                <audio controls>
                    <source key={doc.id} src ={doc.url} type={doc.type}/>
                </audio>
            ))}
            
        </div>
    )
}

export default AudioList;