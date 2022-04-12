var searchbox=document.querySelector("#searchbox")
    let food_wait;
    var showcase=document.querySelector("#showcase")
    async function searchfood(){
        try{
            var food=document.querySelector("#food").value
            let response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${food}`)
            var data=await response.json()
            var food_arr=data.meals;
            appendFood(food_arr)
            console.log(data)
            console.log("hello")
        }
        catch(err){
            console.log("err",err)
        }
    }

    function appendFood(food){
        searchbox.innerHTML=null;
        if(food==undefined){
            return false;
        }
        food.forEach(function(element){
            var p=document.createElement('p')
            p.innerText=element.strMeal
            showcase.innerHTML=""
            p.onclick=function(event){
                searchbox.innerHTML=null
                showcase.append(p)
                console.log(p)
            }
            searchbox.append(p)
        })
    }

    document.querySelector("#food").addEventListener("input",debounce)
    function debounce(func,delay){
        if(food_wait){
            clearInterval(food_wait)
            console.log("hello")
        }
        food_wait=setTimeout(function(){
            searchfood()
        },1000)
    }
