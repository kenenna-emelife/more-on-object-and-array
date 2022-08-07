let cat = {
    name: 'starla',
    Walk() {
        console.log('i am walking')
    },
    stop() {
        console.log('i am roary')
    },
    identifyyourself() {
        console.log('i am' + ' ' + this.name)
    },
    setAge (age){
       this.age=age
        
    },
    
    getAge(){
        
        if (this.age){
        return this.age
       }   
       this.setAge(400)
        return this.age
    }
   

}
cat.Walk()
cat.stop()
cat.identifyyourself()
console.log(cat)
//cat.setAge(20)
console.log(cat.getAge())
let catAge = cat.getAge()
console.log(cat.hasownproperty('hand'))
console.log(cat.hasownproperty('age'))
let keys = Object.values(cat)
console.log(keys)