import Image from "next/image";

function ServiceCard({ title, info, price, img }) {
  return (
    <div
      className={`relative rounded-sm overflow-hidden h-full flex flex-col justify-center items-center text-center px-5 py-3 ${
        !img && "bg-custom-black"
      }`}
    >
      {img && (
        <Image
          className="-z-10 brightness-[35%]"
          src={img}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      )}

      <h2 className="mb-2">{title}</h2>
      <p className="mb-8 lg:text-xl">{info}</p>
      <p className=" mb-2">${price}</p>
    </div>
  );
}

export default ServiceCard;
