import React, { useContext, useState } from 'react'
import styled from '@emotion/styled'
import { AppContext } from '../App'

import usersDB from '../db/users'

const LoginContainer = styled.div({
    marginBottom: '3em'
})

const FormContainer = styled.form({
    display: 'flex',
    flexDirection: 'column',
})

const Input = styled.input({
    padding: '1em',
    minWidth: '23vw',
    marginBottom: '2em',
    opacity: '0.5'
})

const Button = styled.button({
    fontSize: '1.2em',
    padding: '0.5em',
    margin: '0 2em 0 2em'
})

const SignupContainer = styled.div({
    padding: '2em',
    backgroundColor: 'lightgrey',
    fontSize: '2.2em',
    textAlign: 'center'
})

const Home: React.FC<any> = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const appContext = useContext(AppContext)

    if (appContext.authenticated) {
        props.history.replace('/dashboard')
    }

    const resetFields = (msg: string) => {
        alert(msg)
        setEmail('')
        setPassword('')
    }

    const login = (event: React.FormEvent) => {
        event.preventDefault()
        if (appContext.user) {
            if (appContext.user.name === 'Anonymous') {
                const matchedUser = usersDB.filter(user => user.email === email)[0]
                if (matchedUser == null) {
                    alert('Unable to find that account')
                }
                else if (matchedUser.password === password) {
                    appContext.authenticated = true
                    appContext.user = matchedUser
                    props.history.replace('/dashboard')
                }
                else {
                    resetFields('That is incorrect')
                }
            }
            else if (appContext.user.email === email) {
                if (appContext.user.password === password) {
                    appContext.authenticated = true
                    props.history.replace('/dashboard')
                }
                else {
                    resetFields('That is incorrect')
                }
            }
            else {
                alert(`No Match! Hint: you just signed up as ${appContext.user.email}`)
            }
        }
    }

    return (
    <div>
        <LoginContainer>
            <FormContainer onSubmit={login}>
                <Input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button >
                    Login
                </Button>
            </FormContainer>
        </LoginContainer>
        <SignupContainer>
            New? Signup <a href='/signup' >here</a>
        </SignupContainer>
    </div>)
}

export default Home