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