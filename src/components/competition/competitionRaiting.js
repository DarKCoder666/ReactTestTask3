import React, { Component } from 'react'

export default class CompetitionRaiting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ""
    }

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
  }

  getAwardHTML(index) {
    let resultHTML;

    switch (index) {
      case 1:
        resultHTML = (
          <span>
            <img src="data:image/png;base64,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"
              alt="GOLD" />
            GOLD
          </span>
        );
        break;
      case 2:
        resultHTML = (
          <span>
            <img src="data:image/png;base64,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"
              alt="SILVER" />
            SILVER
          </span>
        );
        break;
      case 3:
        resultHTML = (
          <span>
            <img src="data:image/png;base64,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"
              alt="BRONZE" />
            BRONZE
            </span>
        );
        break;
      default:
        resultHTML = (<span>-</span>)
    }

    return resultHTML;
  }

  onSearchInputChange(event) {
    this.setState({
      ...this.state,
      searchValue: event.target.value
    })
  }

  render() {
    let usersData = this.props.tableData.data;
    
    if(this.state.searchValue) {
      usersData = usersData.filter((el) => {
        return (el.name.toLowerCase().indexOf(this.state.searchValue) !== -1);
      })
    }

    const tableHeaders = this.props.tableData.headers.map((el, i) => (
      <th key={i}>{el}</th>
    ));

    const users = usersData.map((el, i) => (
      <tr key={i}>
        <td>
          <span place={`p${el.place}`}>{el.place}</span>
        </td>
        <td>{el.name}</td>
        <td>{el.solutions}</td>
        <td>
          {this.getAwardHTML(el.award)}
        </td>
        <td>{el.score}</td>
      </tr>
    ));

    return (
      <div className="competition-body-content">
        <div className="competition-search">
          <input onChange={this.onSearchInputChange} type="text" placeholder="Search team" />
        </div>

        <div className="competition-raiting-table">
          <table>
            <thead>
              <tr className="competition-raiting-table-headers">
                {tableHeaders}
              </tr>
            </thead>
            <tbody>
              {users}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
