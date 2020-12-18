<template>
  <Header />
  <main>
    <Toolbar />    
  </main>
</template>

<script>
import Header from '@/components/Header'
import Toolbar from '@/components/Toolbar'
export default {
  name: 'App',
  components: {
    Header, Toolbar
  }
}
</script>
<style>
  @import './assets/styles/main.css';
</style>