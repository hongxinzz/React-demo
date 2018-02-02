var React = require('react');
var ReactDOM = require('react-dom');

import MessageList from './components/MessageList.js'
import 'antd/dist/antd.css';

class Index extends React.Component{
    render(){
        return(
            <div className="container">
                <MessageList />
            </div>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('example'))