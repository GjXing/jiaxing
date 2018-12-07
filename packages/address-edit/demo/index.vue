<template>
  <demo-section>
    <demo-block title="基础用法">
      <x-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        :show-search-result="showSearchResult"
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @adressfocus="focus"
        @change-detail="onChangeDetail"
      />
    </demo-block>
  </demo-section>
</template>

<script>
import areaList from '../../area/demo/area';
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
       searchResult: [{
        name: '黄龙万科中心',
        address: '杭州市西湖区'
      }, {
        name: '黄龙万科中心G座',
         address: '杭州市西湖区'
      }, {
        name: '黄龙万科中心H座',
        address: '杭州市西湖区'
      }]
    },
    'en-US': {
      searchResult: [{
        name: 'Name1',
        address: 'Address'
      }, {
        name: 'Name2'
      }, {
        name: 'Name3',
        address: 'Address'
      }]
    }
  },

  data() {
    return {
      areaList,
      showSearchResult:false,
basicUsage:'基础用法',
       searchResult: [{
        name: '黄龙万科中心',
        address: '杭州市西湖区'
      }, {
        name: '黄龙万科中心G座',
         address: '杭州市西湖区'
      }, {
        name: '黄龙万科中心H座',
        address: '杭州市西湖区'
      }]
    };
  },

  methods: {
    onSave() {
      this.$toast(this.$t('save'));
    },

    onDelete() {
      this.$toast(this.$t('delete'));
    },
    focus() {
      this.showSearchResult=true
    },

    onChangeDetail(val) {

      this.searchResult = val ? this.searchResult : [];
      this.showSearchResult=false
 
    }
  }
};
</script>
