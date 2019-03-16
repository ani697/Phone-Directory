import React,{Component} from 'react';
import './Directory.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Directory extends Component{
  state = {
    Flag:false
  }

  render(){
    const  Display = () => {
        console.log('Counter '+this.props.ctr)
        return this.props.Details.map((Detail,index) => {
          return (
                    <span id="Anothermain" key={index}>
                      <p id="Myname">{Detail.Myname}</p>
                      <p id="Mynumber">{Detail.Mynumber}</p>
                      <p id="MyRemove"><button id="Inner" onClick={()=> this.props.onDelete(index) }></button></p>
                    </span>
                )
        });
      }

    return(
      <div className="content">
          <header id="head">PHONE DIRECTORY</header>
          <p id="Button"><Link to={'/Add'} id="Switch"><button type="button"  id="Switch">Add</button></Link></p>
          <main id="main" >
            <p id="name">NAME</p>
            <p id="phone">PHONE NUMBER</p>
            <p id="Remove">REMOVE</p>
          </main>
          {Display()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    Details:state.Details,
    ctr:state.Counter
  //  Mynumber:state.Details.Mynumber
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onDelete : (index) => dispatch({type:'DELETE' , index:index})
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Directory);
