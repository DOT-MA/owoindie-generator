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
                <PartGrouping groupName="Eyes" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#fb6363"
                />
                <PartGrouping groupName="Eyeballs" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#fb6363"
                />
                <PartGrouping groupName="Eyebrows" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#fb6363"
                />
                <PartGrouping groupName="Blushes" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#fb6363"
                />
                <PartGrouping groupName="Face_accessories" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#fb6363"
                />
                <PartGrouping groupName="Mouth" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#fb6363"
                />
                <PartGrouping groupName="Ears" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#fb6363"
                />
                <PartGrouping groupName="Hair_accessories" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#fb6363"
                />
                <PartGrouping groupName="Background" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#fb6363"
                />
            </section>
        );
    }
}
