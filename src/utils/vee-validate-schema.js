import { getNameOnly } from "@/api/user";

export function username(value) {
  if (!value) return "请输入用户名";
  return true;
}
export function password(value) {
  if (!value) return "请输入密码";
  return true;
}
export function mobile(value) {
  if (!value) return "请输入手机号";
  return true;
}
export function code(value) {
  if (!value) return "请输入验证码";
  return true;
}
export function isAgree(value) {
  if (!value) return "请勾选同意用户协议";
  return true;
}

//检查用户名是否唯一
export async function cheackAccount(value) {
  if (!value) return "请输入用户名";
  if (!/^[a-zA-Z]\w{5,19}$/.test(value)) return "字母开头且6-20个字符";
  const { result } = await getNameOnly(value);
  if (result.valid) return "用户已存在";
  return true;
}

//检查密码两次是否一致
export function rePassword(value, { form }) {
  if (!value) return "请输入验证码";
  if (!/^\d{6}$/.test(value)) return "验证码是6个数字";
  if (value !== form.password) return "两次密码不一致";
  return true;
}
