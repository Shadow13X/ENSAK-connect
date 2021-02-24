<template>
  <div class="ensak-projects">
    <!-- Style Object Binding    -->
   
    <!-- <a-card hoverable style="width: 240px">
        <img
        slot="cover"
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
        <a-card-meta title="Europe Street beat">
        <template slot="description">
            www.instagram.com
        </template>
        </a-card-meta>
    </a-card> -->
    <div class="ensak-projects-main">
        <div style='width:100%' v-for='p in this.projects' :key='p' >
            <div style='width:100%' v-if="notFiltered(p)">
                <router-link :to="'/projects/'+p.id">
                    <div class='ensak-projects-main-project'>
                        <img class='ensak-projects-main-project-image' alt='club logo' :src="p.clubLogo">
                        <div class='ensak-projects-main-project-data'>
                            <div class='ensak-projects-main-project-data-title'>{{p.name}} (by {{p.club}})</div>
                            <div class='ensak-projects-main-project-data-description'>{{(p.about).substring(0,100)}}...</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <div class="ensak-projects-sider">
        <div class="ensak-projects-sider-filters">
            <div class="ensak-projects-sider-filters-header">
                Filter By
            </div>
            <div class="ensak-projects-sider-filters-fields">
                <a-select v-model="club"
                    mode="multiple"
                    placeholder="Club"
                    option-label-prop="label" 
                    class="ensak-projects-sider-filters-fields-select">
                    <a-select-option value="EIC" label="EIC">
                        EIC
                    </a-select-option>
                    <a-select-option value="CRER" label="CRER">
                        CRER
                    </a-select-option>
                    <a-select-option value="MECATRONIQUE" label="MECATRONIQUE">
                        MECATRONIQUE
                    </a-select-option>
                    <a-select-option value="CIEL-K" label="CIEL-K">
                        CIEL-K
                    </a-select-option>
                    <a-select-option value="ITT" label="ITT">
                        ITT
                    </a-select-option>
                </a-select>
                <a-select v-model="industry"
                    mode="multiple"
                    placeholder="Industry"
                    option-label-prop="label" 
                    class="ensak-projects-sider-filters-fields-select">
                    <a-select-option value="Informatics" label="Informatics">
                        INFORMATICS
                    </a-select-option>
                    <a-select-option value="Artificial Intelligence" label="AI">
                        ARTIFICIAL INTELLIGENCE
                    </a-select-option>
                    <a-select-option value="Robotics" label="Robotics">
                        ROBOTICS
                    </a-select-option>
                </a-select>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Select } from 'ant-design-vue'
export default {
  name: "ProjectsPage",
  components:{
    "a-select": Select,
    "a-select-option": Select.Option,
    // Calendar
  },
  data()
  {
    return {
        industry:[],
        industries:[],
        club:[],
        clubs:[],
        projects:[],
    }
  },
  watch: {
    club(val) {
      console.log(`club:`, val);
      this.clubs = val;
    },
    industry(val){
      console.log(`industry:`, val);
      this.industries = val;
    }
  },
  //Todo: Create an EndPoint that returns the current event
  beforeCreate()
  {
    this.axios.get('/projects')
        .then(response => {
          this.projects = response.data.content.data;
        })
        .catch(e => {
          // this.errors.push(e)
          console.log(e);
        })
  },
  methods:{
      notFiltered(p){
          console.log(p.club)
          console.log(p.industry)
          console.log((this.clubs).includes(p.club) || (this.industries).includes(p.industry))
          console.log(!((this.clubs).length && (this.industries).length))
          if (
                ((this.clubs).includes(p.club) && (this.industries).includes(p.industry))
             || (!(this.clubs).includes(p.club) && !(this.industries).includes(p.industry) && !(this.clubs).length && !(this.industries).length)
             || ((this.clubs).includes(p.club) && !(this.industries).length)
             || ((this.industries).includes(p.industry) && !(this.clubs).length)
            ) {
              return true;
          }
          return false;
      }
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
.ensak-projects{
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
        &-filters{
            width:100%;
            border-radius:25px 0;
            box-shadow: 0px 0px 8px 1px rgba(1, 62, 122, 0.36);
            &-header{
                color: #0061B7;
                font-size: 20px;
                font-weight: 600;
                padding: 10px 40px;
            }
            &-fields{
                width:100%;
                padding:10px;
                &-select, &-input{
                    width:100%;
                    margin:5px 0;
                    .anticon{
                        color:#00264B;
                    }
                }
            }
        }

    }
    &-main{
        width:calc(100vw - 620px);
        padding:10px 0;
        &-project{
            display:flex;
            box-shadow: 0px 0px 8px 1px rgba(1, 62, 122, 0.36);
            border-radius:25px 0;
            &-image{
                height:100%;
                padding:10px;
            }
            &-data{
                display:inline-block;
                text-align: left;
                padding:10px 10px;
                &-title{
                    color:#0061B7;
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom:10px;
                }
                &-description{
                    color:#00264B;
                    font-size: 12px;
                    font-weight: 200;
                }
            }
        }
    }
}
.ant-select-selection{
    border: 1px solid #00264B;
    color:#00264B;
    border-radius:25px !important;
    border-radius:10px 0px !important;
    padding:5px 10px;
}
.ant-input{
    height:unset;
    border: 1px solid #00264B;
    color:#00264B;
    border-radius:25px !important;
    border-radius:10px 0px !important;
    padding:9px 20px;
    margin:10px 0 0 0;
}

.ant-select-selection--single{
    height:unset;
}
</style>
