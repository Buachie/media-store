import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
const UploadForm =()=>{

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const types = ['audio/mpeg']

    const changeHandler =(e)=>{
        let selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else{
            setFile(null);
            setError('Invalid file type')
        }
    }
    return(
        <form>
            <div className="file-upload">
                <span>Choose File</span>
                <input type="file" name="myFile" className="upload" onChange={changeHandler}/>
            </div>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div classname="filename"> {file.name} </div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;