function PageHeader({ title, info }) {
  return (
    <div className="relative py-5 border-b border-custom-black pb-4">
      {/* <Image
    className="-z-10 brightness-[35%]"
    src={
      "https://images.unsplash.com/photo-1600634999623-864991678406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    }
    layout="fill"
    objectFit="cover"
    alt=""
  /> */}

      <div className="text-custom-black">
        <h1 className="">{title}</h1>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default PageHeader;
