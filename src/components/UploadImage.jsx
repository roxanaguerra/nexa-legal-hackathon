import React from 'react';
import { storage } from '../controller/main';

const UploadImage = ({ setFile, url, setURL, categorie, id, icon }) => {

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
                <label for={id} className="btn-file-container">
                    <img src={icon} alt={icon} className="icon-upload"></img>
                    <p className="btn-file-text">{categorie}</p>
                    <input id={id} type="file" className="btn_enviar" onChange={handleChange}/>
                </label>
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