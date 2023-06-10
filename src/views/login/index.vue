<template>
  <div class="login">
    <el-row>
      <el-col :span="10" :xs="0"></el-col>
      <el-col :span="14" :xs="24">
        <el-form class="form" :model="user" :rules="rules" ref="login">
          <h1>后台管理系统</h1>
          <el-form-item class="item" prop="username">
            <el-input
              v-model="user.username"
              :prefix-icon="User"
              placeholder="请输入账号"
              class="input"
            />
          </el-form-item>
          <el-form-item class="item" prop="password">
            <el-input
              v-model="user.password"
              type="password"
              :prefix-icon="Lock"
              placeholder="请输入密码"
              show-password
              class="input"
            />
          </el-form-item>
          <el-form-item class="item">
            <el-button
              type="primary"
              class="btn"
              @click="userlogin"
              :loading="load"
            >
              登 &nbsp;&nbsp; 录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';
import userInfo from '@/store/user';
import { useRouter, useRoute } from 'vue-router';
import { loginForm } from '@/utils/type';
import { ElMessage, ElNotification, FormRules } from 'element-plus';
import timer from '@/utils/timer';

const router = useRouter();
const route = useRoute();
const user = reactive<loginForm>({ username: 'admin', password: '111111' });
let load = ref<boolean>(false);
const login = ref<Promise<any> | any>();

const rules = reactive<FormRules>({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'change' },
    { min: 5, max: 13, message: '用户名为5到13个字符', trigger: 'change' },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'change' },
    { min: 6, max: 16, message: '密码长度为6到16个字符', trigger: 'change' },
  ],
});

const userlogin = async () => {
  const result = await login.value.validate();
  if (result) {
    load.value = true;
    const usertodo = userInfo();
    usertodo
      .login({
        username: user.username,
        password: user.password,
      })
      .then((res) => {
        ElNotification({
          type: 'success',
          message: res,
          title: timer.message,
        });
        load.value = false;
        usertodo.getinfo();
        route.query;
        router.push({ name: 'layout' });
      })
      .catch((err) => {
        ElMessage({
          showClose: true,
          message: err,
          type: 'error',
        });
        load.value = false;
      });
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  min-height: 800px;
  background-color: $base-nav-background;

  .form {
    width: 400px;
    height: 550px;
    margin: auto;
    background-color: $base-set-background;
    border-radius: 20px;
    padding: 30px;
    box-sizing: border-box;
    margin-top: 220px;
    text-align: center;

    h1 {
      color: cadetblue;
      margin-bottom: 80px;
    }

    .item {
      margin-bottom: 40px;

      .input {
        height: 50px;
        font-size: 16px;
      }

      .btn {
        width: 100%;
        height: 45px;
        margin-top: 50px;
        font-size: 18px;
      }
    }
  }
}
</style>
