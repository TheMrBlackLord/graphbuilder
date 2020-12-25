import {Point} from './Point';
import {opts} from './opts';
// vertex model
class Vertex {
   constructor(x, y, ctx, label) {
      this.pos = new Point(x, y);
      this.ctx = ctx;
      this.label = label;
      this.fillColor = opts.vertexFillColor;
      this.radius = opts.vertexRadius
   }
   display() {
      this.ctx.beginPath();
      this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
      this.ctx.fillStyle = this.fillColor;
      this.ctx.fill();
      this.ctx.strokeStyle = opts.vertexStrokeColor;
      this.ctx.lineWidth = opts.vertexStrokeWidth;
      this.ctx.stroke();
      this.ctx.closePath();

      // show vertex label
      let labelX = this.pos.x + 1;
      let labelY = this.pos.y + 2;
      this.ctx.fillStyle = opts.vertexLabelColor;
      this.ctx.fillText(this.label, labelX, labelY);
   }
}
export {Vertex};