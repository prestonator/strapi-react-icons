import * as ReactIcons from "../../data/all-icons";

export type IReactIcon = keyof typeof ReactIcons;

export interface IIconLibrary {
  id: number;
  name: string;
  abbreviation: string;
  isEnabled: boolean;
}

export interface IIconComponent {
  icon: string;
  size?: number;
}

export interface IReactIconsSelector {
  description: any;
  error: any;
  intlLabel: any;
  placeholder: any;
  name: any;
  required: any;
  onChange: any;
  value: any;
}
