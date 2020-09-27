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
const div1=document.querySelector('.div1');
const div2=document.querySelector('.div2');
const div3=dom.create(`<div>text</div>`);
dom.wrap(div2,div3);

//remove的用法
console.log(dom.remove(littlered));

//empty的用法
console.log(dom.empty(container));