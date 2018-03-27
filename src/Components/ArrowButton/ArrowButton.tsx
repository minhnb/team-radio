import * as React from 'react';
import { Component } from 'react';
import './ArrowButton.scss';
import { render } from "react-dom";

class IMyComponentProps {
}

class IMyComponentState {
}

export class ArrowButton extends Component <IMyComponentProps, IMyComponentState>{
    constructor(props: IMyComponentProps) {
        super(props);
        this.state = { rightNextLocation: 7};
        this.scrollRight = this.scrollRight.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
    }

	scrollRight() {
		// this.state = { this.state.rightNextLocation + 7}
	}

    scrollLeft() {
    }

    render() {
        return (
            <div>
                <nav className="nav-circlepop">
                    <a className="prev" onClick={this.scrollLeft}>
                        <span className="icon-wrap"></span>
                    </a>
                    <a className="next" onClick={this.scrollRight}>
                        <span className="icon-wrap"></span>
                    </a>
                </nav>
            </div>
        )
    }
}
