<template>
  <div class="popover" v-show="msg">
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
export default {
  props:["msg"],
  methods:{
    setEmptyAfter(ms){
      setTimeout(()=>{
        this.$emit('setMsg','')
      },ms)
    }
  },
  watch:{
    'msg': function(newMsg, oldMsg){
      if(!oldMsg){
        this.setEmptyAfter(1000)
      }
    }
  },
  mounted(){
    this.setEmptyAfter(2500)
  }
}
</script>
<style lang="stylus">
.popover
  position fixed
  top 5%
  left calc(50% - 4.375rem)
  width 100px
  background-color lighten($accentColor, 86%)
  padding 0 1.25rem 0
  border-radius 4px
  overflow hidden
  box-shadow 0 1px 5px rgba(0, 0, 0, 0.4)
  z-index 9999
  h3
    color lighten($textColor, 40%)
    font-weight bold
    margin 0 .4rem 0
</style>