import { FaSearch, FaCheckCircle, FaChartBar } from "react-icons/fa";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <FaSearch className="h-6 w-6 text-blue-600" />,
      title: "Skoring CV",
      description:
        "Dapatkan skor komprehensif berdasarkan struktur,konten, dan kesesuaian CV Anda dengan standar industri",
    },
    {
      icon: <FaCheckCircle className="h-6 w-6 text-blue-600" />,
      title: "Rekomendasi Pekerjaan",
      description:
        "AI kami akan menyarankan posisi pekerjaan yang paling sesuai dengan keterampilan dan pengalaman Anda.",
    },
    {
      icon: <FaChartBar className="h-6 w-6 text-blue-600" />,
      title: "Analisis Kecocokan",
      description:
        "Ukur tingkat kecocokan CV Anda dengan deskripsi pekerjaan tertentu dan terima saran untuk peningkatan.",
    },
  ];

  return (
    <section className="py-12 md:py-16" id="fitur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Fitur Unggulan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className=" text-lg font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
