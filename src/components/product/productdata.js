import React, { Component } from 'react';
import {ajaxCall} from '../../components/common/Common';
import { withRouter } from "react-router-dom";

class ProductData extends Component{
constructor(props){
super(props);
this.state={
name:this.props.name ? this.props.name : '',
price:this.props.price ? this.props.price : '',
discount:this.props.discount ? this.props.discount : '',
desc:this.props.desc ? this.props.desc : '',
showLoader:false
}
}
saveData(){
let apiURL="http://localhost:3001/product";
let id = this.props.id;
if(id){
apiURL+='/'+id;
}
this.setState({
showLoader:true
})

let reqObj = {
            method:id ? 'put' : "post",
            url:apiURL,
            data:{
                name:this.state.name,
                price:this.state.price,
                discount:this.state.discount,
                desc:this.state.desc
            }
        }
ajaxCall(reqObj).then((res) => {
   //console.log(res,'resss')
   this.setState({
   showLoader:false
   })
   this.props.history.push('/');
 }).catch((error) => {
    this.setState({
     showLoader:false
     })
 });

}
render(){
return(
<React.Fragment>
<div className="product-form">
<div className="form-group">
<label>Name</label>
<input onChange={e => this.setState({ name: e.target.value })} value={this.state.name} type="text" name="productname" />
</div>
<div className="form-group">
<label>Price</label>
<input onChange={e => this.setState({ price: e.target.value })} value={this.state.price} type="number" name="productprice" />
</div>
<div className="form-group">
<label>Discount</label>
<input onChange={e => this.setState({ discount: e.target.value })} value={this.state.discount} type="text" name="productdiscount" />
</div>
<div className="form-group">
<label>Description</label>
<textarea onChange={e => this.setState({ desc: e.target.value })} value={this.state.desc} type="description" name="productdesc"></textarea>
</div>
<div className="form-group">
<button onClick={this.saveData.bind(this)}>{this.props.formtype === 'update' ? 'Update' : 'Add Product'}</button>
</div>

</div>
{
    this.state.showLoader && (<div className="hk-loader-default"><div></div></div>)
 }
 </React.Fragment>
)
}
}
export default withRouter(
    (ProductData)
)