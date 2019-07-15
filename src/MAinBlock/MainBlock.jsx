import React from 'react';
import classes from './MainBlock.module.css';
import Element from './Element/Element.jsx';

class MainBlock extends React.Component {
	constructor(props) {
	  	super(props);
		var a, b, M=[];
		a = 10;
		b = 10;
		for(var i=0; i<a; i++) {
	   		M[i] = new Array(b);
		}
		for(var i=0; i<a; i++) {
			for(var j=0; j<b; j++) {
	   			M[i][j] = Math.floor(Math.random()*4);
			}
		}
		this.state = {
	  		Matrix: M,
	  		arr: []
	  	};
	}
	findElems = (r,c,val) =>{
		const Matr = this.state.Matrix;
		var arr = this.state.arr;
		arr.push({row:r, col:c});
		if(Matr[r] !== undefined){
			if(Matr[r][c-1] !== undefined){
				if(Matr[r][c-1]===val){
					if(!arr.find((elem)=>{
											if((elem.row == r)&&(elem.col == c-1)) return true;
											else return false;
										}))
					{
						this.findElems(r,c-1,val);
					}
				}
			}
		}
		if(Matr[r] !== undefined){
			if(Matr[r][c+1] !== undefined){
				if(Matr[r][c+1]===val){
					if(!arr.find((elem)=>{
							if((elem.row == r)&&(elem.col == c+1)) return true;
							else return false;
						})){
						this.findElems(r,c+1,val);
					}
				}
			}
		}
		if(Matr[r-1] !== undefined){
			if(Matr[r-1][c] !== undefined){
				if(Matr[r-1][c]===val){
					if(!arr.find((elem)=>{
							if((elem.row == r-1)&&(elem.col == c)) return true;
							else return false;
						})){
						this.findElems(r-1,c,val);
					}
				}
			}
		}
		if(Matr[r+1] !== undefined){
			if(Matr[r+1][c] !== undefined){
				if(Matr[r+1][c]===val){
					if(!arr.find((elem)=>{
							if((elem.row == r+1)&&(elem.col == c)) return true;
							else return false;
						})){
						this.findElems(r+1,c,val);
					}
				}
			}
		}
	}
	changeElem = () =>{
		var NewMatr = this.state.Matrix;
		var arr = this.state.arr;
		var value = NewMatr[arr[0].row][arr[0].col];
		for(var i = 0; i < arr.length; i++){
			var newval = Math.floor(Math.random()*4);
			while(newval == value){
				newval = Math.floor(Math.random()*4);
			}
			NewMatr[arr[i].row][arr[i].col] = newval;
		}
		this.setState({
			Matrix: NewMatr,
			arr: []
		})
	}
	callBack = (x) =>{
		this.findElems(x.state.RowIndex,x.state.ColumnIndex,x.state.value);
		this.changeElem();
		// var newvalue = Math.floor(Math.random()*4);
		// var NewM = this.state.Matrix;
		// NewM[x.state.RowIndex][x.state.ColumnIndex] = newvalue;
		// this.M = NewM;
		// this.setState({
		// 	Matrix: this.M
		// });
	}
	render(){
		const Matr = this.state.Matrix;
		const JSXMatrix = Matr.map((row, index)=>
			<div className = {classes.row} key={`row${index}`}>
				{row.map((elem, index, array)=>
					<Element key={`row${Matr.indexOf(array)}elem${index}`} 
							 id={`${Matr.indexOf(array)}.${index}`}
					         value = {Matr[Matr.indexOf(array)][index]}
					         callBack = {this.callBack}
					         RowIndex = {Matr.indexOf(array)}
					         ColumnIndex = {index}
					/>
				)}
			</div>
		);
		return (
			<div className={classes.main}>
				{JSXMatrix}
			</div>
		);
    }
}

export default MainBlock;