import { useState } from 'react';
import HornedBeast from "./HornedBeast";
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
function Gallery(props) {
    const [cuernos, serCuernos] = useState('');
    const handleFilterChange = (event) => {
        serCuernos(event.target.value);
    };

    const filteredBeasts = cuernos
        ? props.allBeasts.filter(beast => beast.horns === parseInt(cuernos))
        : props.allBeasts;

    return (
        <>
            <Form.Select aria-label="Filtro de cuernos" onChange={handleFilterChange} size='m' className="mb-4 w-50 mx-auto">
                <option value="">¿Cuántos cuernos quieres ver?</option>
                <option value="1">1 cuerno</option>
                <option value="2">2 cuernos</option>
                <option value="3">3 cuernos</option>
                <option value="100">Muchísimos cuernos</option>
            </Form.Select>

            <Container className="py-4">
                <Row xs={2} sm={3} md={4} lg={5} className="g-4">
                    {
                        filteredBeasts.map(beast => (
                            <HornedBeast
                                key={beast._id}
                                title={beast.title}
                                imageUrl={beast.image_url}
                                description={beast.description}
                                displayAsModal={props.displayAsModal}
                            />
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}

export default Gallery;
