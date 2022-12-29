/* optionFabBtn.ts (Model) */

export enum OptionFabKey {
    DELETE
}

export interface OptionFabBtnModel {
    key: OptionFabKey;
    name: string;
    icon: string;
    backgroundColor: string;
    click: Function;
}