import * as React from "react";
import PartGrouping from "./PartGrouping";
import { RenderingPanelProps, CallbackMethods, OwoindiePartData } from "src/SharedTypes"

export default class SelectionPanel extends React.Component<CallbackMethods & RenderingPanelProps, {}> {
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
