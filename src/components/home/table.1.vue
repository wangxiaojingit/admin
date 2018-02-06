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
         <el-menu  
       default-active="0"  
       class="el-menu-vertical-demo"  
       :default-active="onRoutes"
       
       background-color="#F0F6F6"  
       text-color="#3C3F41"  

       active-text-color="black"
        @select="handleSelect"
        router
        unique-opened
       >  
       <NavMenu :navMenus="leftMenus"></NavMenu>  
       </el-menu>    
         <!-- <sidebar ></sidebar>      -->
       </el-aside>
        <el-main  class="main">
           <router-view class="view"></router-view>
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {mapGetters} from "vuex"
import NavMenu from "@/components/tree/tree"
import sidebar from "@/components/tree/SiderBar"
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
                "alias": "系统管理",  
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
                        "alias": "权限管理",  
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
                        "name": "roleManage",  
                        "icon": "el-icon-bell",  
                        "alias": "角色管理",  
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
                        "name": "menuManage",  
                        "icon": "el-icon-edit",  
                        "alias": "菜单管理",  
                        "state": "ENABLE",  
                        "sort": 2,  
                        "value": "/system/menu",  
                        "type": "LINK",  
                        "discription": "用于菜单管理的菜单",  
                        "createUserId": 1  
                    },  
                    "childs": "" 
                },  
                {  
                    "entity": {  
                        "id": "5",  
                        "parentMenuId": 1,  
                        "name": "groupManage",  
                        "icon": "el-icon-mobile-phone\r\n",  
                        "alias": "分组管理",  
                        "state": "ENABLE",  
                        "sort": 3,  
                        "value": "/system/group",  
                        "type": "LINK",  
                        "discription": "用于分组管理的菜单",  
                        "createUserId": 1  
                    },  
                    "childs": "" 
                }  
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
      console.log(99)
    console.log(this.$route.path)
    console.log(99)
  },
  computed:{
    ...mapGetters(["userMessage"]),
    onRoutes(){
        console.log(66)
        console.log(this.$route.path)
        console.log(66)
        return this.$route.path.replace('/','');
    }
  },
  methods:{
       handleSelect(key, keyPath) {
        console.log(key, keyPath);
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
          .view{
            width:100%;
            height:100%;
          }
          
       }
       }
       
  
     }
</style>
