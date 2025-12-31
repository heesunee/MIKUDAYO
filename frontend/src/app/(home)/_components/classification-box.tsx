export default function ClassificationBox() {
  return (
    <div className="w-full bg-[var(--purple-50)] rounded-[12px] p-12 flex flex-col gap-8">
      {/* 라벨 */}
      <div className="flex items-center justify-center py-4 px-8 gap-10 bg-[var(--purple-200)] rounded-[8px] w-fit">
        <span className="text-14-m text-[var(--gray-20)]">분류 기준</span>
      </div>

      {/* 리스트 */}
      <ul className="text-14-m text-[var(--purple-600)] list-disc ml-21">
        <li>유닛: 일세카 인앱 기준, 겹칠 시 임의 분배</li>
        <li>
          난이도: <span className="text-[var(--level-master)]">MASTER</span>{" "}
          기준
        </li>
        <li>연도: 곡 자체 발매 연도 기준 (melt-2007)</li>
      </ul>
    </div>
  );
}
