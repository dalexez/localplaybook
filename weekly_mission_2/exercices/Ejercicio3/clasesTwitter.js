class User {
    constructor(name, username, location, following, followers, tweets, age){
        this.name = name
        this.username = username
        this.location = location
        this.following = following
        this.followers = followers
        this.tweets = tweets
        this.age = age
    }
    getFollowersAndFollowing(){
        return this.followers + this.following
    }
}



const user = new User("Daniel", "dalexez", "Mexico", 71, 69, 50, 32)
console.log(user)