import imgLogo from "@/assets/logo-rainbow.jpg";
import Image from "next/image";
import { HeaderComponent } from "./HeaderComponent";

export const Header = () => {
  return (
    <HeaderComponent>
      <Image
        src={imgLogo.src}
        alt="Imagem logo Rainbow Piercing"
        width={60}
        height={60}
      />
      <nav>
        <a href="#inicio">Início</a>
        <a href="#qualidades">Qualidades</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#aplicacoes">Aplicações</a>
        <a href="#feedbacks">Feedbacks</a>
      </nav>
    </HeaderComponent>
  );
};
