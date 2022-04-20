const profile = {
    name: "Daniel",
    rateStars: 5,
    messages: "welcome",
    payment: "creditcard",
    getTypePayment: function(){
        return this.payment
    },
    getGeneralInfo: function(){
        return `Usuario: ${this.name} tiene ${this.rateStars} estrellas`
    }
}

console.log(profile.getGeneralInfo())