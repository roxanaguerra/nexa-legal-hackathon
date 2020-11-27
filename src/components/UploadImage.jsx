import React from 'react';
import { storage } from '../controller/main';

const UploadImage = ({ setFile, url, setURL, categorie }) => {

    function handleUpload(file) {
        const uploadTask = storage.ref(`/images/${file.name}`).put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
                console.log(url)
                setURL(url);
            });
        });
    }

    function handleChange(e) {
        const fileDocument = e.target.files[0];
        handleUpload(fileDocument);
        setFile(fileDocument);
    }

    return (
        <>
            { !url ? (
                <div className="btn-file-container">
                    <i className="fas fa-cloud-upload-alt"></i>
                    <p className="btn-file-text">{categorie}</p>
                    <input type="file" className="btn_enviar" onChange={handleChange}/>
                </div>
            )        
            :
                <div className="btn-file-container">
                    <div className="documents-container">
                        <img src={url} alt="Documents" className="documents"></img>
                        {/* <iframe title="Documents" width="150" height="70" src={url}></iframe> */}
                    </div>

                    <p className="btn-file-text">{categorie}</p>
                </div>
            }        
        </>
    );
};

export default UploadImage;