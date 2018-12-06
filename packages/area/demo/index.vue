<template>
  <demo-section>
    <demo-block >
      <x-area
        ref="area"
        :area-list="areaList"
      />
    </demo-block>

    <demo-block :title="title2">
      <x-area
        :area-list="areaList"
        :value="value"
      />
    </demo-block>

    <demo-block :title="title3">
      <x-area
        :area-list="areaList"
        :columns-num="2"
        :title="title"
      />
    </demo-block>
  </demo-section>
</template>

<script>
import AreaList from './area';
import AreaListEn from './area-en';
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
      title2: '选中省市区',
      title3: '配置显示列',
      areaList: AreaList
    },
    'en-US': {
      title2: 'Initial Value',
      title3: 'Columns Number',
      areaList: AreaListEn
    }
  },

  data() {
    return {
      value: '330302',
      
       title: '配置显示列',
       title2: '选中省市区',
      title3: '配置显示列',
      areaList: AreaList
    };
  }
};
</script>
