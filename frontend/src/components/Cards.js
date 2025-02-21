import { Button, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

export default function Cards({setChoice, ...props}) {
    const cards = ['0', 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, '?', '∞', '☕️'];

    const choose = (card) => {
        console.log(card);
        setChoice(card);
    }
    return (
        <Container className="mx-3">
        <Row>
            {cards.map(card => (
                <Col className="my-2">
                    <Button 
                        key={card} 
                        variant="primary" 
                        onClick={() => setChoice(card)}
                        style={{height: "6rem", width: "6rem", fontSize: "2rem"}}>{card}</Button>
                </Col>
            ))}
        </Row>
        </Container>
    )
}