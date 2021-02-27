import Widecard from "../Common/WideCard";

import WideCard from "../Common/WideCard";

export default function Education() {
  return (
    <div className="contents education">
      <h1>My Education</h1>
      <br />
      <WideCard
        title="Masters in Science"
        description="derby"
        from="2019"
        to="2020"
      />
      <WideCard
        title="Bachelors in Science"
        description="derby"
        from="2010"
        to="2014"
      />
    </div>
  );
}
