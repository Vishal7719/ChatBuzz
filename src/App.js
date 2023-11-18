import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed  from './components/ChatFeed';

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height = "100vh"
            projectID="70f11c2a-7399-491c-927a-75377ca023a4"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...  chatAppProps} />}
        />
    );
}

export default App;

