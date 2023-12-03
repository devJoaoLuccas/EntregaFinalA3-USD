import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Dropdown({userId}) {

    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    const handleContactPainelAdmin = () => {
        return navigate('/painelAdmin')
    }

    const confirmLogof = () => {
        const confirmation = window.confirm("Você tem certeza que deseja sair da plataforma?");

        if(confirmation) {
            window.alert("Log off realizado com sucesso! Muito obrigado por acessar nossa plataforma!");
            return navigate('/')
        } else {
            window.alert("Ufa! Ainda bem que você vai ficar um pocuo mais conosco!");
            return navigate('/menuPrincipal');
        }
    }

    useEffect(() => {
        fetch(`http://localhost:3000/usuario/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then((response) =>  {
              if (!response.ok) {
                throw new Error('Erro ao buscar detalhes do usuario');
              }
              return response.json();
            })
          .then((usuario) => {
            setUser(usuario);
          })
          .catch((error) => {
            console.error('Erro ao buscar detalhes do usuario:', error);
          });
      }, [userId]);

      return(
        <div className="dropdown">
            <div>
                <span className="dropdown-text">
                    {user.username}
                </span>
                <div className="dropdown-content">
                    <Link to={'/meuPerfil'}>
                        Meu Perfil
                    </Link>
                    {user.admin ? (
                        <Link onClick={handleContactPainelAdmin}>
                            Painel de administrador
                        </Link>
                    ) : null}
                    <Link onClick={confirmLogof}>
                        Sair
                    </Link>
                </div>
            </div>
        </div>
      )
}


export default Dropdown;