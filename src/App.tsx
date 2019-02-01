import * as React from "react";
import * as ReactDOM from "react-dom";

export class App extends React.Component<{}, {}> {
    public constructor(props) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <header>
                    <h1>OWOINDIE GENERATOR</h1>
                </header>
            </React.Fragment>
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(React.createElement(App), document.getElementById("react-app"));
});
