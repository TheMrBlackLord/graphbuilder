
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
            {title: 'search', icon: 'fas fa-search'},
            {title: 'create', icon: 'fas fa-plus'},
            {title: 'delete', icon: 'fas fa-trash'},
            {title: 'watch', icon: 'fas fa-eye'}

         ]
      }
   },
   components: {
      Tool
   },
   methods: {
      toolClicked(value) {
         console.log(`Tool: ${value}`)
      }
   }
}
</script>