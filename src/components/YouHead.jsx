import { h, ref, reactive, watch, computed } from 'vue'
export default {
  name: 'YouHead',
  inheritAttrs: false,
  props: ['h'],
  setup(props, { slots, emit }) {
    const person = ref({ name: 'jack', age: 23 })

    //NOTE 可监听插槽的变化
    // 神奇
    // watch(
    //   () => slots.default(),
    //   value => {
    //     console.log(value)
    //   }
    // )

    return {
      person,
      // 在这里提供默认插槽
      slots,
      emit,
    }
  },
  render() {
    const handlerClick = () => {
      this.emit('my-click', this.person.age)
    }
    const button = <button onClick={handlerClick}>{this.slots.default()}</button>
    const children = [this.person.name, button]
    return h(`h1`, null, children)
  },
}
