import React, { Component } from 'react';
import {ajaxCall} from '../../components/common/Common';
import List from './List.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {productDataAction} from '../../store/actions';
import {Link
} from "react-router-dom";

class Product extends Component{
constructor(props){
super(props);
this.state={
pageLoaded:false,
items:null,
searchval:''
}
}
search(){
this.setState({
     showLoader:true
     })
let apiURL="http://localhost:3001/product?q="+this.state.searchval;
let reqObj = {
            method:"get",
            url:apiURL,
        }
ajaxCall(reqObj).then((res) => {
    this.props._productDataAction(res.data);
  /* this.setState({
   pageLoaded:true,
   items:res.data
   })*/
 }).catch((error) => {
    this.setState({
     showLoader:false
     })
 });
}
componentDidMount(){
let apiURL="http://localhost:3001/product";
let reqObj = {
            method:"get",
            url:apiURL,
        }
ajaxCall(reqObj).then((res) => {
    this.props._productDataAction(res.data);
  /* this.setState({
   pageLoaded:true,
   items:res.data
   })*/
 }).catch((error) => {
    this.setState({
     showLoader:false
     })
 });
}
render(){
return(
 this.props.productDataReducer ?
 <React.Fragment>
 <div className="topbar">
 <div className="Searchbar">
 <input type="text" placeholder="Search product" onChange={e => this.setState({ searchval: e.target.value })} value={this.state.searchval} />
 <button onClick={this.search.bind(this)}>Search</button>

 </div><nav>
               <ul>
                 <li>
                   <Link to="/product/add">Add product</Link>
                 </li>
               </ul>
             </nav></div>
             {
             this.props.productDataReducer.length > 0 &&
             <List/>}

             </React.Fragment>:<div>No Products Found</div>
)
}
}
// Take value from store
function mapStateToProps(state) {
    return {
        productDataReducer: state.productDataReducer,
    };
}

// Store value
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        _productDataAction: productDataAction
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);