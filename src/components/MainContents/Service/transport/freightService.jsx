

import React, { Fragment } from 'react';
import DownButton from "../../../MainContents/Destination/icons/DownExploreButton.png";
import UpButton from "../../../MainContents/Destination/icons/UpExploreButton.png";
import { Link } from "react-router-dom";
import ListIcon from "../../icons/ListIcon.png";
import HireAndTransport from "../../icons/HireAndTransport.svg";

import {
    SUBSECTION_LIST_ENTRIES,
    MediumOrange,
    shiftArray,
    HeavyBlue,
    HeavyOrange,
    LightOrange,
    getRandomImage,
    LightBlue,
    randomiseButKeepOrder,
    addNullItemToData
} from "../../../../Constants";
import "../../List/MainSectionList.scss";
import { borderBottom } from '@material-ui/system';
import { lightBlue } from '@material-ui/core/colors';

const FreightService_data = [
    {
        id: 1,
        title: 'IPI GROUP',
        img_logo: '/imgs/service/frightservice/S2LOGOS13-ipi.jpg'

    },
    {
        id: 2,
        title: 'GFS LIMITED',
        img_logo: '/imgs/service/frightservice/S2LOGOS12-GFB.jpg'
    },
    {
        id: 3,
        title: 'DHL',
        img_logo: '/imgs/service/frightservice/S2LOGOS11-DHL.jpg'
    },
    {
        id: 3,
        title: 'PNG AIR FREIGHT',
        img_logo: '/imgs/service/frightservice/S2LOGOS14-png-Air-Freight.jpg'
    }
]


class FreightService extends React.Component {
    constructor(props) {
        super(props);

        console.log(props.data);


        const { data, randomise } = this.props;

        this.goUp = this.goUp.bind(this);
        this.goDown = this.goDown.bind(this);
    }
    goUp() {
        // let items = data.slice();
        // items = shiftArray(items, 1);
        // this.setState({
        //     data: items
        // });
    }
    goDown() {
        // let items = data.slice();
        // items = shiftArray(items, -1);
        // this.setState({
        //     data: items
        // });
    }
    styles = {
        mainSectionRow: {
            display: "flex",
            alignItems: "left",
            justifyContent: "center",
            height: "25%",
            width: "100%",
            borderBottom: "1px solid lightBlue",
        },
        mainIcon: {
            width: "30%",
            height: "100%",
            // padding: "3%"
        },
        mainTitleContainer: {
            width: "70%",
            height: "100%",
            paddingLeft: "3%",
            alignItems: "center",
            display: "flex",
        },
        horizontalVerticalCenter: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    }

    render() {
        const {
            numberOfEntries,
            sideButtons,
            sideTitle,
            mainTitle,
            namespace,
        } = this.props;
        return (
            <div style={{ height: "54vh" }}>


                < div style={{ width: "100%", height: "100%", display: "flex" }}>

                    <div
                        style={{
                            backgroundColor: HeavyOrange,
                            width: "14%",
                            height: "100%",
                            boxShadow: "9.899px 0px 7px 0px rgba(0,0,0,0.6)",
                            zIndex: 1,
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >

                        <div
                        >
                            <Link style={{ textDecoration: "none" }} to="/Services">
                                <div
                                    className="leftSide-menu--container"
                                >
                                    <img
                                        className="leftSide-menu--img"
                                        src={ListIcon}
                                        alt="SERVICE TYPES"
                                    />
                                    <div
                                        className="menu-title"
                                    >
                                        SERVICE TYPES
                                </div>
                                </div>
                            </Link>
                        </div>
                        <div
                        >
                            <Link style={{ textDecoration: "none" }} to="/Services/transport">
                                <div
                                    className="leftSide-menu--container"
                                >
                                    <img
                                        className="leftSide-menu--img"
                                        src={HireAndTransport}
                                        alt="SERVICE TYPES"
                                    />
                                    <div
                                        className="menu-title"
                                    >
                                        CAR HIRE & TRANSPORT
                                </div>
                                </div>
                            </Link>
                        </div>
                        <div
                            className="vertical-title"

                        >
                            <span style={{ transform: "rotate(-90deg)" }}>
                                SERVICES
                                </span>
                        </div>
                    </div>

                    <div className="main-section" >
                        <div className="main-section--top">
                            <div
                                className="main-section--top--title"
                                style={{
                                    // height: "8%",
                                    // backgroundColor: LightOrange,

                                    ...this.styles.horizontalVerticalCenter

                                }}
                            >
                                ESSENTIAL SERVICES
                             </div>
                            <div className="main-section--upBtn"
                                style={{
                                    height: "6%",
                                    backgroundColor: MediumOrange,
                                    ...this.styles.horizontalVerticalCenter
                                }}
                                onClick={this.goUp}
                            >
                                <img src={UpButton} style={{ width: "5%" }} alt="Up" />
                            </div>
                        </div>


                        <div className="main-section--middle">
                            {FreightService_data.map((FreightServiceList, index) => {
                                return (
                                    <div style={{ ...this.styles.mainSectionRow }}>
                                        <div style={{ ...this.styles.mainIcon }}>
                                            <img style={{ width: "100%", height: "100%" }} src={FreightServiceList.img_logo}
                                                alt={FreightServiceList.title + " icon"} />
                                        </div>
                                        <div style={{ ...this.styles.mainTitleContainer }}>
                                            <Link style={{ textDecoration: "none" }} to={`/services/transport/freight-services/${index}`}>

                                                <h4 style={{ color: "white" }}>{FreightServiceList.title}</h4>
                                            </Link>

                                        </div>

                                    </div>

                                );
                            })}
                        </div>

                        <div className="main-section--bottom"
                            style={{
                                height: "6%",
                                backgroundColor: MediumOrange,
                                ...this.styles.horizontalVerticalCenter
                            }}
                            onClick={this.goDown}
                        >
                            <img
                                src={DownButton}
                                style={{ width: "5%" }}
                                alt="Down"
                            />
                        </div>

                    </div>


                </div>


            </div >


        );
    }
}

export default FreightService;

