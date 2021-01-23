<template>
      <div class="popup-background" id="connect-popup-window" :class="{show: isVisible}" @click="modalHide">
         <div class="popup-window" data-toggle="modal">
            <div class="col-lg-4">
               <form class="connect-popup" id="connect-popup-form">
                  <div class="form-group">
                     <div class="box">
                        <label for="edge-weight">Edge weight</label>
                        <input type="number" class="form-control w-50" name="edge-weight" id="edge-weight" placeholder="Enter edge weight"
                              :disabled="isDisabableWeight">
                        <input type="checkbox" name="isNoneWeight" id="none-weight" class="d-none"
                              v-model="isDisabableWeight">
                        <label for="none-weight" class="none-weight">None</label>
                     </div>
                  </div>
                  <div class="form-group">
                     <div class="box">
                        <label for="edge-label">Label</label>
                        <input style="width: 85%" type="text" class="form-control" name="edge-label" id="edge-label" placeholder="Label">
                     </div>
                  </div>
                  <div class="form-group">
                     <div class="radio-group">
                           <input type="radio" name="isDirected" id="not-directed" value="false" checked>
                           <label for="not-directed">Not directed</label>
                           <input type="radio" name="isDirected" id="directed" value="true">
                           <label for="directed">Directed</label>
                        </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
               </form>
            </div>
         </div>
      </div>
</template>
<script>

export default {
   data() {
      return {
         isVisible: false,
         isDisabableWeight: false
      }
   },
   methods: {
      modalHide(e) {
         let target = e.target;
         // if user clicked on background, not the form
         if (target.getAttribute('data-toggle') == 'modal') {
            this.isVisible = !this.isVisible;
         }
      }
   }
}
</script>
<style scoped>
   .popup-background {
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      z-index: 9;
      background: rgba(0, 0, 0, 0.5);
      display: none;
      opacity: 0;
   }
   .popup-background.show {
      display: block;
      opacity: 1;
   }
   .popup-window {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   .connect-popup {
      background: rgb(243, 243, 243);
      padding: 15px;
      border-radius: 10px;
   }
   .form-group .box {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   .none-weight {
      border: 2px solid transparent;
      padding: 2px 3px;
      border-radius: 15px;
   }
   #none-weight:checked ~ .none-weight {
      border-color: rgb(118, 30, 145);
   }
   label {
      margin: 0;
   }
   .radio-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: bold;
   }
   .radio-group input {
      display: none;
   }
   .radio-group label {
      border-bottom: 2px solid transparent;
      padding: 0 0 2px;
   }
   .radio-group input:checked + label {
      border-color: rgb(118, 30, 145);
   }
</style>