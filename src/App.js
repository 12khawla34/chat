import './App.css';
import ChatBot from 'react-simple-chatbot';

function App() {
  return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hello and welcome to FleetOps! What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            trigger: '4',
          },
          {
            id: '4',
            message: 'How can I help you today ?',
            trigger: '5',
          },
          {
            id: '5',
            options: [
              { value: 1, label: 'Request assistance', trigger: '6' },
              { value: 2, label: 'Report a technical issue', trigger: '7' },
              { value: 3, label: 'Access Dashboard', trigger: '8' },
              { value: 4, label: 'Contact support', trigger: '9' },
              { value: 5, label: 'Explore application features', trigger: '10' },
              { value: 6, label: 'Learn more about FleetOps', trigger: '11' },
            ],
          },
          {
            id: '6',
            message: 'Please select the problem where you need our assisstance',
            trigger: '5',
            end: false, 
          },
          
          {
            id: '7',
            message: 'Please select the technical problem you are having',
            trigger: '5',
            end: false, 
          },
          {
            id: '8',
            message: 'To access the Dashboard, simply log in to your FleetOps account and click on the Dashboard tab.',        
            trigger: '12',
            end: false, 
          },
          {
            id: '9',
            message: 'For support inquiries, please contact our support team at fleetops84@gmail.com.',
            trigger: '12',
            end: false,
          },
          {
            id: '10',
            message: 'FleetOps is a comprehensive fleet management application designed to help businesses manage their vehicles, drivers, clients, generate reports, and provide analytics.',
            trigger: '12',
            end: false, 
          },
          {
            id: '11',
            message: 'You can learn more about FleetOps by deeply exploring the home page of the app. For a more sophisticated experience, we welcome you to create a FleetOps account to use our innovative fleet management solutions.',
            trigger: '12',
            end: false, 
          },
          {
            id: '12',
            message: 'Do you have an another question ?',
            trigger: '5',
            end: false, 
          },
          
        ]}
        floating={true}
      />
    
  );
}

export default App;
