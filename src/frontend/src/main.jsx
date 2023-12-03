import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 
import ErrorPage from './pages/menus/ErrorPage.jsx';
import Login from './pages/login/Login.jsx';
import MenuPrincipal from './pages/menus/MenuPrincipal.jsx';
import PainelDeAdministrador from './pages/menus/PainelDeAdministrador.jsx'
import Jogos from './pages/menus/Jogos.jsx';
import JogosDetails from './pages/details/JogosDetails.jsx';
import AddGames from './pages/forms/AddGames.jsx';
import GameEdit from './pages/details/GameEdit.jsx';
import AvaliarJogos from './pages/forms/AvaliarJogos.jsx';
import Plataforma from './pages/menus/Plataforma.jsx';
import PlataformDetails from './pages/details/PlataformDetails.jsx';
import AddPlataform from './pages/forms/AddPlataform.jsx';
import PlataformEdit from './pages/details/PlataformEdit.jsx';
import EditarDeletar from './pages/menus/EditarDeletar.jsx';
import FaleConosco from './pages/forms/faleConosco.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
          path:'/',
          element:<Login />,
        },
        {
          path:'/cadastroUsuario',
          element:<Login />,
        },
        {
          path:'/menuPrincipal',
          element:<MenuPrincipal />,
        },
        {
          path:'/painelAdmin',
          element:<PainelDeAdministrador />,
        },
        {
          path:'/jogos',
          element:<Jogos />,
        },
        {
          path:'jogos/:idJogos',
          element: <JogosDetails />,
        },
        {
          path:'jogos/:idJogos/editJogos',
          element: <GameEdit />,
        },
        {
          path:'/adicionarJogo',
          element: <AddGames />
        },
        {
          path:'/plataforma',
          element:<Plataforma />,
        },
        {
          path:'/plataforma/:idPlataforma',
          element: <PlataformDetails />
        },
        {
          path:'/plataforma/:idPlataforma/editPlataforma',
          element: <PlataformEdit />
        },
        {
          path:'/adicionarPlataforma',
          element:<AddPlataform />
        },
        {
          path:'/editarDeletar',
          element: <EditarDeletar />,
        },
        {
          path:'/faleConosco',
          element: <FaleConosco />,
        }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)