import "./About.css";

export default function About() {
  return (
    <div className='a'>
         <div className="a-left">
             <div className="a-card bg"></div>
             <div className="a-card">
                 <img className="a-card-img" src="https://www.vandelaydesign.com/wp-content/uploads/types-of-photography.jpg" alt="" />
             </div>
         </div>
         <div className="a-right">
             <h1 className="a-title">About Me</h1>
             <p className="a-sub">I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!</p>
             <p className="a-desc">
                 I am a creative designer and developer, who aims to work with small businesses and marginalized communities to bring their passions to life. I offer both design and development services of web applications or websites!
             </p>
             <div className="a-award">
                <img src="https://media.istockphoto.com/vectors/vector-flat-golden-trophy-vector-id1176397624?k=20&m=1176397624&s=612x612&w=0&h=yICH7de39SwB1sDP4-kBHFS8bJz4srdu_HOrBC9KvzY=" alt="" />
                <div className="a-award-text">
                   <h3>SIH-2020 Finalist</h3>
                   <p>Finalist Smart India Hackathon 2020 Software Edition</p>
                </div>
             </div>
         </div>
    </div>
  )
}
