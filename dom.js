window.dom={}

//增

dom.create=(string)=>{
    //创建节点
    let container=document.createElement('template');
    container.innerHTML=string.trim();
    return container.content.firstChild;
}

dom.after=(siblingNode,node)=>{
    //siblingNode是新增弟弟节点
    node.parentNode.insertBefore(siblingNode,node.nextSibling);
}

dom.before=(siblingNode,node)=>{
    //siblingNode是新增哥哥节点
    node.parentNode.insertBefore(siblingNode,node);
}

dom.append=(parent,node)=>{
    parent.appendChild(node);
}

dom.wrap=(node,parent)=>{
    //给node和它原本的父元素之间再加一层
    dom.before(parent,node);
    dom.append(parent,node);
}

//删

dom.remove=(node)=>{
    // node.remove();
    node.parentNode.removeChild(node);
    return node;
}

dom.empty=(node)=>{
    const childNodes=Array.from(node.children);
    const array=[];
    for(let i=0;i<childNodes.length;i++){
        dom.remove(childNodes[i]);
        array.push(childNodes[i]);
    }
    return array;
}

//改
dom.attr=(node,name,flag)=>{
    if(flag){
        //写
        node.setAttribute(name,flag);
    }else if(flag===undefined){
        //读
        return node.getAttribute(name);
    }
}

dom.text=(node,string)=>{
    if(string){
        if('innerText' in node){
            node.innerText=string;
        }else{
            node.textContent=string;
        }
    }else if(string===undefined){
        if('innerText' in node){
            return node.innerText;
        }else{
            return node.textContent;
        }
    }
}

dom.html=(node,html)=>{
    if(html){
        //写
        node.innerHTML=html;
    }else if(html===undefined){
        //读
        return node.innerHTML;
    }
}

dom.style=(node,attr,value)=>{
    if(attr instanceof Object){
        //如果第二个参数是对象
        for(let i in attr){
            node.style[i]=attr[i];
        }
    }else if(typeof attr === 'string'){
        //如果是字符串
        if(value===undefined){
            //如果没有第三个参数
            return node.style[attr];
        }else if(value){
            //如果有第三个参数
            node.style[attr]=value;
        }
    }
}

dom.class={
    add(node,classname){
        node.classList.add(classname);
    },
    remove(node,classname){
        node.classList.remove(classname);
    },
    contains(node,classname){
        return node.classList.contains(classname);
    }
}

dom.on=(node,event,fn)=>{
    node.addEventListener(event,fn);
}

dom.off=(node,event,fn)=>{
    node.removeEventListener(event,fn);
}
