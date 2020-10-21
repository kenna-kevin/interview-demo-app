import React, { useContext, useState } from 'react'
import styled from '@emotion/styled'
import { AppContext } from '../App'

const SignupFormContainer = styled.div({
    minWidth: '30vw',
    marginBottom: '1em'
})

const NameField = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1em'
})

const NameLabel = styled.label({
    fontSize: '1em',
    marginBottom: '0.4em'
})

const NameInput = styled.input({
    padding: '0.8em',
    opacity: '0.5'
})

const EmailField = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1em'
})

const EmailLabel = styled.label({
    fontSize: '1em',
    marginBottom: '0.4em'
})

const EmailInput = styled.input({
    padding: '0.8em',
    opacity: '0.5'
})

const PasswordField = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1em'
})

const PasswordLabel = styled.label({
    fontSize: '1em',
    marginBottom: '0.4em'
})

const PasswordInput = styled.input({
    padding: '0.8em',
    opacity: '0.5'
})

const SignupButton = styled.button({
    fontSize: '1.2em',
    marginLeft: '0.6em',
    padding: '0.4em 1em 0.4em 1em'
})

const Signup: React.FC<any> = (props) => {
    const appContext = useContext(AppContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const createUser = (event: React.FormEvent) => {
        event.preventDefault()
        if (password === confirmPassword) {
            appContext.user = {
                name: name,
                email: email,
                password: password
            }
            alert('Congratulation you have been added!')
            props.history.push('/')
        }
        else {
            alert('Passwords must match')
            setPassword('')
            setConfirmPassword('')
        }
    }

    return (
        <SignupFormContainer>
            <form onSubmit={createUser}>
                <NameField>
                    <NameLabel>Name</NameLabel>    
                    <NameInput type="name" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                </NameField>
                <EmailField>
                    <EmailLabel>Email</EmailLabel>    
                    <EmailInput type="email" id="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
                </EmailField>
                <PasswordField>
                    <PasswordLabel>Password</PasswordLabel>
                    <PasswordInput type="password" id="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </PasswordField>
                <PasswordField>
                    <PasswordLabel>Confirm Password</PasswordLabel>
                    <PasswordInput type="password" id="confirm-password" placeholder="Confirm" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                </PasswordField>
                <SignupButton>Login</SignupButton>
            </form>
        </SignupFormContainer>
    )
}

export default Signup