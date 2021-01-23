
<template>
   <aside class="toolbar">
      <div class="toolbar-header">
         <p class="title">Tools</p>
      </div>
      <div class="toolbar-box">
         <ul class="toollist">
            <Tool
               @click="$emit('toolSelected', tool)"
               v-for="tool of tools"
               :key="tool"
               :tool="tool"
               :activeToolId="activeToolId"
               
            />
         </ul>
      </div>
   </aside>
</template>
<script>
import Tool from '@/components/Tool'
export default {
   props: {
      tools: Array,
      activeToolId: Number
   },
   components: {
      Tool
   },
}
</script>
<style scoped>
   .tool.active {
      background: rgb(153 87 204);
   }
</style>