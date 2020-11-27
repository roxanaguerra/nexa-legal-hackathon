import { firebase } from './main';

// COLECCIONES EN FIRESTORE
const collectionSupervision = () => firebase.firestore().collection('Supervision');
const collectionActionPlan= () => firebase.firestore().collection('Action');

// AGREGAR DOCS A LA COLECCION SUPERVISION
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

// ACTUALIZAR ESTADOS DE LA SUPERVISION Y DATOS
const updateDataOfSupersion = (id, relevantData, stateSupervision, stateAction) => collectionSupervision().doc(id).update({
  relevantData, stateSupervision, stateAction,
});

// AGREGAR DOCS A LA COLECCION PLAN DE ACCION - ACTIONPLAN
const addActionPlan = (data) => {
  // console.log(data);
  collectionActionPlan().add(data)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export default {
    addSupervision,
    getSupervision,
    updateDataOfSupersion,
    addActionPlan,
}