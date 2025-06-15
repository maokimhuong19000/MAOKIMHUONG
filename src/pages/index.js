import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
export async function getStaticProps() {
  return { props: {} };
}
export default function Home() {
  
  return (
    <div>
     
      <Navbar />
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Image
          src="/profile.jpeg"
          alt="Mao Kim Huong"
          width={180}
          height={180}
          className="profile-img"
        />
        <h1>MAO KIM HUONG</h1>
        <div style={{ gap: '1rem', marginBottom: '1rem' ,textAlign:'justify'}}>
        <p>
          Passionate full-stack web developer with a love for building modern,
          user-friendly web applications.
       
            I'm a passionate full-stack developer based in Phnom Penh, Cambodia, with expertise in building
            scalable, maintainable, and user-friendly web and mobile applications. I love working across the
            entire stack — from designing beautiful frontends with React and Next.js to crafting robust backend
            APIs using Node.js, PHP (Laravel), and databases like MySQL and SQL Server.
         
            With a Bachelor’s Degree in Management Information Systems from SETEC Institute, I have a strong
            foundation in both technology and business, allowing me to understand client requirements and
            deliver solutions that truly add value.
          
            I’m also experienced in mobile development using Flutter, and familiar with containerization
            tools like Docker, along with DevOps practices to help projects run smoothly in production.
        
            Beyond coding, I enjoy contributing to open-source projects, exploring UI/UX design tools like Figma
            and Adobe XD, and constantly learning new technologies to stay ahead in the ever-evolving tech
            landscape.
          
            If you’re interested in collaborating, building innovative solutions, or just want to connect, feel
            free to reach out!
          </p>
          </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
