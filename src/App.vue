<script setup>
    import { onMounted, ref } from 'vue'
    import mRight from "./components/index.vue";
  </script>
  
  <template>
    <section class="xg">
      <div class="left">
        <p>聊天室</p>
      </div>
      <div class="right">
        <mRight />
      </div>
    </section>
  </template>
  
  <style lang="scss">
    .xg {
      display: flex;
      width: 100%;
      height: 100vh;
      overflow: hidden;
  
      .left {
        flex-shrink: 0;
        width: 15%;
        height: 100%;
        border-right: 1px solid red;
  
        p {
          padding-left: 6px;
          font-family: cursive;
        }
      }
  
      .right {
        flex: 1;
      }
    }
  </style>
  