import * as React from "react";
import pose from "react-pose";
import {Container, Row, Col} from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";

type GroupProps = {
    groupName: string,
};

type GroupState = {
    isExpanded: boolean,
}

const PartList = pose.section({
    isOpen: {
        height: 500,
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

                    </PartList>
                </Row>
            </Container>
        );
    }
}