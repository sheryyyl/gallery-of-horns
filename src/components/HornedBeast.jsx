import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SelectedBeast from './SelectedBeast';

function HornedBeast(props) {
    const [favorites, setFavorites] = useState(0);

    const addFavoritos = () => {
        setFavorites(favorites + 1);
        props.displayAsModal(props.title); 
    };

    return (
        <>
            <Card style={{ width: '18rem' }} onClick={addFavoritos}>
                <Card.Img variant="top" src={props.imageUrl} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="secondary">❤️ {favorites} Favorites</Button>
                </Card.Body>
            </Card>

        </>
    );
}

export default HornedBeast;
