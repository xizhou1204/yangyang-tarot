const currency = document.body.dataset.currency || "rmb";

const formatWholePrice = (value, symbol) => {
  if (value == null) return "预约时确认";
  const values = Array.isArray(value) ? value : [value];
  return values.map((amount) => `${symbol}${Math.round(amount)}`).join("–");
};

const price = (rmb, myr) => (
  currency === "rmb"
    ? formatWholePrice(rmb, "¥")
    : formatWholePrice(myr, "RM")
);

const services = [
  {
    id: "tarot",
    title: "塔罗占卜",
    subtitle: "适合看清事件走向、关系状态与行动建议",
    icon: "cards",
    detail: "塔罗擅长呈现问题里的情绪、动力、阻碍与选择。适合感情、事业、学业、友情、运势、桃花与寻人寻物等主题。",
    rows: [
      { name: "单牌", note: "是／否、核心提示或其他牌阵补牌", price: price(10, 6) },
      { name: "四张牌阵", note: "现状、关键、建议与发展方向", price: price(35, 20) },
      { name: "六芒星或更大牌阵", note: "复杂问题与多层面深度分析", price: price([68, 300], null) },
    ],
  },
  {
    id: "lenormand",
    title: "雷诺曼占卜",
    subtitle: "直接、具体，适合日常问题和清晰事件线",
    icon: "clover",
    detail: "雷诺曼偏向现实事件与具体信息，适合关系现状、工作发展、行动结果、时间线与生活中的明确问题。",
    rows: [
      { name: "单牌指引", note: "当天能量、核心提示或补牌", price: price(10, 6) },
      { name: "四张牌阵", note: "问题关键、阻碍、建议与结果", price: price(35, 20) },
      { name: "九宫格或其他牌阵", note: "全方位分析与复杂事件梳理", price: price([68, 300], null) },
    ],
  },
  {
    id: "pendulum",
    title: "灵摆调频",
    subtitle: "梳理当下卡点、情绪波动与能量状态",
    icon: "pendulum",
    detail: "灵摆调频用于关系、状态、学业、事业与日常主题的阶段性梳理。网站下方已经完整列出吃苹果、桃花片、情绪篇、健康篇、小人祸、第三方、事业运、红鸾劫、考状元与财运滚滚的全部参考细项。",
    rows: [
      { name: "单项快速调频", note: "一个核心状态或单项能量校准", price: price(10, 6) },
      { name: "双项平衡／三维状态", note: "两至三个能量面向同步梳理", price: price([18, 26], [10, 15]) },
      { name: "四项主题调频", note: "围绕关系、事业、睡眠、财运等主题", price: price(35, 21) },
      { name: "深度综合调频", note: "复杂卡顿、长期失衡与深度梳理", price: price([42, 98], [26, 60]) },
    ],
  },
];

const pendulumTopics = [
  {
    title: "吃苹果",
    groups: [{
      items: [
        "双方性愉悦指数", "双方性生活质量指数", "双方性持续时间指数", "双方性生活主动指数",
        "双方性交流指数", "双方性花样质量指数", "双方性激情指数", "双方性冷淡指数",
        "双方肾部能量指数", "双方性欲能量指数", "双方性生活和谐度", "双方身体能量指数",
      ],
    }],
  },
  {
    title: "桃花片",
    groups: [{
      items: [
        "受欢迎指数", "烂桃花指数", "正桃花指数", "对异性吸引指数",
        "爱情贵人指数", "个人桃花频率", "爱情小人指数", "对异性吸引指数",
        "个人魅力指数", "桃花障碍指数", "个人颜值指数", "认识新人机会指数",
        "气质对频指数", "桃花质量指数", "正缘接近时间", "对方人品指数",
      ],
    }],
  },
  {
    title: "情绪篇",
    groups: [{
      items: [
        "烦躁指数", "悲观指数", "焦虑指数", "内耗指数", "紧张指数",
        "生气指数", "心静指数", "积极指数", "安全感指数",
      ],
    }],
  },
  {
    title: "健康篇",
    groups: [{
      items: ["抵抗力", "免疫力", "细菌感染", "躯体化", "肢体行动力", "炎症", "精神状态", "睡眠", "食欲"],
    }],
  },
  {
    title: "小人祸",
    groups: [{
      items: [
        "对方对你的恶意频率", "对方对你的善意频率", "反弹对方伤害频率",
        "小人情绪影响频率", "小人运势影响频率", "吸引小人接近频率",
        "近期小人出现频率", "被对方伤害指数", "反弹小人伤害频率",
      ],
    }],
  },
  {
    title: "第三方",
    groups: [{
      items: [
        "对方身边第三方纠缠 yes or no", "第三方对于这段感情的负面影响指数",
        "对方身边第三方出现频率", "其他异性对对方的吸引魅惑力指数", "对方身边第三方的回应频率",
      ],
    }],
  },
  {
    title: "事业运",
    groups: [{
      items: [
        "事业负能量指数", "与试题契合指数", "顾客信任度指数", "找工作指数", "客源量指数",
        "客单量指数", "事业顺利指数", "上司提携指数", "业绩达标指数", "事业运指数",
        "正能量指数", "成交率指数", "事业障碍指数", "事业贵人指数", "人际关系指数",
        "事业小人指数", "面试幸运指数", "与客户／同事／上司和谐指数",
        "面试通过指数", "与工作环境契合指数", "与面试官契合指数",
      ],
    }],
  },
  {
    title: "红鸾劫",
    groups: [{
      items: [
        "对方忠诚度", "对方心软度", "对方细节度", "感情沟通度", "心理距离度",
        "对方执念度", "感情温馨度", "对方理性度", "感情复合度", "现实阻碍度",
        "对方主动度", "对方感性度", "对方固执度", "感情激情度", "感情负能量",
        "对方喜欢度", "对方花钱度", "对方想念度", "感情冷战度", "感情正能量",
        "对方专一度", "对方关注度", "对方热情度", "感情吵架度", "在一起程度",
      ],
    }],
  },
  {
    title: "考状元",
    groups: [
      {
        label: "考前调频",
        items: [
          "细心度", "记忆力", "紧张度", "考试障碍度", "考试通过度", "考试顺利指数",
          "自信心", "分析能力", "超常发挥", "临场发挥", "思维逻辑", "知识迁移",
          "考试地点 vs 个案相合度", "监考老师 vs 个案相合度", "思考频率与出卷人一致度",
          "受世界负面集体能量影响度", "审批卷老师 vs 个案相合度",
        ],
      },
      {
        label: "考后调频",
        items: ["考试通过指数", "心态稳定指数", "考试合格度", "考试成绩指数", "考试排名指数", "好成绩障碍降低度"],
      },
    ],
  },
  {
    title: "财运滚滚",
    groups: [{
      items: [
        "顾客推荐度", "富婆接近指数", "金钱小人指数", "存钱指数",
        "顾客回头率", "客源量指数", "顾客信任度", "与钱缘分率",
        "金钱能量指数", "金钱好运指数", "金钱贵人指数", "顾客对你喜爱度",
      ],
    }],
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
      ${service.id === "pendulum" ? '<a class="service-reference-link" href="#pendulum-reference">查看全部可参考项目 ↓</a>' : ""}
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

const pendulumTopicList = document.querySelector("#pendulum-topic-list");
const pendulumExpandAll = document.querySelector("#pendulum-expand-all");

if (pendulumTopicList) {
  const totalItems = pendulumTopics.reduce(
    (total, topic) => total + topic.groups.reduce((subtotal, group) => subtotal + group.items.length, 0),
    0,
  );
  document.querySelectorAll("[data-pendulum-count]").forEach((item) => {
    item.textContent = `共 ${pendulumTopics.length} 大主题、${totalItems} 个参考细项，点击主题即可查看完整内容。`;
  });

  pendulumTopics.forEach((topic, topicIndex) => {
    const itemCount = topic.groups.reduce((total, group) => total + group.items.length, 0);
    const details = document.createElement("details");
    details.className = "pendulum-topic reveal";
    details.open = topicIndex === 0;
    details.innerHTML = `
      <summary>
        <span class="pendulum-topic-number">${String(topicIndex + 1).padStart(2, "0")}</span>
        <strong>${topic.title}</strong>
        <small>${itemCount} 项</small>
        <i aria-hidden="true"></i>
      </summary>
      <div class="pendulum-topic-body">
        ${topic.groups.map((group) => `
          <div class="pendulum-topic-group">
            ${group.label ? `<h3>${group.label}</h3>` : ""}
            <ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        `).join("")}
      </div>`;
    pendulumTopicList.append(details);
  });
}

if (pendulumExpandAll) {
  pendulumExpandAll.addEventListener("click", () => {
    const topics = [...document.querySelectorAll(".pendulum-topic")];
    const shouldExpand = topics.some((topic) => !topic.open);
    topics.forEach((topic) => { topic.open = shouldExpand; });
    pendulumExpandAll.setAttribute("aria-expanded", String(shouldExpand));
    pendulumExpandAll.innerHTML = shouldExpand
      ? '收起全部 <span aria-hidden="true">↑</span>'
      : '展开全部 <span aria-hidden="true">↓</span>';
  });
}

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
