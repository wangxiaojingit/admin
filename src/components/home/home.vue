<template>
  <el-container class="table">
    <el-header class="header">
      <div class="left">ADMINMASTER</div>
      <div class="right">
       <span class="selectIcon el-icon-menu"></span>
       <span class="rightHead">
         <span>{{userMessage.names}}</span>
         <img src="./header.png"/>
       </span>
      </div>
    </el-header>
    <el-container class="bottom">
        <el-aside class="aside" width="230px">
           
        
         <sidebar :menuDate="leftMenus"></sidebar>
       </el-aside>
        <el-main  class="main">
           <router-view class="view"></router-view>
        </el-main>
    </el-container>
    <!-- <button @click="go">跳转</button> -->
  </el-container>
</template>

<script>
import {mapGetters} from "vuex"
import NavMenu from "@/components/tree/tree"
import sidebar from "@/components/slideBar/slideBar"
export default {
  data () {
    return {
      userMessage1:{},
      activeIndex:"1",
      leftMenus:
    [  
        {  
            "entity": {  
                "id": 1,  
                "parentMenuId": 0,  
                "name": "systemManage",  
                "icon": "el-icon-message\r\n",  
                "alias": "美丽特效",  
                "state": "ENABLE",  
                "sort": 0,  
                "value": null,  
                "type": "NONE",  
                "discription": "用于系统管理的菜单",  
                "createUserId": 1  
            },  
            "childs": [  
                {  
                    "entity": {  
                        "id": "3",  
                        "parentMenuId": 1,  
                        "name": "authManage",  
                        "icon": "el-icon-loading",  
                        "alias": "走马灯",  
                        "state": "ENABLE",  
                        "sort": 0,  
                        "value": "/system/auth",  
                        "type": "LINK",  
                        "discription": "用于权限管理的菜单",  
                        "createUserId": 1  
                    },  
                    "childs": ""  
                },  
                {  
                    "entity": {  
                        "id": "4",  
                        "parentMenuId": 1,  
                        "name": "table",  
                        "icon": "el-icon-bell",  
                        "alias": "tables",  
                        "state": "ENABLE",  
                        "sort": 1,  
                        "value": "/system/role",  
                        "type": "LINK",  
                        "discription": "用于角色管理的菜单",  
                        "createUserId": 1  
                    },  
                    "childs": "" 
                },  
                {  
                    "entity": {  
                        "id": "2",  
                        "parentMenuId": 1,  
                        "name": "form",  
                        "icon": "el-icon-edit",  
                        "alias": "forms",  
                        "state": "ENABLE",  
                        "sort": 2,  
                        "value": "/system/menu",  
                        "type": "LINK",  
                        "discription": "用于菜单管理的菜单",  
                        "createUserId": 1  
                    },  
                    "childs": "" 
                },  
                
            ]  
        },  
        {  
            "entity": {  
                "id": "6",  
                "parentMenuId": 0,  
                "name": "userManage",  
                "icon": "el-icon-news",  
                "alias": "用户管理",  
                "state": "ENABLE",  
                "sort": 1,  
                "value": null,  
                "type": "NONE",  
                "discription": "用于用户管理的菜单",  
                "createUserId": 1  
            },  
            "childs": [  
                {  
                    "entity": {  
                        "id": "7",  
                        "parentMenuId": 6,  
                        "name": "accountManage",  
                        "icon": "el-icon-phone-outline\r\n",  
                        "alias": "帐号管理",  
                        "state": "ENABLE",  
                        "sort": 0,  
                        "value": "",  
                        "type": "NONE",  
                        "discription": "用于帐号管理的菜单",  
                        "createUserId": 1  
                    },  
                    "childs": [  
                        {  
                            "entity": {  
                                "id": "14",  
                                "parentMenuId": 7,  
                                "name": "emailManage",  
                                "icon": "el-icon-sold-out\r\n",  
                                "alias": "邮箱管理",  
                                "state": "ENABLE",  
                                "sort": 0,  
                                "value": "/content/email",  
                                "type": "LINK",  
                                "discription": "用于邮箱管理的菜单",  
                                "createUserId": 1  
                            },  
                            "childs": ""  
                        },  
                        {  
                            "entity": {  
                                "id": "13",  
                                "parentMenuId": 7,  
                                "name": "passManage",  
                                "icon": "el-icon-service\r\n",  
                                "alias": "密码管理",  
                                "state": "ENABLE",  
                                "sort": 1,  
                                "value": "/content/pass",  
                                "type": "LINK",  
                                "discription": "用于密码管理的菜单",  
                                "createUserId": 1  
                            },  
                            "childs": ""  
                        }  
                    ]  
                },  
                {  
                    "entity": {  
                        "id": "8",  
                        "parentMenuId": 6,  
                        "name": "integralManage",  
                        "icon": "el-icon-picture",  
                        "alias": "积分管理",  
                        "state": "ENABLE",  
                        "sort": 1,  
                        "value": "/user/integral",  
                        "type": "LINK",  
                        "discription": "用于积分管理的菜单",  
                        "createUserId": 1  
                    },  
                    "childs": "" 
                }  
            ]  
        },  
        {  
            "entity": {  
                "id": "9",  
                "parentMenuId": 0,  
                "name": "contentManage",  
                "icon": "el-icon-rank",  
                "alias": "内容管理",  
                "state": "ENABLE",  
                "sort": 2,  
                "value": null,  
                "type": "NONE",  
                "discription": "用于内容管理的菜单",  
                "createUserId": 1  
            },  
            "childs": [  
                {  
                    "entity": {  
                        "id": "10",  
                        "parentMenuId": 9,  
                        "name": "classifyManage",  
                        "icon": "el-icon-printer",  
                        "alias": "分类管理",  
                        "state": "ENABLE",  
                        "sort": 0,  
                        "value": "/content/classify",  
                        "type": "LINK",  
                        "discription": "用于分类管理的菜单",  
                        "createUserId": 1  
                    },  
                    "childs": ""  
                },  
                {  
                    "entity": {  
                        "id": "11",  
                        "parentMenuId": 9,  
                        "name": "articleManage",  
                        "icon": "el-icon-star-on",  
                        "alias": "文章管理",  
                        "state": "ENABLE",  
                        "sort": 1,  
                        "value": "/content/article",  
                        "type": "LINK",  
                        "discription": "用于文章管理的菜单",  
                        "createUserId": 1  
                    },  
                    "childs": "" 
                },  
                {  
                    "entity": {  
                        "id": "12",  
                        "parentMenuId": 9,  
                        "name": "commentManage",  
                        "icon": "el-icon-share",  
                        "alias": "评论管理",  
                        "state": "ENABLE",  
                        "sort": 2,  
                        "value": "/content/comment",  
                        "type": "LINK",  
                        "discription": "用于评论管理的菜单",  
                        "createUserId": 1  
                    },  
                    "childs": "" 
                }  
            ]  
        }  
    ]  
 
    }  
   
  },
  created(){
   
  },
  computed:{
    ...mapGetters(["userMessage"]),
    onRoutes(){
        
        return this.$route.path.replace('/','');
    },
   
  },
  methods:{
       handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      go(){
          this.$router.push({
              path:"/table/1"
          })
      }
  },
  components:{
   NavMenu,sidebar
  }

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
             background: #30c37c;
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
          
          .view{
            width:100%;
            height:100%;
          }
          
       }
       }
       
  
     }
     .button{position:fixed;left:0px;top:0px;}
</style>
