<template>
  <div class="slideBar">
    <el-menu router>
       <slideBarIn :menuDate="menuDate"></slideBarIn>
    </el-menu>
  </div>
</template>

<script>
import {mapMutations} from "vuex"
import slideBarIn from "@/components/slideBar/slideBarIn"
export default {
  props:{
     menuDate:{
       type:Array,
       default:[]
     }
  },
  data () {
    return {
      loading:false,
     
      
    }
  },
  components:{
    slideBarIn
  }

  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="stylus" rel="stylesheet/stylus">
.slideBar{
  width:100%;
  height:100%;

}
</style>
