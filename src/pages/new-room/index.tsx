import { Link } from 'react-router-dom'
import IllustrationImage from '../../assets/images/illustration.svg'
import LogoImage from '../../assets/images/logo.svg'
import { Button } from '../../components/button'
import './styles.css'

export function NewRoom () {
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
                    <h2>Criar uma nova sala</h2>
                    <form action="">
                        <input type="text" name="nome-sala" id="nome-sala" placeholder="Nome da sala"/>
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>Quero entrar em um sala já existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}