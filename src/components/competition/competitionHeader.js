import React, { Component } from 'react'
import { NavLink, withRouter  } from 'react-router-dom'

class CompetitionHeader extends Component {
    
    render() {
        const currentSection =  this.props.match.params.sectionName;
        const navigation = this.props.data.navigation.map((el, i) => {
            let classes = "competition-header-navigation-item ";
            const linkTo = (!currentSection) ? `${this.props.location.pathname}/${el.slug}` : el.slug;

            if(currentSection === el.slug || ( !currentSection && i === 0 )) {
                classes += "active";
            }
            return <NavLink key={i} to={linkTo}><div className={classes}>{el.name}</div></NavLink >
        });

        return (
            <div className="competition-header">

                <div className="competition-header-body">
                    <div className="competition-header-text">
                        <h1 className="competition-header-title">{this.props.data.name}</h1>
                        
                        <div className="competition-header-info">
                            <div className="competition-header-date">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAYAAADzoH0MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFrSURBVHgBnZNNTsJQEMdn5hVdGXuEEuMalsYgeZ5AbmCjuNcTgCdA90Y5ApxAEl24kx2JRMsRdA3t+KYiH82DfvwX0PbN/9eZ6QzAFgX1i9boyPe2xdC2wyiEn92SCgRUDIA0lH9mbH/Wm53cAMeZDf+vkfnaBkFI0dfJJa/eM/DNwcvjXaYMbELAzsfxVTUTINC+a3teUlHHCng3htU6ZzOo2gCmJj2uNfUaQMz7kfNsmtVY0JmsAJGD3FoDiNl8rzUDIp5vApgsqvLSGBAPytLsyc+45mvTsY0ZGLl7odI00r4ng5I8VaieIEXIkaadKTWSB/PR9VIBSB4R4VnywJbRBlVImgHFFTfRheJyc49yUgbAEygqhCExcx8KCtkAIlA9KKppeEuHrw8DZriHnBJP+a07iZtITtiWejK7pXbxwHyZyoPuN1J4miUTiZFY8fyxEgpkN0LVNutWWS4TT8x09iPAnpS8Gv8LHVOGf5C/5m0AAAAASUVORK5CYII=" alt="IMG" />
                                {this.props.data.dates}
                            </div>
                            <div className="competition-header-fund">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABYCAYAAAAKsfL4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZ5SURBVHgB7Z1PdtNIEMa/aiczLM0JcE5AOAExzH6cNwEmmQXhBMAJCCcYOMEki0kIJC+Z/TA2J8CcAHEDsyMvdtdUyVawjR1JtmJ1K/q9B7IdKWl19Z/q+roswpycnDSr37pYBaMGsjUyuEWMKjPJe1QHp9WmXB6MHIkDtvgCNoFcG9xYQnt9vd5BgaE0J0eVbQzugu0qg9bk4yquFjVAm5k/AKa1+aDeQoGINUBY6edokOHH8nYVV1/hcXQI3IIxpz8R/vG9h0w1wMFJs2YsnkrL20b+lT6NDohO2eDl5no9gIf8YABt8WcWL8D8DD5BtOujIUYMsH/0b8PA/AV3W3wcge3R861H9VN4goleHB43X0jln8DfyldqpsInei/whLAHvD1qPrXgVygQlvn51oP7zt8T6WRLPf6I+Vp+AHBbjl/Ymra4qZ2uRWCWQxcS08Zl/dvhi25/nVAhc9uiuyIvb0nR9LNVzE7n5wqtuO4lLZFOuOkrvxX55fMsloYMEx1bwz+/WOTBrhHRXfloDcmRa606EjtwGHpz9J+2/iQtrWVQOV2u2L28WlXYYyzWiFkbTS3BJcHvG/dW4DBqAI45J5CwwhPXVqAHx83tJIYQA6Ra7S8ak+ikio7JjmEvhi2vWUpwTo0t70pP2SFDO5bwIa/Fjs4J5z08Fo+tIZP+GgpAEgNEhIbQ/izGyGQSjmM4+Cd/b+2sV4xKHybJHBAPo00SSgaZQELRQY/xKfx8qT9MxLmhlXNUuxLOJglfy3B3WyKtNYm0qmNQw5y4Pgek6QHTIayGFcYMtSZFt9zrH8TIk6/r9W1vzffJiLn/C68LiSbhkqujNEDOlAbImSQGcDmW4r1eHGsA8SJuEmhd5sY9wInFj6hgvCur87oG2+A5ibygRxuhwBGKHH+/ba4uG3NXopZryMhVjEHcW24ZXmqfW/vhj4f19vAPp3pYnpDaDR1UgP57re+jxdJYKFmjqzX0o6xxkdbg4qhrCcZXDWlfl20pc68DBhXUwlgouSQZpReUM6UBcibWADrGw1FcLltSEgkyBPv80cYv3mz18Ik00dAgbz2giMwajl6IHnAdyEwPEL+9Q0Rt1QO6PXwhIyvWGfSAzYf1XVwjMtMD9KCqlVpTRJU+M+gBwi4yxPX8hWwM4AiT8hdExqyGAlGo8ZD2VqTQfGojR6a+2ET9hnPWCxvXXPkL2QxBGZJWQvQ9f8HbHhDlL0gL35ZhxaX1QFV6XgOWG2dijDfHzUvzF5IYQC3ozA1e5C/0+JlTXXcyVZkYt6mHbTHExPwFr/QAzV+QFv/Zu+QRJTQEN/cPm43hjxPFglQP2Ny4t637LHuW7hhUpAJYV8YBFkRR8xfy1gOCwVGGOd1XNFliDPMXmHdQEMRj2tl/9/6r5i/EekF5b2wqev6C815Q0fMX3HdDmZO2soXnL4yrgWnzF8Roj2OHIOkmN/MMthU9fyHWCxK37+OhuH9wGJ/zF5zXA3zSK0bzF5LNB87rAS6Xbzx/Aekm4RDn9YA88he0XDfETfwWeV9dTU5B9SryF5yPhrpWvqwpt6XkTGmAnCkNkDO+5wcoXucv+JgfMILv+Qs+5AfE4nP+ghd6QI7lGy0jSUib8dVg6XOP7ScntqW4nh/gevlKLyhnSgPkjNf5AYrv+Qve6wGulu/gXVO3RX6MO0+DcZ+R8Ou/Sj3gcmbSAw7evd+RMPILpKPUA5CRHhBu9dPdZvNs+/BAD5infJEesCTSJ5OMFlnqAfrf/nHzmWH+Ew5wLfWArd/qr6QLvUTJwrnwgjYf3N/RoBYcDLgVmRE3VINaXKH6ILJYsgB+WAfohKQ7ocUQKwNDlHrA7MyuB0SG0Jg2Ez0ZbEd37mZ91wNS73zWFd7QZtTMc7LSekHj5zuoB1xa/tTh6MEezFb0flIaKDQFtM/48cfC9yn1gFkZirc7SakHlFxKaYCc8d4AhdcDXMd7PQCO47peMUxqPUB3bcNxXNYr5tYDiHadN4ALesUV6QEdCffccd4Aikt6RVZED5rzYhIuml6h9xI95c+LHhBxeNRsMMKeUIOfdCzoydbG94eNeuWGeq1XWH6t0dHhyle86gHDhBNkj0XFw69w+YHT4D2umFfTJnpvDRARuoIWDWIrhljIM+7j6H+HnKW9G8s4jXOBvTfAOFetV0xAW7msOzT1Nf26o3AGGCdrvSLrr638HzM98N5SkQU7AAAAAElFTkSuQmCC" alt="Fund" />
                                {this.props.data.fund}
                            </div>
                        </div>
                    </div>

                    <div className="competition-header-image">
                        <img src={this.props.data.imgSrc} alt="Logo" />
                    </div>
                </div>

                <div className="competition-header-navigation">
                    {navigation}
                </div>
            </div>
        )
    }
}

export default withRouter(CompetitionHeader);