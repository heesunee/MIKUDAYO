import CriteriaBox from "./criteria-box";
import Image from "next/image";
import ClassificationBox from "./classification-box";

interface HowToPlayProps {
  onConfirm?: () => void;
}

export default function HowToPlay({ onConfirm }: HowToPlayProps) {
  return (
    <div className="w-full">
      {/* 메인 콘텐츠 영역 */}
      <div
        className="relative w-full flex flex-col items-center px-18 pt-38 pb-10"
        style={{
          borderRadius: "60px 60px 0 0",
          borderTop: "10px solid var(--purple-900)",
          borderRight: "10px solid var(--purple-900)",
          borderLeft: "10px solid var(--purple-900)",
          background:
            "linear-gradient(-32deg, #F8FDFF 0%, #FFF 50%, #ECFCFB 100%)",
        }}
      >
        {/* 노치 */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-112 h-24 bg-[var(--purple-900)] rounded-b-[20px]" />

        {/* 타이틀 */}
        <div className="bg-[var(--purple-900)] h-35 py-2 px-6">
          <p className="text-20-b">
            <span className="text-[var(--pink-400)]">게</span>
            <span className="text-[var(--gray-20)]">임 방법</span>
          </p>
        </div>

        {/* 설명 */}
        <p className="mt-20 text-16-m text-[var(--purple-900)] text-center">
          오늘의 프로젝트 세카이 수록곡을
          <br />
          6번의 기회 안에 맞혀 보세요!
        </p>

        {/* 판정 기준 */}
        <div className="mt-20 w-full">
          <CriteriaBox />
        </div>

        {/* 분류 기준 */}
        <div className="mt-12 w-full">
          <ClassificationBox />
        </div>

        {/* 확인 버튼 */}
        <button
          onClick={onConfirm}
          className="mt-20 w-full h-54 bg-[var(--mint-400)] rounded-full text-16-b text-[var(--purple-900)] cursor-pointer"
        >
          확인했어요
        </button>

        {/* 푸터 */}
        <div className="mt-20 flex items-center gap-6">
          <Image src="/icons/ic_x.svg" alt="x" width={18} height={18} />
          <span className="text-12-r text-[var(--purple-200)]">
            @prsk_ordle
          </span>
        </div>
      </div>
    </div>
  );
}
