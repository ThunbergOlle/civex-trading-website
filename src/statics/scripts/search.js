function search(){
    var input = document.getElementById('itemSearch');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById('ullist');
    var li = ul.getElementsByTagName('li');

    for(var i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("d")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
