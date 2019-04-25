<template>
  <div id="app">
    <div class="page-wrap">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="tab-container1">

        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
        
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">

        </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed="true">
      <mt-tab-item id="外卖">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <!-- <img slot="icon" src="../assets/100x100.png"> -->
        发现
      </mt-tab-item>
    </mt-tabbar>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar,TabItem, TabContainer, TabContainerItem } from "mint-ui";

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
  data() {
    return {
      selected: "外卖" // navBar 当前选中项
    };
  }
};
</script>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
.page-wrap {
    overflow: auto;
    height: 100%;
  }

</style>
