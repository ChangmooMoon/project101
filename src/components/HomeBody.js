import React from 'react';
import _ from 'underscore';

import Idols from './HomeBodyIdols';

class HomeBody extends React.Component {
  render() {
    const idolList = Object.values(_.groupBy(this.props.idolList, 'groupid'));
    const idolCount = _.map(idolList, function (item) {
      return _.reduce(item, function (a, x) {
        return a += x.count;
      }, 0);
    });
    const sortedIdol = _.chain(_.zip(idolList, idolCount))
      .sortBy(item => item[1])
      .map(function (item) {
        return item[0];
      })
      .value()
      .reverse();
    const list = _.map(sortedIdol, function(idol, i){
      return (
        <Idols list={idol} key={i}/>
      )
    })
    return (
      <div className="main">
        <div className="row content idolCard">
          {list}
        </div>
      </div>
    )
  }
}

export default HomeBody;