import { useState, useEffect } from "react";

function formatKoreanTime(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours < 12 ? "오전" : "오후";
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;
  const displayMinute = String(minutes).padStart(2, "0");
  return `${ampm} ${displayHour}시 ${displayMinute}분`;
}

export default function useKoreanTime() {
  const [time, setTime] = useState(() => formatKoreanTime(new Date()));

  useEffect(() => {
    const tick = () => setTime(formatKoreanTime(new Date()));
    // 다음 분 시작까지 대기 후 1분마다 갱신
    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    let interval;
    const timeout = setTimeout(() => {
      tick();
      interval = setInterval(tick, 60000);
    }, msUntilNextMinute);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return time;
}
