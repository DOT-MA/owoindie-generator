import * as React from "react";
import pose from "react-pose";

import {OwoindiePartData, CallbackMethods } from "../SharedTypes";

type OwoindiePartProps = {
    isSelected: boolean;
}

const SelectableDiv = pose.div({
    active: {
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
        borderStyle: "solid",
    },
    inactive: {
        borderColor: "rgba(255, 255, 255, 0)",
        borderWidth: 1,
        borderStyle: "solid",
    }
});

export default class OwoindiePart extends React.Component<OwoindiePartData & CallbackMethods & OwoindiePartProps, {}> {
    public constructor(props) {
        super(props);
    }
    public render(): React.ReactNode {
        return (
            <SelectableDiv
                className="part"
                onClick={() => {this.props.onPartSelect(this.props.partName, this.props.partPath, this.props.groupName)}}
                pose={this.props.isSelected ? "active" : "inactive"}
            >
                <img src={this.props.partPath}/>
            </SelectableDiv>
        );
    }
}