import * as React from "react";
import pose from "react-pose";
import {Container, Row, Col} from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { OwoindiePartData } from "../SharedTypes";
import { GroupProps, CallbackMethods } from "src/SharedTypes"

import OwoindiePart from "../components/OwoindiePart";

type GroupState = {
    isExpanded: boolean,
    groupData: OwoindiePartData[],
}

const PartList = pose.section({
    isOpen: {
        height: "auto",
    },
    isClosed: {
        height: 0
    }
});

export default class SelectionPanel extends React.Component<GroupProps & CallbackMethods, GroupState> {
    public constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            groupData: [],
        }
    }

    public async getGroupData() {
        const data = await fetch(`/getpartdata/${this.props.groupName.toLowerCase()}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return await data.json();
    }

    public componentDidMount() {
        this.getGroupData().then((data: OwoindiePartData[]) => {
            this.setState({groupData: data});
        })
    }

    public render(): React.ReactNode {
        return (
            <Container fluid={true} className="part-grouping">
                <Row>
                    <header onClick={() => {this.setState({isExpanded: !this.state.isExpanded})}}>
                        <h1>{this.props.groupName}</h1>
                        <IoIosArrowDown />
                    </header>
                </Row>
                <Row>
                    <PartList className="part-list" pose={this.state.isExpanded ? "isOpen" : "isClosed"}>
                        <Row>
                            {
                                this.state.groupData.map((elem, index) => {
                                    return (
                                        <Col lg={4} className="part-container" key={index}>
                                            <OwoindiePart
                                                partName={elem.partName}
                                                partPath={elem.partPath}
                                                groupName={this.props.groupName}
                                                onPartSelect={this.props.onPartSelect}
                                            />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        
                    </PartList>
                </Row>
            </Container>
        );
    }
}