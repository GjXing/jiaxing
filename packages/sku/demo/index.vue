<template>
  <demo-section>
    <demo-block >
      <div class="sku-container">
        <x-sku
          v-model="showBase"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          reset-stepper-on-hide
          reset-selected-sku-on-hide
          disable-stepper-input
          :close-on-click-overlay="closeOnClickOverlay"
          :message-config="messageConfig"
          :custom-sku-validator="customSkuValidator"
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        />
        <x-button
          block
          type="primary"
          @click="showBase = true"
        >
          {{basicUsage }}
        </x-button>
      </div>
    </demo-block>

    <demo-block :title="title2">
      <div class="sku-container">
        <x-sku
          hide-quota-text
          v-model="showStepper"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          :custom-stepper-config="customStepperConfig"
          :message-config="messageConfig"
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        />
        <x-button
          block
          type="primary"
          @click="showStepper = true"
        >
          {{ title2 }}
        </x-button>
      </div>
    </demo-block>

    <demo-block :title="advancedUsage">
      <div class="sku-container">
        <x-sku
          v-model="showCustom"
          :stepper-title="stepperTitle"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          show-add-cart-btn
          reset-stepper-on-hide
          :initial-sku="initialSku"
          :message-config="messageConfig"
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        >
          <template
            slot="sku-header-price"
            slot-scope="props"
          >
            <div class="van-sku__goods-price">
              <span class="van-sku__price-symbol">￥</span><span class="van-sku__price-num">{{ props.price }}</span>
            </div>
          </template>
          <template
            slot="sku-actions"
            slot-scope="props"
          >
            <div class="van-sku-actions">
              <x-button
                bottom-action
                @click="onPointClicked"
              >
                {{ button1 }}
              </x-button>
              <x-button
                type="primary"
                bottom-action
                @click="props.skuEventBus.$emit('sku:buy')"
              >
                {{ button2 }}
              </x-button>
            </div>
          </template>
        </x-sku>
        <x-button
          block
          type="primary"
          @click="showCustom = true"
        >
          {{ advancedUsage }}
        </x-button>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
import skuData from './data';
import { LIMIT_TYPE } from '../../../packages/sku/constants';
 import demoSection from '../../common/demoSection'
  import demoBlock from '../../common/demoBlock'

  export default {
    name: "index",
    components: {
      demoSection,
      demoBlock
    },  i18n: {
    'zh-CN': {
      title2: '自定义步进器相关配置',
      stepperTitle: '我要买',
      button1: '积分兑换',
      button2: '买买买'
    },
    'en-US': {
      title2: 'Custom Stepper Related Config',
      stepperTitle: 'Stepper title',
      button1: 'Button',
      button2: 'Button'
    }
  },

  data() {
    this.skuData = skuData;
    return {
    	basicUsage:'基础用法',
    	  title2: '自定义步进器相关配置',
      stepperTitle: '我要买',
      button1: '积分兑换',
      button2: '买买买',
      showBase: false,
      showCustom: false,
      showStepper: false,
      closeOnClickOverlay: true,
      advancedUsage:'高级用法',
      initialSku: {
        s1: '30349',
        s2: '1193'
      },
      customSkuValidator: (component) => {
        return '请选择xxx';
      },
      customStepperConfig: {
        quotaText: '单次限购100件',
        stockFormatter: (stock) => `剩余${stock}件`,
        handleOverLimit: (data) => {
          const { action, limitType, quota } = data;

          if (action === 'minus') {
            this.$toast('至少选择一件商品');
          } else if (action === 'plus') {
            if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
              this.$toast(`限购${quota}件`);
            } else {
              this.$toast('库存不够了');
            }
          }
        }
      },
      messageConfig: {
        uploadImg: (file, img) => {
          return new Promise(resolve => {
            setTimeout(() => resolve(img), 1000);
          });
        },
        uploadMaxSize: 3
      }
    };
  },

  methods: {
    onBuyClicked(data) {
      this.$toast(JSON.stringify(data));
    },

    onAddCartClicked(data) {
      this.$toast(JSON.stringify(data));
    },

    onPointClicked() {
      this.$toast('积分兑换');
    }
  }
};
</script>

<style lang="less">
.demo-sku {
  .sku-container {
    padding: 0 15px;
  }
}
</style>
