const word="abc"
// function letters(word){
//     var alphabet = "abcdefghijklmnopqrstuvwxyz"
//     // word=word.split("")
//     var store=[]
//     for(var i=0;i<alphabet.length;i++){
//         for(var j=0;j<word.length;j++){
//             if(alphabet[i]!==word[j]){
//                 var newword=alphabet[i]
//         }
//     }
//     store.push(newword)
// }

//     console.log(store)
// }
// letters(word)

function missingChars(str, strLength)
    {
      let MAX_CHARS = 26;
 
      // A boolean array to store
      // characters present in string.
      let present = new Array(MAX_CHARS);
      present.fill(false);
      let charsList = [];
 
      // Traverse string and mark
      // characters present in string.
      for(let i = 0; i < strLength; i++)
      {
        // if ('A'.charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= 'Z'.charCodeAt())
        //   present[str[i].charCodeAt() - 'A'.charCodeAt()] = true;
        if ('a'.charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= 'z'.charCodeAt())
          present[str[i].charCodeAt() - 'a'.charCodeAt()] = true;
      }
    //   97<=97 && 97<=122
    // present[97-97]=true
    // present[0]=true
    // 97<=98 && 98<=122
    // present[98-97]=true
    // present[true,true]
    // 97<=110 && 110<=122
    // present[110-97]=13=true
    // present[true,true,false.....,true]
 
      // Store missing characters
      // in alphabetic order.
      for(let i = 0; i < 26; i++)
      {
        if (present[i] == false)
        {
          charsList.push(String.fromCharCode(i + 'a'.charCodeAt()));
        }
      }
      return charsList;
    }
     
    console.log(missingChars("Aan",3).join(" "))

    function missing(string){
      let max_chars=26
      let present=new Array(max_chars)
      present.fill(false)
      let charList=[]

      for(let i=0;i<string.length;i++){
        if("a".charCodeAt()<=string[i].charCodeAt() && string[i].charCodeAt()<="z".charCodeAt()){
          present[string[i].charCodeAt()-"a".charCodeAt()]=true
        }
      }

      // 97<=97 && 97<=122
      // present[true]
      // 97<=98 && 98<=122
      // present[true,true]
      // 97<=100 && 100<=122
      // present[true,true,..true]
      // 2+97=99

      for(let i=0;i<26;i++){
        if(present[i]==false){
          charList.push(String.fromCharCode(i+"a".charCodeAt()))
        }
      }
      return charList.join(" ")
      
    }

    console.log(missing("anc"))

    function missletter(strn){
      let max_chars=26
      let present=new Array(max_chars)
      present.fill(false)
      var arr=[]

      for(let i=0;i<strn.length;i++){
        if("a".charCodeAt()<=strn[i].charCodeAt() && strn[i].charCodeAt()<="z".charCodeAt()){
          present[strn[i].charCodeAt()-"a".charCodeAt()]=true
        }
      }
      
      for(let i=0;i<26;i++){
        if(present[i]==false){
          arr.push(String.fromCharCode(i+"a".charCodeAt()))
        }
      }
      return arr.join(" ")
    }
    console.log(missletter("nsah"))