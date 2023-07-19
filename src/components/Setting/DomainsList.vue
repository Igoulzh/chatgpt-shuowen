<script setup lang="ts">
</script>

<style lang="less">
.title{
  font-size: 20px;
}
.prompt{
  color: #999;
  font-size: 13px;
  margin-left: 10px;
}
.list{
  padding-top: 15px;
  a{
    display: flex;
    margin-top: 5px;
  }
  a:hover{
    font-weight: bold;
  }
}
</style>

<template>
  <div class="p-4 space-y-5 min-h-[200px]">
    <div>
      <p class="title">备用域名<span class="prompt">如果网站无法正常使用，可以使用下列备用域名</span></p>
      <div class="list">
        <a href="https://pig1.pigchat.top/#/chat" target="_blank">备用地址1</a>
        <a href="https://pig2.pigchat.top/#/chat" target="_blank">备用地址2</a>
        <a href="https://pig3.pigchat.top/#/chat" target="_blank">备用地址3</a>
      </div>
    </div>
  </div>
</template>
