import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://assets.ajio.com/medias/sys_master/root/20220429/cj2F/626c0fe0f997dd03e28b0cbb/performax_jet_black_logo_print_zip-front_jacket.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://assets.ajio.com/medias/sys_master/root/20220121/nL7q/61ea5784f997dd6623310ea3/rigo_green_typographic_print_crew-neck_sweatshirt.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-100 rounded-lg overflow-hidden">
                          <img
                            src="https://assets.ajio.com/medias/sys_master/root/20211110/G34s/618c02c3f997ddf8f1011c50/campus_sutra_navy_blue_%26_white_typographic_print_hooded_sweatshirt.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://assets.ajio.com/medias/sys_master/root/20210404/zfxt/606b09d47cdb8c1f14a12a7f/-473Wx593H-462239589-maroon-MODEL2.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://assets.ajio.com/medias/sys_master/root/20210714/rZZ0/60ede473aeb269a9e3424b8c/superdry_navy_blue_sports_hooded_zip-front_puffer_jacket.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://assets.ajio.com/medias/sys_master/root/20211006/1wGN/615dba87aeb2692b85b1eac9/-473Wx593H-441128815-darkgrey-MODEL.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://assets.ajio.com/medias/sys_master/root/20220120/DQF1/61e97fe1f997dd66232f1db5/performax_olive_zip-front_jacket_with_insert_pockets.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/products"
                  className="inline-block text-center bg-red-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
