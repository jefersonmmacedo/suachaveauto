import "./signUpClient.css";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";
import { FiUpload } from 'react-icons/fi';

export function SignUpClient() {
    const [data, setData] = useState("1");
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const profile = "https://firebasestorage.googleapis.com/v0/b/foursome4-b925c.appspot.com/o/avatar.png?alt=media&token=f3b1f0bc-3885-4296-8363-ec1c3d43e240"


    function handleFile(e) {
        // console.log(e.target.files[0])
        if(e.target.files[0]){
            const image = e.target.files[0];
            if(image.type === 'image/jpeg' || image.type === 'image/jpg' || image.type === 'image/png') {
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]));
                console.log(avatarUrl);
             } else {
                 console.log('Tipo dearquivo não aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
                 setImageAvatar(null);
                 return null;
             }
         }
     }

    function handleSelectStepe(number) {
        setData(number)
    }
    return (
        <div className="SignUpClient">
            <div className="login">
                <form action="">
                <img src={Logo} alt="Logo GPS Buscador" />
                    <div className="data">
                        {data === "1" ?
                        <>
                        <input type="text" placeholder="Nome completo" />
                        <input type="email" placeholder="E-mail" />
                        <input type="text" placeholder="Telefone" />
                        <input type="text" placeholder="Whatsapp" />
                        <input type="password" placeholder="Senha" />
                        <input type="password" placeholder="Confirmar senha" />
                        <button className="btn" onClick={() => handleSelectStepe("2")}>Avançar</button>
                        </>
                        : data === "2" ?
                         <>
                        <label className="label-avatar">
                            <span><FiUpload color="#f65" size={25} /></span>
                            <input type="file" accept="image/*" onChange={handleFile} required/><br />
                            <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={100} width={100}/>
                        </label>

                         <input type="text" placeholder="CEP" />
                         <input type="text" placeholder="Bairro" />
                         <input type="text" placeholder="Cidade" />
                         <input type="text" placeholder="UF" />
                         {/* <button >Avançar</button>
                         <button >Voltar</button> */}
                        <button className="btn" onClick={() => handleSelectStepe("1")}>Voltar</button>
                        <button onClick={() => handleSelectStepe("2")}>Cadastrar</button>
                         </>
                         :""}
                        {/* <div className="links">
                            <p>Recuperar senha</p>
                        </div>
                        <button onClick={() => handleSelectStepe()}>Cadastrar</button> */}
                    </div>
                </form>

            </div>
            <div className="Client">
                <div className="block">
                </div>
            </div>
        </div>
    )
}