import * as React from "react";

import {OwoindiePartData, CallbackMethods } from "../SharedTypes";

export default class OwoindiePart extends React.Component<OwoindiePartData & CallbackMethods, {}> {
    public constructor(props) {
        super(props);
    }
    public render(): React.ReactNode {
        return (
            <div className="part" onClick={() => {this.props.onPartSelect(this.props.partName, this.props.partPath, this.props.groupName)}}>
                <img src={this.props.partPath}/>
            </div>
        );
    }
}