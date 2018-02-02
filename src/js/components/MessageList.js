import React from 'react';
import Message from './Message.js';
import MessageForm from './MessageForm.js';

export default class MessageList extends React.Component{
    constructor(){
        super();
        this.state = {
            message:[]
        }
    }
    addMessage(message){
        let messages = [...this.state.message,message];
        this.setState({
            message:messages
        })
    }
    handelDelete(index){
        this.state.message.splice(index,1);
        this.setState({
            message:[...this.state.message]
        })
    }
    render(){
        return(
            <div className="col-md-8 col-md-offset-2" style={{marginTop:66}}>
                <div className="panel panel-default">
                <div className="panel-heading text-center">
                    留言板Demo
                </div>
                  <div className="panel-body">
                    <Message message={this.state.message} handelDelete={this.handelDelete.bind(this)}/>
                  </div>
                  <div className="panel-footer" >
                    <MessageForm addMessage={this.addMessage.bind(this)} />
                  </div>
                </div>
            </div>
        )
    }
}