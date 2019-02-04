import * as React from "react";
import { RenderingPanelProps } from "../SharedTypes";

export default class SelectionPanel extends React.Component<RenderingPanelProps, {}> {
    public constructor(props) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <section className="panel render-panel">
                <div className="rendering-box">
                    {
                        this.props.selectedParts.map((elem) => {
                            return (
                                <img
                                    src={elem.partPath}
                                    key={elem.partName}
                                    style={{zIndex: elem.zIndex}}
                                />
                            )
                        })
                    }
                </div>
            </section>
        );
    }
}