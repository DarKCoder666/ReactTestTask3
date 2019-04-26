import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CompetitionRaiting from './competitionRaiting'

class CompetitionBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSubmenuPosition: 0,
            submenu: null,
            currentNav: null
        };
    }

    componentWillMount() {
        this.initBaseData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.initBaseData(nextProps);
    }

    initBaseData(props) {
        const currentSection = props.match.params.sectionName || props.data.navigation[0].slug;
        let currentNav;

        for (let i = 0; i < props.data.navigation.length; i++) {
            let nav = props.data.navigation[i];
            if (nav.slug === currentSection) {
                currentNav = nav;
                break;
            }
        }

        this.setState({
            ...this.state,
            currentNav,
            submenu: currentNav ? currentNav.submenu : null,
        });
    }

    onSubmenuClick(i) {
        this.setState({
            ...this.state,
            currentSubmenuPosition: i
        });
    }

    render() {
        let submenuElements, bodyContent;

        if (this.state.submenu) {
            submenuElements = this.state.submenu.map((el, i) => {
                return (
                    <div key={i} onClick={(e) => this.onSubmenuClick(i)} className={`competition-body-navigation-item ${this.state.currentSubmenuPosition === i ? "active" : ""}`}>{el.name}</div>
                )
            });
        }

        let bodyCondition = this.state.submenu[this.state.currentSubmenuPosition] && this.state.submenu[this.state.currentSubmenuPosition].html;

        if (bodyCondition) {
            bodyContent = (
                <div className="competition-body-content"
                    dangerouslySetInnerHTML={{
                        __html: bodyCondition ? this.state.submenu[this.state.currentSubmenuPosition].html : ''
                    }}>
                </div>
            );
        } else if (this.state.currentNav.componentType === "raiting") {
            bodyContent = (
                <div className="competition-body-content">
                    <CompetitionRaiting tableData={this.state.submenu[this.state.currentSubmenuPosition].table} />
                </div>
            )
        }

        return (
            <div className="competition-body">
                <div className="competition-body-navigation">
                    {submenuElements}
                </div>

                {bodyContent}
            </div>






                
        )
    }
}

export default withRouter(CompetitionBody);