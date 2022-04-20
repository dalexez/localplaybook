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

class Trending_Topic {
    constructor(topic, tweets, location, position){
        this.topic = topic
        this.tweets = tweets
        this.location = location
        this.position = position
    }
    getGeneralInfo(){
        return `The trending topic: ${this.topic} has ${this.tweets} tweets on ${this.location}`
    }
}

const user = new User("Daniel", "dalexez", "Mexico", 71, 69, 50, 32)
const trendingTopic = new Trending_Topic("Reforma Energetica", 12000, "Mexico", 1)
console.log(trendingTopic)