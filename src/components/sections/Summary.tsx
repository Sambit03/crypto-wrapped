import { useEffect, useState } from "react";

export default function Summary() {
  const [count, setCount] = useState(0);
  const target = 45;
  const duration = 8;

  useEffect(() => {
    const start = 0;
    const increment = target / duration;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      setCount(Math.floor(current));

      if (current >= target) {
        clearInterval(timer);
        setCount(target);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-8xl font-normal font-tiempos italic  ">
          In
          <span className="font-tickerbit" aria-hidden="true">
            {" "}
            Summary
          </span>
        </h1>
      </div>
      <div className="flex flex-row flex-wrap bg-black justify-center ">
        <div className=" flex flex-col rounded-md text-center p-5 gap-2">
          <div className=" flex bg-green-500 rounded-md justify-center">
            <h1 className="text-4xl font-normal font-tickerbit italic text-black p-2">
              JPEG
            </h1>
          </div>
          <div>
            <h1 className="text-8xl font-normal font-tickerbit italic text-[#7AF274]">
              {count}
            </h1>
          </div>
        </div>
        <div className=" flex flex-col rounded-md text-center p-5 gap-2">
          <div className=" flex bg-green-500 rounded-md justify-center">
            <h1 className="text-4xl font-normal font-tickerbit italic text-black p-2">
              GIF
            </h1>
          </div>
          <div>
            <h1 className="text-8xl font-normal font-tickerbit italic text-[#7AF274]">
              {count}
            </h1>
          </div>
        </div>
        <div className=" flex flex-col rounded-md text-center p-5 gap-2">
          <div className=" flex bg-green-500 rounded-md justify-center">
            <h1 className="text-4xl font-normal font-tickerbit italic text-black p-2">
              AUDIO
            </h1>
          </div>
          <div>
            <h1 className="text-8xl font-normal font-tickerbit italic text-[#7AF274]">
              ?
            </h1>
          </div>
        </div>
        <div className=" flex flex-col rounded-md text-center p-5 gap-2">
          <div className=" flex bg-green-500 rounded-md justify-center">
            <h1 className="text-4xl font-normal font-tickerbit italic text-black p-2">
              VIDEO
            </h1>
          </div>
          <div>
            <h1 className="text-8xl font-normal font-tickerbit italic text-[#7AF274]">
              {count}
            </h1>
          </div>
        </div>
        <div className=" flex flex-col rounded-md text-center p-5 gap-2">
          <div className=" flex bg-green-500 rounded-md justify-center">
            <h1 className="text-4xl font-normal font-tickerbit italic text-black p-2">
              PDF
            </h1>
          </div>
          <div>
            <h1 className="text-8xl font-normal font-tickerbit italic text-[#7AF274]">
              {count}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
