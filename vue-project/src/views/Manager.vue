<template>
<!---头部-->
<div style="height: 50px; background-color: #73c9e8;">

</div>

<!---主体-->
<div style="display: flex;">
    <!---左侧菜单-->`
    <div style="width: 200px; border-right: 2px solid #eee; min-height:calc(100vh - 50px);">
        <el-menu router :default-active="router.currentRoute.value.path" style="border: 0;">
            <el-menu-item index="/manager/home">
                <el-icon><House/></el-icon>
                系统首页
            </el-menu-item>
            <el-sub-menu index="1">
                <template #title>
                    <el-icon><User /></el-icon>
                    <span >用户管理</span>
                </template>
                <el-menu-item >管理员信息</el-menu-item>
                <el-menu-item >用户信息</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/manager/data" >数据统计</el-menu-item>
        </el-menu> 
    </div>
    <!--左侧菜单结束-->
    <!---右侧内容-->
    <div style="width: 0;flex: 1;background-color: #fbf7f7; padding: 10px;">
        <RouterView />
    </div>
    <!---右侧内容结束-->

</div>

</template>

<script setup lang="ts">
import router from '@/router';
import { House } from '@element-plus/icons-vue';

</script>