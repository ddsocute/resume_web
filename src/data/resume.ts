import { ResumeData } from "@/types";

export const resumeData: ResumeData = {
    profile: {
        name: "林靖迪",
        nameEN: "JING-DI, LIN",
        title: "FinTech Enthusiast | Aspiring Investment Banking Analyst",
        email: "111301029@g.nccu.edu.tw",
        phone: "(+886)912-992213",
        linkedin: "www.linkedin.com/in/jing-di-lin",
        avatarUrl: "/images/profile.jpg",
        summary: "An ambitious undergraduate specializing in International Business with a focus on FinTech, currently pursuing opportunities in the financial services industry. Experienced in investment banking, venture capital, and financial research with a strong foundation in valuation, M&A analysis, and market intelligence."
    },

    education: [
        {
            id: "nccu-2022",
            school: "國立政治大學 (National Chengchi University)",
            degree: "國際經營與貿易學系 (International Business)",
            program: "金融科技學程 (FinTech Program)",
            startDate: "Sep. 2022",
            endDate: "Jun. 2026",
            achievements: [
                "學術成果：'KAP: MLLM-assisted OCR Text Enhancement for Hybrid Retrieval in Chinese Non-Narrative Documents' - Hsu, H-L., Lin, P-S., Lin, Jing-Di, & Tzeng, J. 發表於 18th NTCIR Conference (全球三大資訊檢索評測會議之一), 東京, 2025. (Oral Presentation)",
                "企業併購個案研究專案：在玉山與南山的模擬併購交易中以玉山顧問角度，擔任小組策略長，並負責估值模型與策略分析"
            ],
            courses: [
                "併購實例研習",
                "高等會計學",
                "中級會計學",
                "審計學",
                "人工智慧概論",
                "計算機概論"
            ]
        }
    ],

    experience: [
        {
            id: "o-bank-2025",
            company: "王道商業銀行 (O-Bank)",
            role: "策略投資部實習生 (Strategy Investment Intern)",
            startDate: "Sep. 2025",
            endDate: "Present",
            description: [
                "併購支援：透過分析可比交易的關鍵指標與洞見，支援併購案的評估",
                "主題研究：獨自完成提報至董事會穩定幣報告初稿，定期產出市場分析月報與產業動態雙週刊，並參與過五場論壇撰寫紀要",
                "案源分析：負責潛在投資案的初步分析篩選，已完成十多家公司的質化評估，並產出 Call Memo，向團隊提出明確的投資亮點與風險評估"
            ]
        },
        {
            id: "huatai-2025",
            company: "華泰聯合證券 (Huatai United Securities)",
            role: "投資銀行部實習生 (Investment Banking Intern)",
            startDate: "July 2025",
            endDate: "Aug. 2025",
            description: [
                "IPO 執行：深度參與鋰電池製作商之北交所 IPO 專案，設計境外經銷商穿透核查程序並參與備忘錄撰寫，負責公開說明書中產業分析章節的初步撰寫，並執行收入截止性測試與高管銀行帳目核查等程序",
                "數據驗證：獨立審核了超過 2 萬筆銷售單據的合規性，並完成了逾 120 萬筆售後設備數據的整理",
                "案例研究：支援多個並行專案，獨立完成了包含 ERP 系統整合、股權激勵等關鍵議題的案例研究"
            ]
        },
        {
            id: "tier-2025",
            company: "財團法人臺灣經濟研究院 (Taiwan Institute of Economic Research)",
            role: "研究六所實習生 (Research Intern)",
            startDate: "March 2025",
            endDate: "Jun. 2025",
            description: [
                "市場研究：深入研究台灣新創市場，維護並更新包含逾 3,000 家企業的動態數據庫",
                "專題報告：於地緣時事專案中，分析印巴衝突，成果獲納入最終呈報的報告中"
            ]
        },
        {
            id: "tmba-2025",
            company: "第二十五屆 TMBA",
            role: "個股研究部專案生 (Equity Research Analyst)",
            startDate: "Feb. 2025",
            endDate: "Jun. 2025",
            description: [
                "個股研究：以昇陽半導體（8028.TW）為標的，負責估值部分並使用 P/E 估值法，製作包含完整投資邏輯與個股評級的研究報告",
                "產業研究：以半導體先進製程產業主題，製作涵蓋產業概況、技術介紹、產業動能、個股推薦的產業報告"
            ]
        },
        {
            id: "mf-club-2024-member",
            company: "第九屆政大共同基金研究社",
            role: "研究專案生 (Research Analyst)",
            startDate: "Sep. 2024",
            endDate: "Jun. 2024",
            description: [
                "基金配置：基於美國經濟溫和增長的預測，採用 Top-Down 方式，構建以電力產業為核心的模擬投組",
                "基金評析：對 SMH 基金進行評析，並分析半導體產業發展現況與成長動能並針對前三大持股進行分析",
                "產業研究：研究電動車產業，分析市場未來發展，並在上學期社內期末專案競賽中得到第三名",
                "總經研究：對歐洲總體經濟進行研究，透過分析基本指標和政策方向，預測短期和長期的宏觀經濟趨勢"
            ]
        },
        {
            id: "mf-club-2024-leader",
            company: "第十屆政大共同基金研究社",
            role: "行銷策略長 (Marketing Strategy Director)",
            startDate: "Jun. 2024",
            endDate: "Jun. 2025",
            description: [
                "品牌策略：管理超過 6,300 人追蹤之社群平台，將社課與活動內容轉化為圖文，強化社團品牌形象",
                "專案管理：跨部門協調期中、期末兩場大型成果發表會的籌辦工作，並主導專案簡報的品質控管"
            ]
        }
    ],

    projects: [
        {
            id: "stablecoin-report",
            title: "穩定幣市場研究報告 (Stablecoin Market Report)",
            associatedWithId: "o-bank-2025",
            category: "Finance",
            description: "獨立完成提報至董事會的穩定幣報告初稿，涵蓋市場分析、監管環境、以及投資機會評估。",
            technologies: ["Market Research", "Financial Analysis", "Regulatory Analysis"],
            links: []
        }
    ],

    awards: [
        {
            id: "ai-cup-2024",
            title: "2024 AI CUP 玉山人工智慧公開挑戰賽",
            organization: "E.SUN Bank & Academia Sinica",
            date: "Sep. 2024 – Nov. 2024",
            achievement: "回答準確率達全國前 8%（38/487），設計並實現基於檢索增強生成架構的金融智能問答系統，並結合向量檢索與大型語言模型，提升回答準確性與生成品質",
            rank: "全國前標 (Top 8%)"
        },
        {
            id: "mbs-2024",
            title: "2024 年國立政治大學 MBS 模擬商業管理比賽",
            organization: "National Chengchi University",
            date: "Mar. 2024 – May 2024",
            achievement: "綜合運用財務、行銷與市場策略，在企業經營模擬中制定決策，以最大化淨現值 (NPV) 為目標",
            rank: "亞軍"
        },
        {
            id: "gtsm-2023",
            title: "2023 年櫃買中心投資組合競賽",
            organization: "Taipei Exchange",
            date: "Jul. 2023 - Sep. 2023",
            achievement: "採用 Top-Down 分析方法，根據總體經濟趨勢進行資產配置，於 160 餘組團隊中脫穎而出",
            rank: "入圍優秀獎"
        }
    ],

    skills: [
        {
            category: "估值與財務模型 (Valuation & Financial Modeling)",
            items: ["DCF", "可比公司分析 (Comparable Company Analysis)"]
        },
        {
            category: "金融證照 (Financial Certifications)",
            items: ["證券商高級業務員", "證券商業務員", "金融道德與常識"]
        },
        {
            category: "程式語言 (Programming)",
            items: ["Python", "Java"]
        },
        {
            category: "金融資料庫 (Financial Databases)",
            items: ["Bloomberg", "TEJ"]
        },
        {
            category: "語言能力 (Languages)",
            items: ["中文 (母語)", "英文 (TOEIC 875)"]
        }
    ]
};
