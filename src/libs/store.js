import { writable } from "svelte/store";

const finishedPromise = new Promise((resolve) => resolve(""));

export const nowPromise = writable(finishedPromise);
export const popularPromise = writable(finishedPromise);
export const upcomingPromise = writable(finishedPromise);
export const topPromise = writable(finishedPromise);

export const banners = writable([
    { id: 1, title: "메인 사진 1", poster_path: "/img/hoho.jpg" },
    { id: 2, title: "메인 사진 2", poster_path: "/img/hoho2.jpg" },
    { id: 3, title: "메인 사진 3", poster_path: "/img/hoho3.jpg" },
    { id: 4, title: "메인 사진 4", poster_path: "/img/hoho4.jpg" },
    { id: 5, title: "새 메인 사진 5", poster_path: "/img/hoho5.jpg" },
    { id: 6, title: "새 메인 사진 6", poster_path: "/img/hoho6.jpg" }
]);

export const nows = writable([
    { id: 1, title: "KJSFF", poster_path: "/img/rere.jpg", vote_average: 9.6, release_date: "2024-12-25" },
    { id: 2, title: "한일축제한마당", poster_path: "/img/rere.jpg", vote_average: 8.5, release_date: "2024-11-20" },
    { id: 3, title: "용인문화재단", poster_path: "/img/rere.jpg", vote_average: 7.2, release_date: "2024-10-05" },
    { id: 4, title: "서포터즈", poster_path: "/img/rere.jpg", vote_average: 8.9, release_date: "2024-09-15" },
]);

export const populars = writable([
    { id: 1, title: "동아리&학회 활동", poster_path: "/img/rere.jpg", vote_average: 9.5, release_date: "2024-05-01" },
    { id: 2, title: "CTL 학생 자문단 ", poster_path: "/img/rere.jpg", vote_average: 9.5, release_date: "2024-05-01" },
    { id: 3, title: "학생봉사단", poster_path: "/img/rere.jpg", vote_average: 9.0, release_date: "2024-06-15" },
]);

export const upcomings = writable([
    { id: 1, title: "언어교류", poster_path: "/img/rere.jpg", vote_average: 8.8, release_date: "2024-09-01" },
    { id: 2, title: "포트폴리오1", poster_path: "/img/rere.jpg", vote_average: 9.2, release_date: "2024-10-10" },
    { id: 3, title: "포트폴리오2", poster_path: "/img/rere.jpg", vote_average: 9.2, release_date: "2024-10-10" },
    { id: 4, title: "포트폴리오3", poster_path: "/img/rere.jpg", vote_average: 9.2, release_date: "2024-10-10" },
    { id: 5, title: "포트폴리오4", poster_path: "/img/rere.jpg", vote_average: 9.2, release_date: "2024-10-10" },
    { id: 6, title: "포트폴리오5", poster_path: "/img/rere.jpg", vote_average: 9.2, release_date: "2024-10-10" },
    { id: 7, title: "포트폴리오6", poster_path: "/img/rere.jpg", vote_average: 9.2, release_date: "2024-10-10" },
]);

export const timeline = writable([
    { icon: "mdi:school", title: "학교명", date: "2021 ~", desc: "전공 및 학위\n도시계획부동산학부" },
    { icon: "mdi:certificate", title: "자격증", date: "2026", desc: "도시계획기사\nERP 정보관리사\n투자자산운용사\nCAD" },
    { icon: "mdi:briefcase", title: "연말목표", date: "2026", desc: "자격증 취득\n입지 분석 능력 기르기\n포트폴리오 정리\n졸업 준비\n현장 경험 늘리기" }
]);

export const skills = writable([
    { name: "language skills", level: 90, icon: "mdi:translate" },
    { name: "cooperation", level: 95, icon: "mdi:account-group" },
    { name: "analytical ability", level: 95, icon: "mdi:chart-line" },
    { name: "Office Programs", level: 95, icon: "mdi:microsoft-office" },
    { name: "Technical Drawing", level: 90, icon: "mdi:ruler-square" },
    { name: "programming language", level: 80, icon: "mdi:code-tags" }
]);