import * as React from "react";
import * as ReactDOM from "react-dom";

import {Container, Row, Col} from "react-bootstrap";
import mergeImages from "merge-images";
import { RenderingPanelProps, GroupIndexMapping } from "./SharedTypes";

import SelectionPanel from "./containers/SelectionPanel"
import RenderingPanel from "./containers/RenderingPanel"

export default class App extends React.Component<{}, RenderingPanelProps> {
    public constructor(props) {
        super(props);
        this.state = {
            selectedParts: [{
                partName: "base",
                partPath: "base/owoindie-base.png",
                groupName: "base",
                zIndex: 1,
            },
            {
                partName: "defaultbg",
                partPath: "base/owoindie-base.jpg",
                groupName: "defaultbg",
                zIndex: -1,
            }],
        }
    }

    public onPartSelect(name: string, path: string, group: string): void {
        let parts = this.state.selectedParts;
        if (parts.findIndex((elem) => (elem.partName === name) && (elem.groupName === group)) !== -1) {
            return;
        }
        const index = parts.findIndex((elem) => elem.groupName === group)
        if (index !== -1) {
            parts.splice(index, 1);
        }
        parts = [...this.state.selectedParts,
            {
                partName: name,
                partPath: path,
                groupName: group,
                zIndex: GroupIndexMapping[group.toUpperCase()],
            }
        ]
        this.setState({
            selectedParts: parts,
        });
    }

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <header>
                    <h1>OWOINDIE GENERATOR</h1>
                </header>
                <Container fluid={true}>
                    <Row>
                        <Col lg={4}>
                            <SelectionPanel
                                onPartSelect={this.onPartSelect.bind(this)}
                                selectedParts={this.state.selectedParts}
                            />
                        </Col>
                        <Col lg={8}>
                            <RenderingPanel selectedParts={this.state.selectedParts}/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(React.createElement(App), document.getElementById("react-app"));
});
