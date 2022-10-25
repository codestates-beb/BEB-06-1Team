import React from 'react';

const TrafficLight = (text) => {
  const light = '';

  if (text.length === 0) {
    light =
      '/home/seominseok/바탕화면/project/opensea-clone/BEB-06-1Team/Client/src/images/redLight.png';
  } else {
    light =
      '/home/seominseok/바탕화면/project/opensea-clone/BEB-06-1Team/Client/src/images/greenLight.png';
  }

  return (
    <div className="Traffic Light">
      <img src={light} width="30" height="30" alt="images" />
    </div>
  );
};

export default TrafficLight;
