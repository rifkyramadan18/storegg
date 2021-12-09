import Image from "next/image";
import StoryItem from "../../molecules/StoryItem";

export default function Story() {
  return (
    <section className="story pt-50 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <div
            className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60"
            data-aos="zoom-in"
          >
            <Image
              src="/img/Header-9.png"
              width={612}
              height={452}
              className="img-fluid"
              alt="Header"
            />
          </div>
          <StoryItem
            title1="Win the battle."
            title2="Be the Champion."
            desc1="Kami menyediakan jutaan cara untuk"
            desc2="membantu players menjadi"
            desc3="pemenang sejati"
          />
        </div>
      </div>
    </section>
  );
}
