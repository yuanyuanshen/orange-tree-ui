import Vue from 'vue'
import message from './src/message.vue'

const MessageBoxConstructor = Vue.extend(message)

const Message = function (message) {
  const messageType = Object.prototype.toString.call(message)
  let myText, meType
  if (messageType === '[object String]') {
    myText = message
  } else if (messageType === '[object Object]') {
    myText = message.message
    meType = message.type
  }
  let instance = new MessageBoxConstructor({
    data: {
      text: myText || '消息内容',
      type: meType || ''
    }
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
}

// 给Message增加4个直接调用的方法
;['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

export default Message
