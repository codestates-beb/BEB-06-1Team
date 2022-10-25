import React from 'react';

const footerData = [
  {
    name: '김준섭',
    avatar: 'https://avatars.githubusercontent.com/u/81156500?v=4',
    github_id: 'Joonsub Kim',
  },
  {
    name: '서민석',
    avatar: 'https://avatars.githubusercontent.com/u/44859379?v=4',
    github_id: 'taptap-kor',
  },
  {
    name: '임형대',
    avatar: 'https://avatars.githubusercontent.com/u/28784435?v=4',
    github_id: 'ImHyeongDae',
  },
  {
    name: '최진영',
    avatar: 'https://avatars.githubusercontent.com/u/103885896?v=4',
    github_id: 'CDDWNE',
  },
];

const Footer = () => {
  return (
    <div className="row text-center p-3">
      {footerData.map((info, i) => {
        return (
          <div
            className="col-3"
            key={i}
            style={{ cursor: 'pointer' }}
            onClick={() => (window.location.href = `https://github.com/${info.github_id}`)}
          >
            <img src={info.avatar} className="Avatarimg" />
            <h3>{info.name}</h3>
            <p>{info.github_id}</p>
          </div>
        );
      })}
      <h6 className="p-3">Copyright © 2022 CodeStates. All rights reserved.</h6>
    </div>
  );
};

export default Footer;
