<template>
  <dir>
    <h1>vue3 render exmaple</h1>
    <MyHead :h="1" class="h1" />
    <MyHead :h="2" style="color: red" />
    <MyHead :h="3" id="h3" />
    <MyHead :h="4" data-key="my-key" />
    <MyHead :h="5" data-key="my-key" @my-event="onMyEvent">
      <template #default>
        <button>默认插槽</button>
      </template>
    </MyHead>
    <p>data form child:{{ dataFromChild }}</p>
    <hr />
    <button @click="changeSlot">修改YouHead插槽</button>
    <YouHead :h="1" @my-click="onMyClick">
      <span>默认插槽{{ dataFromChild }}</span>
    </YouHead>
  </dir>
</template>

<script>
import { ref } from 'vue'
import MyHead from './components/MyHead.vue'
import YouHead from './components/YouHead.jsx'
export default {
  name: 'App',
  components: { MyHead, YouHead },
  setup() {
    const dataFromChild = ref(Math.random().toString(36))
    const onMyEvent = data => {
      dataFromChild.value = data
    }
    const changeSlot = () => {
      dataFromChild.value = Math.random().toString(36)
    }
    const onMyClick = data => {
      console.log('my-click', data)
    }
    return {
      onMyEvent,
      dataFromChild,
      changeSlot,
      onMyClick,
    }
  },
}
</script>
