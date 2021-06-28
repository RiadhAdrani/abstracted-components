import { useState } from "react";
import styled from "styled-components";
import generateRandomKey from "../RandomKeyGenerator";
import Selector from "../attributes/Selector";

const Input = (props) => {
     // const content = `{${PropUtil.getCSS(props)}}`;

     const css = `{${Selector.new(props)}}`;

     // console.log(content);

     const [value, setValue] = useState("");

     const animations = `${props.animations}`;

     const mediaQuery = `${
          props.mediaQuery
               ? Array.isArray(props.mediaQuery)
                    ? props.mediaQuery.join("")
                    : props.mediaQuery
               : ""
     }`;

     const Comp = styled.input`
          ${css}

          :hover {
               ${props.hover}
          }

          :focus {
               ${props.focus}
          }

          :active {
               ${props.active}
          }

          ::after {
          }

          ::before {
          }

          ::placeholder {
               ${props.hintStyle}
          }

          ${animations};

          ${mediaQuery};
     `;

     // console.log(props.hover);

     const handleChanges = (e) => {
          setValue(e);
     };

     return (
          <Comp
               onClick={() => {
                    if (props.onClick) {
                         try {
                              props.onClick();
                         } catch (e) {
                              console.log(e);
                         }
                    }
               }}
               key={props.key}
               className={props.className}
               id={props.id ? props.id : generateRandomKey()}
               type={props.type}
               placeholder={props.hint}
               onChange={(x) => {
                    handleChanges();
                    props.onChange(x.target.value);
               }}
               value={value}
          />
     );
};

export default Input;
