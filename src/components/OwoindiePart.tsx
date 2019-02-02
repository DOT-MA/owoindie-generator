import * as React from "react";

export type PartData = {
    partName: string;
    partPath: string;
}

export default class OwoindiePart extends React.Component<PartData, {}> {
    public constructor(props) {
        super(props);
    }
    public render(): React.ReactNode {
        return (
            <div className="part">
                <img src={this.props.partPath}/>
            </div>
        );
    }
}