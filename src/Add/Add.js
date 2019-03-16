import React, {Component} from 'react';
import './Add.css';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';


class Add extends Component {
  state = {
    name:"",
    number:0,
  }

  NameHandler=(e)=>{
    //console.log(e.target.value);

    this.setState({name:e.target.value});
    //console.log("AnotherName "+this.state.name);
  }
  NumberHandler=(e)=>{
    //console.log(e.target.value);
    this.setState({number:e.target.value});
  }


  render(){
    var Display = null;
    Display = () =>{
      if((this.state.number.length >= 10)&&(this.state.name.trim() !== ""))
      {
        return ( <p id="Link"><Link to={'/Add/'+this.state.name+'/'+this.state.number} ><button id="Submit" type="button" ><input type="Submit"  id="GO" onClick={() => this.props.onAdd(this.state.name,this.state.number)}/></button></Link></p>);
      }
      
    }
    return(
      <div className="content">
        <header id="head">ADD SUBSCRIBER</header>
        <p id="Button"><Link to={'/'} id="Switch"><button type="button"  id="Switch">Back</button></Link></p>
        <main id="Form">
            <p id="Book"></p>
            <p id="Outer"><Link to={'/'} ><button type="button" id="Back"></button></Link></p>
            <span id="Person">
            <input type="text" id="name" placeholder="Name" onChange={this.NameHandler.bind(this)}/>
            </span>
            <br/>
            <span id="Mobile">
            <input type="text" id="number" placeholder="Phone Number" onChange={this.NumberHandler.bind(this)}/>
            </span>
            {Display()}
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onAdd : (name,number) => dispatch({type:'ADDED' ,name:name,number:number })
  };
}

export default connect(null,mapDispatchToProps)(Add);
