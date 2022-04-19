import React, { Component } from 'react';

class TOC extends Component {
    render() {
        let lists = [];
        let i = 0;
        let data = this.props.data;
        while(i < data.length){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
            i = i + 1;
        }
      return (
        <nav>
              <ul>
                  {lists}
              </ul>
          </nav>
      );
    }
  }

  export default TOC;