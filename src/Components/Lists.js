import ListGroup from 'react-bootstrap/ListGroup';

function handlerOne() {
    alert('You clicked the first item in the list');
};

function handlerTwo() {
    alert('You clicked the first item in the list');
};

function EgList() {
    return (
        <ListGroup>
            <ListGroup.Item action onClick={handlerOne}>Item one</ListGroup.Item>
            <ListGroup.Item action onClick={handlerTwo}>Item two</ListGroup.Item>
            <ListGroup.Item action href="#link3">Item three</ListGroup.Item>
            <ListGroup.Item action href="#link4">Item four</ListGroup.Item>
        </ListGroup>
    );
}

export default EgList;