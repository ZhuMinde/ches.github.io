/* 只需要修改这里的文字就行 */
let str = ["宝贝", "今天是我们相爱520天❤", "别眨眼哦~"];
let i = -1;
let time = setInterval(() => {
  if (i != str.length - 1) {
    i++;
    shape.print(str[i]);
  } else {
    // 清除定时器
    clearTimeout(time);
    // 跳转到oriental页面
    window.location.href = "oriental.html";
    // 重置为-1
    i = -1;
  }
}, 1500);
