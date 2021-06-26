import styled from "styled-components";
import PropUtil from "../attributes/PropUtil";

const Anchor = (props) => {
     const content = `{${PropUtil.getCSS(props)}}`;

     // console.log(content);

     const animations = `${props.animations}`;

     const mediaQuery = `${props.mediaQuery}`;

     const Comp = styled.a`
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
               key={props.key}
               className={props.className}
               id={props.id}
               href={props.link}
               target={props.target}
          >
               {props.children}
          </Comp>
     );
};

export default Anchor;
