<template>
  <div :style="{ width: '100%', border: '1px solid #d9d9d9', borderRadius: '25px 0', boxShadow: '0px 0px 8px 1px rgba(1, 62, 122, 0.36)' }" >
    <div class='event-calendar-header'>{{Months[date(Dates.startDate).months]}}, <span style="font-weight:600">{{date(Dates.startDate).years}}</span></div>
    <div v-if="this.dateFetched()"><a-calendar :fullscreen="false" :defaultValue="moment(this.Dates.startDate)" :validRange="[moment(this.Dates.startDate),moment(this.Dates.startDate)]" ref="calendar"/></div>
  </div>
</template>
<script>
import { Calendar } from "ant-design-vue"
import { parseDate }      from "@/utils/utils";
export default {
  name:"Calendar",
  // props: {
  //     Dates: { type: Object, required: true },
  // },
  components:{
      'a-calendar': Calendar,
  },
  data(){
    return {
      EventYear:"2021",
      data:false,
      Dates:{},
      el:"",
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
      ]
    }
  },
  created(){
      //ant-fullcalendar-selected-day
      this.axios.get('/events/497f6eca-6276-4993-bfeb-53cbbbba6f08/template')
        .then(response => {
          this.event = response.data.content.data;
          this.Dates = {
              "startDate": this.event.endDate,
              "endDate": this.event.startDate
          };
        })
        .then(() => {
          console.log(this.Dates);
          this.el = document;
        })
        .then(()=>{
          var endDate = new Date(this.Dates.endDate);
          endDate = endDate.getFullYear()+"-"+endDate.getMonth()+"-"+endDate.getDate();
          if( this.Dates.endDate <= this.Dates.startDate){
            throw("error");
          }
          var d=new Date(this.Dates.startDate);
          var flag=true;
          while(flag){
            d.setDate(d.getDate() + 1);
            var s = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
            console.log('[title="'+this.Months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear()+'"]')
            this.el = document.querySelectorAll('[title="'+this.Months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear()+'"]');
            this.el[0].classList.add("ant-fullcalendar-selected-day");
            // console.log(this.el[0].classList);
            if(s===endDate){
              break
            }
          }
        })
        .catch(e => {
          // this.errors.push(e)
          console.log(e);
        })
  },
  methods:{
    date(d){
      return parseDate(d)
    },
    dateFetched(){
      if(this.Dates.startDate == undefined ){
        return false;
      }
      return true;
    }
  }
}
</script>
<style lang='scss'>

.ant-fullcalendar-header{
  display:none !important;
}
.ant-fullcalendar .ant-fullcalendar-full{
  border:none;
}
.event-calendar-header{
  color:#0061B7;
  font-size:20px !important;
  text-align: left !important;
  padding: 10px 20px !important;
}
.ant-fullcalendar-today .ant-fullcalendar-value, .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-value{
  box-shadow: none;
}
.ant-fullcalendar-value{
  background:transparent !important;
}
.ant-fullcalendar-column-header:nth-child(7n+7) .ant-fullcalendar-column-header-inner{
  background:linear-gradient(#FF00A8,#9F31E3);
  background-clip: text;
  color:transparent;
}
.ant-fullcalendar-tbody tr .ant-fullcalendar-cell:nth-child(7n+7){
  .ant-fullcalendar-date .ant-fullcalendar-value{
    background:linear-gradient(#FF00A8,#9F31E3) !important;
    background-clip: text !important;
    color:transparent !important;
  }
}
.ant-fullcalendar{
  &-selected-day{
    border-radius:25px !important;
    background:linear-gradient(#17CDF5,#02129F) !important;
  }
}
.ant-fullcalendar-selected-day .ant-fullcalendar-date .ant-fullcalendar-value{
  color: white !important;
  font-weight: 600 !important;
}
.ant-fullcalendar-column-header-inner, .ant-fullcalendar-disabled-cell .ant-fullcalendar-value{
  font-weight: 600 !important;
  color: #0061B7 !important;
}
</style>