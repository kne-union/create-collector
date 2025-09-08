const createCollector = (callback, options) => {
  options = Object.assign({}, { maxTime: 5 * 1000 }, options);
  // 有maxLength和maxTime两种模式，默认为maxTime模式，
  // 即：maxTime时间间隔内所有消息一次性触发回调，如果maxTime内没有消息则不触发
  // maxLength模式则在消息数量达到maxLength时触发回调
  let messages = [],
    executorTime;
  const executorCallback = async () => {
    try {
      messages.length > 0 && (await callback(messages));
      messages = [];
    } catch (e) {
      console.error(e);
    }
  };
  const api = async data => {
    messages.push(data);
    executorTime = new Date();
    if (Number.isInteger(options.maxLength) && options.maxLength > 0 && messages.length >= options.maxLength) {
      await executorCallback();
      return;
    }
    if (Date.now() - executorTime >= options.maxLength.maxTime) {
      await executorCallback();
      return;
    }
  };

  api.all = executorCallback;

  return api;
};

export default createCollector;
