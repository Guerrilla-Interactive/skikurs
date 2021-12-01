import Container from "../layout/container";
import { EXAMPLE_PATH } from "@lib/constants";
import SnowInvert from "@components/elements/backgrounds/snow-invert";
import logo from "@images/skikurs-oslo-logo.png"
import Image from "next/image";

import facebookIcon from "@images/facebook-icon.svg"
import youtubeIcon from "@images/youtube-icon.svg"
import instagramIcon from "@images/instagram-icon.svg"


export default function Footer() {
  return (
    <section className="relative z-20  text-white section-full bg-[#002683] pt-[20rem]  ">
      <SnowInvert />


      <div className="grid grid-cols-12 section-full-contained">
        <div className="col-start-2 col-end-12 ">
          <div className="grid justify-between grid-flow-col">
            <div className="pb-[15rem] max-w-[35rem] ">
              <div className="w-[13rem] mb-12"><Image src={logo} /></div>
              <p className="text-xl font-bold mb-[1.5rem]">Oslo Skikurs er skikurset i Norge med de aller beste resultatene. Uten tvil. </p>
              <p className="text-xl  mb-[1.5rem]">Med pedagogikk som er tilpasset for alt fra nybegynnere til landslagsløpere, så hjelper vi deg med ditt aller viktigste forbedringpotensiale.</p>
            </div>



            <div className="grid gap-40 lg:grid-cols-2">
              <div>
                <h4 className="mb-12 text-2xl"> Om Skikurs Oslo </h4>
                <div className="grid grid-flow-row gap-8 opacity-70">
                  <div>Om instruktøren</div>
                  <div>Tilbakemeldinger</div>
                  <div>Vanlige spørsmål</div>
                  <div>Teknikkbloggen</div>
                  <div>Kontakt</div>
                </div>
              </div>



              <div>
                <h4 className="mb-12 text-2xl"> Kursoversikt </h4>
                <div className="grid grid-flow-row gap-8 opacity-70">
                  <div>Nybegynner</div>
                  <div>Litt øvet</div>
                  <div>Viderekomne</div>
                  <div>Nettkurs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#001E69] pt-[1rem] pb-[1rem] section-full">
        <div className="grid grid-cols-12 section-full-contained">
          <div className="grid justify-between grid-flow-col col-start-2 col-end-12">
            <div>© 2021 Skikurs Oslo. Website made with 💕 by Guerrilla.</div>
            <div className="grid grid-flow-col gap-12">
              <div><Image src={facebookIcon} /></div>
              <div><Image src={instagramIcon} /></div>
              <div><Image src={youtubeIcon} /></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );

}
