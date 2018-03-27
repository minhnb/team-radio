import * as React from 'react';
import { Component } from 'react';
import './StationBrowser.scss';
import { StationBrowserItemInfo } from '../../../Station';
import { ArrowButton } from "../../../../Components/ArrowButton";

export class StationBrowserForHome extends Component <{}, {}> {
	slideIndex : number = 0;

	render() {
		var items = [];
		for (var i = 0; i < 13; i++) {
			items.push(
				<div className="station-item" id={'{i}'}>
					<div className="row">
						<StationBrowserItemInfo/>
					</div>
					<div className="row station-name">
						Station {i}
					</div>
				</div>);
		}

		return (
			<div className="container-fluid text-center browser">
				{/*<script type="text/javascript">*/}
				{/*var htmlElement = document.getElementById("");*/}
				{/*</script>*/}
				<div className="cover-div">
					<ArrowButton/>
					<div className="text-center list-station" id="station-browser">
						{items}
					</div>
				</div>
			</div>
		);
  }

  componentDidMount () {
	  this.slider();
  }

	slider() {
		var i;
		var x: HTMLCollectionOf<any> = document.getElementsByClassName("station-item");
		for (i = 0; i < x.length; i++) {
			// x[i].classList.remove("slide");
			// x[i].classList.remove("slideOut");
			// x[i].className += " slideOut";
		}
		this.slideIndex++;
		if (this.slideIndex > x.length) {
			this.slideIndex = 1
		}
		// x[this.slideIndex - 1].classList.remove("slideOut");
		// x[this.slideIndex - 1].style.display = "inline";
		// x[this.slideIndex - 1].className += " slide";
		setTimeout(this.slider, 1500);
	}

}