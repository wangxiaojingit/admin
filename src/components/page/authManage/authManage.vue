<template>
 <div class="banner"> 
    <el-carousel :interval="4000" type="card" height="350px">
      <el-carousel-item v-for="(item,index ) in 4" :key="item">
       
        <!-- <img class="imgitem"  src="./banner1.png" /> -->
        <img class="imgitem"  :src="getBanner(index)" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      b1:require("./banner1.png")
    }
  },
  methods:{
     getBanner(index){
       let s=Number(index)+1
       return require("./banner"+s+".png")
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
  background:rgba(0,0,0,.7);
  padding: 100px;
  box-sizing: border-box;
}
.imgitem{
  width:100%;
  height:100%;
  
}
el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
 
</style>
