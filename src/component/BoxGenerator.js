import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const BoxGenerator = () => {

    const [boxState, setBoxState] = useState({
        boxes: [],
        color: '',
        width: '',
        height: '',
})
const handlerOnChange = (e) => {
    setBoxState({...boxState, [e.target.name]: e.target.value})
}
const submitHandler = (e) => {
    e.preventDefault();
    boxState.boxes.push(boxState);
    setBoxState({...boxState});
    setBoxState({
        boxes: boxState['boxes'],
        color: '',
        width: '',
        height: '',
    })
}

    return (
<div>
    <h1>Generador de Cajas de Colores ☺️</h1>
<Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Color:</Form.Label>
    <Form.Control type="text" name="color" placeholder="Agrega el color" value={boxState.color} onChange={handlerOnChange}/>
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Ancho:</Form.Label>
    <Form.Control type="text" name="width" placeholder="Agrega el ancho" value={boxState.width} onChange={handlerOnChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Alto:</Form.Label>
    <Form.Control type="text" name="height" placeholder="Agrega el alto" value={boxState.height} onChange={handlerOnChange} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Crea tu caja de Color
  </Button>
</Form>
{
    boxState.boxes.map(
        (boxes, i) =>
        <div key= {i} style={{
            background: boxes.color,
            width: boxes.width,
            height: boxes.height,
            display:"inline-block"}}>{boxes.color}
        </div>
    )
}
</div>
    )
}
export default BoxGenerator;