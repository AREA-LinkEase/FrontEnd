import React from "react";
import WorkspaceEditUsers from "./pages/workspace/WorkspaceEditUsers";

const App = () => {

  const users = [
    {
      id: '1',
      name: 'Adil'
    },
    {
      id: '2',
      name: 'Thomas'
    },
    {
      id: '3',
      name: 'Kéziah'
    },
    {
      id: '4',
      name: 'Younes'
    },
    {
      id: '5',
      name: 'Simon'
    },
    {
      id: '6',
      name: 'Abdel'
    },
    {
      id: '7',
      name: 'Swann'
    },
    {
      id: '8',
      name: 'Alex'
    },
    {
      id: '9',
      name: 'Léandre'
    },
    {
      id: '10',
      name: 'Guillaume'
    },
    {
      id: '11',
      name: 'Vincent'
    },
    {
      id: '12',
      name: 'Leo'
    }
  ]

  return (
    <div>
      <WorkspaceEditUsers workspaceId='1' users={users}/>
    </div>
  );
}

export default App;
