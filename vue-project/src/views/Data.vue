<template>
  <div class="card" style="margin-bottom: 5px;">
      <el-input  style="width: 240px;" v-model="data.name" placeholder="请输入姓名" :prefix-icon="Search"></el-input>
      <el-button type="primary">查询</el-button>
    </div>
  <div class="card" style="margin-bottom: 5px;">
      <el-button type="primary">新增</el-button>
      <el-button type="warning">批量删除</el-button>
      <el-button type="info">导入</el-button>
      <el-button type="success">导出</el-button>
      
  </div>
  <!-- 表格 -->
  <div class="card" style="margin-bottom: 5px;">
    <el-table :data="data.tableData" stripe>
      <el-table-column label="日期" prop="date"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
    </el-table>
    <!-- 分页 -->
  <div style="margin-top: 10px;">
    <el-pagination
            v-model:page-size="data.pagesize"
            v-model:current-page="data.currentPage"
            :page-sizes="[5,10,15]"
            background
            layout="total,sizes,prev,next"
            :total="data.total"
    />
  </div>
  </div>
  
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import { Search } from '@element-plus/icons-vue';
  const data = reactive({
    name: null,
    tableData: [
      {id: 1, date: '2022-01-01', name: '张三', address: '北京'},
      {id: 2, date: '2022-01-02', name: '李四', address: '上海'}  ,
      {id: 3, date: '2022-01-03', name: '王五', address: '广州'} ,
    ],
    pagesize: 10,
    currentPage: 1,
    total: 0,
  })
</script>

<style>

</style>