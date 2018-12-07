<template>
  <demo-section>
    <demo-block >
      <x-contact-card
        :type="cardType"
        :name="currentContact.name"
        :tel="currentContact.tel"
       :titleone="titleone"
       :titletwo="titletwo"
       
        @click="showList = true"
      />

      <x-popup
        v-model="showList"
        position="bottom"
        :lazy-render="false"
      >
        <x-contact-list
          v-model="chosenContactId"
          :list="list"
          :addText="addText"
          @add="onAdd"
          @edit="onEdit"
          @select="onSelect"
        />
      </x-popup>

      <x-popup
        v-model="showEdit"
        position="bottom"
        :lazy-render="false"
      >
        <x-contact-edit
          :contact-info="editingContact"
          :is-edit="isEdit"
          @save="onSave"
          @delete="onDelete"
        />
      </x-popup>
    </demo-block>

    <demo-block :title="uneditable">
      <x-contact-card
        type="edit"
         :titleone="titleone"
       :titletwo="titletwo"
       
        :name="mockContact.name"
        :tel="mockContact.tel"
        :editable="false"
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
  i18n: {
    'zh-CN': {
      name: '张三'
    },
    'en-US': {
      name: 'John Snow'
    }
  },

  data() {
    return {
    	addText:'新建联系人',
      chosenContactId: null,
      titleone:'姓名',
      titletwo:'电话',
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      name: '佳兴',
      uneditable:'不可编辑',
      list: []
    };
  },

  computed: {
    mockContact() {
      return {
        name: this.name,
        tel: '17611382222',
        id: 0
      };
    },

    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },

  created() {
    this.list.push(this.mockContact);
  },

  methods: {
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    onSelect() {
      this.showList = false;
    },

    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map(item => (item.id === info.id ? info : item));
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    }
  }
};
</script>

<style lang="less">
.demo-contact-card {
  .van-popup {
    height: 100%;
    background-color: #f2f2f2;
  }
}
</style>
