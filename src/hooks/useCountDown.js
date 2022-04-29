import { ref } from "vue";
import { useIntervalFn } from "@vueuse/core";

export default function useCountDown() {
  //定义倒计时变量
  const count = ref(0);
  /**
   * pause  停止定时器
   * resume 开始定时器
   * isActive 定时器是否执行
   */
  const { pause, resume, isActive } = useIntervalFn(
    () => {
      //如果大于0倒计时减一  否则停定时器;
      if (count.value <= 0) {
        pause();
      } else {
        count.value -= 1;
      }
    },
    1000,
    { immediate: false }
  );
  //如果定时器没有执行  给倒计时赋值  开始定时器   18000000000
  const start = (value) => {
    if (!isActive.value) {
      count.value = value;
      resume();
    }
  };
  return { count, start, isActive };
}
