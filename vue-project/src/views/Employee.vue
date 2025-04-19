<template>
<div class="card" style="margin-bottom: 5px;">
      <el-input  style="width: 240px;" v-model="data.name" placeholder="请输入姓名" :prefix-icon="Search"></el-input>
      <el-button type="primary" @click="list">查询</el-button>
      <el-button type="primary" @click="reset">重置</el-button>
    </div>
  <div class="card" style="margin-bottom: 5px;">
      <el-button type="primary" @click="handleAdd">新增</el-button>
      <el-button type="warning">批量删除</el-button>
      <el-button type="info">导入</el-button>
      <el-button type="success">导出</el-button>
      
  </div>
  <!-- 表格 name sex no工号 age description department_id-->
  <div class="card" style="margin-bottom: 5px;">
    <el-table :data="data.tableData" stripe>
      <el-table-column  label="名称" prop="name"></el-table-column>
      <el-table-column  label="性别" prop="sex"></el-table-column>
      <el-table-column  label="工号" prop="no"></el-table-column>
      <el-table-column  label="年龄" prop="age"></el-table-column>
      <el-table-column  label="个人介绍" prop="description" show-overflow-tooltip></el-table-column>
      <el-table-column  label="部门" prop="departmentName"></el-table-column>
    </el-table>
    <!-- 分页 -->
  <div style="margin-top: 10px;">
    <el-pagination
    @current-change="list"
    @size-change="list"
            v-model:page-size="data.pagesize"
            v-model:current-page="data.currentPage"
            :page-sizes="[5,10,15]"
            background
            layout="total,sizes,prev,next"
            :total="data.total"
    />
  </div>
  <el-dialog v-model="data.formVisible" title="员工信息" width="500">
    <el-form :model="data.form" label-width="80px" style="padding-right: 50px;padding-bottom: 20px;">
      <el-form-item label="名称" >
        <el-input v-model="data.form.name" autocomplete="off" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="data.form.sex">
          <el-radio label="男" value="男"></el-radio>
          <el-radio label="女" value="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input-number style="width: 150px;" v-model="data.form.age" autocomplete="off" />
      </el-form-item>
      <el-form-item label="个人介绍">
        <el-input :rows="3" type="textarea" v-model="data.form.description" autocomplete="off" />

      </el-form-item>
      

    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="data.formVisible = false">取消</el-button>
        <el-button type="primary" @click="save">
          保存
        </el-button>
      </div>
    </template>
  </el-dialog>
  </div>
  
</template>
<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';

import { reactive } from 'vue';
import request from '@/utils/request';
import { ElMessage } from 'element-plus';

  const data = reactive({
    name: null,
    tableData: [],
    pagesize: 10,
    currentPage: 1,
    total: 1,
    formVisible: false,
    form:{
      name: null,
      sex: null,
      age: null,
      description: null,
    }
  })
  const list = () => {
    request.get('/employee/selectPage',{
      params:{
        pageNum: data.currentPage,
        pageSize: data.pagesize,
        name: data.name,
      }
    }).then(res=>{
        data.tableData = res.data.list;
        data.total = res.data.total;
    })
  }

  const reset = () => {
    data.name = null;
    list();
  }

  const handleAdd = () => {
    data.formVisible = true; 
    data.form = {  
    name: '',  
    sex: '男',  // 给默认值，而不是null  
    age: 18,    // 给默认值，而不是null  
    description: ''  
  };  
  }

  const save = () => {
    request.post('/employee/insertEmployee',data.form).then(res=>{
      if((res as any).code ==='200'){
        data.formVisible = false;
        ElMessage.success('保存成功');
        list();
      }else{
        ElMessage.error('保存失败'); 
      }
    })
  }
  
  list()
</script>