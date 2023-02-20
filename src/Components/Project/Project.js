import './Project.css'

export function Project() {
    return (
        <div class="container">
  <div class="card">
    <div class="card-header">
      <img src={require('../media/Robofriends.jpg')} alt="robo" />
    </div>
    <div class="card-body">
      <span class="tag tag-teal">React.js</span>
      <h4>
        Robofriends
      </h4>
      <p>
      Website filters users when typing names. This project was made during the ZTM course on becoming a web developer. The library I built the website is React.
      </p>
      <div class="user">
      <a href='https://github.com/AndrewMuraguri/robofriends'><button class="src"><img src={require('../media/icons8-source-code-50.png')} alt='code'/></button></a>
        <button class="live"><img src={require('../media/icons8-website-50.png')} alt='website'></img></button>
        <small>10-12-2022</small>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <img src={require('../media/portfolio.jpg')} alt="port" />
    </div>
    <div class="card-body">
      <span class="tag tag-purple">React.js</span>
      <h4>
        Portfolio
      </h4>
      <p>
      Portfolio demonstrating both the technical and soft skills that I had learnt through the course.
      This project tested both my technical skills in React and problem-solving skill.
      </p>
      <div class="user">
          <a href='https://github.com/AndrewMuraguri/Portfolio'><button class="src"><img src={require('../media/icons8-source-code-50.png')} alt='source'/></button></a>
          <button class="live"><img src={require('../media/icons8-website-50.png')} alt='port'></img></button>
          <small>22-02-2023</small>
      </div>
    </div>
  </div>
  </div>
  
    )
}
