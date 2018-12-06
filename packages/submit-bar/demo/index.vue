<template>
  <demo-section>
    <demo-block >
      <x-submit-bar
        :price="3050"
        :button-text="submit"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="disabled">
      <x-submit-bar
        disabled
        :price="3050"
        :button-text="submit"
        :tip="tip1"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="loading">
      <x-submit-bar
        loading
        :price="3050"
        :button-text="submit"
        @submit="onClickButton"
      />
    </demo-block>

    <demo-block :title="advancedUsage">
      <x-submit-bar
        :price="3050"
        :button-text="submit"
        @submit="onClickButton"
      >
        <x-checkbox v-model="checked">{{ check }}</x-checkbox>
        <span slot="tip">
          {{ tip2}}
          <span
            class="edit-address"
            @click="onClickLink"
          >
            {{ tip3 }}
          </span>
        </span>
      </x-submit-bar>
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
  i18n: {
    'zh-CN': {
    
    },
    'en-US': {
      submit: 'Submit',
      tip1: 'Some tips',
      tip2: 'Some tips, ',
      tip3: 'Link',
      check: 'Label',
      clickButton: 'Click button',
      clickLink: 'Click Link'
    }
  },

  data() {
    return {
      checked: true,
      disabled:'禁用状态',
      loading:'加载状态',
      advancedUsage:'高级用法',
        submit: '提交订单',
      tip1: '你的收货地址不支持同城送, 我们已为你推荐快递',
      tip2: '你的收货地址不支持同城送, ',
      tip3: '修改地址',
      check: '全选',
      clickButton: '点击按钮',
      clickLink: '修改地址'
    };
  },

  methods: {
    onClickButton() {
      this.$toast(this.$t('clickButton'));
    },
    onClickLink() {
      this.$toast(this.$t('clickLink'));
    }
  }
};
</script>
<style type="text/css">
	.x-goods-action, .x-submit-bar{
		position: initial!important;	}
</style>
<style lang="less">
@import '../../style/var';

.demo-submit-bar {
  .van-submit-bar {
    position: relative;
  }

  .edit-address {
    color: @blue;
  }

  .van-checkbox {
    margin-left: 15px;
  }
}
</style>
