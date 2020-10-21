import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { AppContext } from '../App'

const DashboardContainer = styled.div({
    fontSize: '1.2em'
})

const Dashboard: React.FC<any> = (props) => {
    const appContext = useContext(AppContext)
    
    if (!appContext.authenticated) {
        alert('Sorry, you must be logged in')
        props.history.push('/')
    }

    const logout = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        appContext.authenticated = false
        appContext.user = {
            name: 'Anonymous',
            email: '',
            password:''
        }
        alert('You have been logged out')
        props.history.push('/')
    }

    return (
        <DashboardContainer>
            <h1>Dashboard</h1>
            <p>Hello, {appContext.user ? appContext.user.name : ''}</p>
            <button onClick={logout} >Logout</button>
        </DashboardContainer>
    )
}

export default Dashboard