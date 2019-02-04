
export type CallbackMethods = {
    onPartSelect(name: string, path: string, group: string): void;
}

export type OwoindiePartData = {
    partName: string;
    partPath: string;
    groupName: string;
}

export type RenderingPanelProps = {
    selectedParts: OwoindiePartData[];
}

export type GroupProps = {
    groupName: string;
    tabColour: string;
};

export enum GroupIndexMapping {
    BACKGROUND,
    BASE,
    EYEBROWS,
    EYES,
    EYEBALLS,
    BLUSHES,
    FACE_ACCESSORIES,
    MOUTH,
    HAIR_ACCESSORIES,
    EARS,
    HAIR,
    NECK,
}
