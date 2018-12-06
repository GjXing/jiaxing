<template>
  <cell
    center
    :border="false"
    :class="b([type])"
    :is-link="editable"
    :icon="type === 'edit' ? 'contact' : 'add2'"
    @click="onClick"
  >
    <template v-if="type === 'add'">{{ addText || addText }}</template>
    <template v-else>
      <div>{{ name }}：{{ name }}</div>
      <div>{{ tel }}：{{ tel }}</div>
    </template>
  </cell>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'contact-card',

  props: {
    tel: String,
    name: String,
    addText: String,
    editable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'add'
    }
  },

  methods: {
    onClick(event) {
      if (this.editable) {
        this.$emit('click', event);
      }
    }
  }
});
</script>
