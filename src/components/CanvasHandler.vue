<template>
   <div class="canvas-container neon-border2" ref="canvasContainer">
      <!-- mouseout event is triggered when the cursor is outside the canvas -->
      <canvas id="canvas-field"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      @mouseout="onMouseUp"
      >Sorry, but your browser doesn't support html5 canvas</canvas>
   </div>
</template>

<script>
import { Vertex } from '../assets/js/Vertex';
import { Graph } from '../assets/js/Graph';
import { opts } from '../assets/js/opts';
export default {
   mounted() {
      this.cnv = document.querySelector('canvas');
      this.ctx = this.cnv.getContext('2d');
      window.addEventListener('resize', this.setCanvasOptions);
      // setTimeout is needed so that the container has time
      // to become the desired size
      setTimeout(() => {
         this.setCanvasOptions();
      }, 1);
      this.graph = new Graph();
      this.draw();
   },
   props: {
      tool: {type: String, default: 'create'}
   },
   data() {
      return {
         selected: {
            vertex: null, // selected vertex
            // see mousedown event for details
            offsetX: 0,
            offsetY: 0
         },
         connected: []
      }
   },
   methods: {
      setCanvasOptions() {
         let width = this.$refs.canvasContainer.clientWidth;
         let height = this.$refs.canvasContainer.clientHeight;

         // canvas options
         this.cnv.width = width;
         this.cnv.height = height;

         // canvas text options
         this.ctx.font = 'bold 28px sans-serif';
         this.ctx.textBaseline = 'middle';
         this.ctx.textAlign = 'center';
      },
      onMouseUp() {
         if (this.selected.vertex) {
            this.selected.vertex.fillColor = opts.vertexFillColor;
            this.selected.vertex = null; 
         }
      },
      onMouseMove(e) {
         if (this.selected.vertex) {
            this.selected.vertex.pos.x = e.clientX - this.selected.offsetX;
            this.selected.vertex.pos.y = e.clientY - this.selected.offsetY;
         }
         // hover effect
         if (this.tool == 'select') {
            for(let i = this.graph.verticesList.length - 1; i >= 0; i--) {
               let vx = this.graph.verticesList[i];
               let dist = Math.hypot(vx.pos.x - e.offsetX, vx.pos.y - e.offsetY);
               if (dist <= vx.radius) {
                  vx.fillColor = opts.vertexHoverColor;
               } else {
                  vx.fillColor = opts.vertexFillColor;
               }
               
            }
         }
      },
      onMouseDown(e) {
         // create new vertex
         if (this.tool === 'create') {
            const vx = new Vertex(e.offsetX, e.offsetY, this.ctx, this.graph.nextVertexNum, this.graph.nextVertexId);
            this.graph.addVertex(vx);
         }
         // connect 2 vertices
         else if (this.tool == 'connect') {
            for(let i = this.graph.verticesList.length - 1; i >= 0; i--) {
               let vx = this.graph.verticesList[i];
               // distance between cursor position and vertex center
               let dist = Math.hypot(vx.pos.x - e.offsetX, vx.pos.y - e.offsetY);
               if (dist <= vx.radius) { // cursor is inside the circle
                  if (this.connected.length < 2) {
                     this.connected.push(vx);
                     console.log(this.connected)
                  } 
                  if (this.connected.length == 2) {
                     console.log('connected')
                  }
               }
            }
         }
         // select  & move vertices
          else if (this.tool == 'select') {
         for(let i = this.graph.verticesList.length - 1; i >= 0; i--) {
            let vx = this.graph.verticesList[i];
            // distance between cursor position and vertex center
            let dist = Math.hypot(vx.pos.x - e.offsetX, vx.pos.y - e.offsetY);
            if (dist <= vx.radius) { // cursor is inside the circle
               this.selected.vertex = vx;
               /*
               When the vertex is moved, it is redrawn so that its center is at the cursor position, 
               even if the cursor was previously on the border of the circle.
               Offsets fix this
               */
               this.selected.offsetX = e.clientX - vx.pos.x;
               this.selected.offsetY = e.clientY - vx.pos.y;
               break;
            }
            
         }
      }
      },
      draw() {
         this.ctx.clearRect(0, 0, this.cnv.width, this.cnv.height);
         this.ctx.lineWidth = 3;
         // this.graph.connected.forEach(vertices => {
         //    if (vertices.length == 2) {
         //       // if the vertex is connected to itself
         //       if (vertices[0].id == vertices[1].id) {
         //          let radius = opts.selfConnectedRadius;
         //          this.ctx.beginPath();
         //          this.ctx.arc(vertices[0].pos.x + opts.vertexRadius + 3, vertices[0].pos.y, radius, 0, Math.PI * 2);
         //          this.ctx.stroke();
         //       } else {
         //          this.ctx.beginPath();
         //          this.ctx.moveTo(vertices[0].pos.x, vertices[0].pos.y);
         //          this.ctx.lineTo(vertices[1].pos.x, vertices[1].pos.y);
         //          this.ctx.stroke();
         //       }
         //    }
         // });
         this.graph.verticesList.forEach(vx => {
            vx.display();
         });
         window.requestAnimationFrame(this.draw);
      }
   }
}
</script>