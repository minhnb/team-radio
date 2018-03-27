import * as React from 'react';
import { Component } from 'react';
import './StationBrowser.scss';
import { StationBrowserItemInfo } from '../../../Station';
import { ArrowButton } from "../../../../Components/ArrowButton";
import { element } from "prop-types";

export class StationBrowserForHome extends Component <{}, {}> {
	slideIndex : number = 0;
	constructor (props:any) {
		super(props);
		this.state = {
		element : 'abc',
		};
	}

	render() {
		var itemsArray =[{a: 'aaaaaaaaa'}, {b:'bbbbbbbb'}, {c:'cccccccccc'}];
		var htmlElement = document.createElement('div');
		var htmlElement2 = document.createElement('span');
		htmlElement2.innerText = 'abc';
		htmlElement.appendChild(htmlElement2);
		var element = document.getElementById("station-browser");
		element.appendChild(htmlElement);
		// console.log(htmlElement);
		// this.setState({
		// 	element : htmlElement
		// });
		 // var items = document.createElement("div");

		// var subArray = [];
		// //Create array of seven items
		// for (var i = 0; i < 7; i++) {
		// 	var divSeven = document.createElement("div");
		// 	var singleItem = document.createTextNode('<div className="station-item"><div className="row"><StationBrowserItemInfo/></div><div className="row station-name">');
		// 	divSeven.appendChild(singleItem.);
		// 	// subArray.push(
		// 	// 	<div className="station-item">
		// 	// 		<div className="row">
		// 	// 			<StationBrowserItemInfo/>
		// 	// 		</div>
		// 	// 		<div className="row station-name">
		// 	// 			Station {i}
		// 	// 		</div>
		// 	// 	</div>);
		// 	console.log("singleItem: "+singleItem);
		// 	console.log("divSeven: "+divSeven);
		// 	items.appendChild(divSeven);
		// }
		// for (var i = 0; i < 7; i++) {
		// 	console.log("child i: "+items.childNodes[i]);
		// 	itemsArray.push(items.childNodes[i]);
		// }
		// for(var i = 0; i<3; i++){
		// 	var group = document.createElement("div");
		// 	for(var j=0; j<7;j++){
		// 		group.appendChild((subArray[j] as any));
		// 	}
		// 	items.appendChild(group);
		// }
		// for (var i = 0; i < 14; i++) {
		// 	var divSevenItems =  document.createElement("div");
		// 	divSevenItems.innerHTML = subArray.toString();
		// 	items.appendChild(divSevenItems);
		// 	console.log("Items is: "+items);
		// }

		// document.getElementById("station-browser").appendChild(items);


		return (
			<div className="container-fluid text-center browser">
				<div className="cover-div">
					<ArrowButton/>
					<div className="text-center list-station" id="station-browser">
					</div>
				</div>
			</div>
		);
  }

  componentDidMount () {
	  this.slider();
  }

	slider() {
		// var i;
		// var x: HTMLCollectionOf<any> = document.getElementsByClassName("station-item");
		// for (i = 0; i < x.length; i++) {
		// 	x[i].classList.remove("slide");
		// 	x[i].classList.remove("slideOut");
		// 	x[i].className += " slideOut";
		// }
		// this.slideIndex++;
		// if (this.slideIndex > x.length) {
		// 	this.slideIndex = 1
		// }
		// x[this.slideIndex - 1].classList.remove("slideOut");
		// x[this.slideIndex - 1].style.display = "inline";
		// x[this.slideIndex - 1].className += " slide";
		// setTimeout(this.slider, 1500);
	}

}