import Image from "next/image";

const History = () => {
  return (
    <section id="history">
      <div className="flex items-center justify-center">
        <Image
          src="/timeline.png"
          alt="Company Timeline"
          width={800}
          height={800}
          className=""
        />
      </div>
    </section>
  );
};

export default History;
