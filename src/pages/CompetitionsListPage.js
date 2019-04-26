import React, { Component } from 'react';
import { connect } from 'react-redux'
import CompetitionCard from '../components/competition/competitionCard';

class CompetitionsListPage extends Component {
  render() {
    const cards = this.props.competitions ? this.props.competitions.map((el, i) => {
      return (
        <CompetitionCard key={i} data={el} />
      )
    }) : "";

    return (
      <div>
        {cards}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    competitions: [...state.competitions.competitions ]
  }
}


export default connect(mapStateToProps, {})(CompetitionsListPage);