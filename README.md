### Native KDE File Open

This module allows for the opening of a native file window in KDE distributions, and is intended for use in Electron applications until a
full fix has been created for [this](https://github.com/electron/electron/issues/2911) issue.

Allows for triggering of two different kdialog windows:
  * `OPEN` or `open`
  * `SAVE` or `save`

To use:

```javascript
  const nativePicker = require('native-kde-file-open');

  // to open single file or multiple files
  const openedFileBuffer = nativePicker('OPEN');

  // to save single file or multiple files
  const savedFileBuffer = nativePicker('SAVE');
```
