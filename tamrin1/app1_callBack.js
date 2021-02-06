function person(name,familyName,cb){
    let person_info = `${name} ${familyName}`
    cb(person_info)
}

person("Eliza","Roz",function(x){
    console.log(x);
})