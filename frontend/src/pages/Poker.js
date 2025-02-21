import {
    Button,
    Container,
    Col,
    Collapse,
    Row
} from 'react-bootstrap';

import { useState } from 'react';
import Cookies from 'universal-cookie';

import Cards from '../components/Cards';
import Table from '../components/Table';

export default function Poker() {
    const cookies = new Cookies();
    const [voted, setVoted] = useState(false);
    const [choice, setChoice] = useState("...");
    const [ended, setEnded] = useState(false);
    const [open, setOpen] = useState(false);
    const placeholder = (choice === "..." ? "🤔" : "✅");

    const endVote = () => {
        setEnded(true);
        setOpen(false);
        if (choice === "...") setChoice("☕️");
    }

    const nextVote = () => {
        setChoice("...");
        setEnded(false);
        setOpen(true);
    }

    return (
        <>
        <h1>Planning Poker</h1>
        <Container className="my-3">
            <Row>
                <Col>
                    <Button variant="primary" onClick={() => setOpen(!open)} disabled={ended}>Pokern</Button>
                </Col>
                {cookies.get('admin') ?
                    <>
                    <Col>
                        <Button variant="danger" onClick={endVote} disabled={ended}>Karten zeigen</Button>
                    </Col>
                    <Col>
                        <Button variant="warning" onClick={nextVote} disabled={!ended}>Neue Runde</Button>
                    </Col>
                    </>
                : null}
            </Row>
            <Row className="my-3">
                <Col>
                    <h3>Deine Auswahl: {choice}</h3>
                </Col>
            </Row>
            <Collapse in={open}>
                <Row>
                    <Col>
                        <Cards setChoice={setChoice} />
                    </Col>
                </Row>
            </Collapse>
        </Container>
        <hr className="mx-5" />
        <Container className="my-3">
            <h2>Ergebnis</h2>
                <Table choice={ended ? choice : placeholder} />
        </Container>
        </>
    )
}