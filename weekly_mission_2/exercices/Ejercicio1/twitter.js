const user = {
    name: "Daniel",
    username: "dalexez",
    location: "Mexico",
    following: 71,
    followers: 69,
    tweets: 50,
    age: 32,
    getFollowersAndFollowing: function(){
        return this.followers + this.following
    },
    
}

console.log(user.getFollowersAndFollowing())