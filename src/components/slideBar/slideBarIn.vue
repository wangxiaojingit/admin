<template>
  <div>
      <div v-for="(item,index ) in menuDate" >
        <el-submenu v-if="item.childs&&item.childs.length"
         :index="item.entity.name" :class="item.entity.name">
              <template slot="title">
                <i :class="item.entity.icon"></i>
                {{item.entity.alias}}
              </template>
               <slideBarIn :menuDate="item.childs"></slideBarIn>  
        </el-submenu>
        <el-menu-item v-else  
        :index="item.entity.name"
        :class="item.entity.name"
        >{{item.entity.alias}}</el-menu-item>

      </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
  name:"slideBarIn",
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
  methods:{
    
  },
  computed:{
    
    
  },
  mounted(){
    console.log(this.$route.path)
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
