import React, {useState,} from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './styles';
import Qr from 'qrcode.react';


//NOSSOS COMPONENTES 
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    async function SaveMac (){
        if(!mac)
        alert('Voce precisa informar o numero q apareceu no celular');
        else{
            await localStorage.setItem('@todo/macaddress' , mac);
            setRedirect(true);
            window.location.reload();
        }
    }
    return (
        <S.Container>
            { redirect && <Redirect to="/"></Redirect>}
            <Header/>

            <S.Content>
                <h1>CAPTURE O QRCODE</h1>
                <p>suas atividades serao sincronizadas com a tela do celular</p>
                <S.QrCodeArea>
                    <Qr value='getmacaddress' size={250}></Qr>
                </S.QrCodeArea>
                <S.ValidationCode>
                    <span>Digite a numeracao que apreceu no seu celular</span>
                    <input type="text" onChange={e => setMac(e.target.value)} value={mac}></input>
                    <button type='button' onClick={SaveMac} >SINCRONIZAR</button>
                </S.ValidationCode>
            </S.Content>
            <Footer></Footer>
        </S.Container>
    )
}

export default QrCode;