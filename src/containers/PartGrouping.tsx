import * as React from "react";
import pose from "react-pose";
import {Container, Row, Col} from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { OwoindiePartData } from "../SharedTypes";
import { GroupProps, CallbackMethods, RenderingPanelProps } from "src/SharedTypes"

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

const Arrow = pose.div({
    isOpen: {
        transform: "rotate(180deg)",
    },
    isClosed: {
        transform: "rotate(0deg)",
    }
})

export default class SelectionPanel extends React.Component<GroupProps & CallbackMethods & RenderingPanelProps, GroupState> {
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

    public isSelected(partData: OwoindiePartData): boolean {
        const currentlySelected = this.getSelectedPart();
        return currentlySelected ? currentlySelected.partName === partData.partName : false;
    }

    public getSelectedPart(): OwoindiePartData {
        return (this.props.selectedParts.filter((elem) => elem.groupName === this.props.groupName))[0];
    }

    public generateParts(): React.ReactNode {
        return (
            this.state.groupData.map((elem, index) => {
                return (
                    <Col lg={4} className="part-container" key={elem.groupName + elem.partName}>
                        <OwoindiePart
                            partName={elem.partName}
                            partPath={elem.partPath}
                            groupName={this.props.groupName}
                            onPartSelect={this.props.onPartSelect}
                            isSelected={this.isSelected(elem)}
                        />
                    </Col>
                )
            })
        )
    }

    public render(): React.ReactNode {
        return (
            <Container fluid={true} className="part-grouping">
                <Row>
                    <header onClick={() => {this.setState({isExpanded: !this.state.isExpanded})}} style={{backgroundColor: this.props.tabColour}}>
                        <h1>{this.props.groupName.replace("_", " ")}</h1>
                        <Arrow className="arrow-container" pose={this.state.isExpanded ? "isOpen" : "isClosed"}>
                            <IoIosArrowDown />
                        </Arrow>
                        
                    </header>
                </Row>
                <Row>
                    <PartList className="part-list" pose={this.state.isExpanded ? "isOpen" : "isClosed"}>
                        <Row>
                            {
                                this.generateParts()
                            }
                        </Row>
                        
                    </PartList>
                </Row>
            </Container>
        );
    }
}