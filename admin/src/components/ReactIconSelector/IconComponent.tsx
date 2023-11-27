import React from "react";
import { IconContext } from "react-icons/lib";
import { strapiTheme } from "./styles";
import { IReactIcon, IIconComponent } from "./types";
import * as ReactIcons from "../../data/all-icons";

export const IconComponent: React.FC<IIconComponent> = ({ icon, size }) => {
  const DynamicIconComponent = ReactIcons[icon as IReactIcon];

  if (undefined === DynamicIconComponent) return <></>;

  return (
    <IconContext.Provider
      value={{ color: strapiTheme === "light" ? "#212134" : "#a5a5ba" }}
    >
      <DynamicIconComponent size={size} />
    </IconContext.Provider>
  );
};
