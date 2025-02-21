import {
    Card,
    Col,
    Row
} from 'react-bootstrap';

import { useState } from 'react';
import Cookies from 'universal-cookie';

export default function Table({choice, ...props}) {
    const cookies = new Cookies();
    return (
        <>
        <Row>
            {choice ? 
                <Col className="my-2">
                    <Card >
                        <Card.Body>
                            <Card.Title style={{fontSize: "4rem"}}>{choice}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            {cookies.get('name')}
                        </Card.Footer>
                    </Card>
                </Col>
            : null}
        </Row>
        </>
    )
}