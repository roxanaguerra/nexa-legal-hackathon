import React, { useState, useEffect }from 'react';
import firestore from '../controller/firestore';
import { useHistory } from 'react-router-dom';
import userPhoto from '../assets/images/user-photo.jpg';

// Importando componentes
import NavBarPlan from '../components/NavBarPlan';
import Header from '../components/Header';
import Subtitle from '../components/Subtitle';
import TextIndication from '../components/TextIndication';
import ListSupervision from '../components/ListSupervision';
import CreateActionPlan from '../components/CreateActionPlan';
import iconHoja from '../assets/images/icon-hoja.png'

const ActionPlan = () => {
    const history = useHistory();

    const [dataSupervisions, setDataSupervisions] = useState([]);
    const [stateSupervision, setStateSupervision] = useState('FINALIZADA');
    const [seeSupervision, setSeeSupervision] = useState(false);
    const [infoSupervision, setInfoSupervision] = useState({});

    useEffect(() => {
        firestore.getSupervision(stateSupervision, (supervisionList) => {
            setDataSupervisions(supervisionList);
        });
    }, [stateSupervision]);

    const profile = () => {
        history.push('/profile');
    }

    return (
        <>
            { seeSupervision ?
                <>
                    <button onClick={() => setSeeSupervision(false)} className="btn-back">
                        <i className="fas fa-arrow-left btn-back-i" ></i>
                    </button>
                    <img src={userPhoto} alt="Foto usuario" className="icon-user" onClick={profile}/>
                    <Header name="Crear un plan de acción" />
                    <Subtitle text={infoSupervision.unidad} info={infoSupervision.typeSupervision} />
                    <CreateActionPlan infoSupervision={infoSupervision} /> 
                </>
            :
                <>
                    <img src={userPhoto} alt="Foto usuario" className="icon-user"/>
                    <Header name="PLAN DE ACCIÓN" />
                    <Subtitle text="Gestiona tareas y crea soluciones" />
                    <div className="container-text-indication">
                        <TextIndication 
                        image={iconHoja}
                        text1="Crea un plan de acción y " 
                        text2="SUMA "
                        text3="tu compromiso con nuestro medio ambiente." />
                    </div>
                    {
                        dataSupervisions.length == 0 ? 
                            <div className="container-vw">
                                <div className="container-no-supervisions">
                                    <img src={iconHoja} alt="Ícono NEXA" className="icon-nexa"/>
                                    <p>Aún no hay requerimientos de plan de acción.</p>
                                </div> 
                            </div>
                            
                        :
                        <div className="container-listCards-action">
                            <p className="fq">Lista de requerimientos</p>
                            {
                                dataSupervisions.map((sup, index) => (
                                    <ListSupervision
                                        key={'cardSup' + index}
                                        setSeeSupervision={setSeeSupervision}
                                        dataSupervisions={sup}
                                        setInfoSupervision={setInfoSupervision}
                                        type="Plan de acción: " />
                                ))
                            }
                        </div>
                    }  
                </>
            }     
            <NavBarPlan />
        </>
    )
};

export default ActionPlan;