import React from "react";
import Workspace from "./pages/workspace/Workspace";
import { colors } from "./style/color";

const App = () => {

  const workspaceValues = [
    {
      name: 'SpotifyBangar',
      creator: 'Adilou le fifou',
      description: 'Bonjour je suis une description très longue parce que je suis très inspiré. Non en sah cest top venez utiliser mon workspace cest tah les fous.',
      color: colors.lightPurple,
      access: 'Public',
      automates: [
        {
          name: 'Automate 1',
        },
        {
          name: 'Automate 2',
        },
        {
          name: 'Automate 3',
        },
        {
          name: 'Automate 4',
        },
        {
          name: 'Automate 5',
        },
        {
          name: 'Automate 6',
        },
        {
          name: 'Automate 7',
        },
        {
          name: 'Automate 8',
        },
      ],
    },
    {
      name: 'Baboss',
      creator: 'Adilou le fifou',
      description: 'Description de Baboss',
      color: colors.darkGrey,
      access: 'Private',
      automates: null,
    },
    {
      name: 'Mamen',
      creator: 'Adilou le fifou',
      description: 'Description de Mamen',
      color: colors.lightPurple,
      access: 'Public',
      automates: null,
    },
    {
      name: '3ataï',
      creator: 'Adilou le fifou',
      description: 'Description de 3ataï',
      color: colors.lightlightGrey,
      access: 'Public',
      automates: null,
    },
    {
      name: 'THOAAAAMS',
      creator: 'Adilou le fifou',
      description: 'Description de THOAAAAMS',
      color: colors.purple,
      access: 'Public',
      automates: null,
    },
    {
      name: 'PIZZA BIEN GARNIE',
      creator: 'Adilou le fifou',
      description: 'Description de PIZZA BIEN GARNIE',
      color: colors.purple,
      access: 'Private',
      automates: null,
    },
  ];
  

  return (
    <div>
      <Workspace workspaceValues={workspaceValues[0]}/>
    </div>
  );
}

export default App;
