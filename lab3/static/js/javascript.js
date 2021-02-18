function newItem(){
    var li = document.createItem("li");
    var input = document.getItemById("myInput").value;
    var t = document.createTextNode(input);
    li.appendChild(t);

    if (input ==''){
        alert("Write smth");
    } else{
        document.getItemById("ul").appendChild(li);
    }
    document.getItemById("myInput").value = "";

    var span = document.createItem("span");
    var div = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(div);
    li.appendChild(span);

    var ch = document.createItem("input");
    ch.type = "checkbox";
    ch.className = "checked";
    list[i].prepend(ch);
    
    for(i=0; i < close.length; ++i){
        close[i].onclick = function(){
            this.parentItem.style.display = "none";
        }
    }
    var checked = document.getItemsByClassName("checked");
    for (i = 0; i < checked.length; ++i){
        checked[i].onchange = function(){
            if (this.checked){
                this.parentItem.classList.add("line");
            }else{
                this.parentItem.classList.remove("line");
                }
            }
        }
}

var list = document.getItemsByTagName("li");
var i;

for (i = 0; i < list.length; i++){
    var span = document.createItem("span");
    var div = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(div);
    list[i].appendChild(span);
    
    var ch = document.createItem("span");
    ch.type = "checkbox";
    ch.className = "checked";
    list[i].prepend(ch);
}

var close = document.getItemsByClassName("delete");
var i;
for(i = 0; i < close.length; ++i){
    close[i].onclick = function(){
        this.parentItem.style.display = "none";
    }
}

var checked = document.getItemsByClassName("checked");
for (i = 0; i < checked.length; ++i){
    checked[i].onchange = function(){
        if (this.checked){
            this.parentItem.classList.add("line");
        }else{
            this.parentItem.classList.remove("line");
        }
    }
}
