import styled from "styled-components";
import Selector from "../attributes/Selector";
import generateRandomKey from "../RandomKeyGenerator";

const Base = (props) => {
     // const content = `{${PropUtil.getCSS(props)}}`;

     const css = `{${Selector.new(props)}}`;
     // console.log(content);

     const animations = `${props.animations}`;

     const mediaQuery = `${
          props.mediaQuery
               ? Array.isArray(props.mediaQuery)
                    ? props.mediaQuery.join("")
                    : props.mediaQuery
               : ""
     }`;

     const Comp = styled.div`
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

          ${animations};

          ${mediaQuery};
     `;

     // console.log(props.hover);

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
          >
               {props.children}
          </Comp>
     );
};

export default Base;
