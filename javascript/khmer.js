// Update Khmer font for Blog Posts
for(var i=0;i<$('#blog-card .card').children().length;i++){
    var element=$('#blog-card .card').children().get(i);
    var text=$(element).html();
    var newText='',en='',km='';
    for(var j=0;j<text.length;j++){
        if(isKhmerChar(text[j])){
            if(en!=''){newText+=en;en=''}
            km+=text[j]
        }else{
            if(km!=''){newText+=kmSpan(km);km=''}
            en += text[j]
        }
        if(j==text.length-1){
            if(isKhmerChar(text[j])) newText+=kmSpan(km)
            else newText+=en
        }
    }
    $(element).html(newText);
}
function isKhmerChar(char){return(char.charCodeAt(0)>=6016&&char.charCodeAt(0)<=6143)||char.charCodeAt(0)==8203}
function kmSpan(text){return'<span class="km">'+text+'</span>'}