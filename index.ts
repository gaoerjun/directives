import Vue from 'vue'

// 自动focus input或者textarea
Vue.directive('focus', (el) => {
  el.focus();
})

// 自动修正输入的数值，自动增加','.如输入12345.23 会修正为12,345.23
Vue.directive('format', {
  componentUpdated(el) {
    const inputEle = el as HTMLInputElement;
    const inputValue = inputEle.value
    const formatArr = inputValue.split('.')
    if (formatArr.length > 1) {
      inputEle.value = parseInt(formatArr[0].replace(/,/g, '')).toLocaleString() + '.' + formatArr[1]
    } else {
      inputEle.value = parseInt(formatArr[0].replace(/,/g, '')).toLocaleString()
    }
  }
})
