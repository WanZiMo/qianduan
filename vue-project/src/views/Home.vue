<template>
  <div>
    <div>
      {{data.count }}
    </div> 
    <div>
      <input type="text" v-model="data.name" />
    </div>
    <div>
      <span style="color:red" v-if="form.name === '佩奇'">佩奇</span>
      <span style="color:blue" v-if="form.name === '乔治'">乔治</span>
    </div>
    <div style="display: flex;">
      <div @click="show(item)" style="width: 300px;height: 300px;margin-bottom: 10px;background-color: aqua;" v-for="item in data.arr">{{item}}</div>


    </div>
    <div>
      <button @click="click" style="width: 20px;height: 10px;"></button>
    </div>

    <div>
      <div :style="{'width':'100px'}"></div>
    </div>
    <div>
      <el-button>Defalt</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, reactive} from 'vue';
import {ref} from 'vue';


const data= reactive({
  count: 0,
  name: 'John Doe',
  arr: [1,2,3,4,5,6],
});
const form = reactive({
  name: '乔治',
  email: '11@qq.com',
  password: '123456',
})

const click = ()=>{
  alert('click');
}
const show = (value)=>{
  alert(value);
}

onMounted(() => {
  alert('mounted');
})

</script>