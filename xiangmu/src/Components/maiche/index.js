import React from "react";
import "./index.css";
import axios from "axios";
class Maiche extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div>maiche</div>
	}
	componentDidMount(){
	axios.get("/ajax/brand/gethotbrandmaster.ashx?fprom=1&t=Mon%20Apr%2002%202018%2009:35:03%20GMT+0800%20(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&callback=jQuery18205448050608300556_1522632903597").then(res=>{
			console.log(res.data);
			//console.log(JSON.parse(res.data));
			this.setState({

				
			})
			
		})
	}
}

export default Maiche