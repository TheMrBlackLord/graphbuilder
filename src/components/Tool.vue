<template>
   <li class="tool" :class="{active: tool.id == activeToolId}">
      <button class="btn btn-tool" type="button">
         <i class="tool-icon" :class="tool.icon"></i>
         <p class="tool-name">{{ tool.title }}</p>
      </button>
   </li>
</template>
<script>
export default {
   props: {
      tool: Object,
      activeToolId: Number
   }
}
</script>