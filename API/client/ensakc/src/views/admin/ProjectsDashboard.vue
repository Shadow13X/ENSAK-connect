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
            <div style='width:100%' @click="showDrawer(p)">
                <div class='ensak-projects-main-project'>
                    <img class='ensak-projects-main-project-image' alt='club logo' :src="p.clubLogo">
                    <div class='ensak-projects-main-project-data'>
                        <div class='ensak-projects-main-project-data-title'>{{p.name}} (by {{p.club}})</div>
                        <div class='ensak-projects-main-project-data-description'>{{(p.about).substring(0,100)}}...</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a-button class="btn" type="primary" @click="generateProject">
        Add a new Project <a-icon type="plus" />
    </a-button>
    <a-drawer
      title="Edit Project"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
      :width="450"
      class="drawer:"
    >
        <a-form :form="form" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }" @submit="handleSubmit">
            <a-form-item label="Project Name">
                <a-input
                    :defaultValue="editProject.name"
                    v-decorator="['Project name', { rules: [{ required: true, message: 'Please input the Project name!' }] }]"
                />
            </a-form-item>
            <a-form-item label="club Name">
                <a-input
                    :defaultValue="editProject.club"
                    v-decorator="['club name', { rules: [{ required: true, message: 'Please input the club name!' }] }]"
                />
            </a-form-item>
            <a-form-item label="Project Industry">
                <a-input
                    :defaultValue="editProject.industry"
                    v-decorator="['Project Industry', { rules: [{ required: true, message: 'Please input the Project Industry!' }] }]"
                />
            </a-form-item>
            <a-form-item label="Project About">
                <a-textarea
                    :defaultValue="editProject.about"
                    :autoSize="{ minRows: 3, maxRows: 10 }"
                    aria-placeholder="about"
                    v-decorator="['Project About', { rules: [{ required: true, message: 'Please input the Project about!' }] }]"
                />
            </a-form-item>
            <a-button class="btn" type="primary" @click="onClose">
                Submit
            </a-button>
        </a-form>
    </a-drawer>
  </div>
</template>

<script>
import { Input, Form, Drawer } from 'ant-design-vue'
export default {
  name: "ProjectsPage",
  components:{
    "a-input": Input,
    "a-drawer": Drawer,
    "a-form":Form,
    "a-form-item":Form.Item,
    "a-textarea": Input.TextArea,
    // "a-select-option": Select.Option,
    // Calendar
  },
  data()
  {
    return {
        projects:[],
        editProject:{},
        visible:false,
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
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer(p) {
        this.editProject = p;
        console.log(p)
        this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    generateProject(){
        this.editProject={
        "id": "project-ID",
        "name": "ProjectName",
        "submissionDate": "2019-08-24",
        "creationDate": "2019-08-24",
        "club": "club",
        "industry": "Industry",
        "about": "<h6><strong>INTITULÉ DU SUJET</strong></h6>\\n<p>Développement du logiciel embarqué pour une station de recharge de scooter électrique.</p>\\n<h6>DESCRIPTION</h6>\\n<p>Le stage s’inscrit dans le cadre du projet eSCOOBOX qui consiste à développer une solution de recharge rapide de scooters électriques dédiée au marché marocain.</p>\\n<p>Le stagiaire contribuera à l’implémentation du protocole OCPP 2.0 sur une cible STM32 :<br />• Rédaction du plan de test<br />• Codage et implémentation<br />• Test et validation</p>\\n<h6>COMPÉTENCES REQUISES :</h6>\\n<p>• Langues : Français, Anglais<br />• Formations : Bac+5, formation ingénieur ou master universitaire<br />• Compétences particulières : STM32, C/C++, Git, bus CAN, UART et NFC<br />• Aptitudes relationnelles : Capacité à travailler en équipe, rigoureux et sens de<br />l’analyse</p>\\n<h6>DURÉE DU STAGE</h6>\\n<p>6 mois</p>\\n<p><strong>IMPORTANT : Vous trouverez plusieurs offres de stage PFE dans différents sujets sur le lien ci-dessous</strong></p>\\n<p>https://www.mascir.com/jobs/</p>",
        "media": {
          "gallery": [
            "http://example.com"
          ],
          "videos": [
            "http://example.com"
          ],
          "innovators": [
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "firstName": "Zakaria",
              "lastName": "Idrissi",
              "email": "codeautocracy@gmail.com",
              "image": "http://example.com"
            },
            {
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f09",
              "firstName": "Abdennour",
              "lastName": "Jebbar",
              "email": "jnourinho@gmail.com",
              "image": "http://example.com"
            }
          ]
        }
      }
      this.visible = true;
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Barlow', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.ensak-projects{
    width:100%;
    z-index:750;
    &-main{
        width:100%;
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
.btn{
    display:inline-block;
    padding:10px 30px ;
    color:white;
    background:linear-gradient(to right,#56CCF2 , #2D9CDB);
    border-radius:25px 0;
    margin-top:20px auto !important;
}
</style>
