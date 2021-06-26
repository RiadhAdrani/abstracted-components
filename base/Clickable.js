import styled from "styled-components";
import PropUtil from "../attributes/PropUtil";

const Clickable = (props) => {
     const content = `{${PropUtil.getCSS(props)}}`;

     // console.log(content);

     const animations = `${props.animations}`;

     const mediaQuery = `${props.mediaQuery}`;

     const Comp = styled.button`
          ${content}

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
               id={props.id}
          >
               {props.children}
          </Comp>
     );
};

export default Clickable;
