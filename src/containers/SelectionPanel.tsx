import * as React from "react";
import PartGrouping from "./PartGrouping";
import { CallbackMethods } from "src/SharedTypes"

export default class SelectionPanel extends React.Component<CallbackMethods, {}> {
    public constructor(props) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <section className="panel">
                <PartGrouping groupName="Eyes" onPartSelect={this.props.onPartSelect}/>
                <PartGrouping groupName="Eyebrows" onPartSelect={this.props.onPartSelect}/>
            </section>
        );
    }
}
