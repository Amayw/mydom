#### 一 创建元素

```javascript
//create的用法
dom.create(`<div>text</div>`);
```



```javascript
// after和before的用法
const afterSibling=dom.create(`<li>弟弟</li>`);
const beforeSibling=dom.create(`<li>哥哥</li>`);
const test=document.querySelector('.test');
dom.after(afterSibling,test);
dom.before(beforeSibling,test);
```



```javascript
// append的用法
const container=document.querySelector('.container');
const littlered=dom.create(`<li>小红</li>`);
dom.append(container,littlered);
```



```javascript
// wrap的用法
const div2=document.querySelector('.div2');
const div3=dom.create(`<div>text</div>`);
dom.wrap(div2,div3);
```
#### 二 删除元素


```javascript
// remove的用法
dom.remove(littlered);
```



```javascript
// empty的用法
dom.empty(container);
```
#### 三 修改元素


```javascript
// attr的用法
const div1=document.querySelector('.div1');
//写
dom.attr(div1,'title','red');
//读
dom.attr(div1,'title');
```



```javascript
// text的用法
//写
dom.text(div1,'hi i am beauty');
//读
dom.text(div1);
```



```javascript
// html的用法
//写
dom.html(div1,'<div>hi</div>');
//读
dom.html(div1);
```



```javascript
// style的用法
dom.style(container,{color:'pink',border:'1px solid blue'});
dom.style(container,'color');
dom.style(container,'background','orange');
```



```javascript
// class.add的用法
dom.class.add(container,'class1');
```



```javascript
// class.has的用法
dom.class.contains(container,'class1');
```



```javascript
// class.remove的用法
dom.class.remove(container,'class1');
```



```javascript
// class.has的用法
dom.class.contains(container,'class1');
```



```javascript
// on的用法
const fn=()=>{alert("你真美")}
dom.on(container,'click',fn);
```



```javascript
// off的用法
dom.off(container,'click',fn);
```
#### 四 查找元素


```javascript
// find的用法
dom.find('ul li');
dom.find('#test');
dom.find('.test');
dom.find('.test');
```



```javascript
// findAll的用法
dom.findAll('.hong li');
```



```javascript
// parent的用法
dom.parent(name);
```



```javascript
// children的用法
dom.children(dom.find('ul'));
```



```javascript
// siblings的用法
dom.siblings(name);
```



```javascript
// next的用法
dom.next('.lan');
```



```javascript
// previous的用法
dom.previous(dom.find('.lan'));
```



```javascript
// each的用法
dom.each(dom.children(dom.find('.hong')),(n)=>{dom.style(n,{color:'red'})});
```



```javascript
// index的用法
console.log(dom.index(name));
```
