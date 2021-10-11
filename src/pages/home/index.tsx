import { useHistory } from 'react-router-dom';
import IllustrationImage from '../../assets/images/illustration.svg'
import LogoImage from '../../assets/images/logo.svg'
import GoogleIcon from '../../assets/images/google-icon.svg'
import './styles.css'
import { Button } from '../../components/button'
import { useAuthentication } from '../../hooks/useAuthentication';


export function Home () {
    const { authentication, signInWithGoogle } = useAuthentication()
    const history = useHistory();
    
    const handleCreateRoom = async () => {
        if (!authentication) await signInWithGoogle()
        history.push('/rooms')
    };

    return (
        <div id='page-auth'>
            <aside>
                <img src={IllustrationImage} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={LogoImage} alt="Letmeask logo" />
                    <button className='create-room' onClick={handleCreateRoom}>
                        <img src={GoogleIcon} alt="Google logo"/>
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form action="">
                        <input type="text" name="codigo" id="codigo" placeholder="Digite o código da sala"/>
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}