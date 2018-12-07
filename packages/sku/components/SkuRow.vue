<template>
  <div :class="b()">
    <div :class="b('title')">{{ skuRow.k }}：</div>
    <slot />
  </div>
</template>

<script>
import create from '../../utils/create';

export default create({
  name: 'sku-row',

  props: {
    skuRow: Object
  }
});
</script>

<style type="text/css">
.van-sku-row__item--active{
	color: #fff!important;
    border-color: #f44;
    background: #f44;
    border: 0px!important;
}
.van-sku-row__item {
    display: inline-block;
    padding: 5px 9px;
    margin: 0 10px 10px 0;
    height: 28px;
    min-width: 52px;
    line-height: 16px;
    font-size: 12px;
    color: #323233;
    text-align: center;
border: 1px solid #969799;
    border-radius: 3px;
    box-sizing: border-box;
}
.van-sku-container {
    font-size: 14px;
    background: #fff;
    overflow-y: visible;
    max-height: -webkit-max-content;
    max-height: max-content;

}
.van-sku-body{
	padding-left: 15px;
}
.demoContent{

}
[class*='van-hairline'] {
    position: relative;
}
</style>