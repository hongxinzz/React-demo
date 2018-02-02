import React  from 'react';
import jsonp from 'jsonp';
export default class MessageForm extends React.Component{
        constructor(){
            super();
            this.state={
                val:'',
                contontP:'',
                valList:'',
                index:-1
            }
        }

    handleSubmit(e){
        e.preventDefault();

        let content = this.content.value;
        let username = this.name.value;
        let time = new Date().toLocaleString();
        console.log(name,content)
        if(content==""&&username==""){
              this.setState({
                coontontP:'名字或者内容不可以为空'
              })
        }else{
          this.props.addMessage({username,content,time})
        }
    }

    handleSore(){
      let key = this.state.val;
      this.key = key;
        jsonp(`https://www.baidu.com/su?wd=${key}`,{
            param:"cb"
        },(err,data)=>{
          console.log(data.s)
            this.setState({
                valList:data.s
            })
        })
    }

    onChange(event){
        this.setState({
            val: event.target.value
        });
        console.log(this.state.val)
    }

    handleKeyDown(event){
     
      let code = event.keyCode;
      console.log(code)
      if(code == 38 || code == 40 ||code == 13){
        console.log(this.state.valList)
        let index = this.state.index;
          if (code == 38) {
            index --;
            if(index == -2){
                index = this.state.valList.length;
            }
          }else if(code == 40){
            index ++;
            if(index == this.state.valList.length){
              index = -1;
            }
          }
          this.setState({
            index
          })
      }
    }
    keyEnter(event){
      if(event.keyCode == 13){
        console.log(event.target.innerText)
        window.location.href = `https://www.baidu.com/s?wd=${1}`
      }
    }
    render(){
        const {valList} = this.state;
        const valLeng = valList.length
        ?
        valList.map((word,index)=>(
            <li key={index} className="pcImages" className={ index === this.state.index ? 'list-group-item active':'list-group-item'}>
                {word}
            </li>
        ))
        :
        '还没有搜索哦~'
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                       <label for="name">您的名字 : </label>
                       <input type="text" className="form-control" id="exampleInputEmail1 " placeholder="输入您的名字" ref={ref=>this.name=ref}/>
                       
                     </div>
                     <div className="form-group">
                       <label for="name">发布内容 : </label>
                       <input type="text" className="form-control" id="exampleInputEmail1" placeholder="今天想说点什么呢"ref={ref=>this.content=ref}/>
                     </div>
                     <button className="btn btn-danger ">发布</button>
                     <p style={{color:'red'}}>{this.state.coontontP}</p>
                </form>
                <div className="form-group" style={{marginTop:15}}>
                       <label for="name">搜索 : </label>
                       <input type="text" className="form-control" id="exampleInputEmail1 " placeholder="想要查什么呢？"
                        onChange={this.onChange.bind(this)} 
                        onKeyDown={this.handleKeyDown.bind(this)} 
                        value={this.state.val[this.state.index.innerText]} 
                        onKeyUp={this.keyEnter.bind(this)}/>
                       <button onClick={this.handleSore.bind(this)} className="btn btn-primary" style={{marginTop:15}}>搜索</button>
                    <div className="panel-body">
                      <ul className="list-group">
                        {valLeng}
                      </ul>
                    </div>
                </div>
            </div>
        )
    }
}