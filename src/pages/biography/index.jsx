import RootLayout from "@/layout/RootLayout";

const Biography = () => {
  return (
    <div className=" max-w-[1400px] h-[780px]  w-full m-auto py-16 my-10">
      <div className="lg:flex gap-10">
        <div className="p-4 shadow-xl border-1 border-grey-700 bg-slate-100 mx-4 rounded-md">
          <figure className="w-[400px] h-[460px] border-2 border-base-100 shadow-lg ">
            <img
              className="w-full h-full"
              src="https://1.bp.blogspot.com/-278CZqpmPZI/UgnNpnZKatI/AAAAAAAAEQ8/XzQ6zMY62gc/s1600/portraits-of-the-homeless-lee-jeffries_13.jpg"
              alt="Album"
            />
          </figure>
          <h2 className="text-base-100 uppercase text-end tracking-wide">
            SHubhro Sinha
          </h2>
        </div>

        <div className="bg-slate-100 w-full p-6 rounded-md shadow-xl">
          <h1 className="text-3xl text-base-100 font-bold tracking-wide uppercase">
            Photos from around the globe:
            <br /> My photography diary
          </h1>
          <br />
          <br />

          <p className="text-xl text-base-100 font-mono">
            - Documenting my life and the things I love to see
          </p>
          <div className=" ">
            <p className="text-xl text-base-100 p-6 text-start">
              {" "}
              When disorder becomes the perfect order, chaos turns into harmony
              and the emergence of a new era subjugates the laymen to get
              immersed into something which they do not really approve but have
              to conform. We the people have been enslaved by bunch of
              aristocrates who leech out the blood from us by keeping us
              subliminal with ostentation and flamboyance while keeping the
              truth beyond our comprehension since we are so much into the maze
              of lust,
            </p>
          </div>
          <br />
          <div className=" ">
            <button className="btn btn-default bg-slate-100 text-base-100">
              Listen
            </button>
            <div className="flex gap-4 text-base-100">
              <p>a</p>
              <p>b</p>
              <p>c</p>
              <p>d</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;

Biography.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
