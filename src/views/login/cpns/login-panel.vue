<template>
  <div class="login-panel">
    <h1 class="title">CMS管理系统</h1>
    <el-tabs v-model="currentName" stretch type="border-card">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录 </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button class="login-btn" type="primary" @click="handleLoginClick"
      >立即登录
    </el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";

export default defineComponent({
  components: { LoginPhone, LoginAccount },
  setup() {
    const isKeepPassword = ref(true);
    const currentName = ref<string>("account");
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const phoneRef = ref<InstanceType<typeof LoginPhone>>();

    const handleLoginClick = () => {
      if (currentName.value === "account") {
        accountRef.value?.loginAction(isKeepPassword.value);
      } else {
        // doSomething
        phoneRef.value?.phoneAction();
      }
    };

    return {
      isKeepPassword,
      currentName,
      accountRef,
      phoneRef,
      handleLoginClick,
    };
  },
});
</script>

<style lang="less" scoped>
.login-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
