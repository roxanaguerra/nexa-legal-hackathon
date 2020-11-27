import React, { useState, useEffect }from 'react';
import firestore from '../controller/firestore';

// Importando componentes
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Subtitle from '../components/Subtitle';
import NewActionPlan from '../components/NewActionPlan';
import TextIndication from '../components/TextIndication';
import ListSupervision from '../components/ListSupervision';
import CreateActionPlan from '../components/CreateActionPlan';
import iconHoja from '../assets/images/icon-hoja.png'

const ActionPlan = () => {

    const [dataSupervisions, setDataSupervisions] = useState([]);
    const [stateSupervision, setStateSupervision] = useState('FINALIZADA');
    const [seeSupervision, setSeeSupervision] = useState(false);
    const [infoSupervision, setInfoSupervision] = useState({});

    useEffect(() => {
        firestore.getSupervision(stateSupervision, (supervisionList) => {
            setDataSupervisions(supervisionList);
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
                    <Subtitle text={infoSupervision.unidad} info={infoSupervision.typeSupervision} />
                    <CreateActionPlan infoSupervision={infoSupervision}/> 
                    {/* Supervisión {infoSupervision.typeSupervision} */}
                    {/* <NewActionPlan dataSupervisions={infoSupervision}/> */}
                </>
            :
                <>
                    <Header name="PLAN DE ACCIÓN" />
                    <Subtitle text="Gestiona tareas y crea soluciones" />
                    <TextIndication 
                        image={iconHoja}
                        text="Crea un plan de acción y SUMA tu compromiso con nuestro medio ambiente." />
                    {
                        dataSupervisions.length == 0 ? 
                            <div className="container-listCards-supervisions">
                                <TextIndication 
                                    image={iconHoja}
                                    text="Aún no hay requerimientos de plan de acción." />
                            </div>
                        :
                        <div className="container-listCards-supervisions">
                            <p className="fq">Lista de requerimientos</p>
                            {
                                dataSupervisions.map((sup, index) => (
                                    <ListSupervision
                                        key={'cardSup' + index}
                                        setSeeSupervision={setSeeSupervision}
                                        dataSupervisions={sup}
                                        setInfoSupervision={setInfoSupervision}
                                        type="Plan de acción:" />
                                ))
                            }
                        </div>
                    }  
                </>
            }      
            <NavBar />
        </>
    )
};

export default ActionPlan;