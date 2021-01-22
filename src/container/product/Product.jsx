import React, {Component, Fragment} from "react";
import CardProduct from "../cardproduct/CardProduct";
import "./Product.css";

class Product extends Component{
    state = {
        order: 0,
        name : 'Setren',
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://img.icons8.com/dotty/344/online-shopping--v2.png" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange = {(value)=> this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}

export default Product