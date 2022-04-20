class Profile {
    constructor(name, rateStars, messages, payment){
        this.name = name
        this.rateStars = rateStars
        this.messages = messages
        this.payment = payment
    }
    getTypePayment(){
        return this.payment
    }
    getGeneralInfo(){
        return `Usuario: ${this.name} tiene ${this.rateStars} estrellas`
    }
}



const profile = new Profile("Daniel", 5, "welcome", "creditcard")
console.log(profile)