import { RiInformationLine } from "react-icons/ri";

export default function Widgets() {
  const newsItems = (title, desc) => (
    <div className="flex flex-col p-2 space-y-1 rounded-md cursor-pointer hover:bg-main">
      <h2 className="text-xs text-green-300 font-md">{title}</h2>
      <p className="text-xs text-gray-400">{desc}</p>
    </div>
  );

  return (
    <div className="w-1/5 p-2 rounded-lg bg-mainLight h-fit">
      <div className="flex items-center justify-between mb-3 text-sm font-medium text-gray-200">
        <h2>LinkedIn News</h2>
        <RiInformationLine />
      </div>
      <div className="space-y-2 ">
        {newsItems("TSLA", "Elon Musk sells 200M worth of TSLA shares...")}
        {newsItems("NIO", "NIO struggles to bring back it's top seller...")}
        {newsItems("APPL", "New Mackbook Pro M1 released last week...")}
        {newsItems("AMZ", "Jeff Bezos drops from CEO to vacation...")}
      </div>
    </div>
  );
}
