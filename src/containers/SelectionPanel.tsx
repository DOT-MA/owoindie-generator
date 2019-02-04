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
                    selectedParts={this.props.selectedParts} tabColour="#FFAACC"
                />
                <PartGrouping groupName="Eyeballs" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#CCAAFF"
                />
                <PartGrouping groupName="Eyebrows" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#A8CCD2"
                />
                <PartGrouping groupName="Blushes" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#FFAADD"
                />
                <PartGrouping groupName="Upper_face_accessories" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#CCAAEE"
                />
                <PartGrouping groupName="Lower_face_accessories" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#EEBFAA"
                />
                <PartGrouping groupName="Mouth" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#A7CEC1"
                />
                <PartGrouping groupName="Ears" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#FFAAEE"
                />
                <PartGrouping groupName="Hair_accessories" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#CCAADD"
                />
                <PartGrouping groupName="Neck" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#A5CEB2"
                />
                <PartGrouping groupName="Background" onPartSelect={this.props.onPartSelect}
                    selectedParts={this.props.selectedParts} tabColour="#FFAAFF"
                />
            </section>
        );
    }
}
