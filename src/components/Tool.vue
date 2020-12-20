<template>
   <li class="tool">
      <button class="btn btn-tool" type="button" @click="$emit('toolClicked', tool.title)">
         <i class="tool-icon" :class="tool.icon"></i>
         <p class="tool-name">{{ tool.title }}</p>
      </button>
   </li>
</template>
<script>
export default {
   props: {
      tool: Object
   }
}
</script>