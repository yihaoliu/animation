function easing(startX,startY,endX,endY,easing){
  var obj = {};
  var x = startX;
  var y = startY;
  var vx = (endX - startX)*easing;
  var vy = (endY - startY)*easing;

   x += vx;
   y += vy;
  return obj={
    x:x,
    y:y
  }

}

function spring(startX,startY,endX,endY,spring,friction){
  var obj = {},x=startX,y=startY;
  var dx = endX - startX,
      dy = endY - startY,
      ax = dx * (spring||0.03),
      ay = dy * (spring||0.03);
  vx += ax;
  vy += ay;
  vx *= friction||0.95;
  vy *= friction||0.95;
   x += vx;
   y += vy;
  return obj={
    x:x,
    y:y
  }
}
