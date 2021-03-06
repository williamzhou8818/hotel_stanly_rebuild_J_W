import React from "react";
import UpButton from "./icons/UpExploreButton.png";
import DownButton from "./icons/DownExploreButton.png";
import {
    MediumOrange,
    shiftArray,
    ExtraHeavyBlueGreen,
    HeavyBlue,
    randomiseItems
} from "../../../Constants";
import { Link } from "react-router-dom";
import "../List/MainSectionList.scss";

class ExploreList extends React.Component {
    constructor(props) {
        super(props);
        const { data } = this.props;
        this.state = {
            data: randomiseItems(data)
        };
        this.goUp = this.goUp.bind(this);
        this.goDown = this.goDown.bind(this);
    }
    goUp() {
        let items = this.state.data.slice();
        items = shiftArray(items, 1);
        this.setState({
            data: items
        });
    }
    goDown() {
        let items = this.state.data.slice();
        items = shiftArray(items, -1);
        this.setState({
            data: items
        });
    }
    styles = {
        horizontalVerticalCenter: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    };
    render() {
        const { data } = this.state;
        const itemHeight =
            this.props.data.length >= 13
                ? "7.7%"
                : `${100 / this.props.data.length}%`;
        return (
            <div
                style={{ width: "100%", height: "100%" }}
                className="section--bottom--animation"
            >
                <div
                    style={{
                        height: "6%",
                        backgroundColor: MediumOrange,
                        ...this.styles.horizontalVerticalCenter
                    }}
                    onClick={this.goUp}
                >
                    <img src={UpButton} style={{ width: "5%" }} alt="Up" />
                </div>
                <div style={{ height: "88%", overflow: "hidden" }}>
                    <div
                        style={{
                            height: "100%",
                            overflowY: "auto",
                            marginRight: "-30px"
                        }}
                    >
                        <div
                            style={{
                                height: "100%",
                                overflow: "auto",
                                paddingRight: "30px"
                            }}
                        >
                            {data.map((item, index) => {
                                return (
                                    <Link
                                        to={item.linkTo}
                                        key={`${item.id}-${index}`}
                                        style={{
                                            height: itemHeight,
                                            color: "white",
                                            display: "flex",
                                            textDecoration: "none"
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "33%",
                                                backgroundColor: ExtraHeavyBlueGreen,
                                                display: "flex",
                                                borderRight:
                                                    "1px solid rgb(4,60,66)",
                                                borderBottom:
                                                    "1px solid rgb(4,60,66)"
                                            }}
                                        >
                                            <div
                                                className="explore"
                                                style={{
                                                    width: "32%",
                                                    ...this.styles
                                                        .horizontalVerticalCenter
                                                }}
                                            >
                                                <img
                                                    src={item.icon}
                                                    style={{ width: "43%" }}
                                                    alt=""
                                                />
                                            </div>
                                            <div
                                                className="explore--title"
                                                style={{
                                                    //  width: "68%",
                                                    ...this.styles
                                                        .horizontalVerticalCenter
                                                    //    fontSize: "14pt"
                                                }}
                                            >
                                                {item.type}
                                            </div>
                                        </div>
                                        <div className="explore--name">
                                            {item.title.toUpperCase()}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        height: "6%",
                        backgroundColor: MediumOrange,
                        ...this.styles.horizontalVerticalCenter
                    }}
                    onClick={this.goDown}
                >
                    <img src={DownButton} style={{ width: "5%" }} alt="Down" />
                </div>
            </div>
        );
    }
}

export default ExploreList;
