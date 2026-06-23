import React from "react";
// import Header from "../../layoutes/Header";

const Faq = () => {
  const faqs = [
    {
      q: "۱- نحوه ثبت نام در سامانه مستمری جمع به چه صورت می باشد؟",
      a: "وارد سامانه به نشانی mostameri.mcls.gov.ir شده سپس در قسمت ثبت نام  با کدملی  و تاریخ تولد و شماره تلفن همراه ثبت نام انجام شود.",
    },
 
  ];

  return (
    <>
      {/* <Header /> */}

      <div
        dir="rtl"
        className="relative min-h-screen bg-slate-100 overflow-hidden"
      >
        {/* Background Circles */}
        <img
        //   src={require("../../../assets/img/circle1.png")}
          alt=""
          className="absolute top-0 left-0 w-72 opacity-20"
        />

        <img
        //   src={require("../../../assets/img/circle2.png")}
          alt=""
          className="absolute bottom-0 right-0 w-72 opacity-20"
        />

        <div className="container mx-auto px-4 py-10 relative z-10">
          {/* Main Box */}
          <div className="bg-white rounded-3xl shadow-lg max-w-5xl mx-auto">
            <div className="p-8">
              <h1 className="text-2xl font-bold text-slate-800 mb-8">
                سوالات متداول
              </h1>

              <div className="space-y-4">
                {faqs.map((item, index) => (
                  <details
                    key={index}
                    className="border border-slate-200 rounded-xl overflow-hidden group"
                  >
                    <summary className="flex items-center justify-between cursor-pointer px-5 py-4 bg-gray-50 hover:bg-gray-100 font-semibold text-slate-700">
                      <span>{item.q}</span>

                      <svg
                        className="w-5 h-5 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>

                    <div className="p-5 text-slate-600 leading-8 bg-white">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-slate-600 text-sm">
            <p>
              کلیه حقوق مادی و معنوی این سامانه متعلق به وزارت تعاون، کار و
              رفاه اجتماعی است
            </p>

            <p className="mt-2 text-xs">
              توسعه یافته توسط مرکز فناوری اطلاعات و امنیت فضای مجازی
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;