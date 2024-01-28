import portfolioImg01 from "../images/gym.png";
import portfolioImg02 from "../images/sharePicPiv.png";
import portfolioImg03 from "../images/messengerPic.png";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "Sharepic Website",
    description:
      "A full CRUD website deployed on internet in which post having picture can be upload, like, edit and delete.",
    technologies: ["React", "Redux", "Material UI", "OAuth", "JWT", "Passport", "Node", "Express", "MongoDB"],
    siteUrl: [["Live site","https://sharepic-eight.vercel.app"], ["Client","https://github.com/achuara/Sharepic-client.git"], ["Server","https://github.com/achuara/Sharepic-server.git"], ["","https://drive.google.com/file/d/1e9UUz9QNCs4nDVApc1dNkWwuATMrJT8D/view?usp=drive_link"]],
  },
  {
    id: "02",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Messenger Website",
    description:
      "A chatting website deployed on internet available for 24x7 used to chat in real time with others.",
    technologies: ["React", "Socket.IO", "OAuth", "Regex", "JWT","Tailwind css", "Express.js",  "MongoDB"],
    siteUrl: [["Live site","https://indianmessenger.vercel.app"], ["Client","https://github.com/achuara/Messenger-client.git"], ["Server","https://github.com/achuara/Messenger-server.git"], ["","https://drive.google.com/file/d/104f4XyGgRryv9pb-8bw-C3NzXT5_y095/view?usp=drive_link"]],
  },
  {
    id: "03",
    imgUrl: portfolioImg01,
    category: "Ux",
    title: "The GYM Website",
    description:
      "A website used to learn exercise correctly. It helps to train targeted muscles. Uses API to fetch data.",
    technologies: ["React","Hooks","Material UI", "HTML", "Fetch API", "Pagination", "Routing"],
    siteUrl: [["Live website","https://the-gym-kappa.vercel.app"], ["Client","https://github.com/achuara/TheGYM.git"], ["API","https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb"], ["","https://drive.google.com/file/d/1l6HyOfjKLichrWJPuT9ZZ16EkOuX-7Yw/view?usp=drive_link"]],
  },
];

export default portfolios;