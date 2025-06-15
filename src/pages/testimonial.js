import Navbar from '../components/Navbar';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, Acme Corp',
      feedback:
        'Kim Huong delivered an outstanding web application that boosted our business efficiency tremendously. Highly recommended!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Project Manager, Tech Solutions',
      feedback:
        'Professional, reliable, and extremely skilled. Kim’s expertise in full-stack development helped us meet all our project deadlines.',
    },
    {
      id: 3,
      name: 'Emily Johnson',
      role: 'Product Owner, Innovatech',
      feedback:
        'Creative problem solver and great communicator. Kim Huong’s work exceeded our expectations and improved user experience significantly.',
    },
  ];

  return (
    <div>
      <Navbar />
      <main>
        <h1>Testimonials</h1>
        <p>
          Here are some kind words from clients and colleagues I have worked with:
        </p>
        <ul>
          {testimonials.map(({ id, name, role, feedback }) => (
            <li key={id}>
              <p style={{ fontStyle: 'italic' }}>"{feedback}"</p>
              <p>
                <strong>{name}</strong>, <em>{role}</em>
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
