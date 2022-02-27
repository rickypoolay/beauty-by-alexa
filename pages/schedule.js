import LeftLine from "../components/LeftLine";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";

function Schedule() {
  return (
    <div>
      <Navbar />
      <main>
        <LeftLine />
        <section>
          <PageHeader title={"Schedule"} info={"schedule here"} />
        </section>
      </main>
    </div>
  );
}

export default Schedule;
