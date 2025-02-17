import module from './App.module.css'
import {useState} from "react";

export default function App() {


    const [type, setType] = useState('');
    const [user, setUser] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleSendrequest = async () => {
        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user, type, title }),
            });
            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setMessage(error.message);
        }
    }

    return (
    <>
        <div className={module.container}>
            <h1 className={module.title}>Ple<span className={module.titleX}>X</span>iglass</h1>
            <h3 className={module.madeby}>Made by <a href="https://github.com/Anatoleee">Anatolee</a></h3>
            <div className={module.wrapper}>
                <div className={module.content}>
                    <div className={module.card}>
                        <h1 className={module.cardtitle}>Demande d'ajout de contenu :</h1>
                        <h2 className={module.user}>Utilisateur :</h2>
                        <select className={module.select} value={user} onChange={(e) => setUser(e.target.value)}>
                            <option value="default">Choisir un utilisateur</option>
                            <option value="Gaëtane">Gaëtane</option>
                            <option value="Isabelle & Jean">Isabelle & Jean</option>
                        </select>
                        <h2 className={module.user}>Type de contenu :</h2>
                        <select className={module.select} value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="default">Type de contenu</option>
                            <option value="film">Film</option>
                            <option value="série">Série</option>
                        </select>
                        <h2 className={module.user}>Titre :</h2>
                        <input className={module.titlecontent} value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder={type === "Filme" ? "Titre du filme" : "Titre de la série"}/>
                        <br />
                        <div className={module.button2wrap}><button className={module.button_submit} onClick={handleSendrequest}>Soumettre</button></div>
                    </div>
                    <div className={module.error}>{message && <p>{message}</p>}</div>
                </div>
            </div>
        </div>
    </>
  )
}