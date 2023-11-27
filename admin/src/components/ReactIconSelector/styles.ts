import styled from "styled-components";
import { FixedSizeGrid } from "react-window";

export const strapiTheme = window.localStorage.STRAPI_THEME;

export const inputButtonStyle = {
  // Styles
  border: "1px solid",
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  width: "5rem",
  height: "100%",
  justifyContent: "center",
} as React.CSSProperties;

export const searchFormStyle = {
  // Styles
  display: "flex",
  flexDirection: "column",
  gap: "5vh",
} as React.CSSProperties;

export const CustomScrollModalBody = styled(FixedSizeGrid)`
  // Styles
  &::-webkit-scrollbar {
    width: 0.65vw;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(165, 165, 186, 1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(123, 121, 255, 1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
