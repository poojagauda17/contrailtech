<template>
    <div class="d-flex">
      <div class="sidebar-secion">
        <SideBar />
      </div>
      <div class="content-section">
    <SvgOne />
      </div>
    </div>
  </template>
<script>
import SvgOne from '@/components/SvgOne.vue'
import SideBar from "@/components/SideBar.vue"

export default {
    name: 'SvgFirst',
    components: {
        SvgOne,
        SideBar,
    }
}
</script>