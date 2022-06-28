function missing(str){
    let MAX_CHARS=26
    let present= new Array(MAX_CHARS)
    present.fill(false)
    let charList=[]

    for(let i=0;i<str.length;i++){
        if("a".charCodeAt()<=str[i].charCodeAt() && str[i].charCodeAt()<="z".charCodeAt()){
            present[str[i].charCodeAt() - "a".charCodeAt()]=true
        }
    }

    for(let j=0;j<26;j++){
        if(present[j]==false){
            charList.push(String.fromCharCode(j+"a".charCodeAt()))
        }
    }
    return charList
}
console.log(missing("abn").join(" "))
