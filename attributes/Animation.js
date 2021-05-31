import Default from "./Default";

class Animation extends Default {
     static new(
          name,
          duration,
          timingFunction,
          delay,
          iterationCount,
          direction,
          fillMode,
          playState
     ) {
          return {
               name: `${name}`,
               duration: `${duration}`,
               timingFunction: `${timingFunction}`,
               delay: `${delay}`,
               iterationCount: `${iterationCount}`,
               direction: `${direction}`,
               fillMode: `${fillMode}`,
               playState: `${playState}`,
          };
     }
}

export default Animation;
