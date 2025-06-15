import Navbar from "@/components/Navbar";
export default function Skill() {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>

        <Navbar/>
        <h1>My Skills</h1>
  
        <h2>Frontend Development</h2>
        <ul>
          <li>HTML, CSS, JavaScript (ES6+)</li>
          <li>React.js, Next.js</li>
          <li>Tailwind CSS, Bootstrap</li>
          <li>Figma, Adobe XD, Sketch</li>
  
        </ul>
  
        <h2>Backend Development</h2>
        <ul>
          <li>PHP (Laravel), Node.js (Express)</li>
          <li>Python (Flask, Django basics)</li>
          <li>Java Spring Boot, .NET Core</li>
          <li>RESTful APIs, Authentication, and Authorization</li>
        </ul>
  
        <h2>Database & DevOps</h2>
        <ul>
          <li>MySQL, PostgreSQL, SQL Server</li>
          <li>Firebase (Auth, Firestore, Realtime DB)</li>
          <li>Docker, Kubernetes (basic understanding)</li>
          <li>Git, GitHub, CI/CD basics</li>
        </ul>
  
        <h2>Mobile Development</h2>
        <ul>
          <li>Flutter (Dart)</li>
          <li>React Native</li>
        </ul>
  
        <h2>Soft Skills</h2>
        <ul>
          <li>Problem-solving and debugging</li>
          <li>Team collaboration & Agile workflow</li>
          <li>Communication and adaptability</li>
        </ul>
      </div>
    );
  }
  