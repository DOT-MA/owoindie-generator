import * as React from "react";

export default class SelectionPanel extends React.Component<{}, {}> {
    public constructor(props) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <section className="panel">
                <h1>rendering</h1>
            </section>
        );
    }
}