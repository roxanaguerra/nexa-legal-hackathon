import React from 'react';
import { storage } from '../controller/main';

const UploadImage = ({ file, setFile, url, setURL, categorie }) => {

    function handleUpload(e) {
        e.preventDefault();
        const uploadTask = storage.ref(`/images/${file.name}`).put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
                console.log(url)
                setFile(null);
                setURL(url);
            });
        });
    }

    function handleChange(e) {
        setFile(e.target.files[0]);
    }

    return (
        <>
            { !url ? (
                <form onSubmit={handleUpload}>
                <div className="file-container">
                    <div className="btn-file-container">
                        <i className="fas fa-cloud-upload-alt"></i>
                        <p className="btn-file-text">{categorie}</p>
                        <input type="file" className="btn_enviar" onChange={handleChange}/>
                    </div>

                    <button disabled={!file} className="btn-secondary-custom">Subir</button>
                </div>
            </form>

            )        
            :
            <div className="file-container">
                <div className="btn-file-container">
                    <img src={url} alt="Documents" className="Documents"></img>
                    {/* <iframe title="Documents" width="150" height="100" src={url}></iframe> */}
                    <p className="btn-file-text btn-file-text-bottom">{categorie}</p>
                </div>
            </div>

            }        
        </>
    );
};

export default UploadImage;