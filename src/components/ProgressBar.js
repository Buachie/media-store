import React from 'react';
import useStorage from '../hooks/useStorage';
import LinearProgressWithLabel from '@material-ui/core/LinearProgress';

const ProgressBar = ({file, setFile}) =>{
    const {url, progress} = useStorage(file);
    console.log(progress, url);

    return(
        <div className="progress-bar"><LinearProgressWithLabel variant= "determinate" value={progress}/></div>
    )
}

export default ProgressBar;