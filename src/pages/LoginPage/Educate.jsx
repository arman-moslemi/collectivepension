import React from "react";

const videos = [
  {
    id: 1,
    title: "دوره آموزش مستمری جمع",
    subtitle: "قسمت اول - کلیات",
    presenter: "حسین باقری زرین قبائی",
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/ArgNF/vt/frame",
    aparatUrl: "https://www.aparat.com/v/ArgNF",
  },


];

export default function TrainingVideosPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 ">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-900">
            ویدئوهای آموزشی مستمری جمع
          </h1>

          <p className="text-gray-600 mt-3">
            مجموعه ویدئوهای آموزشی تهیه شده با همکاری موسسه کار و تامین
            اجتماعی
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md mb-10 p-8 mt-5">
          <h2 className="text-xl font-bold text-blue-900 mb-4">
            فایل‌های آموزشی
          </h2>

          <ul className="list-disc pr-6 space-y-3 text-blue-700">
            <li>
              <a
                href="/userGuide.pdf"
                download
                className="hover:underline"
              >
                راهنمای استفاده از سامانه برای متقاضی</a>
            </li>

            <li>
              <a
                href="/ExpertGuide.pdf"
                download
                className="hover:underline"
              >
                راهنمای استفاده از سامانه برای کارشناس و ادمین صندوق              </a>
            </li>

          </ul>
        </div>
        {/* Videos */}
        <div className="grid gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold text-blue-800 mb-2">
                  ✅ {video.title}
                </h2>

                <p className="text-gray-700 mb-4">
                  ({video.subtitle})
                </p>

                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <span className="font-semibold">ارائه:</span>{" "}
                    {video.presenter}
                  </p>

                  <p>
                    <span className="font-semibold">همکاری:</span>{" "}
                    موسسه کار و تامین اجتماعی
                  </p>
                </div>
              </div>

              <div className="p-4">
                <iframe
                  title={video.title}
                  src={video.embedUrl}
                  allowFullScreen
                  className="w-full h-[500px] rounded-xl border"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Download Section */}

      </div>
    </div>
  );
}