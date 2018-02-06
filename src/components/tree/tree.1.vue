<template>
   <div class="navMenu">  
    <label v-for="navMenu in navMenus">  
      <el-menu-item v-if="!navMenu.childs.length"  
                    :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name"   
                    disabled="">  
        <i :class="navMenu.entity.icon"></i>  
        <span slot="title">{{navMenu.entity.alias}}</span>  
      </el-menu-item>  
  
      <el-submenu v-if="navMenu.childs.length"  
                  :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name">  
        <template slot="title">  
          <i :class="navMenu.entity.icon"></i>  
          <span> {{navMenu.entity.alias}}</span>  
        </template>  
        <NavMenu :navMenus="navMenu.childs"></NavMenu>  
      </el-submenu>  
    </label>  
  
  </div>  
</template>

<script>
import {mapGetters} from "vuex"
 export default {  
    name: 'NavMenu',  
    props: {
      navMenus:{
        type:Object,
        default:null
      }
    },  
    data() {  
      return {}  
    },  
    methods: {}  
  }  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="stylus" rel="stylesheet/stylus">
     .table{
       position:absolute;
       left:0px;
       top:0px;
       right:0px;
       bottom:0px;
       .header{
             height: 60px;
             line-height: 60px;
             background: #20a0ff;
             color: #fff;
             display:flex;
             .left{
               flex:0 0 210px;
               width:210px;
               font-size: 22px;
                text-align:left;
                height:60px;
                
                border-color: hsla(62,77%,76%,.3);
                border-right-width: 1px;
                border-right-style: solid;
             }
             .right{
               flex:1;
               display:flex;
              
               .selectIcon{
                 flex:0 0 60px;
                 width:60px;
                 height:60px;
                 text-align: center;
                 line-height: 60px;
                 font-size: 24px;
               }
               .rightHead{
                 flex:1;
                 text-align :right;
                 img{
                   width:35px;
                   height:35px;
                   border-radius:50%;
                   vertical-align: middle;
                 }
               }
             }
       }
       .bottom{
         position:absolute;
         top:60px;
         bottom:0;
         width:100%;
         display:flex;
         .aside{
           flex:0 0 230px;
           width:230px;
          
           
         }
         .main {
          flex:1;
          background-color: #E9EEF3;
          color: #333;
          text-align: center;
         
          
       }
       }
       
  
     }
</style>
