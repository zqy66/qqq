import React from "react";
import "./index.css";

class Film extends React.Component{
	constructor(props){
			super(props);

	}
	render(){
		return <div>
			<div id="box1">
				<ul>
					<li>
						<img src="http://img5.taoche.cn/99/0318000feg.png"/>
						<p>快速卖车</p>
					</li>
					<li>
						<img src="http://img5.taoche.cn/99/0318000feh.png"/>
						<p>车辆估价</p>
					</li>
					<li>
						<img src="http://img5.taoche.cn/99/0318000bke.png"/>
						<p>置换买车</p>
					</li>
					<li>
						<img src="http://img5.taoche.cn/99/0318000bkd.png"/>
						<p>车源收藏</p>
					</li>
				</ul>
			</div>
		</div>
	}
}

export default Film