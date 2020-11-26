import React, { useState, useEffect }from 'react';
import firestore from '../controller/firestore';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Subtitle from '../components/Subtitle';
import NewActionPlan from '../components/NewActionPlan';
import TextIndication from '../components/TextIndication';
import iconHoja from '../assets/images/icon-hoja.png'
import ListSupervision from '../components/ListSupervision';
import CreateActionPlan from '../components/CreateActionPlan';

const ActionPlan = () => {

    const [dataSupervisions, setDataSupervisions] = useState([]);
    const [stateSupervision, setStateSupervision] = useState('pendiente');
    const [seeSupervision, setSeeSupervision] = useState(false);
    const [infoSupervision, setInfoSupervision] = useState({});

    useEffect(() => {
        firestore.getSupervision(stateSupervision, (supervisionList) => {
            setDataSupervisions(supervisionList);
        //   console.log('supervisiones: ', supervisionList);
          // console.log('state2: ', stateOrder);
        });
    }, [stateSupervision]);

    return(
        <>
            { seeSupervision ?
                <>
                    <button onClick={() => setSeeSupervision(false)} className="btn-back">
                        <i className="fas fa-arrow-left btn-back-i" ></i>
                    </button>
                    <Header name="Crear un plan de acción" />
                    {/* <CreateActionPlan infoSupervision={infoSupervision}/> */}
                    <NewActionPlan />
                </>
            :
                <>
                    <Header name="PLAN DE ACCIÓN" />
                    <Subtitle text="Gestiona tareas y crea soluciones" />
                    {
                        dataSupervisions === [] ? 
                            <div className="content-text-indication">
                                <TextIndication 
                                    image={iconHoja}
                                    text="Aún no hay requerimientos de plan de acción." />
                            </div>
                        :
                        <div className="margin-top">
                            <TextIndication 
                                    image={iconHoja}
                                    text="Crea un plan de acción y SUMA tu compromiso con nuestro medio ambiente." />
                            <p className="fq">Lista de requerimientos</p>
                            {
                                dataSupervisions.map((sup, index) => (
                                    <ListSupervision key={'cardSup' + index} setSeeSupervision={setSeeSupervision} dataSupervisions={sup} setInfoSupervision={setInfoSupervision} />
                                ))
                            }
                        </div>
                    }  
                </>
            }      
            <NavBar />
            {/* <NewActionPlan /> */}
        </>
    )
};

export default ActionPlan;