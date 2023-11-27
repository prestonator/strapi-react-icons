import React from "react";
import { TextInput as OriginalTextInput } from "@strapi/design-system";
import styled from "styled-components";

const TextInputContainer = styled.div`
  // Styles
  & div[disabled] {
    /* Styles for the child <div> with the disabled attribute */
    /* Add your styles here */
    position: relative;
  }
  & input[type="text"] {
    width: calc(100% - 10rem);
    text-align: center;
  }
`;

export const TextInput = ({ ...props }) => {
  return (
    <TextInputContainer>
      <OriginalTextInput {...props} />
    </TextInputContainer>
  );
};
