$(document).ready(()=>{
    
    $('.color_line').css({top:'80px'}).animate({
        top:'560px',
        height: '0%',
    },30000).delay(1000).css({top:'560px'}).animate({
        top:'80px',
        bottom: '0px',
        height: '78%',
    },30000);

// console.log($('.color_line').offset());

  
  
  
//   Завадання2
// let a = $('#s1').text();
// console.log(a);
// let b = $('.s2').text();
// console.log(b);
// let c = $('#second>i').text();
// console.log(c);
// let d = $('q[title="hello"]').text();
// console.log(d);
// let e = $('a[target="_blank"]').text();
// console.log(e);
// let f = $('span.extra:odd').text();
// console.log(f);
// alert(a+b+c+d+e+f);
    // $('*').css('color', 'red');
})