import React from 'react';
import classes from './Element.module.css';


class Element extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	RowIndex: this.props.RowIndex,
	  	ColumnIndex: this.props.ColumnIndex,
	  	type: this.Show(this.props.value),
	  	value: this.props.value
	  };
	}
	Show(num){
		{
			if(num===0) return classes.red;
			if(num===1) return classes.blue;
			if(num===2) return classes.green;
			if(num===3) return classes.yellow;
		}
	}
	render(){
		this.state = {
		  	RowIndex: this.props.RowIndex,
		  	ColumnIndex: this.props.ColumnIndex,
		  	type: this.Show(this.props.value),
		  	value: this.props.value
	  	};
		return(
			<div className = {classes.elem}>				
				<button className = {this.state.type} onClick = {()=>{this.props.callBack(this)}}>
				</button>
			</div>
		);
	}
}
export default Element;