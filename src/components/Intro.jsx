import { Form } from 'react-router-dom'

// library
import { UserPlusIcon } from '@heroicons/react/24/solid'

export const Intro = () => {
  return (
    <div className='intro'>
      <div>
        <h1>
          Take Control of <span className='accent'>Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <Form method='post'>
          <input
            type='text'
            name='userName'
            required
            placeholder='What is your name?'
            aria-label='Your Name'
            autoComplete='off'
          />
          <input type='hidden' name='_action' value='newUser' />
          <button type='submit' className='btn btn--dark'>
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
    </div>
  )
}

export default Intro
