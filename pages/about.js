import LeftLine from "../components/LeftLine";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <main>
        <LeftLine />
        <section>
          <h1 className="text-custom-black">About</h1>
        </section>
      </main>
    </div>
  );
}

export default About;
