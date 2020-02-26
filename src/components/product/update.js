import React, { Component } from 'react';
import {ajaxCall} from '../../components/common/Common';
import ProductData from './productdata.js';

class UpdateProduct extends Component{
constructor(props){
super(props);
this.state={
pageLoaded:false,
itemData:null
}
}
componentDidMount(){
let { id } = this.props.match.params;
let apiURL="http://localhost:3001/product";
if(id){
apiURL+='?id='+id
}
let reqObj = {
            method:"get",
            url:apiURL,
        }
ajaxCall(reqObj).then((res) => {
   this.setState({
    itemData:res.data[0],
    pageLoaded:true
   })
 }).catch((error) => {
    this.setState({
     showLoader:false
     })
 });
}
render(){

return(
this.state.pageLoaded ? <ProductData formtype="update" {...this.state.itemData}/> :
<div>This is add product listing sdsdM</div>
)
}
}
export default UpdateProduct;