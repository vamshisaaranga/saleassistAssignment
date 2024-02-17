import {Component} from "react"
import Header from "../Header"
import ProductItem from "../ProductItem"
import "./index.css"

class Home extends Component {
    state = {activeTab : "",products : []}

    componentDidMount(){
        this.getAllProducts()
    }

    componentDidCatch(){
        this.getAllProducts()
    }

    changingTab = (tab) => {
        this.setState({activeTab : tab})
    }


     getAllProducts = async () => {
        const {activeTab} = this.state
        console.log(activeTab)
        const url = "https://backend17022024-production.up.railway.app/products/";
        const options = {
            method: "GET"
        };
        const response = await fetch(url, options);
        const data = await response.json();
        this.setState({products : data})
         
    }
     

    render(){
       
        const {activeTab,products} = this.state 
        const filteredData = products.filter((each) => (
            each.category === activeTab
        ))
        const data = activeTab === ""?products : filteredData
        
        return(
            <div>
            <Header changeTab = {this.changingTab}/>
            <div className="page-container">
                <div className="images-container">
                    <h1>vamshi</h1>
                </div>
           
            <div className="products-container">
                {
                    data.map((each) => (
                        <ProductItem key={each.id} product={each}/>
                    ))
                }
            </div>
            </div>
            </div>
        )
    }
}

export default Home