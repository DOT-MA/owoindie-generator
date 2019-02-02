import * as React from "react";
import PartGrouping from "./PartGrouping";

export default class SelectionPanel extends React.Component<React.HTMLAttributes<HTMLDivElement>, {}> {
    public constructor(props) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <section className="panel">
                <PartGrouping groupName="Eyes" />
                <PartGrouping groupName="Eyebrows" />
            </section>
        );
    }
}
