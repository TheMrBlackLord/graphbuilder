import {Vertex} from './Vertex';
import {Graph} from './Graph';

const graph = new Graph();
const getMousePos = (canvas, evt) => {
   var rect = canvas.getBoundingClientRect();
   return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
   };
}
const drawLoop = (w, h, ctx) => {
   ctx.clearRect(0, 0, w, h);
   graph.vertexList.forEach(vx => {
      vx.display();
   });
   requestAnimationFrame(() => drawLoop(w, h, ctx))
}
document.addEventListener('DOMContentLoaded', function () {
   const canvas = document.querySelector('#canvas-field');
   const context = canvas.getContext('2d');
   canvas.width = canvas.parentElement.offsetWidth;
   canvas.height = canvas.parentElement.offsetHeight;

   // canvas text options
   context.font = 'bold 28px sans-serif';
   context.textBaseline = 'middle';
   context.textAlign = 'center';

   window.addEventListener('resize', () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
   });

   drawLoop(canvas.width, canvas.height, context) // drawing vertexes & edges

   canvas.addEventListener('click', e => {
      // create new vertex
      if (window.tool === 'create') {
         let pos = getMousePos(canvas, e);
         const vx = new Vertex(pos.x, pos.y, context, graph.nextVertexNum);
         graph.addVertex(vx);
      }
      else if (window.tool == 'select') {
         let pos = getMousePos(canvas, e)
         for(let i = graph.vertexList.length - 1; i >= 0; i--) {
            let vx = graph.vertexList[i];
            let dist = Math.hypot(vx.pos.x - pos.x, vx.pos.y - pos.y)
            if (dist <= vx.radius) {
               console.log(vx.label)
               break
            }
            
         }
      }
   });
});
