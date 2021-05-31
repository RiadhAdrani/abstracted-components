import Default from "./Default";

class Transition extends Default {
     static new({ propertyName = "all", duration, timingFunction, delay }) {
          return {
               property: `${propertyName}`,
               duration: `${duration}`,
               timingFunction: `${timingFunction}`,
               delay: `${delay}`,
          };
     }
}

export default Transition;
