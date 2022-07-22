/**
 * 画直线
 * @param context 画布上下文
 * @param x1 起始坐标x
 * @param y1 起始坐标y
 * @param x2 终点坐标x
 * @param y2 终点坐标y
 * @param color 颜色
 * @param width 宽度
 */
function drawLine(context,x1,y1,x2,y2,color,width) {
    // 开启一条路径
    context.beginPath();
    // 确定起始点
    context.moveTo(x1,y1);
    // 确定结束点
    context.lineTo(x2,y2);
    // 设置颜色
    context.strokeStyle = color;
    // 设置线宽
    context.lineWidth = width;
    // 绘制
    context.stroke();
    // 结束路径
    context.closePath();
}
