
// Graph model
class Graph {
   constructor() {
      this.vertexes = {};
      this.vertexList = [];
      this.nextVertexNum = 1;
      /* 
      this.vertexes = {
         vertex1: {
            vertexes: [vertex2, vertex3, vertex4],
            edgeDirected: [true, false, true],
            weight: null or number 
         }, ...
      }         
      */
   }
   addVertex(vertex) {
      this.vertexList.push(vertex);
      this.nextVertexNum++;
   }
}
export {Graph};