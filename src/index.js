/**
 * [setWxFont 禁止修改微信字体大小]
 */
export const name = 'wx-lodash';

function setFontSize() {
  setTimeout(() => {
    WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
    WeixinJSBridge.on('menu:setfont', () => {
      WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
    });
  }, 0);
}

export function forbidUpdateWxFont({ open = false } = {}) {
  if (open) {
    return false;
  }
  if (typeof window === 'undefined') {
    console.warn('Is Not In Browser!');
    return false;
  }
  if (typeof WeixinJSBridge == "undefined") {
    return document.addEventListener("WeixinJSBridgeReady", () => {
      setFontSize();
    });
  }
  return setFontSize();
}
