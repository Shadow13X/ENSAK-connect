<template>
  <a-layout class="ensak-enterprise-layout">
    <a-layout-header class="ensak-enterprise-layout-nav">
      <router-link to="/"><div class="ensak-enterprise-layout-header-logo" ></div></router-link>
      <!-- <img src="./../../assets/branding/logoFEE.png" alt="Ensak Branding"> -->
      <div class="ensak-enterprise-layout-header-menu" >
        <a-icon class="ensak-enterprise-layout-header-menu-item" type="setting" />
        <a-icon class="ensak-enterprise-layout-header-menu-item" type="bell" />
        <span class="ensak-enterprise-layout-header-menu-item"><button class="ensak-enterprise-layout-logout"><router-link to="logout" class="ensak-enterprise-layout-logout-button">LOGOUT</router-link></button></span>
      </div>
    </a-layout-header>
    <a-layout class="ensak-enterprise-layout-body">
      <a-layout-sider width="300" class="ensak-enterprise-layout-body-sider" style="background: #fff">
        <div class="ensak-enterprise-layout-body-sider-profile">
          <div class="ensak-enterprise-layout-body-sider-profile-image">
            <img class="ensak-enterprise-layout-body-sider-profile-image" :src="this.project.image" :alt="this.project.image" style="border-radius:50%;
          box-shadow: 0px 8px 34px 1px rgba(0, 54, 108, 0.52);">
          </div>
          <div class="ensak-enterprise-layout-body-sider-profile-content">
            <div class="ensak-enterprise-layout-body-sider-profile-content-name"><span style='font-weight:600;'>{{this.project.name}}</span></div>
            <div class="ensak-enterprise-layout-body-sider-profile-content-email">kikou@kikou.com</div>
          </div>
        </div>
        <a-divider class="divider"/>
        <a-menu  class="ensak-enterprise-layout-body-sider-menu" mode="inline"  :selectedKeys="[this.$route.name]" :style="{ borderRight: 0 }">
          <a-menu-item class="ensak-enterprise-layout-body-sider-menu-item" key="Event">
            <router-link to="/enterprise/" >Event</router-link>
          </a-menu-item>
          <a-menu-item class="ensak-enterprise-layout-body-sider-menu-item" key="Resume">
            <router-link to="/enterprise/resume" >Resumes</router-link>
          </a-menu-item>
          <a-menu-item class="ensak-enterprise-layout-body-sider-menu-item" key="Projects">
            <router-link to="/enterprise/projects" >Projects</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 15px 15px 0 15px; background-color:#fff">
        <a-layout-content class='ensak-enterprise-layout-body-main'><router-view ></router-view></a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import { /*Button,*/ Layout, Menu, /*Breadcrumb,*/ Icon, Divider } from 'ant-design-vue'
export default {
  name: "enterprisePage",
  components: {
    "a-menu":Menu,
    "a-menu-item":Menu.Item,
    // "a-menu-item-group":Menu.ItemGroup,
    // "a-sub-menu":Menu.SubMenu,
    "a-icon":Icon,
    // "a-button":Button,
    // "a-breadcrumb":Breadcrumb,
    // "a-breadcrumb-item":Breadcrumb.Item,
    "a-layout":Layout,
    "a-layout-header":Layout.Header,
    "a-layout-sider":Layout.Sider,
    "a-layout-content":Layout.Content,
    "a-divider":Divider,
  },
  data() {
    return {
      SelectedKey:"/event",
      collapsed: false,
      id:"oncf-maroc",
      project:"",
    };
  },
  beforeCreate() {
    this.axios.get('/enterprises/'+this.id)
        .then(response => {
          this.project = response.data.content.data;
          console.log()
        })
        .catch(e => {
          // this.errors.push(e)
          console.log(e);
        })
  }
}
</script>

<style lang="scss">
::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #013E7A;
}
.ensak-enterprise-layout{
  height: 100vh;
  &-header{
    display:inline-block;
    &-logo{
      height:100%;
      width:100px;
      background-repeat: no-repeat;
      background-size: cover;
      background-image:url("./../../assets/branding/ENSAK-Connect.png");
      &:hover{
        background-image: url("./../../assets/branding/ENSAK-Connect-white.png") linear-gradient(#2D9CDB,#2D9CDB);
      }
    }
  }
  &-body{
    flex: 1 1 auto;
    &-sider{
      z-index:500;
      box-shadow: 5px 0px 34px rgba(92, 132, 171, 0.46);
      &-profile{
        padding:30px 0;
        &-image{
          width:70%;
          margin:auto;
        }
        &-content{
          margin-top:20px;
          &-name{
            color:#0061B7;
            font-size:20pt;
          }
        }
      }
      &-menu{
        display:block;
        margin:auto 0 !important;
        &-item{
          font-size: 20px !important;
          font-weight: 400 !important;
          color:#013E7A;
          margin: 20px 0 !important;  
        }
      }
    }
    &-main{
      background: '#fff';
      padding: 10px;
      margin: 0;
      min-height: '280px';
      overflow-y:scroll;
    }
  }
}
.ant-menu-item-selected{
  color:#339DFF;
  font-weight: 600 !important;
}
.divider{
  text-align:center;
  width:75%;
  min-width:75%;
  margin:0 auto;
  color:#013E7A;
  background: #013E7A;
}
.ensak-enterprise-layout-nav{
  padding:0 0 0 10px !important;
  height:50px;
  display:flex;
  justify-content: space-between;
  background-color: #ECF6FF;
  line-height: unset !important;
  box-shadow: 0px 5px 24px rgba(92, 132, 171, 0.46);
  z-index: 1000;
}
.ensak-enterprise-layout-header-menu{
  display:flex;
  &-item{
    margin:0;
    padding: 0 10px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    color:#2D9CDB;
    &:hover{
      color:white;
      background:#2D9CDB;
    }
  }
}
.ensak-enterprise-layout-logout{
  padding: 0px 20px 0px 20px;
  height:30px !important;
  margin:auto auto;
  border-radius: 25px 0 25px 0;
  font-weight: 600;
  font-size: 18px;
  background: linear-gradient(to right,#56CCF2 , #2D9CDB);
  color:white;
  border: 0 white solid;
  &:hover {
    cursor: pointer;
    background: white;
    color:#2D9CDB;
  }
  &-button{
    color: white !important;
    &:hover {
      cursor: pointer;
      color: #2D9CDB !important;
    }
  }
}
</style>
