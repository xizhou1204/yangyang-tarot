const currency = document.body.dataset.currency || "rmb";

const price = (rmb, myr) => (currency === "rmb" ? rmb : myr);

const services = [
  {
    id: "tarot",
    title: "塔罗占卜",
    subtitle: "适合看清事件走向、关系状态与行动建议",
    icon: "cards",
    detail: "塔罗擅长呈现问题里的情绪、动力、阻碍与选择。适合感情、事业、学业、友情、运势、桃花与寻人寻物等主题。",
    rows: [
      { name: "单牌", note: "是／否、核心提示或其他牌阵补牌", price: price("¥10", "RM6") },
      { name: "四张牌阵", note: "现状、关键、建议与发展方向", price: price("¥35", "RM20") },
      { name: "六芒星或更大牌阵", note: "复杂问题与多层面深度分析", price: price("¥68–¥300", "预约时确认") },
    ],
  },
  {
    id: "lenormand",
    title: "雷诺曼占卜",
    subtitle: "直接、具体，适合日常问题和清晰事件线",
    icon: "clover",
    detail: "雷诺曼偏向现实事件与具体信息，适合关系现状、工作发展、行动结果、时间线与生活中的明确问题。",
    rows: [
      { name: "单牌指引", note: "当天能量、核心提示或补牌", price: price("¥10", "RM6") },
      { name: "四张牌阵", note: "问题关键、阻碍、建议与结果", price: price("¥35", "RM20") },
      { name: "九宫格或其他牌阵", note: "全方位分析与复杂事件梳理", price: price("¥68–¥300", "预约时确认") },
    ],
  },
  {
    id: "pendulum",
    title: "灵摆调频",
    subtitle: "梳理当下卡点、情绪波动与能量状态",
    icon: "pendulum",
    detail: "灵摆调频用于关系、状态、学业、事业与日常主题的阶段性梳理。可选吃苹果、桃花片、情绪、健康状态、小人祸、第三方、事业运、红鸾劫、考状元与财运滚滚等主题。",
    rows: [
      { name: "单项快速调频", note: "一个核心状态或单项能量校准", price: price("¥10", "RM6") },
      { name: "双项平衡／三维状态", note: "两至三个能量面向同步梳理", price: price("¥18–¥26", "RM10–RM15") },
      { name: "四项主题调频", note: "围绕关系、事业、睡眠、财运等主题", price: price("¥35", "RM21") },
      { name: "深度综合调频", note: "复杂卡顿、长期失衡与深度梳理", price: price("¥42–¥98", "RM26–RM60") },
    ],
  },
];

const icons = {
  cards: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="13" y="8" width="24" height="32" rx="3"/><path d="M19 15h12M19 33h12M25 19v10M21 24h8"/></svg>',
  clover: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 23c-1-7-10-10-13-4-3 7 7 9 13 5-5 5-4 15 3 14 7-1 5-11-2-14 7 4 16-2 12-8-4-6-12 0-13 7 1-7-7-13-12-8-5 5 3 12 12 8Z"/><path d="M24 25c0 8-3 12-7 16"/></svg>',
  pendulum: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 7v6M18 13h12l-2 6 7 8-11 15-11-15 7-8-2-6Z"/><path d="M17 27h14M20 19h8"/></svg>',
};

const serviceGroups = document.querySelector("#service-groups");
const dialog = document.querySelector("#service-dialog");
const dialogContent = document.querySelector("#dialog-content");

services.forEach((service, serviceIndex) => {
  const section = document.createElement("article");
  section.className = "service-group reveal";
  section.innerHTML = `
    <div class="service-intro">
      <div class="service-icon">${icons[service.icon]}</div>
      <p>0${serviceIndex + 1}</p>
      <h3>${service.title}</h3>
      <span>${service.subtitle}</span>
    </div>
    <div class="price-list">
      ${service.rows.map((row, rowIndex) => `
        <button type="button" class="price-row" data-service="${service.id}" data-row="${rowIndex}">
          <span><strong>${row.name}</strong><small>${row.note}</small></span>
          <b>${row.price}</b>
          <i aria-hidden="true">→</i>
        </button>`).join("")}
    </div>`;
  serviceGroups.append(section);
});

document.querySelectorAll(".price-row").forEach((button) => {
  button.addEventListener("click", () => {
    const service = services.find((item) => item.id === button.dataset.service);
    const selected = service.rows[Number(button.dataset.row)];
    dialogContent.innerHTML = `
      <p class="dialog-kicker">${currency === "rmb" ? "人民币价格" : "马币价格"}</p>
      <h2 id="dialog-title">${service.title}</h2>
      <p class="dialog-description">${service.detail}</p>
      <div class="dialog-selected"><span>${selected.name}</span><strong>${selected.price}</strong><small>${selected.note}</small></div>
      <p class="dialog-included">本项价格已包含解读后的树洞倾听。</p>
      <a class="button button-primary" href="#contact" data-dialog-contact>联系央央预约 <span aria-hidden="true">→</span></a>`;
    dialog.showModal();
    document.body.classList.add("dialog-open");
    dialogContent.querySelector("[data-dialog-contact]").addEventListener("click", () => dialog.close());
  });
});

const closeDialog = () => {
  dialog.close();
  document.body.classList.remove("dialog-open");
};
document.querySelector(".dialog-close").addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const feedbackToggle = document.querySelector("#feedback-toggle");
feedbackToggle.addEventListener("click", () => {
  const expanded = feedbackToggle.getAttribute("aria-expanded") === "true";
  document.querySelectorAll(".extra-feedback").forEach((item) => { item.hidden = expanded; });
  feedbackToggle.setAttribute("aria-expanded", String(!expanded));
  feedbackToggle.innerHTML = expanded ? '查看更多反馈 <span aria-hidden="true">↓</span>' : '收起反馈 <span aria-hidden="true">↑</span>';
});

const toast = document.querySelector("#toast");
let toastTimer;
document.querySelectorAll(".copy-contact").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      toast.textContent = "微信号已复制";
    } catch {
      toast.textContent = `微信号：${button.dataset.copy}`;
    }
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
}
