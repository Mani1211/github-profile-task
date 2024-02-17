const api = 'https://api.github.com/users'

class UserService {
    getUsers = async ()=>{
       const response =await fetch(api)
       const data = response.json()
       return data
    }

    getUserByName = async (username)=>{
        const response =await fetch(`${api}/${username}`)
        const data = response.json()
        return data
    }

    getUserRepos = async (username)=>{
        const response =await fetch(`${api}/${username}/repos`)
        const data = response.json()
        return data
    }

    getUserFollowers = async (username)=>{
        const response =await fetch(`${api}/${username}/followers`)
        const data = response.json()
        return data
    }
    getUserFollwing = async (username)=>{
        const response =await fetch(`${api}/${username}/following`)
        const data = response.json()
        return data
    }
    getUserstarredRepos = async (username)=>{
        const response =await fetch(`${api}/${username}/starred`)
        const data = response.json()
        return data
    }

}

export default new UserService();
