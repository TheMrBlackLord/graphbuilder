import {Vertex} from './Vertex';
import {Graph} from './Graph';
import {opts} from './opts';

const graph = new Graph();
// const popupForm = document.getElementById('connect-popup-form');
// const popupWindow = document.getElementById('connect-popup-window');
const getMousePos = (canvas, evt) => {
   var rect = canvas.getBoundingClientRect();
   return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
   };
}
const drawLoop = (w, h, ctx) => {
   ctx.clearRect(0, 0, w, h);
   ctx.lineWidth = 3;
   // draw connected vertices
   connected.forEach(vertices => {
      if (vertices.length == 2) {
         ctx.beginPath();
         ctx.moveTo(vertices[0].pos.x, vertices[0].pos.y);
         ctx.lineTo(vertices[1].pos.x, vertices[1].pos.y);
         ctx.stroke();
      }
   });
   graph.vertexList.forEach(vx => {
      vx.display();
   });
   requestAnimationFrame(() => drawLoop(w, h, ctx))
}

let selected = {
   vertex: null, // selected vertex
   // see mousedown event for details
   offsetX: 0,
   offsetY: 0
};
let connected = [
   [],
];

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
      context.font = 'bold 28px sans-serif';
      context.textBaseline = 'middle';
      context.textAlign = 'center';

   });

   drawLoop(canvas.width, canvas.height, context) // drawing vertexes & edges
   function cancelSelection() {
      if (selected.vertex)
         selected.vertex.fillColor = opts.vertexFillColor;
         selected.vertex = null; 
   }
   function onMouseMove(e) {
      if (selected.vertex) {
         selected.vertex.pos.x = e.clientX - selected.offsetX;
         selected.vertex.pos.y = e.clientY - selected.offsetY;
      }
      // hover effect
      if (window.tool == 'select') {
         for(let i = graph.vertexList.length - 1; i >= 0; i--) {
            let vx = graph.vertexList[i];
            let dist = Math.hypot(vx.pos.x - e.offsetX, vx.pos.y - e.offsetY);
            if (dist <= vx.radius) {
               vx.fillColor = opts.vertexHoverColor;
            } else {
               vx.fillColor = opts.vertexFillColor;
            }
            
         }
      }
   }
   function onMouseDown(e) {
      // create new vertex
      if (window.tool === 'create') {
         let pos = getMousePos(canvas, e);
         const vx = new Vertex(pos.x, pos.y, context, graph.nextVertexNum);
         graph.addVertex(vx);
      }
      // select & move vertices
      else if (window.tool == 'select') {
         for(let i = graph.vertexList.length - 1; i >= 0; i--) {
            let vx = graph.vertexList[i];
            // distance between cursor position and vertex center
            let dist = Math.hypot(vx.pos.x - e.offsetX, vx.pos.y - e.offsetY);
            if (dist <= vx.radius) { // cursor is inside the circle
               selected.vertex = vx;
               /*
               When the vertex is moved, it is redrawn so that its center is at the cursor position, 
               even if the cursor was previously on the border of the circle.
               Offsets fix this
               */
               selected.offsetX = e.clientX - vx.pos.x;
               selected.offsetY = e.clientY - vx.pos.y;
               break;
            }
            
         }
      }
      // connect 2 vertices
      else if (window.tool == 'connect') {
         for(let i = graph.vertexList.length - 1; i >= 0; i--) {
            let vx = graph.vertexList[i];
            // distance between cursor position and vertex center
            let dist = Math.hypot(vx.pos.x - e.offsetX, vx.pos.y - e.offsetY);
            if (dist <= vx.radius) { // cursor is inside the circle
               console.log('connect')
            }
         }
      }
   }


   canvas.addEventListener('mousedown', onMouseDown);
   canvas.addEventListener('mousemove', onMouseMove);
   canvas.addEventListener('mouseup', cancelSelection);
   // when the cursor is outside the canvas
   canvas.addEventListener('mouseout', cancelSelection);
});
