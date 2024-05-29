import Buttons from "@/components/Button";
import Display from "@/components/Display";
import "../styles/vision.css";
import ButtonDesceriptions from "@/components/ButtonDesceriptions";

export default function Home() {
  return (
    <main className="">
      <div className="my-5 py-3 d-flex flex-column sectionShow">
        {/* Buttons Add Items.................................. */}
        <div className="SectionAdd container mb-3 rounded-2 d-flex flex-column align-items-center">
          <div className="titleAdd mt-1 text-center d-flex align-items-center">
            <h4>Click on the desired button and add your item</h4>
            <ButtonDesceriptions/>
          </div>
          <div className="buttonsAdd">
            <Buttons />
          </div>
        </div>
        {/* A section for displaying Items....................  */}
        <div className="dvision container-fluid bg-body-tertiary border border-2 border-dark-subtle">
          <Display />
        </div>
      </div>
    </main>
  );
}
