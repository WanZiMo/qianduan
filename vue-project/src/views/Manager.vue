<template>
<!---头部-->
<div style="height: 50px; background-color: #73c9e8;display: flex;align-items: center;">
    <div style="width: 200px;display: flex;align-items: center;">
        <img style="width: 40px;" src="../assets/logo.png" alt="">
        <span style="font-size: 20px;color: white; padding-left: 10px;">后台管理系统</span>
    </div>
    <div style="flex: 1;"></div>
    <div style="width: fit-content;display: flex;align-items: center; padding-right: 10px;">
        <img :src="state.circleUrl" alt="" style="width: 40px;height: 40px;">
        <span style="color: white; margin-left: 5px;" >hello</span>
    </div>
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
            <el-menu-item index="/manager/data" ><el-icon><DataAnalysis/></el-icon>数据统计</el-menu-item>
            <el-menu-item index="/manager/home">
                <el-icon><UserFilled/></el-icon>
                个人信息
            </el-menu-item>
            <el-menu-item index="/manager/home">
                <el-icon><SwitchButton/></el-icon>
                退出登录
            </el-menu-item>
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
import { House, SwitchButton, UserFilled } from '@element-plus/icons-vue';
import { User } from '@element-plus/icons-vue';
import { reactive } from 'vue';


const state = reactive({
    circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})

</script>
<style scoped>
/* 菜单选中高亮 */
.el-menu .is-active{
    background-color: #ecf5ff;

}
</style>