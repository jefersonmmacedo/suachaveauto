import NavbarAdm from "../../../components/Adm/Nav/Navbar";
import { ToolBar } from "../../../components/Adm/ToolBar/ToolBar";
import "./webApp.css";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";

export function WebApp() {
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

    return (
        <div className="WebApp">
            <NavbarAdm />
            <ToolBar />
            <div className="aside">
                <h3>Meu site e aplicativo</h3>
            <div className="informations">
            <form action="">
                <label className="label-avatar">
                        <span><FiUpload color="#f65" size={25} /></span>
                        <input type="file" accept="image/*" onChange={handleFile} required/><br />
                        <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={100} width={100}/>
                    </label>

                    <div className="dataInputs">               
                    <input type="text" placeholder="Título" />
                    <input type="text" placeholder="Descrição" />
                    <input type="text" placeholder="Código cor 1 (Hexadecimal/RGB)" />
                    <input type="text" placeholder="Código cor 2 (Hexadecimal/RGB)" />
                    </div>

                    <button>Atualizar Dados</button>

                </form>
            </div>
            </div>
        </div>
    )
}