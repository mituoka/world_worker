<template>
  <div>
    <div class='country_name'>
        <p>{{countryname}}</p>  
    </div>
    <div class="table_area">
        <table class="table" v-for="items in items" v-bind:key="items.id">
        <tbody>
            <tr>
            <th scope="row">{{items.category}}</th>
            <td>{{items.data}}</td>
            </tr>
        </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        countryname:'アメリカ',
        items:[
          {category:'旅行費(TravelExpenses)',data:'10～15万円'},
          {category:'平均物価(AveragePrices)',data:5792473612},
          {category:'観光地(TouristSpot)',data:'グランドキャニオン、マイアミビーチ'},
        ]
      }
  }
}
</script>

<style>
.table_area{
  text-align: center;
}

table.table{
  margin:0 auto;
  table-layout: fixed;
  width:50%;
}

</style>
