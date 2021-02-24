<template>
  <div class="ensak-project">
    <div class="ensak-project-main">
        <div style='box-shadow: 0px 0px 8px 1px rgba(1, 62, 122, 0.36);'>
            <div class="ensak-project-main-header">
                <span class="ensak-project-main-header-back"><a-icon class="ensak-project-main-header-back-icon" type="left" /></span><span class="ensak-project-main-header-title">{{this.project.name}}</span>
            </div>
            <div class="ensak-project-main-banner">
                <img
                    class="ensak-project-main-banner-image"
                    alt="example"
                    :src="this.project.banner"
                />
            </div>
            <div class="ensak-project-main-tabs">
                <a-tabs>
                    <a-tab-pane key="1" tab="About" class="ensak-project-main-tabs-about">
                        {{this.project.about}}
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Creators" class="ensak-project-main-tabs-creators">
                        <router-link v-for='c in this.project.media.innovators' :key="c" :to="'/resume/'+c.id">
                            <div class="ensak-project-main-tabs-creators-creator">
                                <img class="ensak-project-main-tabs-creators-creator-image" :src="c.image" :alt="c.firstName+' '+c.lastName+' image'">
                                <div class="ensak-project-main-tabs-creators-creator-name" >{{c.firstName+' '+c.lastName}}</div>
                                <div class="ensak-project-main-tabs-creators-creator-email" >{{c.email}}</div>
                            </div>
                        </router-link>
                    </a-tab-pane>
                    <a-tab-pane key="3" tab="Images" class="ensak-project-main-tabs-images">
                        <img @click='showModal(i)' v-for=" i in this.project.media.gallery" :key="i" :src="i" :alt="i+' image'" class="ensak-project-main-tabs-images-image" />
                        <a-modal @close="this.handleOk()">
                            <img  :src="modalImage" :alt="i+' image'" class="ensak-project-main-tabs-images-image-full" />
                        </a-modal>
                    </a-tab-pane>
                    <a-tab-pane key="4" tab="Videos" class="ensak-project-main-tabs-videos">
                        
                    </a-tab-pane>
                </a-tabs>
            </div>
        </div>
    </div>
    <div class="ensak-project-sider">
        <div class="ensak-project-sider-club">
            <img class="ensak-project-sider-club-image" :src="this.project.clubLogo" alt="" style="border-radius:50%;
          box-shadow: 0px 8px 34px 1px rgba(0, 54, 108, 0.52);"/>
            <div class="ensak-project-sider-club-name">{{this.project.club}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import { Icon, Tabs, Modal } from 'ant-design-vue'
export default {
  name: "projectPage",
  components:{
    "a-icon": Icon,
    "a-tabs": Tabs,
    "a-modal": Modal,
    "a-tab-pane": Tabs.TabPane,
  },
  data()
  {
    return {
      project: {},
      datesData:{},
      about:'',
      name:"",
      visible:false,
      modalImage:""
    }
  },
  methods:{
    showModal(i) {
      this.visible = true;
      this.modalImage = i;
    }
  },
  //Todo: Create an EndPoint that returns the current project
  beforeCreate()
  {
    this.axios.get('/projects/'+this.$route.params.id)
        .then(response => {
          this.project = response.data.content.data;
          this.visible = (this.project.media.gallery).map( () => false)
        })
        .catch(e => {
          // this.errors.push(e)
          console.log(e);
        })
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Barlow', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.ensak-project{
    display:flex;
    flex-direction: row;
    width:100%;
    z-index:750;
    &-sider{
        width:300px;
        float:right;
        padding:10px;
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
        &-club{
            padding:15px;
            overflow-y:scroll;
            background: white;
            border-radius: 25px 0;
            box-shadow: 0px 0px 8px 1px rgba(1, 62, 122, 0.36);
            z-index:800;
            &-name{
                text-align:center;
                color:#0061B7;
                font-size: 20px;
                font-weight: 600;
            }
            &-image{
                width:100px;
                height:100px;
                margin: 0 0 20px 0;
            }
        }
    }
    &-main{
        width:calc(100vw - 620px);
        padding:10px 0;
        flex-wrap:wrap;
        &-header{
            padding:20px 10px;
            display:flex;
            flex-direction: row;
            z-index:760;
            font-size:18px;
            font-weight:600;
            &-back{
                display: inline-flex;
                flex:start;
                &-icon{
                    display: flex;
                    flex-direction:column;
                    justify-content: center;
                }
            }
            &-title{
                display: inline-flex;
                flex:center;
                margin:auto;
            }
        }
        &-banner{
            width:100%;
            z-index:755;
            &-image{
                width:100%;
            }
        }
        &-tabs{
            padding:30px 20px 10px 20px;
            &-about{
                text-align: justify;
                text-justify: inter-word;
                text-indent: 20px;
            }
            &-creators{
                display:flex;
                justify-content:space-evenly;
                flex-wrap:wrap;
                &-creator{
                    padding:10px;
                    text-align:center;
                    &-image{
                        width: 50px;
                        height: 50px;
                        border-radius:25px;
                    }
                    &-name{
                        font-size: 20px;
                        font-weight: 600;
                        color:#013E7A;
                    }
                    &-email{
                        font-size: 18x;
                        font-weight: 200;
                        color:#013E7A;
                    }
                }
            }
            &-images{
                width:100%;
                display:flex;
                justify-content: space-evenly;
                flex-wrap:wrap;
                text-align:center;
                &-image{
                    width:100px;
                }
            }
        }
    }
}

</style>
