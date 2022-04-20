class User {
    constructor(name, friends, location, birthday, notifications, profilePicture){
        this.name = name
        this.friends = friends
        this.location = location
        this.birthday = birthday
        this.notifications = notifications
        this.profilePicture = profilePicture
    }
    getGeneralInfo(){
        return `User: ${this.name} lives in ${this.location} and has ${this.friends}`
    }
}

const user = new User("Daniel Espinoza", 568, "Morelia", "19 Julio", 4, "profile.jpg")
console.log(user)