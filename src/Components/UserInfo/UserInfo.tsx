import * as React from 'react';
import { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import './UserInfo.scss';

export class UserInfo extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    let isOpen = this.state.dropdownOpen;
    this.setState({
      dropdownOpen: !isOpen
    });
  }

  render() {
    return (
      <div className="user-info">
        <Dropdown className="drop-down" isOpen={this.state.dropdownOpen} toggle={() => {
          this.toggle();
        }}>
          <DropdownToggle className="nav-link dropdown-toggle button-dropdown-toggle">
            <img className="img-avatar" alt="avatar" src="img/avatars/1.jpg"/>
            <span className="d-md-down-none">Team Radio</span>
          </DropdownToggle>
          <DropdownMenu right className="drop-down-menu">
            <DropdownItem header className="drop-item"><span>Signed in as: </span><br/>{`Team Radio`}</DropdownItem>
            <DropdownItem className="drop-item"><a href="/profile"><i className="fa fa-user"></i>Your profile</a></DropdownItem>
            <DropdownItem className="drop-item"><a href="/"><i className="fa fa-question-circle"></i>Help</a></DropdownItem>
            <DropdownItem className="drop-item"><a href="/"><i className="fa fa-sign-out"></i>Sign out</a></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
