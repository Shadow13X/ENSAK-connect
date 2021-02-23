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
    <div class="ensak-event-main">
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
            <div class="ensak-event-main-cfa">
                <button class="ensak-event-main-cfa-participate-button">SPONSORSHIP</button>
                <button class="ensak-event-main-cfa-save-the-date-button">SAVE THE DATE</button>
            </div>
            <div class="ensak-event-main-about"></div>
        </div>
    </div>
    <div class="ensak-event-sider">
        <Calendar :Dates="datesData"/>
    </div>
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue'
import Calendar from '../../components/student/Calendar'
export default {
  name: "EventPage",
  components:{
    "a-icon": Icon,
    Calendar
  },
  data()
  {
    return {
      event: {},
      bannerUrl: '',
      datesData:{},
      name:"",
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
      date:""
    }
  },
  //Todo: Create an EndPoint that returns the current event
  beforeCreate()
  {
    this.axios.get('/events/497f6eca-6276-4993-bfeb-53cbbbba6f08/template')
        .then(response => {
          this.event = response.data.content.data;
          this.name = this.event.name;
          this.datesData = {
              "startDate": this.event.endDate,
              "endDate": this.event.startDate
          };
          var s = new Date(this.event.endDate)
          var en =  new Date(this.event.startDate)
          this.date = this.Months[s.getMonth()]+" "+s.getDate()+", "+s.getFullYear()+" - "+this.Months[en.getMonth()]+" "+en.getDate()+", "+en.getFullYear();
          console.log(this.datesData);
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
.ensak-event{
    display:flex;
    flex-direction: row;
    width:100%;
    z-index:750;
    &-sider{
        width:300px;
        float:right;
        padding:10px;
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
    }
}

</style>
