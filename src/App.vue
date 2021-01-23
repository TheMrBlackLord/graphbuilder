<template>
  <div>
    <Header />
    <main>
      <ConnectPopup />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            <Toolbar
               :tools="tools"
               :activeToolId="activeToolId"
               @toolSelected="toolSelected"
            /> 
          </div>
          <div class="col-md-10">
            <CanvasHandler 
               :tool="tool"
             />
          </div>
        </div>
      </div>
        
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Toolbar from '@/components/Toolbar';
import CanvasHandler from '@/components/CanvasHandler';
import ConnectPopup from '@/components/ConnectPopup';
export default {
  name: 'App',
  components: {
    Header, Toolbar, CanvasHandler, ConnectPopup
  },
  data() {
    return {
      tools: [
        {id: 1, title: 'Select', icon: 'fas fa-mouse-pointer'},
        {id: 2, title: 'Create', icon: 'fas fa-plus'},
        {id: 3, title: 'Connect', icon: 'fas fa-bezier-curve'},
        {id: 4, title: 'watch', icon: 'fas fa-eye'}
      ],
      activeToolId: 2
    }
  },
  created() {
      this.tool = this.toolSelected(this.tools[1]);
  },
  methods: {
     toolSelected(tool) {
         this.tool = tool.title.replace(' ', '').toLowerCase();
         this.activeToolId = tool.id;
     }
  }
}
</script>
