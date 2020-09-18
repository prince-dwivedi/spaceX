import React, { Component } from 'react';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Filter from './components/Filter';
import List from './components/List';
import { GetList } from "./api/index";
import './App.css';

const Limit = 100;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programList:this.props.data||{},
      selectedYear:"",
      filterSuccesfullLaunch:null,
      filterSuccesfullLanding:null,


    }
    this.filterYear = this.filterYear.bind(this);
    this.hadleLaunchFilter = this.hadleLaunchFilter.bind(this);
    this.hadleLandingFilter = this.hadleLandingFilter.bind(this);
  }
  componentDidMount() {    
    this.getProgramData();
  }
 
  getProgramData(){
    var query = "?limit="+Limit;
    if(this.state.selectedYear != ""){
      query += "&launch_year="+this.state.selectedYear
    }
    if(this.state.filterSuccesfullLaunch != null){
      query += "&launch_success="+this.state.filterSuccesfullLaunch
    }
    if(this.state.filterSuccesfullLanding != null){
      query += "&land_success="+this.state.filterSuccesfullLaunch
    }
    GetList(query)
    .then((response) => {
      this.setState({programList:response})
    })
    .catch((error) => console.log(error));
  }

  filterYear(year){
    console.log(year);
    this.setState({selectedYear:year},()=>{
      this.getProgramData();
    });
  }
  hadleLaunchFilter(value){
    this.setState({filterSuccesfullLaunch:value},()=>{
      this.getProgramData();
    });
  }
  hadleLandingFilter(value){
    this.setState({filterSuccesfullLanding:value},()=>{
      this.getProgramData();
    });
  }



  render() {
    const list = this.state.programList.length >= 1 ? this.state.programList:this.props.data;
    
    return (      
      <Container fluid> 
          <h4>SpaceX Launch Programs</h4>
        <Row>
          <Col lg={3} md={3} sm={12} xs={12}>
            <Filter
             filterYear={this.filterYear} 
             launchFilter={(e)=>this.hadleLaunchFilter()}
             landingFilter={(e)=>this.hadleLandingFilter()}></Filter>
          </Col>
          <Col lg={9} md={9} sm={12} xs={12} className="list-section">                        
            <List program = {list}></List>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>                        
            <p className="text-center ">Developed By Prince Dhar Dwivedi</p>
          </Col>
        </Row>
      </Container>

    )
  }
}

export default Home
