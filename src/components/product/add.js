import React, { Component } from 'react';
import ProductData from './productdata.js';

class AddProduct extends Component{
constructor(props){
super(props);
this.state={
  name:null,
  price:null,
  discount:null,
  description:null,
  id:null
}
}
render(){
return(
<div className><ProductData/></div>
)

}
}

export default AddProduct;