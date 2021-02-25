<template>
  <div class="ensak-project">
    <div class="ensak-project-main">
        <div style='box-shadow: 0px 0px 8px 1px rgba(1, 62, 122, 0.36);'>
            <div class="ensak-project-main-header">
                <span class="ensak-project-main-header-back"><a-icon class="ensak-project-main-header-back-icon" type="left" /></span><span class="ensak-project-main-header-title">{{this.project.name}}</span>
            </div>
            <div class="ensak-project-main-banner">
                <iframe class='ensak-project-main-banner-image' ref="mapEl" :src="mapAddress()"></iframe>
            </div>
            <div class="ensak-event-main-about">
                <div class="ensak-event-main-about-header">About</div>
                <div class="ensak-event-main-about-content">{{this.project.about}}</div>

            </div>
        </div>
    </div>
    <div class="ensak-project-sider">
        <div class="ensak-project-sider-club">
            <img class="ensak-project-sider-club-image" :src="this.project.image" alt="" style="border-radius:50%;
          box-shadow: 0px 8px 34px 1px rgba(0, 54, 108, 0.52);"/>
            <div class="ensak-project-sider-club-name">{{this.project.name}}</div>
            <a :href="this.project.websiteUrl" target="_blank"><div class="ensak-event-main-cfa-participate-button">Visit website</div></a>
        </div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue'
export default {
  name: "projectPage",
  components:{
    "a-icon": Icon,
  },
  data()
  {
    return {
      project: {},
      datesData:{},
      about:'',
      name:"",
      location:'',
    }
  },
  methods: {
    mapAddress() {
        return "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13245.975282709229!2d"+this.project.location.longitude+"!3d"+this.project.location.latitude+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1613697529091!5m2!1sen!2sma"
    }
  },
  //Todo: Create an EndPoint that returns the current project
  beforeCreate()
  {
    this.axios.get('/enterprises/'+this.$route.params.id)
        .then(response => {
          this.project = response.data.content.data;
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
                height:250px;
                border:none;
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

.ensak-event-main-cfa-participate-button{
    padding: 5px 20px 5px 20px;
    margin: 10px 10px;
    border-radius: 25px 0 25px 0;
    background: linear-gradient(to right,#56CCF2 , #2D9CDB);
    color: white;
    font-weight: 600;
    font-size: 14px;
    border: 0px white solid;
}
.ensak-event-main-about{
    text-align: left !important;
    padding:10px;
    &-header{
        color: #0061B7;
        font-size: 20px;
        font-weight: 600;
        padding: 10px 40px;
    }
    &-content{
        color: #00264B;
        font-size: 14px;
        font-weight: 200;
        padding: 0 20px 10px 20px;
        text-align: justify;
        text-justify: inter-word;
        text-indent: 20px;
    }
}
</style>
