import React, { useState } from 'react';
import { storage } from '../controller/main';

const ActualSupervision = () => {

    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");

    function handleChange(e) {
        setFile(e.target.files[0]);
    }

    function handleUpload(e) {
        e.preventDefault();
        const uploadTask = storage.ref(`/images/${file.name}`).put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
                setFile(null);
                setURL(url);
            });
        });
    }

    return (
        <>
            { !url ? (
                <form onSubmit={handleUpload}>
                    <div className="file-container">
                        <div className="btn-file-container">
                            <i className="fas fa-cloud-upload-alt"></i>
                            <p className="btn-file-text">Credenciales supervisor</p>
                            <input type="file" className="btn_enviar" onChange={handleChange}/>
                        </div>

                        <button disabled={!file} className="btn-secondary">Subir</button>
                    </div>
                </form>    
            )        
            :
            <div className="file-container">
                <img src={url} alt={url} />
            </div>

            }
        </>
    );
};

export default ActualSupervision;