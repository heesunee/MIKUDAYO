import Image from "next/image";

export default function CriteriaBox() {
  return (
    <div className="w-full bg-[var(--purple-50)] rounded-[12px] p-12">
      {/* 라벨 */}
      <div className="flex items-center justify-center py-4 px-8 gap-10 bg-[var(--purple-200)] rounded-[8px] w-fit">
        <span className="text-14-m text-[var(--gray-20)]">판정 기준</span>
      </div>

      {/* 아이콘들 */}
      <div className="mt-12 flex items-center justify-between gap-5">
        {/* 정답 */}
        <div className="flex-1 h-62 bg-[var(--mint-400)] rounded-[10px] flex items-center justify-center">
          <Image src="/icons/ic_answer.svg" alt="정답" width={32} height={32} />
        </div>

        {/* UP */}
        <div className="flex-1 h-62 bg-[var(--gray-300)] rounded-[10px] flex flex-col items-center justify-center">
          <span className="text-14-b text-[var(--gray-600)]">LV.36</span>
          <Image
            src="/icons/ic_triangle_up.svg"
            alt="UP"
            width={24}
            height={24}
          />
        </div>

        {/* DOWN */}
        <div className="flex-1 h-62 bg-[var(--gray-300)] rounded-[10px] flex flex-col items-center justify-center">
          <span className="text-14-b text-[var(--gray-600)]">2025년</span>
          <Image
            src="/icons/ic_triangle_down.svg"
            alt="DOWN"
            width={24}
            height={24}
          />
        </div>

        {/* 불일치 */}
        <div className="flex-1 h-62 bg-[var(--gray-300)] rounded-[10px] flex items-center justify-center">
          <span className="text-14-b text-[var(--gray-600)]">DECO*27</span>
        </div>
      </div>

      {/* 라벨들 */}
      <div className="mt-8 flex items-center justify-between text-14-m text-[var(--purple-600)] text-center">
        <span className="flex-1">정답</span>
        <span className="flex-1">UP ▲</span>
        <span className="flex-1">DOWN ▼</span>
        <span className="flex-1">불일치</span>
      </div>
    </div>
  );
}
