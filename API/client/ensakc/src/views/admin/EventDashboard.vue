<template>
  <div class="ensak-event">
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
    <div v-if="this.event != {}" class="ensak-event-main">
        <div style='box-shadow: 0px 0px 8px 1px rgba(1, 62, 122, 0.36);'>
            <div class="ensak-event-main-header">
                <span class="ensak-event-main-header-back"><a-icon class="ensak-event-main-header-back-icon" type="left" /></span><span class="ensak-event-main-header-title">{{name}}</span>
            </div>
            <div class="ensak-event-main-banner">
                <img
                    class="ensak-event-main-banner-image"
                    alt="example"
                    :src="this.event.banner"
                />
            </div>
            <div class="ensak-event-main-date">{{this.date}}</div>
            <div class="ensak-event-main-about">
                <div class="ensak-event-main-about-header">About</div>
                <div class="ensak-event-main-about-content">{{this.about}}</div>

            </div>
            <button class="button-edit" @click="showDrawer"> <a-icon class="ensak-event-main-header-back-icon" type="edit" /> &nbsp;&nbsp; Edit</button>
        </div>
    </div>
    <a-button  v-if="this.event == {}" class="btn" type="primary" @click="generateEvent">
        Add a new Event <a-icon type="plus" />
    </a-button>
    <a-drawer
      title="Edit Event "
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
      :width="450"
      class="drawer:"
    >
        <a-form :form="form" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }" @submit="handleSubmit">
            <a-form-item label="Event Name">
                <a-input
                    :defaultValue="name"
                    v-decorator="['Event name', { rules: [{ required: true, message: 'Please input the event name!' }] }]"
                />
            </a-form-item>
            <a-form-item label="Event Theme">
                <a-input
                    :defaultValue="event.theme"
                    v-decorator="['Event theme', { rules: [{ required: true, message: 'Please input the event theme!' }] }]"
                />
            </a-form-item>
            <a-form-item label="Event Banner">
                <a-input
                    :defaultValue="event.banner"
                    aria-placeholder="https://example.com"
                    v-decorator="['Event Banner', { rules: [{ required: true, message: 'Please input the event banner URL!' }] }]"
                />
            </a-form-item>
            <a-form-item label="Event Date">
                <a-range-picker @change="onChange" :default-value="[moment(event.startDate, dateFormat), moment(event.startDate, dateFormat)]"/>
            </a-form-item>
            <a-form-item label="Event Status">
                <a-select :default-value="event.eventStatus" @change="handleChange">
                    <a-select-option value="eventScheduled">
                        Event Scheduled
                    </a-select-option>
                    <a-select-option value="eventPostponed">
                        Event Postponed
                    </a-select-option>
                    <a-select-option value="eventCanceled">
                        Event Canceled
                    </a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="Event Type">
                <a-select :default-value="event.eventType" @change="handleChange">
                    <a-select-option value="onlineEvent">
                        Online Event
                    </a-select-option>
                    <a-select-option value="offlineEvent">
                        Offline Event
                    </a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="Event About">
                <a-textarea
                    :default-value="this.about"
                    :autoSize="{ minRows: 3, maxRows: 10 }"
                    aria-placeholder="about"
                    v-decorator="['Event About', { rules: [{ required: true, message: 'Please input the event about!' }] }]"
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
import { Icon, Drawer, Form, Input, DatePicker, Select } from 'ant-design-vue'
export default {
  name: "EventPage",
  components:{
    "a-icon": Icon,
    "a-drawer":Drawer,
    "a-form":Form,
    "a-form-item":Form.Item,
    "a-input":Input,
    "a-select-option":Select.Option,
    "a-select":Select,
    "a-range-picker":DatePicker.RangePicker,
    "a-textarea": Input.TextArea,
  },
  data()
  {
    return {
      event: {},
      bannerUrl: '',
      datesData:{},
      name:"",
      about:"",
      Months:[
        'January',
        'february',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      date:"",
      visible: false,
      dateFormat: 'YYYY/MM/DD',
    }
  },
  //Todo: Create an EndPoint that returns the current event
  beforeCreate()
  {
    this.axios.get('/events/497f6eca-6276-4993-bfeb-53cbbbba6f09/template')
        .then(response => {
          this.event = response.data.content.data;
          this.name = this.event.name;
          var s = new Date(this.event.endDate)
          var en =  new Date(this.event.startDate)
          this.date = this.Months[s.getMonth()]+" "+s.getDate()+", "+s.getFullYear()+" - "+this.Months[en.getMonth()]+" "+en.getDate()+", "+en.getFullYear();
        })
        .catch(e => {
          // this.errors.push(e)
          console.log(e);
        })
    this.axios.get('/events/497f6eca-6276-4993-bfeb-53cbbbba6f09/preview')
        .then(response => {
          this.about = response.data.content.data.about;
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
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    generateEvent(){
        this.event={
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "Event name",
        "startDate": "2021-04-09T18:00:00Z",
        "endDate": "2021-04-08T08:00:00Z",
        "location": {
            "id": 105,
            "latitude": 33.541287,
            "longitude": -7.5485412,
            "city": "Rabat",
            "country": "Morocco",
            "state": "Casablanca-Settat",
            "street": "Av Mohammed VI",
            "streetNumber": 15,
            "zipCode": "12000",
            "formattedLocation": "Kenitra , Morocco"
        },
        "eventStatus": "eventScheduled",
        "sponsors": [
            {
            "name": "ONCF",
            "sponsorType": "gold",
            "image": "http://example.com"
            }
        ],
        "workFeatured": [
            {
            "category": "conferences",
            "activity": [
                {
                "name": "Digital Well Being",
                "time": "08:15"
                }
            ]
            }
        ],
        "performers": [
            {
            "name": "Ahmad Reda Chami",
            "about": "CEO of Economical Consultance",
            "image": "https://api.hello-avatar.com/adorables/150/ziko@adorable.png"
            },
            {
            "name": "Ahmad Reda Chami",
            "about": "CEO of Economical Consultance",
            "image": "https://api.hello-avatar.com/adorables/150/ali@adorable.png"
            },
            {
            "name": "Ahmad Reda Chami",
            "about": "CEO of Economical Consultance",
            "image": "https://api.hello-avatar.com/adorables/150/sadiq@adorable.png"
            },
            {
            "name": "Ahmad Reda Chami",
            "about": "CEO of Economical Consultance",
            "image": "https://api.hello-avatar.com/adorables/150/hamousa@adorable.png"
            },
            {
            "name": "Ahmad Reda Chami",
            "about": "CEO of Economical Consultance",
            "image": "https://api.hello-avatar.com/adorables/150/ilyas@adorable.png"
            }
        ],
        "theme": "AR/VR A New Tech Revolution",
        "gallery": [
            "http://example.com"
        ],
        "banner": "https://i.imgur.com/vZF3qUW.jpg",
        "eventType": "Online",
        "about": "<h6><strong>INTITULÉ DU SUJET</strong></h6>\\n<p>Développement du logiciel embarqué pour une station de recharge de scooter électrique.</p>\\n<h6>DESCRIPTION</h6>\\n<p>Le stage s’inscrit dans le cadre du projet eSCOOBOX qui consiste à développer une solution de recharge rapide de scooters électriques dédiée au marché marocain.</p>\\n<p>Le stagiaire contribuera à l’implémentation du protocole OCPP 2.0 sur une cible STM32 :<br />• Rédaction du plan de test<br />• Codage et implémentation<br />• Test et validation</p>\\n<h6>COMPÉTENCES REQUISES :</h6>\\n<p>• Langues : Français, Anglais<br />• Formations : Bac+5, formation ingénieur ou master universitaire<br />• Compétences particulières : STM32, C/C++, Git, bus CAN, UART et NFC<br />• Aptitudes relationnelles : Capacité à travailler en équipe, rigoureux et sens de<br />l’analyse</p>\\n<h6>DURÉE DU STAGE</h6>\\n<p>6 mois</p>\\n<p><strong>IMPORTANT : Vous trouverez plusieurs offres de stage PFE dans différents sujets sur le lien ci-dessous</strong></p>\\n<p>https://www.mascir.com/jobs/</p>"
        }
        this.visible=true
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
.ensak-event{
    width:100%;
    z-index:750;
    &-sider{
        width:300px;
        float:right;
        padding:10px;
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
        &-participants{
            margin: 10px 0 0 0;
            padding:15px;
            flex: 1 1 auto;
            overflow-y:scroll;
            background: white;
            border-radius: 25px 0;
            box-shadow: 0px 0px 8px 1px rgba(1, 62, 122, 0.36);
            z-index:800;
            &-header{
                text-align:center;
                color:#0061B7;
                font-size: 20px;
                font-weight: 600;
                margin:0 0 15px 0;
            }
            &-images{
                text-align: left;
                &-item{
                    margin:5px;
                    width:15%;
                    background:black;
                    border-radius:50%;
                }
            }
        }
    }
    &-main{
        width:calc(100vw - 620px);
        padding:10px 0;
        flex-wrap:wrap;
        margin:0 auto;
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
                    display: inline-flex;
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
        &-date{
            padding:10px 30px;
            text-align:left;
        }
        &-cfa{
            &-participate-button, &-save-the-date-button {
                padding: 5px 20px 5px 20px;
                margin: 10px 10px;
                border-radius: 25px 0 25px 0;
                background: linear-gradient(to right,#56CCF2 , #2D9CDB);
                color: white;
                font-weight: 600;
                font-size: 14px;
                border: 0px white solid;

                &:hover {
                    cursor: pointer;
                    background-color: transparent;
                    color: white;
                }
            }
        }
        &-about{
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
    }
}
.button-edit{
    padding:10px;
    width:100%;
    background:#0061B7;
    color:white ;
    border:none !important;
    border-radius: 0px !important;
    font-size:18px;
    font-weight: 600;
}
.ant-col-12{
    flex:grow !important;
}
.ant-input, .ant-select-selection{
    height:unset;
    border: 1px solid #00264B;
    color:#00264B;
    border-radius:25px !important;
    border-radius:10px 0px !important;
    padding:9px 20px;
    margin:10px 0 0 0;
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
