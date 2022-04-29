import XhgcMessage from "@/components/library/XhgcMessage";
import { createVNode, render } from "vue";

const contatiner = document.createElement("div");
document.body.appendChild(contatiner);
let timer = null;
export default function Message({ type, text }) {
  const VNode = createVNode(XhgcMessage, { type, text });
  //渲染到 把弹框 contatiner
  render(VNode, contatiner);
  clearTimeout(timer);
  timer = setTimeout(() => {
    VNode.component.proxy.show = false;
    contatiner._vnode = null;
    // render(null, contatiner);
  }, 3000);
}
