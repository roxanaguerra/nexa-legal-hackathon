import { firebase } from './main';

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

// LEER LOS DOCS DE LA COLECCION
const getSupervision = (stateSupervision, callback) => {
  collectionSupervision().where('stateSupervision', '==', stateSupervision).onSnapshot((query) => {
    const docs = [];
    query.forEach((supervision) => {
      docs.push({ ...supervision.data(), id: supervision.id });
    });
    console.log(docs);
    callback(docs);
  });
};

export default {
    addSupervision,
    getSupervision,
}