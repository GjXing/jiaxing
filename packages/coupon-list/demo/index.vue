<template>
  <demo-section>
    <demo-block >
      <x-coupon-cell

        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />

      <x-popup
        v-model="showList"
        position="bottom"
      >
        <x-coupon-list
          :coupons="coupons"
          inputPlaceholder='请输入优惠码'
          exchangeButtonText="兑换"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </x-popup>
    </demo-block>
  </demo-section>
</template>

<script>
/* eslint-disable camelcase */
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
      coupon: {
        name: '优惠券名称',
        reason: '优惠券不可用原因'
      },
      exchange: '兑换成功'
    },
    'en-US': {
      coupon: {
        name: 'Coupon name',
        reason: 'Coupon unavailable reason'
      },
      exchange: 'Success'
    }
  },

  data() {
    return {
      showList: false,
      chosenCoupon: -1,
      exchangedCoupons: [],
       coupon: {
        name: '优惠券名称',
        reason: '优惠券不可用原因'
      },
      exchange: '兑换成功',
       vanSubmitBar: {
    label: '合计：'
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: count => `你有 ${count} 个可用优惠`
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码'
  },
  vanCouponItem: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: discount => `${discount}折`,
    condition: (condition) => `满${condition}元可用`
  },
    };
  },

  computed: {
    coupons() {
      return [this.coupon, this.discountCoupon, ...this.exchangedCoupons];
    },

    disabledCoupons() {
      return [this.disabledCoupon, this.disabledDiscountCoupon];
    },

    coupon() {
      return {
        id: 1,
        available: 1,
        discount: 0,
        denominations: 150,
        originCondition: 0,
        reason: '',
        value: 150,
        name: this.coupon.name,
        startAt: 1489104000,
        endAt: 1514592000
      };
    },

    discountCoupon() {
      return {
        ...this.coupon,
        id: 2,
        discount: 88,
        denominations: 0,
        originCondition: 50,
        value: 12
      };
    },

    disabledCoupon() {
      return {
        ...this.coupon,
        id: 3,
        available: 0,
        reason: this.coupon.reason
      };
    },

    disabledDiscountCoupon() {
      return {
        ...this.discountCoupon,
        discount: 10,
        id: 4,
        available: 0,
        reason: this.coupon.reason
      };
    }
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.$toast(this.exchange);
      this.exchangedCoupons.push({
        ...this.coupon,
        id: this.randomId()
      });
    },
    randomId(max = 999999) {
      return Math.floor(Math.random() * max) + 1;
    }
  }
};
</script>

<style lang="less">
.demo-coupon-list {
  .van-popup {
    height: 100%;
  }
}
</style>
