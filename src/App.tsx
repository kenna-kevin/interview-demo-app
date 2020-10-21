import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from '@emotion/styled'

import { Dashboard, Home, Signup } from './routes'

export type AppContextProps = {
  authenticated: boolean,
  user: {
    name: string,
    email: string,
    password: string
  }
}

export const AppContext = React.createContext<Partial<AppContextProps>>({
  authenticated: false,
  user: {
    name: 'Anonymous',
    email: '',
    password: ''
  }
})

const AppContainer = styled.div({
  padding: '0',
  margin: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f0f0f0'
})

const Header = styled.h1({
  marginBottom: '1em',
  fontSize: '2em',
  color: 'purple'
})

const Main = styled.section({
  flex: '1'
})

function App() {
  const defaultAppState = {
    authenticated: false,
    user: {
      name: 'Anonymous',
      email: '',
      password: ''
    }
  }

  return (
    <Router>
      <AppContext.Provider value={defaultAppState} >
        <AppContainer>
          <Header>
            Kenna Security Demo Application
          </Header>
          <Main>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/signup' component={Signup} />
          </Main>
        </AppContainer>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
