<!-- Please remove this file from your project -->
<template>
<div>

  <text class="tu">
    tutorial
  </text>
  <text class="tu1">
    tutorial11
  </text>
</div>

</template>
<style lang="scss" scoped>
// @import '@/styles/common.scss';

.tu{
  font-size: 14px;
  display: inline-block;
  border: 1px solid #00f;

}
.tu1{
  // font-size: 0.875rem; // 16px
  font-size: rem(14);
  // font-size:size(14);
  border: 1px solid $red;
  display: inline-block;
  @include center;

}
</style>
