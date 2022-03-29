import Image from "next/image";

function ServiceCard({ title, info, price, img }) {
  return (
    <div
      className={`relative rounded-sm overflow-hidden h-full flex justify-center items-center text-center px-5 py-3 `}
    >
      <div>
        {img ? (
          <Image
            className="-z-10 brightness-[35%]"
            src={img}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        ) : (
          <p>no image available</p>
        )}
      </div>

      <div>
        <h2 className="mb-2">{title}</h2>
        <p className="mb-8 lg:text-xl">{info}</p>
        <p className=" mb-2">${price}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
