<template>
  <div>
    <Header />
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            <Toolbar /> 
          </div>
          <div class="col-md-10">
            <div class="canvas-container neon-border2">
              <Canvas />
            </div>
          </div>
        </div>
      </div>
        
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Toolbar from '@/components/Toolbar'
import Canvas from '@/components/Canvas'
export default {
  name: 'App',
  components: {
    Header, Toolbar, Canvas
  }
}
</script>
