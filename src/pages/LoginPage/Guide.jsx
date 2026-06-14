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
  {
    id: 2,
    title: "دوره آموزش مستمری جمع",
    subtitle:
      "قسمت دوم - پیشینه دریافت مستمری همزمان از دو صندوق بیمه اجتماعی",
    presenter: "حسین باقری زرین قبائی",
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/ik3TH/vt/frame",
    aparatUrl: "https://aparat.com/v/ik3TH",
  },
  {
    id: 3,
    title: "دوره آموزش مستمری جمع",
    subtitle:
      "قسمت سوم - نحوه تجمیع سوابق بیمه‌ای و تقسیم‌بندی انواع مستمری بر اساس قانون جدید",
    presenter: "حسین باقری زرین قبائی",
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/1KUcV/vt/frame",
    aparatUrl: "https://www.aparat.com/v/1KUcV",
  },
  {
    id: 4,
    title: "دوره آموزش مستمری جمع",
    subtitle: "قسمت چهارم - تعریف و ویژگی‌های مستمری جمع",
    presenter: "حسین باقری زرین قبائی",
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/yRPxq/vt/frame",
    aparatUrl: "https://www.aparat.com/v/yRPxq",
  },
  {
    id: 5,
    title: "دوره آموزش مستمری جمع",
    subtitle: "قسمت پنجم و ششم - دامنه مشمولین مستمری جمع",
    presenter: "حسین باقری زرین قبائی",
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/5RrMv/vt/frame",
    aparatUrl: "https://aparat.com/v/5RrMv",
  },
  {
    id: 6,
    title: "دوره آموزش مستمری جمع",
    subtitle:
      "قسمت هفتم - شرط تعدد صندوق‌های بازنشستگی در برقراری مستمری جمع",
    presenter: "حسین باقری زرین قبائی",
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/j7oZK/vt/frame",
    aparatUrl: "https://aparat.com/v/j7oZK",
  },
  {
    id: 7,
    title: "دوره آموزش مستمری جمع",
    subtitle:
      "قسمت نهم - شرایط بازماندگان بیمه شده در برقراری مستمری جمع",
    presenter: "حسین باقری زرین قبائی",
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/QRCK0/vt/frame",
    aparatUrl: "https://aparat.com/v/QRCK0",
  },
  {
    id: 8,
    title: "دوره آموزش مستمری جمع",
    subtitle:
      "قسمت دهم - شناسایی آخرین صندوق بازنشستگی در مستمری جمع",
    presenter: "حسین باقری زرین قبائی",
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/Svflc/vt/frame",
    aparatUrl: "https://aparat.com/v/Svflc",
  },
  {
    id: 9,
    title: "دوره آموزش مستمری جمع",
    subtitle: "قسمت یازدهم - نحوه محاسبه مستمری جمع",
    presenter: "حسین باقری زرین قبائی",
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/Svflc/vt/frame",
    aparatUrl: "https://aparat.com/v/Svflc",
  },
  {
    id: 10,
    title: "دوره آموزش مستمری جمع",
    subtitle: "قسمت دوازدهم - بیمه درمان و سایر مزایا و تعهدات جانبی",
    presenter: "حسین باقری زرین قبائی",
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/C94XR/vt/frame",
    aparatUrl: "https://aparat.com/v/C94XR",
  },
  {
    id: 11,
    title: "دوره آموزش مستمری جمع",
    subtitle:
      "قسمت سیزدهم تا شانزدهم - قطع مستمری جمع، مراحل اداری درخواست، سامانه مستمری جمع و نوآوری‌های قانون جدید",
    presenter: "حسین باقری زرین قبائی",
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/v2G0X/vt/frame",
    aparatUrl: "https://aparat.com/v/v2G0X",
  },
  {
    id: 12,
    title: "دوره آموزش مستمری جمع",
    subtitle: "قسمت هفدهم (پایانی) - سوالات متداول",
    presenter: "حسین باقری زرین قبائی",
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/06eVE/vt/frame",
    aparatUrl: "https://aparat.com/v/06eVE",
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
                href="/plans.pdf"
                download
                className="hover:underline"
              >
                طرح ها ولوایح              </a>
            </li>

            <li>
              <a
                href="/protocols.pdf"
                download
                className="hover:underline"
              >
                آیین نامه
              </a>
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
                  className="w-full h-[700px] rounded-xl border"
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