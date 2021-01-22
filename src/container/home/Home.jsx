import React, {Component, Fragment} from "react";
import BlogPost from "../blogpost/BlogPost";
// import YoutubeComp from "../../component/youtubecomp/youtubecomp";
import LifeCycleComp from "../lifecyclecomp/LifeCycleComp";
import Product from "../product/Product";
import {
    BrowserRouter, //as Router//
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

class Home extends Component{
    state={
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })     
        // }, 15000)

    }
    
    render(){
        return(
            <BrowserRouter>
                {/* <div>
                    <p>Youtube Component</p>
                    <hr/>
                    <YoutubeComp 
                        time="1.23" 
                        title="Awass, anak durhaka menjadi ikan pari !!"
                        desc="Ditonton 1.2jt x, 2 hari yang lalu"
                        />
                    <YoutubeComp 
                        time="4.56" 
                        title="Seventeen: Menunggumu covered by Tami Aulia"
                        desc="Ditonton 3jt x, 1 hari yang lalu"
                        />             
                    <YoutubeComp 
                        time="9.01" 
                        title="5 menit kerajinan, kertas bekas"
                        desc="Ditonton 2.1jt x, 2 jam yang lalu"
                        />           
                    <YoutubeComp 
                        time="12.21" 
                        title="Review Samsung Galaxy Z Flip 2021"
                        desc="Ditonton 100jt x, 10 jam yang lalu"/>                
                    <YoutubeComp />
                    <p>Counter</p>
                    <hr/>
                    <Product/>
                    <p>Life Cycle Component</p>
                    <hr/>
                    {
                        this.state.showComponent 
                        ?
                        <LifeCycleComp/>
                        : null
                    }
                    <p>Blog Post</p>
                    <hr/>
                    <BlogPost/>
                </div> */}

                <div>
                    KOMPONEN GLOBAL
                </div>

                <hr/>

                <Fragment>
                    <Route path="/" exact component={BlogPost}></Route>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/lifecycle" component={LifeCycleComp}></Route>
                </Fragment>

            </BrowserRouter>
            
        )
    }
}

export default Home