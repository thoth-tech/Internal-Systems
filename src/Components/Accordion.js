import Accordion from 'react-bootstrap/Accordion';
import EgList from './Lists';

function Accord() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>in Numbers</Accordion.Header>
                <Accordion.Body><EgList /></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>by Titles</Accordion.Header>
                <Accordion.Body>vbv ggghbb nnmm jj 67y hhhh nbvga.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
            <Accordion.Header>by Nature</Accordion.Header>
            <Accordion.Body>vbv ggghbb nnmm jj 67y hhhh nbvga.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
                <Accordion.Header>with Dates</Accordion.Header>
                <Accordion.Body>vbv ggghbb nnmm jj 67y hhhh nbvga.</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Accord;