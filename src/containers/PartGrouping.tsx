import * as React from "react";
import pose from "react-pose";
import {Container, Row, Col} from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";

import OwoindiePart from "../components/OwoindiePart";

type GroupProps = {
    groupName: string,
};

type GroupState = {
    isExpanded: boolean,
}

const PartList = pose.section({
    isOpen: {
        height: "auto",
    },
    isClosed: {
        height: 0
    }
});

export default class SelectionPanel extends React.Component<GroupProps, GroupState> {
    public constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
        }
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
                            <Col lg={4} className="part-container">
                                <OwoindiePart />
                            </Col>
                            <Col lg={4} className="part-container">
                                <OwoindiePart />
                            </Col>
                            <Col lg={4} className="part-container">
                                <OwoindiePart />
                            </Col>
                            <Col lg={4} className="part-container">
                                <OwoindiePart />
                            </Col>
                            <Col lg={4} className="part-container">
                                <OwoindiePart />
                            </Col>
                        </Row>
                        
                    </PartList>
                </Row>
            </Container>
        );
    }
}