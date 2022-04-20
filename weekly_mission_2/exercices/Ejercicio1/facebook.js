const user = {
    name: "Daniel Espinoza",
    friends: 568,
    location: "Morelia",
    birthday: "19 Julio",
    notifications: 4,
    profilePicture: "profile.jpg",
    getGeneralInfo: function(){
        return `User: ${this.name} lives in ${this.location} and has ${this.friends}`
      }
}

console.log(user.getGeneralInfo())