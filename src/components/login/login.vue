<template>
  <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="formContain" @submit.native.prevent>
    <el-form-item prop="names">
      <el-input type="text" clearable placeholder="请填写用户名" v-model="ruleForm.names"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="ruleForm.password" clearable placeholder="请填写密码"></el-input>
    </el-form-item>
    <el-form-item>
       <el-checkbox v-model="ruleForm.checked" >记住密码</el-checkbox>
    </el-form-item>
    <el-form-item style="width:100%;text-align:center">
       <el-button type="primary" style="width:100%" @click="submitForm('ruleForm')" :loading="loading">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {mapMutations} from "vuex"
export default {
  data () {
    return {
      loading:false,
      ruleForm: {
        names:"",
        checked:false,
        password:""
      },
       rules: {
          names: [
            { required: true, message: '请输入用户名字', trigger: 'blur'},
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger:'blur'}
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            {min:3,max:5,message:"长度在3到5个字符",trigger:'blur'}
          ],
      },
    }
  },
  created(){
    if(sessionStorage.getItem("login")) {
      this.ruleForm=JSON.parse(sessionStorage.getItem("login"))
    }
  },
  methods:{
         ...mapMutations(["USERMESSAGE"]),
         submitForm(formName) {
          this.loading=true;
          this.$refs[formName].validate((valid) => {
           
            if (valid) {
              if(this.ruleForm.checked){
                let message=JSON.stringify(this.ruleForm);
                sessionStorage.setItem("login",message);
                this.USERMESSAGE(this.ruleForm)
              }
               this.$message({
                message: '恭喜你，登录成功',
                type: 'success'
              });
               this.loading=false;
               this.$router.push({
                 path:"/home"
               })
            } else {
             this.$message.error('错了哦，登录失败!');
                this.loading=false;
              return false;
            }
            
          });
        },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="stylus" rel="stylesheet/stylus">
      .formContain{
        width:300px;
        height:300px;
        padding:35px;
        margin:100px auto;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;

      }
</style>
