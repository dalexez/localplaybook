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

class Post {
    constructor(privacy, post, location, tagFriends){
        this.privacy = privacy
        this.post = post
        this.location = location
        this.tagFriends = tagFriends
    }
    getLocation(){
        return `Este post fue hecho en: ${this.location}`
    }
}

const user = new User("Daniel Espinoza", 568, "Morelia", "19 Julio", 4, "profile.jpg")
const post = new Post("Public", "Hola estoy modelando con clases!", "Morelia", "Carlo")
console.log(post)