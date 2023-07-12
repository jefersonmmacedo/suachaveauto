import "./newShare.css"
import { IoShareOutline, } from "react-icons/io5";
import { RWebShare } from "react-web-share";


export function NewShare({idAuto, title, image}) {
    return (
        <>
      <RWebShare
        data={{
          text: `${title}`,
          image: `${image}`,
          url: `https://www.suachaveauto.com.br/auto/${idAuto}`,
          title: `${title}`,
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button className="buttonShare" ><IoShareOutline /> Compartilhar</button>
      </RWebShare>

        </>
    )
}
