<template>
  <demo-section>
    <demo-block>
      <x-cell-group>
        <x-switch-cell
          v-model="checked"
          :title="title"
        />
      </x-cell-group>
    </demo-block>

    <demo-block :title="disabled">
      <x-cell-group>
        <x-switch-cell
          v-model="checked"
          disabled
          :title="title"
        />
      </x-cell-group>
    </demo-block>

    <demo-block :title="loading">
      <x-cell-group>
        <x-switch-cell
          v-model="checked"
          loading
          :title="title"
        />
      </x-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
	 import demoSection from '../../common/demoSection'
  import demoBlock from '../../common/demoBlock'

  export default {
    name: "index",
    components: {
      demoSection,
      demoBlock
    },

  data() {
    return {
      checked: true,
      title:'标题',
      loading:'加载状态',
      disabled:'禁用状态',
    };
  }
};
</script>
