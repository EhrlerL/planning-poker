import {
    Button,
    Col,
    Container,
    FloatingLabel,
    Form,
    Row
} from 'react-bootstrap';

import { useState } from 'react';
import Cookies from 'universal-cookie';


export default function Name() {
    const cookies = new Cookies();
    const [name, setName] = useState("");
    const submit = (e) => {
        name.trim();
        if (name.startsWith("admin:")) { 
            cookies.set('admin', true, {path: '/'});
            setName(name.slice(6));
        } else {
            cookies.set('admin', false, {path: '/'});
        }
        cookies.set('name', name, {path: '/'});
        window.location.reload();
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Willkommen</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    Wie es scheint, hast du noch keinen Namen eingegeben.
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel label="Name">
                        <Form.Control type="text" placeholder="Name" onInput={e => setName(e.target.value)} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <Button variant="primary" onClick={submit}>Los!</Button>
                </Col>
            </Row>
        </Container>
    )
}