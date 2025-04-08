<template>
  <div>
    <el-input v-model="value.input" :prefix-icon="Search" style="width: 300px;" placeholder="请输入内容" />
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import { Search } from "@element-plus/icons-vue";


const value = ref({
  input: null,
})
</script>