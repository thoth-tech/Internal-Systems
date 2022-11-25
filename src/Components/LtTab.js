import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Accord from './Accordion';

const LtTab = () => {
    return (
        <Container className='card'> {/* Tab nav */}
            <Row className="justify-content-center">
                <Tabs justify variant="pills" defaultActiveKey="Tab1" className="mb-3">
                    <Tab eventKey="Tab1" title="Monday">
                        <div>
                            <p>Select your preferred sorting method:</p>
                            <Accord />
                        </div>
                    </Tab>
                    <Tab eventKey="Tab2" title="Tuesday">
                        <div>
                            <p>Select your preferred sorting method:</p>
                            <Accord />
                        </div>
                    </Tab>
                    <Tab eventKey="Tab3" title="Wednesday">
                        <div>
                            <p>Select your preferred sorting method:</p>
                            <Accord />
                        </div>
                    </Tab>
                    <Tab eventKey="Tab4" title="Thursday">
                        <div>
                            <p>Select your preferred sorting method:</p>
                            <Accord />
                        </div>
                    </Tab>
                    <Tab eventKey="Tab5" title="Friday">
                        <div>
                            <p>Select your preferred sorting method:</p>
                            <Accord />
                        </div>
                    </Tab>
                    <Tab eventKey="Tab6" title="Saturday">
                        <div>
                            <p>Select your preferred sorting method:</p>
                            <Accord />
                        </div>
                    </Tab>
                    <Tab eventKey="Tab7" title="Sunday">
                        <div>
                            <p>Select your preferred sorting method:</p>
                            <Accord />
                        </div>
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    );
};

export default LtTab;
