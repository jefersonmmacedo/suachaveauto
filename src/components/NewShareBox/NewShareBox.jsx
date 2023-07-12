import "./newShareBox.css"
import { IoShareOutline, } from "react-icons/io5";
import { RWebShare } from "react-web-share";
import { FiShare2 } from "react-icons/fi";


export function NewShareBox({idAuto, title,image}) {
    return (
      <div className="buttonShareBox">
      <RWebShare
        data={{
          text: `${title}`,
          img: `${image}`,
          url: `https://www.suachaveauto.com.br/auto/${idAuto}`,
          title: `${title}`,
        }}
        onClick={() => console.log("shared successfully!")}
      >
       <FiShare2 />
      </RWebShare>
      </div>

    )
}
