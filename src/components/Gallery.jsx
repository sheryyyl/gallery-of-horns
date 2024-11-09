import HornedBeast from "./HornedBeast";
import data from "../data.json/"
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
function Gallery() {

    return (
        <>
            <Container>
                <Row xs={2} sm={3} md={4} lg={5}>
                    {
                        data.map(beast => (

                            <HornedBeast
                                key={beast._id}
                                title={beast.title}
                                imageUrl={beast.image_url}
                                description={beast.description}
                            />

                        ))
                    }
                </Row>

            </Container>

        </>

    )
}
export default Gallery;