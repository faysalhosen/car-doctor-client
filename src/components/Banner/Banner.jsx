import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="max-w-5xl mx-auto my-7">
      <div className="carousel  h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"></div>
          <div className="absolute top-32 left-10 w-9/12 sm:w-11/12 md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-slate-100">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4 flex flex-row">
              <button className="btn bg-[#FF3811] border-none text-white hover:text-black">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>

          <img src={img1} className="w-full object-cover h-full" />
          <div className="absolute flex  justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a
              href="#slide6"
              className="btn btn-circle border-none bg-gray-200/50 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle border-none bg-gray-200/50 hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"></div>
          <div className="absolute top-32 left-10 w-9/12 sm:w-11/12 md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-slate-100">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4 flex flex-row">
              <button className="btn bg-[#FF3811] border-none text-white hover:text-black">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>

          <img src={img2} className="w-full object-cover h-full" />
          <div className="absolute flex  justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a
              href="#slide1"
              className="btn btn-circle border-none bg-gray-200/50 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle border-none bg-gray-200/50 hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"></div>
          <div className="absolute top-32 left-10 w-9/12 sm:w-11/12 md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-slate-100">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4 flex flex-row">
              <button className="btn bg-[#FF3811] border-none text-white hover:text-black">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>

          <img src={img3} className="w-full object-cover h-full" />
          <div className="absolute flex  justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a
              href="#slide2"
              className="btn btn-circle border-none bg-gray-200/50 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle border-none bg-gray-200/50 hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"></div>
          <div className="absolute top-32 left-10 w-9/12 sm:w-11/12 md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-slate-100">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4 flex flex-row">
              <button className="btn bg-[#FF3811] border-none text-white hover:text-black">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>

          <img src={img4} className="w-full object-cover h-full" />
          <div className="absolute flex  justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a
              href="#slide3"
              className="btn btn-circle border-none bg-gray-200/50 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle border-none bg-gray-200/50 hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"></div>
          <div className="absolute top-32 left-10 w-9/12 sm:w-11/12 md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-slate-100">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4 flex flex-row">
              <button className="btn bg-[#FF3811] border-none text-white hover:text-black">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>

          <img src={img5} className="w-full object-cover h-full" />
          <div className="absolute flex  justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a
              href="#slide4"
              className="btn btn-circle border-none bg-gray-200/50 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle border-none bg-gray-200/50 hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <div className="absolute h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"></div>
          <div className="absolute top-32 left-10 w-9/12 sm:w-11/12 md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-slate-100">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4 flex flex-row">
              <button className="btn bg-[#FF3811] border-none text-white hover:text-black">
                Discover More
              </button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>

          <img src={img6} className="w-full object-cover h-full" />
          <div className="absolute flex  justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a
              href="#slide5"
              className="btn btn-circle border-none bg-gray-200/50 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle border-none bg-gray-200/50 hover:bg-[#FF3811]"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;