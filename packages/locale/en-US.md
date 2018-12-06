## Internationalization
The default language of NUI is Chinese. If you want to use other languages, you can follow the instructions below.

### Switch languages
NUI supports multiple languages with the Locale component, and the `Locale.use` method allows you to switch to diffrent languages.

```js
import { Locale } from 'jiaxing-n-ui';
import enUS from 'jiaxing-n-ui/packages/locale/lang/en-US';

Locale.use('en-US', enUS);
```

### Modify default configs
Use `Locale.add` method to modify the default configs.

```js
import { Locale } from 'jiaxing-n-ui';

const messages = {
  'en-US': {
    vanPicker: {
      confirm: 'Close'
    }
  }
};

Locale.add(messages);
```

### Config files
Current supported languages:

| Language | Filename |
|------|------|
| Chinese | zh-CN |
| English | en-US |
| Traditional Chinese | zh-HK |
| Turkish | tr-TR |

View all language configs [Here](https://github.com/youzan/vant/tree/dev/packages/locale/lang).
