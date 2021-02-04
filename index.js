let n = 0;
document.getElementById("adiciona").addEventListener("click",function()
{
    n += 1;
    var x = document.createElement("p");                       
    var t = document.createTextNode(`Elemento número ${n} criado!`);    
    x.appendChild(t);                                           
    document.getElementById("principal").appendChild(x);    
})     