<template>
  <div>
    <demo-section>
      <x-notice-bar>{{ tips}}</x-notice-bar>
      <demo-block :title="basicUsage">
        <x-swipe-cell
          :right-width="65"
          :left-width="65"
        >
          <span slot="left">{{ button1 }}</span>
          <x-cell-group>
            <x-cell
              :title="title"
              :value="content"
            />
          </x-cell-group>
          <span slot="right">{{ button2 }}</span>
        </x-swipe-cell>
      </demo-block>

      <demo-block :title="title2">
        <x-swipe-cell
          :right-width="65"
          :left-width="65"
          :on-close="onClose"
        >
          <span slot="left">{{ button1 }}</span>
          <x-cell-group>
            <x-cell
              :title="title"
              :value="content"
            />
          </x-cell-group>
          <span slot="right">{{ button2 }}</span>
        </x-swipe-cell>
      </demo-block>
    </demo-section>
  </div>
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
     button1: '选择',
      button2: '删除',
      title: '单元格',
      title2: '异步关闭',
      confirm: '确定删除吗？',
      tips: '建议在手机模式下浏览本示例'
    };
  },
  i18n: {
    'zh-CN': {
      button1: '选择',
      button2: '删除',
      title: '单元格',
      title2: '异步关闭',
      confirm: '确定删除吗？',
      tips: '建议在手机模式下浏览本示例'
    },
    'en-US': {
      button1: 'Select',
      button2: 'Delete',
      title: 'Cell',
      title2: 'Async close',
      confirm: 'Are you sure to delete?',
      tips: 'Please try this demo in mobile mode'
    }
  },

  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          this.$dialog.confirm({
            message: this.confirm
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-swipe-cell {
  user-select: none;

  .van-swipe-cell {
    &__left,
    &__right {
      color: @white;
      font-size: 15px;
      width: 65px;
      height: 44px;
      display: inline-block;
      text-align: center;
      line-height: 44px;
      background-color: @red;
    }
  }
}
</style>
