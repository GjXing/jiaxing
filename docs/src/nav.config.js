const version = require('../../package.json').version;export default {  header: {    logo: {      image: require('./assets/img/logo.png'),      title: 'N-ui',      version,      href: '#/'    },    nav: {      name:"Vue 组件",      lang: {          text: 'En',          from: 'zh-CN',          to: 'en-US'        },      github: 'https://github.com/GjXing/jiaxing'    }  },  nav: [    {      name: '开发指南',      groups: [        {          list: [            {              path: '/intro',              name: 'intro',              title: '介绍'            },            {              path: '/quickstart',              name: 'quickstart',              title: '快速上手'            },            {              path: '/changelog',              name: 'changelog',              title: '更新日志'            },            {              path: '/contribution',              name: 'contribution',              title: '开发指南'            },            {              path: '/style-guide',              name: 'style-guide',              title: '风格指南'            }          ]        }      ]    },    {      name: '组件',      showInMobile: true,      groups: [        {          groupName: '基础组件',          list: [            {              path: '/col',              name: 'col',              title: 'Layout 布局'            },            {              path: '/badge',              name: 'badge',              title: 'Badge 徽章'            },            {              path: '/button',              name: 'button',              title: 'Button 按钮'            },            {              path: '/cell',              name: 'cell',              title: 'Cell 单元格'            },            {              path: '/circle',              name: 'circle',              title: 'Circle 环形进度条'            },            {              path: '/collapse',              name: 'collapse',              title: 'Collapse 折叠面板'            },            {              path: '/icon',              name: 'icon',              title: 'Icon 图标'            },            {              path: '/lazyload',              name: 'lazyload',              title: 'Lazyload 图片懒加载'            },            {              path: '/list',              name: 'list',              title: 'List 列表'            },            {              path: '/loading',              name: 'loading',              title: 'Loading 加载'            },            {              path: '/nav-bar',              name: 'nav-bar',              title: 'NavBar 导航栏'            },            {              path: '/notice-bar',              name: 'notice-bar',              title: 'NoticeBar 通告栏'            },            {              path: '/pagination',              name: 'pagination',              title: 'Pagination 分页'            },            {              path: '/panel',              name: 'panel',              title: 'Panel 面板'            },            {              path: '/popup',              name: 'popup',              title: 'Popup 弹出层'            },            {              path: '/progress',              name: 'progress',              title: 'Progress 进度条'            },            {              path: '/steps',              name: 'steps',              title: 'Steps 步骤条'            },            {              path: '/swipe',              name: 'swipe',              title: 'Swipe 轮播'            },            {              path: '/tab',              name: 'tab',              title: 'Tab 标签页'            },            {              path: '/tabbar',              name: 'tabbar',              title: 'Tabbar 标签栏'            },            {              path: '/tag',              name: 'tag',              title: 'Tag 标记'            },          ]        },        {          groupName: '表单组件',          list: [            {              path: '/checkbox',              name: 'checkbox',              title: 'Checkbox 复选框'            },            {              path: '/field',              name: 'field',              title: 'Field 输入框'            },            {              path: '/number-keyboard',              name: 'number-keyboard',              title: 'NumberKeyboard 数字键盘'            },            {              path: '/password-input',              name: 'password-input',              title: 'PasswordInput 密码输入框'            },            {              path: '/radio',              name: 'radio',              title: 'Radio 单选框'            },            {              path: '/rate',              name: 'rate',              title: 'Rate 评分'            },            {              path: '/search',              name: 'search',              title: 'Search 搜索'            },            {              path: '/slider',              name: 'slider',              title: 'Slider 滑块'            },            {              path: '/stepper',              name: 'stepper',              title: 'Stepper 数字加减器'            },            {              path: '/switch',              name: 'switch',              title: 'Switch 开关'            },            {              path: '/uploader',              name: 'uploader',              title: 'Uploader 图片上传'            }          ]        },        {          groupName: '操作反馈',          list: [            {              path: '/actionsheet',              name: 'actionsheet',              title: 'Actionsheet 上拉菜单'            },            {              path: '/datetime-picker',              name: 'datetime-picker',              title: 'DatetimePicker 时间选择'            },            {              path: '/dialog',              name: 'dialog',              title: 'Dialog 弹出框'            },            {              path: '/picker',              name: 'picker',              title: 'Picker 选择器'            },            {              path: '/pull-refresh',              name: 'pull-refresh',              title: 'PullRefresh 下拉刷新'            },            {              path: '/toast',              name: 'toast',              title: 'Toast 轻提示'            }          ]        },         //                  {
             groupName: '高阶组件',
             list: [
               {
                 path: '/image-preview',
                 name: 'image-preview',
                 title: 'ImagePreview 图片预览'
               },
               {
                 path: '/swipe-cell',
                 name: 'swipe-cell',
                 title: 'SwipeCell 滑动单元格'
               },
               {
                 path: '/switch-cell',
                 name: 'switch-cell',
                 title: 'SwitchCell 开关单元格'
               },
               {
                 path: '/tree-select',
                 name: 'tree-select',
                 title: 'TreeSelect 分类选择'
               }
             ]
           },           {
             groupName: '业务组件',
              list: [              {                path: '/address-edit',                 name: 'address-edit',
                                title: 'AddressEdit 地址编辑'              },              {                path: '/address-list',                 name: 'address-list',
                                title: 'AddressList 地址列表'              },              {
                path: '/area',
                 name: 'area',
                title: 'Area 省市区选择'
              },
              {
                path: '/card',
                 name: 'card',
                title: 'Card 商品卡片'
              },
              {
                path: '/contact-card',
                 name: 'contact-card',
                title: 'Contact 联系人'
              },
//            {
//              path: '/coupon-list',
//               name: 'coupon-list',
//              title: 'Coupon 优惠券'
//            },
              {
                path: '/goods-action',
                 name: 'goods-action',
                title: 'GoodsAction 商品导航'
              },
              {
                path: '/submit-bar',
                 name: 'submit-bar',
                title: 'SubmitBar 提交订单栏'
              },
              {
                path: '/sku',
                 name: 'sku',
                title: 'Sku 商品规格'
              }            ]
           }      ]    }  ]}