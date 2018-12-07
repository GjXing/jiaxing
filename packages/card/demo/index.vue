<template>
  <demo-section background="white">
    <demo-block>
      <x-card
        num="2"
        price="2.00"
        :desc="descs"
        :title="titles"
        :thumb="imageURL"
      />
    </demo-block>

    <demo-block :title="advancedUsages">
      <x-card
        num="2"
        price="2.00"
        origin-price="10.00"
        :tag="tags"
        :desc="descs"
        :title='titles'
        :edit='edit'
        :del='del'
        issolt
        :thumb="imageURL"
      />
        <div slot="footer">
        </div>
      </x-card>
    </demo-block>
  </demo-section>
</template>

<script>
 import demoSection from '../../common/demoSection'
  import demoBlock from '../../common/demoBlock'
  export default {
    name: "index",
      data() {
    return {
    	tags:"标签",
      titles: "商品标题",
      descs:"描述信息",
    	advancedUsages:"高级用法",
    	edit:"编辑",
    	del:'删除',
      imageURL: "//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
    };
  },
    components:{
      demoSection,
      demoBlock
    },
 
 

  methods: {
   
  }

};
</script>
