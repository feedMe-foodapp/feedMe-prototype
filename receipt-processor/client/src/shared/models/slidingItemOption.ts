/* slidingItemOption.ts (model) */

export enum SlidingItem {
    CONFIRM = "CONFIRM",
    CANCEL = "CANCEL",
    EDIT = "EDIT",
    DELETE = "DELETE"
}

export interface SlidingItemOptionModel {
    name: SlidingItem;
    icon: string;
    color: string; 
    click?: Function;
}