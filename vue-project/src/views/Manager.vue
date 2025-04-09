<template>
<!---头部-->
<div style="height: 50px; background-color: #73c9e8;">

</div>

<!---主体-->
<div style="display: flex;">
    <!---左侧菜单-->`
    <div style="width: 200px; border-right: 2px solid #eee; min-height:calc(100vh - 50px);">
        <el-menu style="border: 0;">
            <el-menu-item >item one</el-menu-item>
            <el-menu-item >item two</el-menu-item>
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
</script>