<template>
  <demo-section>
    <demo-block >
      <x-goods-action>
        <x-goods-action-mini-btn
          icon="chat"
          :text="icon1"
          @click="onClickMiniBtn"
        />
        <x-goods-action-mini-btn
          icon="cart"
          :text="icon2"
          @click="onClickMiniBtn"
        />
        <x-goods-action-big-btn
          :text="button1"
          @click="onClickBigBtn"
        />
        <x-goods-action-big-btn
          primary
          :text="button2"
          @click="onClickBigBtn"
        />
      </x-goods-action>
    </demo-block>

    <demo-block :title="title2">
      <x-goods-action>
        <x-goods-action-mini-btn
          icon="chat"
          :text="icon1"
          @click="onClickMiniBtn"
        />
        <x-goods-action-mini-btn
          icon="cart"
          info="5"
          :text="icon2"
          @click="onClickMiniBtn"
        />
        <x-goods-action-mini-btn
          icon="shop"
          :text="icon3"
          @click="onClickMiniBtn"
        />
        <x-goods-action-big-btn
          :text="button1"
          @click="onClickBigBtn"
        />
        <x-goods-action-big-btn
          primary
          :text="button2"
          @click="onClickBigBtn"
        />
      </x-goods-action>
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
      clickIcon: '点击图标',
      clickButton: '点击按钮',
      icon1: '客服',
      icon2: '购物车',
      icon3: '店铺',
      button1: '加入购物车',
      button2: '立即购买',
      title2: '图标提示'
    },
    'en-US': {
      clickIcon: 'Click Icon',
      clickButton: 'Click Button',
      icon1: 'Icon1',
      icon2: 'Icon2',
      icon3: 'Icon3',
      button1: 'Button1',
      button2: 'Button2',
      title2: 'Icon info'
    }
  },
  data() {
  	return{
  		 clickIcon: '点击图标',
      clickButton: '点击按钮',
      icon1: '客服',
      icon2: '购物车',
      icon3: '店铺',
      button1: '加入购物车',
      button2: '立即购买',
      title2: '图标提示'
  	}
  },

  methods: {
    onClickMiniBtn() {
      this.$toast(this.clickIcon);
    },

    onClickBigBtn() {
      this.$toast(this.clickButton);
    }
  }
};
</script>

<style lang="less">
.demo-goods-action {
  .van-goods-action {
    position: relative;
  }
}
</style>
