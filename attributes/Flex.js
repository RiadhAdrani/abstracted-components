class Flex {
     static new({ grow, shrink, basis }) {
          return {
               grow: `${grow}`,
               shrink: `${shrink}`,
               basis: `${basis}`,
          };
     }
}

export default Flex;
