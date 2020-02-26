import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';

const Product = Loadable({
  loader: () => import(/* webpackChunkName: "Product", webpackPrefetch: true */ './components/product'),
  loading: () => { return '' }
});
const AddProduct = Loadable({
  loader: () => import(/* webpackChunkName: "AddProduct", webpackPrefetch: true */ './components/product/add'),
  loading: () => { return '' }
});

const UpdateProduct = Loadable({
  loader: () => import(/* webpackChunkName: "UpdateProduct", webpackPrefetch: true */ './components/product/update'),
  loading: () => { return '' }
});

class Routes extends Component{
 render(){
  return(
    <div className="App">
    <Router>

    <Header/>
    <main className="content-area">
    <Switch>
    <Route exact path='/' component={Product} key={new Date()}/>
    <Route exact path='/product/add' component={AddProduct} key={new Date()}/>
    <Route exact path='/product/update/:id' component={UpdateProduct} key={new Date()}/>
    </Switch>
    </main>
    <Footer/>
    </Router>
    </div>
  )
 }
}
export default Routes;