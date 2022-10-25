import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: "welcome",
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:"Welcome", desc:"Hello React!!"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for infotmation'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    let _title, _desc = null;

    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;

      let i = 0;
      while(i<this.state.contents.length){
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i+=1;
      }
    }

  return (
    <div className="App">
      <Subject title= {this.state.subject.title} sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({
            mode: "welcome"
          })
        }.bind(this)} >
      </Subject>
    
      <Subject title="React" sub="For UI"></Subject>
      <TOC data = {this.state.contents} onChangePage={function(id){
        this.setState({
          mode: "read",
          selected_content_id:Number(id)
        })
      }.bind(this)} ></TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
    );
  }
}
export default App;
