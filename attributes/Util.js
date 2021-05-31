class Util {
     static isBetween(x, min, max) {
          return x >= min && x <= max;
     }

     static validatePositiveNumber(x, backup, backup2) {
          if (this.isBetween(x, 0, Infinity)) return x;
          if (this.isBetween(backup, 0, Infinity)) return backup;
          if (this.isBetween(backup2, 0, Infinity)) return backup2;
          else return 0;
     }

     static isDirection(input) {
          return ["to top", "to left", "to right", "to bottom"].includes(input);
     }

     static isDegree(input) {
          return /^(-)?(\d+)(.(\d+))?deg$/.test(input);
     }

     static isPercentage(input) {
          return /^(\d+)(.(\d+))?%$/.test(input);
     }
}

export default Util;
