import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TypingTestGame from "../../Assets/Projects/TypingTestGame.png";
import Todolist from "../../Assets/Projects/Todolist.png";
import PostifyApp from "../../Assets/Projects/PostifyApp.png";
import news_Api from "../../Assets/Projects/news_Api.png";
import MemeGenerator from "../../Assets/Projects/MemeGenerator.png";
import ClothingEmporium from "../../Assets/Projects/ClothingEmporium.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news_Api}
              isBlog={false}
              title="NewsApi"
              description="Experience real-time news updates with our MERN stack NewsAPI project. Using MongoDB, Express.js, React, and Node.js, we deliver a seamless browsing experience. Browse categories, search topics, and read detailed articles effortlessly. Stay informed with our intuitive, responsive interface."
              ghLink="https://github.com/Sanjaiprasath68/News_Api"
              demoLink="https://news-articles-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ClothingEmporium}
              isBlog={false}
              title="Clothing_E-Commerce"
              description="Clothing Emporium offers a seamless shopping experience with React, showcasing the latest trends in fashion for style-conscious shoppers."
              ghLink="https://github.com/Sanjaiprasath68/Clothing_E-Commerce"
              demoLink="https://clothing-emporium.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PostifyApp}
              isBlog={false}
              title="Postify"
              description="Streamline your social media presence with our post application. Effortlessly create, schedule, and track posts across all your platforms from one convenient dashboard."
              ghLink="https://github.com/Sanjaiprasath68/postify"
              demoLink="https://postify-media.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TypingTestGame}
              isBlog={false}
              title="TypingTestGame"
              description="Typing-speed game platform, challenging users to improve their typing skills while competing against friends or the clock, fostering a fun and educational experience."
              ghLink="https://github.com/Sanjaiprasath68/Typing-Test-Game-"
              demoLink="https://typingspeed-game.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MemeGenerator}
              isBlog={false}
              title="MemeGenerator"
              description="Dynamic meme-generator platform, allowing users to create and share humorous content effortlessly, enhancing engagement and entertainment online."
              ghLink="https://github.com/Sanjaiprasath68/memegenerator"
              demoLink="https://makes-meme.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todolist}
              isBlog={false}
              title="Todolist"
              description="Creating an engaging and efficient to-do list application with the MERN stack involves orchestrating several key components seamlessly. Begin by crafting a dynamic MongoDB schema to meticulously organize tasks and user data, complemented by Express.js to develop robust RESTful APIs for smooth backend functionality."
              ghLink="https://github.com/Sanjaiprasath68/todolist"
              // demoLink="https://todolist/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
