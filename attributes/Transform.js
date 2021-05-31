import Default from "./Default";

class Transform extends Default {
     /**
      * Defines a 2D transformation, using a matrix of six values.
      * @param {number} a
      * @param {number} b
      * @param {number} c
      * @param {number} d
      * @param {number} tx
      * @param {number} tz
      */
     static newMatrix2D(a, b, c, d, tx, ty) {
          return this.newMatrix3D(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1);
     }

     /**
      * Defines a 3D transformation, using a 4x4 matrix of 16 values.
      * @param {number} a1
      * @param {number} b1
      * @param {number} c1
      * @param {number} d1
      * @param {number} a2
      * @param {number} b2
      * @param {number} c2
      * @param {number} d2
      * @param {number} a3
      * @param {number} b3
      * @param {number} c3
      * @param {number} d3
      * @param {number} a4
      * @param {number} b4
      * @param {number} c4
      * @param {number} d4
      */
     static newMatrix3D(
          a1 = 0,
          b1 = 0,
          c1 = 0,
          d1 = 0,
          a2 = 0,
          b2 = 0,
          c2 = 0,
          d2 = 0,
          a3 = 0,
          b3 = 0,
          c3 = 0,
          d3 = 0,
          a4 = 0,
          b4 = 0,
          c4 = 0,
          d4 = 0
     ) {
          return `matrix3d(${a1},${b1},${c1},${d1},${a2},${b2},${c2},${d2},${a3},${b3},${c3},${d3},${a4},${b4},${c4},${d4})`;
     }

     /**
      * Defines a 3D translation.
      * @param {number} x
      * @param {number} y
      * @param {number} z
      */
     static newTranslate3D(x, y, z) {
          return `translate(${x},${y},${z})`;
     }

     /**
      * Defines a 2D translation.
      * @param {number} x
      * @param {number} y
      */
     static newTranslate2D(x, y) {
          return this.newTranslate3D(x, y, 0);
     }

     /**
      * Defines a translation, using only the value for the X-axis.
      * @param {number} x
      */
     static newTranslateX(x) {
          return this.newTranslate2D(x, 0);
     }

     /**
      * Defines a translation, using only the value for the Y-axis.
      * @param {number} y
      */
     static newTranslateY(y) {
          return this.newTranslate2D(0, y);
     }

     /**
      * Defines a translation, using only the value for the Z-axis.
      * @param {number} z
      */
     static newTranslateZ(z) {
          return this.newTranslate3D(0, 0, z);
     }

     /**
      * Defines a 3D scale transformation.
      * @param {number} x
      * @param {number} y
      * @param {number} z
      */
     static newScale3D(x, y, z) {
          return `scale3d(${x},${y},${z})`;
     }

     /**
      * Defines a 2D scale transformation.
      * @param {number} x
      * @param {number} y
      */
     static newScale2D(x, y) {
          return this.newScale3D(x, y, 0);
     }

     /**
      * Defines a scale transformation by giving a value for the X-axis.
      * @param {number} x
      * @returns
      */
     static newScaleX(x) {
          return this.newScale2D(x, 0);
     }

     /**
      * Defines a scale transformation by giving a value for the Y-axis.
      * @param {number} y
      * @returns
      */
     static newScaleY(y) {
          return this.newScale2D(0, y);
     }

     /**
      * Defines a scale transformation by giving a value for the Z-axis.
      * @param {number} z
      * @returns
      */
     static newScaleZ(z) {
          return this.newScale3D(0, 0, z);
     }

     /**
      * Defines a 3D rotation.
      * @param {number} x coefficient for the X-axis
      * @param {number} y coefficient for the Y-axis
      * @param {number} z coefficient for the Z-axis
      */
     static newRotate3D(x, y, z, angle) {
          return `rotate3d(${x},${y},${z},${angle}deg)`;
     }

     /**
      * Defines a 2D rotation.
      * @param {number} degree a number between 0-360.
      */
     static newRotate(degree) {
          return `rotate(${degree}deg)`;
     }

     /**
      * Defines a 3D rotation along the X-axis.
      * @param {number} x a number between 0-360.
      */
     static newRotateX(x) {
          return this.newRotate3D(1, 0, 0, x);
     }

     /**
      * Defines a 3D rotation along the Y-axis.
      * @param {number} y a number between 0-360.
      */
     static newRotateY(y) {
          return this.newRotate3D(0, 1, 0, y);
     }

     /**
      * Defines a 3D rotation along the X-axis.
      * @param {number} z a number between 0-360.
      */
     static newRotateZ(z) {
          return this.newRotate3D(0, 0, 1, z);
     }

     /**
      * Defines a 2D skew transformation along the X- and the Y-axis
      * @param {number} x a number between 0-360.
      * @param {number} y a number between 0-360.
      */
     static newSkew(x, y) {
          return `skew(${x}deg,${y}deg)`;
     }

     /**
      * Defines a 2D skew transformation along the X-axis.
      * @param {number} x a number between 0-360.
      */
     static newSkewX(x) {
          return this.newSkew(x, 0);
     }

     /**
      * Defines a 2D skew transformation along the Y-axis.
      * @param {number} y a number between 0-360.
      */
     static newSkewY(y) {
          return this.newSkew(0, y);
     }
}

export default Transform;
