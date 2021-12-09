import ButtonStory from "./ButtonStory";

interface StoryItemProps{
    title1: string,
    title2: string,
    desc1: string,
    desc2: string,
    desc3: string,
}

export default function StoryItem(props:StoryItemProps) {
    const {title1,title2,desc1,desc2,desc3} = props;
  return (
    <div className="col-lg-5 col-12 ps-lg-60">
      <div className="">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          {title1}
          <br /> {title2}
        </h2>
        <p className="text-lg color-palette-1 mb-30">
          {desc1}
          <br className="d-sm-block d-none" />
          {desc2}
          <br className="d-sm-block d-none" /> {desc3}
        </p>
        <div className="d-md-block d-flex flex-column w-100">
          <ButtonStory />
        </div>
      </div>
    </div>
  );
}
