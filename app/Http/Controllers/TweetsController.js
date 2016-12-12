'use strict'

const User = use('App/Model/User');

class TweetsController {

    // Redirect to Twitter for authentication
    * redirect(request, response) {
        yield request.ally.driver('twitter').redirect()
    }

    // Handle authentication
    * handleCallback(request, response) {
        const twUser = yield request.ally.driver('twitter').getUser()

        const findUser = {
            username: twUser.getName()
        }

        const createUser = {
            username: twUser.getName(),
            avatar: twUser.getAvatar(),
            access_token: twUser.getAccessToken()
        }

        const user = yield User.findOrCreate(findUser, createUser)

        yield request.auth.loginViaId(user.id)

        response.redirect('/home')
    }
}

module.exports = TweetsController
