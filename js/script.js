var bookName = document.getElementById("bName");
var bookUrl = document.getElementById("burl");
var allBooks =[];


if(localStorage.getItem("db") != null){
    allBooks = JSON.parse(localStorage.getItem("db"))
    disPlay()
}

function getValues(){
    if(bookName.value && bookUrl.value){
      
        if(validUrl() == true) {
            var book ={
            name:bookName.value,
            url:bookUrl.value
        };
       
    allBooks.push(book);
    localStorage.setItem("db",JSON.stringify(allBooks));
    disPlay();
    clr();
    
}
else{
    alert("Hello Dear!!   Pleas Change  This  Link ")
}
    
    
 
}

else{
window.alert("Hello Dear!!   Sorry I Can`t Fond Your Data");
};
}
function clr(){
    bookName.value = "",
    bookUrl.value =""
};

function disPlay(){
    var disPlayList = "";

   for (var i=0 ; i < allBooks.length ; i++){
        
        disPlayList += ` 
        <tr>
                <td>
                ${i+1}
                  </td>
                <td>
                ${allBooks[i].name}
                  </td>
                  <td>
                    <button
                      onclick="VisitUrl(${i})"
                      class="btn btn-warning rounded-5 fw-bold mb-3"
                    >
                    Visit
                    </button>
                  </td>
                  <td>
                    <button
                      onclick="deleteBook(${i})"
                      class="btn btn-danger  rounded-5 fw-bold mb-3"
                    >
                      Delete
                    </button>
                  </td>
              </tr>
             `
             document.getElementById("demo").innerHTML =disPlayList ;
    };
};
function VisitUrl(index){
   allBooks.indexOf(index);
    location = (allBooks[index].url);
};
 
function deleteBook(del){
    allBooks.splice(del , 1);
    localStorage.setItem("db",JSON.stringify(allBooks)); 
    disPlay()
 };

 function validUrl(){
    var regex = /^(https|http):\/\/[^\s/$.?#].[^\s]*$/
   if(regex.test(bookUrl.value)==true){
return true
   }
   return false
 }


/*function lookName(term){
    for( var i=0 ; i<allBooks.length ;i++){
        if(allBooks[i].name.tolowercase().includes(term.toLowerCase().trim())){
return true
        }
    }
}

if (lookName()!=true){
  console.log("hi")
}*/