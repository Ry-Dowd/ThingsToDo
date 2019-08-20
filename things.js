let options = ["Cook something yummy?","Go grab a drink?","Go peoplewatching?","Play boardgames?"
,"Hang with friends?","Movie night?","Have a picnic?","Placeholder...."]
let lastChosen=null
function choose(){
    choice=Math.floor(Math.random()*options.length)
    if (choice == lastChosen){
        return choose();
    }
    else{
        lastChosen=choice
        return options[choice]
    }
    }
}