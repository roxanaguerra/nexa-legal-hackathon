import { firebase } from './main';

// Colecciones en firestore
const collectionSupervision = () => firebase.firestore().collection('Supervision');
const collectionActionPlan= () => firebase.firestore().collection('Action');

// Agregar docs a la colección Supervision
const addSupervision = (data) => {
    collectionSupervision().add(data)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
};

// Leer los docs de la colección
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

// Actualizar estados de la supervisión y datos relevantes
const updateDataOfSupervision = (id, relevantData, stateSupervision, stateAction) => collectionSupervision().doc(id).update({
  relevantData, stateSupervision, stateAction,
});

// Actualizar estados de la supervisión(stateSupervision, stateAction)
const updateStateAction = (id, stateAction) => collectionSupervision().doc(id).update({
  stateAction,
});

// Agregar docs a la colección Plan de acción - Actionplan
const addActionPlan = (data) => {
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
    updateDataOfSupervision,
    updateStateAction,
    addActionPlan,
}