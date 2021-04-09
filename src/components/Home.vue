<template>
    <div class="content-area">
        <div class="explanation_area">
            <h1>{{ app_name }}</h1>
            <h3>海外の魅力を発見しよう！</h3>
        </div>
        <div class="world-map-area">
            <img src="../assets/world-map.png" width="60%" />
        </div>
        <div class="country-select-area">
        <p>
            <button type="button"
            class="btn btn-outline-primary"
            @click="currentComponent = 'America'"
          >
            アメリカ
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary country-btn1"
            @click="currentComponent = 'Italy'"
          >
            イタリア
          </button>
          <button
            type="button"
            class="btn btn-outline-success"
            @click="currentComponent = 'Germany'"
          >
            ドイツ
          </button>
        </p>
        <p>
          <button
            type="button"
            class="btn btn-outline-danger"
            @click="currentComponent = 'Paris'"
          >
            パリ
          </button>
          <button
            type="button"
            class="btn btn-outline-warning"
            @click="currentComponent = 'Australia'"
          >
            オーストラリア
          </button>
          <button
            type="button"
            class="btn btn-outline-info"
            @click="currentComponent = 'Russia'"
          >
            ロシア
          </button>
        </p>
      </div>
      <component :is="currentComponent"></component>   
    </div>
</template>


<script>
import America from './America.vue';
import Australia from './Australia.vue';
import Germany from './Germany.vue';
import Italy from './Italy.vue';
import Paris from './Paris.vue';
import Russia from './Russia.vue';

export default {
  data() {
    return {
      app_name: 'WORLD WORKER',
      currentComponent:America,
    };
  },
  components: {
    America: America,
    Italy: Italy,
    Germany: Germany,
    Paris: Paris,
    Australia: Australia,
    Russia: Russia,
  },
};




</script>

<style>
    
.content-area {
  text-align: center;
  margin: 3% 5%;
  clear: both;
}

.btn--orange {
  widows: 5%;
  height: 200px;
  color: #fff;
  background-color: #eb6100;
}

.btn--orange:hover {
  color: #fff;
  background: #f56500;
}

.btn--radius {
  border-radius: 100vh;
}

.country-select-area button {
  margin: 20px;
  width: 200px;
}
</style>