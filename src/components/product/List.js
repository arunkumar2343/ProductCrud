import React, { Component } from 'react';
import ListItem from './listitem.js';
import { connect } from 'react-redux';
class List extends Component{
render(){
return(
   <table cellspacing="0" className="product-list">
   <tr>
   <th>Name</th>
   <th>Price</th>
   <th>Discount</th>
   <th>Description</th>
   <th>Action</th>
   </tr>
   {
   this.props.productDataReducer && this.props.productDataReducer.map((elem)=>{
       return <ListItem data={elem}/>
       })
   }
   </table>
)
}
}
// Take value from store
function mapStateToProps(state) {
    return {
        productDataReducer: state.productDataReducer,
    };
}
export default connect(mapStateToProps, null)(List);