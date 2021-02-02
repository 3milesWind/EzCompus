import React, { Component } from "react";
import BigProfile from "../Sidebar/icons/BigProfile.png";
import { UserDeleteOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import {Link} from "react-router-dom";

export default class FriendCell extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.friendID = this.data.userEmail;
  }
  state = { visible: false };

  verifyDelete = () => {
    this.setState({
      visible: true,
    });
  };

  handleDelete = () => {
    this.props.onDelete(this.friendID);
    this.setState({ visible: false });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  sendIndividualEmail = () => {
    let chosenString = " " + this.data.userEmail;
    window.open(
      "mailto:" + chosenString
    );
  }

    render() {
        const userName = this.data.userName
        return (
         
            <div>
               <Link to={`/profile/${this.data.userEmail}`}>
                  <img
                      src={!this.data.avatarlink? BigProfile: this.data.avatarlink}
                      style={{
                        //marginTop: "100px",
                        width: "50px",
                        height: "50px",
                        borderRadius: "39px",
                        marginRight:"20px"
                      }}
                      alt="default profile pic"
                    />
                  {userName}
                </Link>
                <div className='friend-buttons'>
                    <div className='friend-button-description'>
                    <Button shape="circle" 
                    icon={<MailOutlined />} 
                    size={"30px"} 
                    onClick={this.sendIndividualEmail}/>
                    </div>
                    <div className='friend-button-description'>
                    <Button shape="circle" 
                        icon={<UserDeleteOutlined />} 
                        size={"30px"} 
                        onClick={this.verifyDelete}
                        />
                        <Modal
                            visible={this.state.visible}
                            onOk={this.handleDelete}
                            onCancel={this.handleCancel}
                         >
                        <p>Confirm to remove <span style={{fontWeight:"bold"}}>{userName}</span> from contact?</p>
                        </Modal>
                    </div>
                </div>
            </div>
            
        )
    }
}
