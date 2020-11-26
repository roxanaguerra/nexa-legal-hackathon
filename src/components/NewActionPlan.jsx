import React from 'react'


const NewActionPlan = () => {
    return (
        <div>
            <Form className="form-container">
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Detallar tarea" onChange={handleInputChange} name="detailTask" value={newSupervision.observations} required />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" name="typeSupervision" onChange={handleInputChange} value={newSupervision.typeSupervision} required >
                        <option value="areaResponsable">Área Responsable</option>
                        <option value="regular">Regular</option>
                        <option value="especial">Especial</option>
                    </Form.Control>
                </Form.Group>

            </Form>
        </div>
    )
}

export default NewActionPlan;