import React from "react";

const demos = {
  soundcloud: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15607.923593696854!2d-77.02901028472628!3d-12.044835125691218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1592519544769!5m2!1ses-419!2spe" width="835" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
  plotly: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15607.923593696854!2d-77.02901028472628!3d-12.044835125691218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1592519544769!5m2!1ses-419!2spe" width="835" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
};

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

export default function App() {
  return (
    <div className="App">
      <Iframe iframe={demos["soundcloud"]} allow="autoplay" />,
    </div>
  );
}
