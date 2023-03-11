<template>
  <div class="d-flex">
    <div class="sidebar-secion">
      <SideBar />
    </div>
    <div class="content-section">
      <SvgTwo />
    </div>
  </div>
</template>
<script>

import SvgTwo from '@/components/SvgTwo.vue';
import SideBar from "@/components/SideBar.vue"

export default {
  name: 'SvgSecond',
  components: {
    SvgTwo,
    SideBar,
  },
  getChartData() {
    console.log("test")
    axios
      .post("https://prod-api.stockants.com/api/my_dashboard/v1/stock/market_cap_based_roi", {
        "user_id": 616,
        "period": "1Y",
      },
      )
      .then(response => {
        if (response.data.message == 'success') {
          console.log("inside chart function")
          // this.$router.push({ path: '/userlist' })
        }
      })
  },
  // mounted() {
  //   getChartData();
  // }
}
</script>