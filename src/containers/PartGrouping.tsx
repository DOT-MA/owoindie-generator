import * as React from "react";
import pose from "react-pose";
import {Container, Row, Col} from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";

import OwoindiePart, { PartData } from "../components/OwoindiePart";

type GroupProps = {
    groupName: string,
};

type GroupState = {
    isExpanded: boolean,
    groupData: PartData[],
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
        this.getGroupData().then((data: PartData[]) => {
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
                                            <OwoindiePart partName={elem.partName} partPath={elem.partPath}/>
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