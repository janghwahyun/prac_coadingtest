// 5m가려면 5일이 필요한거 아님? -> 그래프 그리면 해결
// 반복문으로 접근함 -> 높이 / 하루의 올라가는 높이
// 왜 최종 높이에서 미끄러지는 길이를 빼줄까? -> 달팽이가 목표지점에 도달한 날에는 미끄러지느 것을 감안하면 안되는 (V-B)미터를 올라감?? 이해 노

let A = 2;
let B = 1;
let V = 5;

let result = Math.celi((V - B) / (A - B)); // ???(V-B)
let result = Math.celi(V / (A - B)); // ???(V-B)

console.log(result);
