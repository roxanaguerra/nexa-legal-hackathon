import firebase from './main';

// COLECCION EN FIRESTORE
const collectionSupervision = () => firebase.firestore().collection('Supervision');


// AGREGAR DOCS A LA COLECCION
const addSupervision = (data) => {
    // console.log(data);
    collectionSupervision().add(data)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
};

export default {
    addSupervision,
}