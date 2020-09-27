//create的用法
const li=dom.create(`<div>text</div>`);

//after和before的用法
const afterSibling=dom.create(`<li>弟弟</li>`);
const beforeSibling=dom.create(`<li>哥哥</li>`);
const test=document.querySelector('.test');
dom.after(afterSibling,test);
dom.before(beforeSibling,test);

//append的用法
const container=document.querySelector('.container');
const littlered=dom.create(`<li>小红</li>`);
dom.append(container,littlered);

//wrap的用法
const div2=document.querySelector('.div2');
const div3=dom.create(`<div>text</div>`);
dom.wrap(div2,div3);

// //remove的用法
// dom.remove(littlered);
//
// //empty的用法
// dom.empty(container);

//attr的用法
const div1=document.querySelector('.div1');
//写
dom.attr(div1,'title','red');

//读
console.log(dom.attr(div1,'title'));

//text的用法
//写
dom.text(div1,'hi i am beauty');
//读
console.log(dom.text(div1));

//html的用法
//写
dom.html(div1,'<div>hi</div>');
//读
console.log(dom.html(div1));

//style的用法
dom.style(container,{color:'pink',border:'1px solid blue'});
console.log(dom.style(container,'color'));
dom.style(container,'background','orange');

//class.add的用法
dom.class.add(container,'class1');

//class.has的用法
console.log(dom.class.contains(container,'class1'));

//class.remove的用法
dom.class.remove(container,'class1');

//class.has的用法
console.log(dom.class.contains(container,'class1'));

//on的用法
const fn=()=>{alert("你真美")}
dom.on(container,'click',fn);

//off的用法
// dom.off(container,'click',fn);