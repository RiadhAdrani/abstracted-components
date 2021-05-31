import styled from "styled-components";
import PropUtil from "../attributes/PropUtil";

const Image = (props) => {
     const content = `{${PropUtil.getCSS(props)}}`;

     // console.log(content);

     const animations = `${props.animations}`;

     const Comp = styled.img.attrs({ src: props.image })`
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

          ${animations}
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
          />
     );
};

export default Image;
