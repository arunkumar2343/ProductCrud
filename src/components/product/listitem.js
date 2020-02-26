import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {ajaxCall} from '../../components/common/Common';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {productDataAction} from '../../store/actions';
class ListItem extends Component{
constructor(props){
super(props);
this.state={
showLoader:false
}
}
getFullData(){
let apiURL="http://localhost:3001/product";
let reqObj = {
            method:"get",
            url:apiURL,
        }
this.setState({
     showLoader:true
     })
ajaxCall(reqObj).then((res) => {
    this.props._productDataAction(res.data);
  this.setState({
       showLoader:false
       })
 }).catch((error) => {
    this.setState({
     showLoader:false
     })
 });
}
removeItem(){
let apiURL="http://localhost:3001/product";
const {id}=this.props.data;
if(id){
apiURL+='/'+id
}
let reqObj = {
            method:"delete",
            url:apiURL
        }
this.setState({
     showLoader:true
     })
ajaxCall(reqObj).then((res) => {
   if(res.status === 200){
   this.getFullData();
   }
 }).catch((error) => {
    this.setState({
     showLoader:false
     })
 });
}
render(){
const {name,price,discount,desc,id}=this.props.data;
return(
   <React.Fragment>
   <tr>
   <td>{name}</td>
   <td>{price}</td>
   <td>{discount}</td>
   <td>{desc}</td>
   <td><Link to={'/product/update/'+id}>Edit</Link><a href="/" onClick={this.removeItem.bind(this)}>Remove</a></td>
   </tr>
   {
       this.state.showLoader && (<div className="hk-loader-default"><div></div></div>)
    }
    </React.Fragment>
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
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
