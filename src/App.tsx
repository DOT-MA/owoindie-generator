import * as React from "react";
import * as ReactDOM from "react-dom";

import {Container, Row, Col} from "react-bootstrap";

import SelectionPanel from "./containers/SelectionPanel"
import RenderingPanel from "./containers/RenderingPanel"

export default class App extends React.Component<{}, {}> {
    public constructor(props) {
        super(props);
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
                            <SelectionPanel />
                        </Col>
                        <Col lg={8}>
                            <RenderingPanel />
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
