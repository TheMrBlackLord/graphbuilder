
<template>
   <aside class="toolbar">
      <div class="toolbar-header">
         <p class="title">Tools</p>
      </div>
      <div class="toolbar-box">
         <ul class="toollist">
            <Tool 
               v-for="tool of tools"
               :key="tool"
               v-bind:tool="tool"
               @toolClicked="toolClicked"
            />
         </ul>
      </div>
   </aside>
</template>
<script>
import Tool from '@/components/Tool'
export default {
   data() {
      return {
         tools: [
            {id: 1, title: 'Select', icon: 'fas fa-mouse-pointer'},
            {id: 2, title: 'Create', icon: 'fas fa-plus'},
            {id: 3, title: 'delete', icon: 'fas fa-trash'},
            {id: 4, title: 'watch', icon: 'fas fa-eye'}

         ]
      }
   },
   components: {
      Tool
   },
   mounted() {
      // set tool on load
      this.toolClicked(this.tools[1])
   },
   methods: {
      toolClicked(tool) {
         console.log(`Tool: ${tool.title}`)
         window.tool = tool.title.replace(' ', '').toLowerCase()
         document.querySelectorAll('.tool').forEach(el => el.classList.remove('active'))
         document.querySelector(`.tool${tool.id}`).classList.add('active')
      }
   }
}
</script>
<style scoped>
   .tool.active {
      background: rgb(153 87 204);
   }
</style>