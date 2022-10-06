import SuggestedItem from "./SuggestedItem";

const SuggestedCol = () => {
  const maya =
    "https://people.com/thmb/B0cgkWneaY7WLP5HPx-gMeh32R0=/1000x1000/smart/filters:no_upscale():focal(959x419:961x421)/Maya-and-the-Wave-Maya-Gabeira-01_090922-dcffcc84169747b5af027e60fd722498.jpg";
  const justine =
    "https://img.olympicchannel.com/images/image/private/t_1-1_1280/primary/calzqtvtaibjr231hu7q";
  const billy =
    "https://i.pinimg.com/originals/c3/39/ed/c339ed3c284bc409f7f885c653332571.png";
  const kai =
    "https://miro.medium.com/freeze/max/1200/1*0RDCV2z4m45cPPc8zfEY3A.gif";
  const garret =
    "https://www.researchgate.net/profile/Pedro-Cunha-11/publication/275522569/figure/fig30/AS:614225676361728@1523454221019/Garrett-McNamara-surfing-in-Praia-do-Norte-at-November-19-th-2014_Q640.jpg";
  const laird =
    "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MTA0MzMwMDk4Nzc5NDA5/lairdhamiltontopperjpg.jpg";

  return (
    <div sticky className="sg-div">
      <h3>Suggested</h3>
      <hr />
      <SuggestedItem image={maya} username={"@mayagabeira"} />
      <SuggestedItem image={justine} username={"@justinedupont"} />
      <SuggestedItem image={billy} username={"@billykemper"} />
      <SuggestedItem image={kai} username={"@kailenny"} />
      <SuggestedItem image={garret} username={"@garretmcnamara"} />
      <SuggestedItem image={laird} username={"@lairdhamilton"} />

      <SuggestedItem image={garret} username={"@garretmcnamara"} />
      <SuggestedItem image={justine} username={"@justinedupont"} />

      <SuggestedItem image={maya} username={"@mayagabeira"} />
      <SuggestedItem image={justine} username={"@justinedupont"} />
      <SuggestedItem image={billy} username={"@billykemper"} />

      <SuggestedItem image={maya} username={"@mayagabeira"} />
      <SuggestedItem image={justine} username={"@justinedupont"} />
      <SuggestedItem image={billy} username={"@billykemper"} />

      <SuggestedItem image={maya} username={"@mayagabeira"} />

      <SuggestedItem image={billy} username={"@billykemper"} />
      <SuggestedItem image={kai} username={"@kailenny"} />
    </div>
  );
};

export default SuggestedCol;
