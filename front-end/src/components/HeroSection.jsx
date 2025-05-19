import { FaUpload } from "react-icons/fa";
import womanSmiling from "../assets/woman-smiling.jpg";

export const HeroSection = () => {
  return (
    <section className="bg-blue-50 pt-32 pb-12 md:pt-40 md:pb-16" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sistem Evaluasi CV Otomatis Berbasis AI
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Tingkatkan peluang karir Anda dengan analisis CV berbasis AI.
            Dapatkan skor, rekomendasi perbaikan, dan temukan pekerjaan yang
            cocok untuk kualifikasi Anda.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md flex items-center text-sm">
            Upload CV sekarang
            <FaUpload className="ml-2 w-4 h-4" />
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-md relative">
            <img
              src={womanSmiling}
              alt="woman smiling"
              className="w-full rounder-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
