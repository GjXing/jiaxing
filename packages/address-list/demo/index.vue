<template>
  <demo-section>
    <demo-block title="基础用法">

    <x-address-list
        v-model="chosenAddressId"
        :list="list"
        :addButtonText="add"
        :disabled-list="disabledList"
        :disabled-text="disabledText"
        @add="onAdd"
        @edit="onEdit"
      />  
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
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ],
      add: '新增地址',
      edit: '编辑地址',
      disabledText: '以下地址超出配送范围'
    };
  },

  methods: {
    onAdd() {
      this.$toast(this.add);
    },

    onEdit(item, index) {
      this.$toast(this.edit + ':' + index);
    }
  }
};
</script>
