export type CallbackMethods = {
    onPartSelect(name: string, path: string, group: string): void,
}

export type OwoindiePartData = {
    partName: string;
    partPath: string;
    groupName: string,
}

export type RenderingPanelProps = {
    selectedParts: OwoindiePartData[];
}

export type GroupProps = {
    groupName: string,
};

export enum GroupIndexMapping {
    BASE,
    EYEBROWS,
    EYES,
    HAIR,
}
