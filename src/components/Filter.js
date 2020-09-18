import React from 'react';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const years = [
    2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020
]

export default props => {
  return <Card className="filter">
  <Card.Body>
    <Card.Title>Filters</Card.Title> 
        <p className="text-center"><u>Launch Year</u></p>
        <Row className="text-center">
            {years.map((year, index) => 
            <Col lg={6} md={6} sm={6} xs={6} className="year-filter" key={index} >
                <Button variant="success" onClick={e=>props.filterYear(year)}>{year}</Button>
            </Col>
            )}          
        </Row>

        <p className="text-center launch-success"><u>SuccessFull Launch</u></p>
        <Row className="text-center">
            <Col lg={6} md={6} sm={6} xs={6} className="year-filter"  >
                <Button variant="success" onClick={e=>props.launchFilter(true)}>True</Button>
            </Col> 
            <Col lg={6} md={6} sm={6} xs={6} className="year-filter"  >
                <Button variant="success" onClick={e=>props.launchFilter(false)}>False</Button>
            </Col>      
        </Row>
        <p className="text-center launch-success"><u>SuccessFull Landing</u></p>
        <Row className="text-center">
            <Col lg={6} md={6} sm={6} xs={6} className="year-filter"  >
                <Button variant="success" onClick={e=>props.landingFilter(true)}>True</Button>
            </Col> 
            <Col lg={6} md={6} sm={6} xs={6} className="year-filter"  >
                <Button variant="success" onClick={e=>props.landingFilter(true)}>False</Button>
            </Col>      
        </Row>
        
  </Card.Body>
</Card>;
}