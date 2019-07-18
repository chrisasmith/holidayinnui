export interface GridSquare {
    type: string;
    backgroundType: string;
    colspan: number;
    image: string;
    icon: string;
    label: string;
    url: string;
    action: string;
    disabled: boolean;
}

export interface NavGrid {
    color: string;
    gridRows: GridSquare[]
}

export interface Config {
    navGrids: NavGrid[]
}
