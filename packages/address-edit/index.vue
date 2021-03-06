<template>
  <div :class="b()">
    <cell-group>
      <field
        v-model="data.name"
        clearable
        :label="name"
        :placeholder="namePlaceholder"
        :error="errorInfo.name"
        @focus="onFocus('name')"
      />
      <field
        v-model="data.tel"
        clearable
        type="tel"
        :label="tel"
        :placeholder="telPlaceholder"
        :error="errorInfo.tel"
        @focus="onFocus('tel')"
      />
      <field
        v-show="showArea"
        readonly
        :label="area"
        :placeholder="areaPlaceholder"
        :value="areaText"
        @click="showAreaPopup = true"
      />
      <address-edit-detail
        v-show="showDetail"

        :label='addressdetail'
        :placeholder='addressplaceholder'
        :focused="detailFocused"
        :value="data.addressDetail"
        :error="errorInfo.addressDetail"
        :detail-rows="detailRows"
        :search-result="searchResult"
        :show-search-result="showSearchResult"
        @focus="onFocus('addressDetail')"
        @blur="detailFocused = false"
        @input="onChangeDetail"
        @select-search="$emit('select-search', $event)"
      />
      <field
        v-if="showPostal"
        v-show="!hideBottomFields"
        v-model="data.postalCode"
        type="tel"
        maxlength="6"
        :label="postal"
        :placeholder="postal"
        :error="errorInfo.postalCode"
        @focus="onFocus('postalCode')"
      />
      <slot />
      <switch-cell
        v-if="showSetDefault"
        v-show="!hideBottomFields"
        v-model="data.isDefault"
        :title="defaultAddress"
        @change="$emit('change-default', $event)"
      />
    </cell-group>

    <div v-show="!hideBottomFields" :class="b('buttons')">
      <x-button block :loading="isSaving" @click="onSave" type="danger">
        {{ saveButtonText || $t('save') }}
      </x-button>
      <x-button block :loading="isDeleting" @click="onDelete" v-if="showDelete">
        {{ deleteButtonText || $t('delete') }}
      </x-button>
    </div>

    <popup v-model="showAreaPopup" position="bottom" :lazy-render="false" get-container="body">
      <x-area
        ref="area"
        :loading="!areaListLoaded"
        :value="data.areaCode"
        :area-list="areaList"
        @confirm="onAreaConfirm"
        @cancel="showAreaPopup = false"
      />
    </popup>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import create from '../utils/create';
import { isObj } from '../utils';
import Field from '../field';
import VanButton from '../button';
import Popup from '../popup';
import Toast from '../toast';
import Dialog from '../dialog';
import VanArea from '../area';
import AddressEditDetail from './Detail';
import SwitchCell from '../switch-cell';
import validateMobile from '../utils/validate/mobile';

const defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false
};

export default create({
  name: 'address-edit',

  components: {
    Field,
    Popup,
    VanArea,
    VanButton,
    SwitchCell,
    AddressEditDetail
  },

  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    showArea: {
      type: Boolean,
      default: true
    },
    showDetail: {
      type: Boolean,
      default: true
    },
    detailRows: {
      type: Number,
      default: 1
    },
    addressInfo: {
      type: Object,
      default: () => ({ ...defaultData })
    },
    searchResult: {
      type: Array,
      default: () => []
    },
    telValidator: {
      type: Function,
      default: validateMobile
    }
  },

  data() {
    return {
      data: {},
      showAreaPopup: false,
      detailFocused: false,

    addressdetail: '详细地址',
    addressplaceholder: '街道门牌、楼层房间号等信息',


       name: '姓名',
  tel: '电话',
  area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区',
      errorInfo: {
        tel: false,
        name: false,
        postalCode: false,
        addressDetail: false
      }
    };
  },

  computed: {
    // hide bottom field when use search && detail get focused
    hideBottomFields() {
      return this.searchResult.length && this.detailFocused;
    },

    areaListLoaded() {
      return isObj(this.areaList) && Object.keys(this.areaList).length;
    },

    areaText() {
      const { country, province, city, county, areaCode } = this.data;
      if (areaCode) {
        const arr = [country, province, city, county];
        if (province && province === city) {
          arr.splice(1, 1);
        }
        return arr.filter(text => text).join('/');
      }
      return '';
    }
  },

  watch: {
    addressInfo: {
      handler(val) {
        this.data = {
          ...defaultData,
          ...val
        };

        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true
    },

    areaList() {
      this.setAreaCode(this.data.areaCode);
    }
  },

  methods: {
    onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    if(key=="addressDetail"){
      this.$emit('adressfocus', key);
    	
    }
    },

    onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },

    onAreaConfirm(values) {
      this.showAreaPopup = false;
      this.assignAreaValues();
      this.$emit('change-area', values);
    },

    assignAreaValues(values) {
      const { area } = this.$refs;
      if (area) {
        const detail = area.getArea();
        detail.areaCode = detail.code;
        delete detail.code;
        Object.assign(this.data, detail);
      }
    },

    onSave() {
      const items = ['name', 'tel', 'areaCode', 'addressDetail'];

      if (this.showPostal) {
        items.push('postalCode');
      }

      const isValid = items.every(item => {
        const msg = this.getErrorMessage(item);
        if (msg) {
          this.errorInfo[item] = true;
          Toast(msg);
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },

    getErrorMessage(key) {
      const value = String(this.data[key] || '').trim();
      const { $t } = this;

      if (this.validator) {
        const message = this.validator(key, value);
        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : $t('nameEmpty');
        case 'tel':
          return this.telValidator(value) ? '' : $t('telInvalid');
        case 'areaCode':
          return value ? '' : $t('areaEmpty');
        case 'addressDetail':
          return value ? '' : $t('addressEmpty');
        case 'postalCode':
          return value && !/^\d{6}$/.test(value) ? $t('postalEmpty') : '';
      }
    },

    onDelete() {
      Dialog.confirm({
        title: this.$t('confirmDelete')
      })
        .then(() => {
          this.$emit('delete', this.data);
        })
        .catch(() => {
          this.$emit('cancel-delete', this.data);
        });
    },

    // get values of area component
    getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },

    // set area code to area component
    setAreaCode(code) {
      this.data.areaCode = code || '';
      code && this.$nextTick(this.assignAreaValues);
    },

    setAddressDetail(value) {
      this.data.addressDetail = value;
    }
  }
});
</script>
