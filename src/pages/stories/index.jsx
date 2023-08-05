import RootLayout from "@/layout/RootLayout";

const Stories = () => {
  return (
    <div className="container mx-auto mt-6 text-slate-100">
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
        {/* single card */}
        <div className="p-4">
          <div className="border border-grey-400 overflow-hidden shadow-lg">
            <img
              className="lg:h-64 md:h-48 w-full object-cover object-center"
              src="https://picsum.photos/id/188/720/400"
              alt="blog"
            />
            <div className="p-2 hover:bg-base-100 hover:text-slate-100 transition duration-300 ease-in">
              <h2 className=" mb-1">October 29, 2021</h2>
              <h1 className="text-2xl font-semibold mb-3">
                Cities are crowded
              </h1>
              <p className=" mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                modi, expedita quos doloremque autem ipsum itaque incidunt ipsam
                reprehenderit fuga! Dolores quisquam eius cum accusamus?
              </p>
              <hr />
              <div className="flex items-center flex-wrap ">
                <a className=" inline-flex items-center md:mb-2 lg:mb-0">
                  See Full Story
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="border border-grey-400 overflow-hidden shadow-lg">
            <img
              className="lg:h-64 md:h-48 w-full object-cover object-center"
              src="https://picsum.photos/id/188/720/400"
              alt="blog"
            />
            <div className="p-2 hover:bg-base-100 hover:text-slate-100 transition duration-300 ease-in">
              <h2 className=" mb-1">October 29, 2021</h2>
              <h1 className="text-2xl font-semibold mb-3">
                Cities are crowded
              </h1>
              <p className=" mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                modi, expedita quos doloremque autem ipsum itaque incidunt ipsam
                reprehenderit fuga! Dolores quisquam eius cum accusamus?
              </p>
              <hr />
              <div className="flex items-center flex-wrap ">
                <a className=" inline-flex items-center md:mb-2 lg:mb-0">
                  See Full Story
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="border border-grey-400 overflow-hidden shadow-lg">
            <img
              className="lg:h-64 md:h-48 w-full object-cover object-center"
              src="https://picsum.photos/id/188/720/400"
              alt="blog"
            />
            <div className="p-2 hover:bg-base-100 hover:text-slate-100 transition duration-300 ease-in">
              <h2 className=" mb-1">October 29, 2021</h2>
              <h1 className="text-2xl font-semibold mb-3">
                Cities are crowded
              </h1>
              <p className=" mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                modi, expedita quos doloremque autem ipsum itaque incidunt ipsam
                reprehenderit fuga! Dolores quisquam eius cum accusamus?
              </p>
              <hr />
              <div className="flex items-center flex-wrap ">
                <a className=" inline-flex items-center md:mb-2 lg:mb-0">
                  See Full Story
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="border border-grey-400 overflow-hidden shadow-lg">
            <img
              className="lg:h-64 md:h-48 w-full object-cover object-center"
              src="https://picsum.photos/id/188/720/400"
              alt="blog"
            />
            <div className="p-2 hover:bg-base-100 hover:text-slate-100 transition duration-300 ease-in">
              <h2 className=" mb-1">October 29, 2021</h2>
              <h1 className="text-2xl font-semibold mb-3">
                Cities are crowded
              </h1>
              <p className=" mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                modi, expedita quos doloremque autem ipsum itaque incidunt ipsam
                reprehenderit fuga! Dolores quisquam eius cum accusamus?
              </p>
              <hr />
              <div className="flex items-center flex-wrap ">
                <a className=" inline-flex items-center md:mb-2 lg:mb-0">
                  See Full Story
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;

Stories.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
