<template>
  <div class="container">
    <div class="row" style="margin-top:80px">
      <div class="columns nine">
         <ou-text-field type='underlined' input-type="text" v-model='longURL' placeholder='URL' />
        
      </div>
       <ou-button type='primary' class="three columns" @click="shortenURL">Shorten!</ou-button>
    </div>

    <div class="row">
      <div class="twelve columns">
          <ou-message-banner v-if="show">
            This is your shortened URL <a href="">Click here</a>
          </ou-message-banner>
      </div>
    </div>

    <div class="row">

      <ou-table :data='tableData' style="margin-top:140px">
        <ou-table-column prop='sno'>S.No</ou-table-column>
         <ou-table-column prop='date'>Date</ou-table-column>
        <ou-table-column prop='long_URL'>Long URL</ou-table-column>
        <ou-table-column prop='short_URL'>Short URL</ou-table-column>
        <ou-table-column prop='clicks'>Clicks</ou-table-column>
      </ou-table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  props: {
    msg: String
  },
  data(){
    return{
      longURL:'',
      show:false,
      tableData: [
        {sno:1,date:'2018-11-12',long_URL:'wwww.linkedin.com/asdasdasdasdasdada34rea',short_URL:'shorturl/abxd',clicks:2},
         {sno:1,date:'2018-11-12',long_URL:'wwww.linkedin.com/asdasdasdasdasdada34rea',short_URL:'shorturl/abxd',clicks:2},
          {sno:1,date:'2018-11-12',long_URL:'wwww.linkedin.com/asdasdasdasdasdada34rea',short_URL:'shorturl/abxd',clicks:2},
           {sno:1,date:'2018-11-12',long_URL:'wwww.linkedin.com/asdasdasdasdasdada34rea',short_URL:'shorturl/abxd',clicks:2}
        ]
    }
  },
  methods: {
   updateURLList(){
     this.axios.post('/user','')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   },
   shortenURL(){
     this.show = !this.show
     var that = this
     setTimeout(()=>{
        that.show = false
     },10000)
   }
  },
  mounted(){
   
  }
}
</script>
