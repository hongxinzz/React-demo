import React  from 'react';

export default class Message extends React.Component{

    render(){
        return(
            <ul className="list-group">
                {
                    this.props.message.map((message,index)=>(
                        <li className="list-group-item" key={index}>
                        {message.username} : {message.content} 
                        <button className="btn btn-danger btn-xs button" onClick={()=>this.props.handelDelete(index)}>删除</button> 
                        <span className="pull-right">{message.time}</span></li>
                    ))
                }
            </ul>
        )
    }
}