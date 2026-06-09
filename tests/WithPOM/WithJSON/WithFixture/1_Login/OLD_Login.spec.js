import {test} from '../../../../fixture/login.js'

test('login_page',async ({logginpage}) => {

    await test.slow()
    console.log('Logged into the application Successfully')
})