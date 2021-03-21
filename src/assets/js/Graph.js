
// Graph model
class Graph {
   constructor() {
      this.vertices = {};
      this.verticesList = [];
      this.nextVertexNum = 1;
      this.nextVertexId = 1;
      /* 
      this.vertices = {
         vertex1.id: {
            connected: [vertex2, vertex3, vertex4, ...],
            edgeDirected: [true, false, true, ...],
         }, ...
      }         
      */
   }
   addVertex(vertex) {
      this.vertices[vertex.id] = {
         connected: [],
         edgeDirected: []
      };
      this.verticesList.push(vertex);
      this.nextVertexNum++;
      this.nextVertexId++;
   }
   connect(vx1, vx2, isDirected, weight) {
      console.log(vx1, vx2, isDirected, weight);
   }
}
export {Graph};