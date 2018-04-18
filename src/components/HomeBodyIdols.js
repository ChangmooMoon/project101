import React from 'react';

import BubbleChart from './HomeBodyIdolsBB';

const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};

class Idols extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false
    }
  }
  toggle(event) {
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  }
  render() {
    let modal=[];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
        <div className="modal-content">
          <div className="card-text-modal">
             <h1 className="rank_text_title">{this.props.i}</h1>
             <h2>{this.props.list[0].group_name_kr}</h2>
             <p>데이터: {this.props.list[0].group_name_kr} <br/> 총맴버: {this.props.list.length}<br/>데뷔년도: {this.props.list[0].debut_year}</p>
              <p className="member-list"><span>맴버별 인기도 순위</span><br/></p>
              {
                this.props.list.map((item,i)=>{
                return(<ol><li><span>{i+1}</span>{this.props.list[i].name}</li></ol>)
                })
              }
          </div>
          <BubbleChart idolData={this.props.list}/>
        </div>
        <div className="modal-bg" onClick={this.toggle}></div>
      </div>
    );
    return (
      <div className="col-4" >
        {modal}
        <div className="girl-idol-card" onClick={this.toggle}>
          <div className="crop">
            <img alt="" src={this.props.list[0].img} />
          </div>
          <div className="card-text">
            <p className="rank_text">{this.props.i}</p>
            <h2>{this.props.list[0].group_name_kr}</h2>
            <p>데이터: {this.props.list[0].group_name}<br /> 총맴버: {this.props.list.length}<br />데뷔년도: {this.props.list[0].debut_year}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Idols;