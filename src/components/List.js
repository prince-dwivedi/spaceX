import React from 'react';
import { Bootstrap, Grid, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


export default props => {
    return <Row>
        {props.program != undefined && props.program.map((value, key) => 
            <Col lg={3} md={3} sm={12} xs={12} className="year-filter" key={key} >
                <Card >
                    <Card.Body>
                        <Image src={value.links.mission_patch} rounded width="100%" alt={value.mission_name}/>
                        <p className="list-heading">{value.mission_name}</p>
                        <p><b>Missions Ids:</b></p>
                        <ul>
                        {value.mission_id.map((ids, index) => 
                            <li key ={index}>{ids}</li>
                        )}  
                        </ul>
                        <p><b>Launch Year:</b> {value.launch_year}</p>
                        <p><b>Successfull Launch:</b> {value.S?"true":"false"}</p>
                        <p><b>Successfull Landing:</b> false</p>
                    </Card.Body>
                </Card>
            </Col>
            )
        }
    </Row>
}