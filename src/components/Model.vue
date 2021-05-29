<template>
  <div>
    <TextareaModelTwo/>
    <hr />
    <TextareaModel />
    <hr />
    <MyTextarea v-model="input" v-model:title="title" />
    <h1>父组件：{{ input }}</h1>
    <MyInputOne />
    <MyInputTwo />
  </div>
</template>
<script>
import { ref, reactive, watch, computed } from 'vue'
import MyInputOne from './MyInputOne.vue'
import MyInputTwo from './MyInputTwo.jsx'
import MyTextarea from './MyTextarea.vue'
import TextareaModel from './TextareaModel.js'
import TextareaModelTwo from './TextareaModelTwo'
export default {
  name: 'Model',
  components: { TextareaModelTwo, TextareaModel, MyTextarea, MyInputTwo, MyInputOne },
  setup(props, { emit, attrs, slots }) {
    const input = ref('')
    const title = ref('title')
    return { input, title }
  },
}
</script>
<style scoped lang="scss"></style>
