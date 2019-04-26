import React, { Component } from 'react'
import CompetitionBody from '../components/competition/competitionBody'
import CompetitionHeader from '../components/competition/competitionHeader'
import { getCompetitionByID } from '../redux/actions/competitionsAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CompetitionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCompetition: null,
      currentSection: null
    }
  }

  componentWillMount() {
    const id = this.props.match.params.competitionID;
    const section = this.props.match.params.sectionName;
    this.props.getCompetitionByID(id);
    this.setState({
      ...this.state,
      currentSection: section
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      currentCompetition: nextProps.currentCompetition
    })
  }

  render() {
    const output = this.state.currentCompetition ?
      (
        <div>

          <Link className="go-home" to="/">
            <div>Competitions</div>
          </Link>
          <CompetitionHeader data={this.state.currentCompetition} currentSection={this.state.currentSection} />
          <CompetitionBody data={this.state.currentCompetition} currentSection={this.state.currentSection} />
        </div>
      ) : "";

    return output;
  }
}

const mapStateToProps = state => {
  return {
    currentCompetition: { ...state.competitions.currentCompetition }
  }
}

export default connect(mapStateToProps, { getCompetitionByID })(CompetitionPage);