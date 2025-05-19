export const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Upload",
      description: "Upload CV Anda dalam bentuk format PDF",
    },
    {
      number: 2,
      title: "Analisis AI",
      description: "Model AI kami menganalisis konten, format, dan relevansi",
    },
    {
      number: 3,
      title: "Hasil",
      description: "Dapatkan laporan lengkap dengan saran peningkatan",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-20">Cara Kerja</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 realtive">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

              <p className="text-gray-600 max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
