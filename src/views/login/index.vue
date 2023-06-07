<template>
  <div class="login">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="form">
          <h1>后台管理系统</h1>
          <el-form-item class="item">
            <el-input
              v-model="user.username"
              :prefix-icon="User"
              placeholder="请输入账号"
              class="input"
            />
          </el-form-item>
          <el-form-item class="item">
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
              登录
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
import { useRouter } from 'vue-router';
import { loginForm } from '@/utils/type';
import { ElMessage } from 'element-plus';

const router = useRouter();

const user = reactive<loginForm>({ username: 'admin', password: '111111' });

let load = ref<boolean>(false);

const userlogin = () => {
  load.value = true;
  const usertodo = userInfo();
  usertodo
    .login({
      username: user.username,
      password: user.password,
    })
    .then((res) => {
      ElMessage({
        showClose: true,
        message: res,
        type: 'success',
      });
      load.value = false;
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
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  background-color: cadetblue;

  .form {
    width: 55%;
    height: 500px;
    margin: auto;
    background-color: white;
    border-radius: 20px;
    padding: 30px;
    box-sizing: border-box;
    margin-top: 180px;
    text-align: center;

    h1 {
      color: cadetblue;
      margin-bottom: 60px;
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
        margin-top: 30px;
      }
    }
  }
}
</style>
