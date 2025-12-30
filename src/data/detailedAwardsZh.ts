
import { DetailedExperience } from "@/types";

export const detailedAwards: Record<string, DetailedExperience> = {
    "ai-cup-2024": {
        id: "ai-cup-2024",
        company: "教育部 (Ministry of Education)",
        role: "2024 AI CUP 醫療繁體中文問答",
        startDate: "2024",
        endDate: "2024",
        location: "Taiwan",
        department: "AI 比賽",
        companyDescription: "教育部主辦的全國性人工智慧競賽，旨在培育 AI 人才。",
        overview: "在語意分析項目中，運用 BERT 等先進 NLP 模型處理醫療領域的繁體中文問答任務。透過數據增強與模型微調，提升問答準確度，最終獲得全國優選（Top 6%）。",
        description: [
            "競賽主題：醫療繁體中文問答（Medical QA）",
            "技術方案：基於 BERT 的 NLP 模型微調",
            "成果：全國優選 (Top 6%)"
        ],
        responsibilities: [
            "負責 NLP 模型選型與架構設計",
            "執行醫療數據的前處理與清洗",
            "運用 BERT 進行模型訓練與參數調優",
            "分析錯誤案例並優化模型表現"
        ],
        keyAchievements: [
            {
                title: "全國優選",
                description: "在競爭激烈的全國賽事中脫穎而出，準確率達到前 6%。",
                impact: "展現 NLP 技術實力",
                metrics: ["Top 6%", "全國優選"],
                category: "recognition"
            }
        ],
        projects: [],
        skills: ["NLP", "Python", "PyTorch", "BERT", "Data Analysis"],
        metrics: []
    },
    "gtsm-2023": {
        id: "gtsm-2023",
        company: "證券櫃檯買賣中心 (Taipei Exchange)",
        role: "2023 櫃買中心大專生證券菁英種子培育營",
        startDate: "2023",
        endDate: "2023",
        location: "Taipei",
        department: "金融競賽",
        companyDescription: "櫃買中心為台灣重要的證券交易市場，致力於扶植中小企業與新興產業。",
        overview: "參與櫃買中心主辦的培育營，深入研究證券市場運作與投資商品。在期末投資組合競賽中，結合總體經濟分析與個股估值，提出具說服力的投資策略，最終榮獲冠軍。",
        description: [
            "競賽主題：證券投資組合模擬與分析",
            "核心策略：Top-Down 宏觀分析 + GARP 選股策略",
            "成果：冠軍 (1st Place)"
        ],
        responsibilities: [
            "分析總體經濟趨勢，制定資產配置策略",
            "篩選具成長潛力的櫃買市場個股",
            "構建投資組合並進行風險回測",
            "負責期末簡報的邏輯架構與報告撰寫"
        ],
        keyAchievements: [
            {
                title: "競賽冠軍",
                description: "在眾多參賽隊伍中，以完整的分析邏輯與優異的投組表現榮獲第一名。",
                impact: "獲評審高度肯定投資邏輯",
                metrics: ["冠軍", "1st Place"],
                category: "recognition"
            }
        ],
        projects: [],
        skills: ["Investment Analysis", "Portfolio Management", "Team Leadership", "Presentation"],
        metrics: []
    },
    "mbs-2024": {
        id: "mbs-2024",
        company: "MBS 商業模擬競賽",
        role: "2024 MBS 商業模擬競賽",
        startDate: "2024",
        endDate: "2024",
        location: "Taipei",
        department: "商業競賽",
        companyDescription: "MBS (Management Business Simulation) 是一項綜合性的商業模擬競賽，考驗參賽者在動態市場環境下的決策能力。",
        overview: "在競賽中擔任 CEO 角色，帶領團隊制定企業發展策略。通過分析市場數據、優化供應鏈、與制定精準的行銷策略，在多回合的商業模擬中保持領先，展現全方位的企業管理能力。",
        description: [
            "競賽主題：全方位企業經營模擬",
            "核心職責：策略制定與跨部門協調",
            "成果：展現卓越決策能力"
        ],
        responsibilities: [
            "制定企業長期發展願景與競爭策略",
            "分析財務報表，優化資本結構與預算分配",
            "協調生產、行銷、研發等部門的決策同步",
            "因應市場變化即時調整營運方針"
        ],
        keyAchievements: [
            {
                title: "團隊領導",
                description: "帶領跨領域團隊在壓力環境下高效協作，完成多回合決策。",
                impact: "提升團隊凝聚力與決策效率",
                metrics: ["CEO 角色", "跨部門協作"],
                category: "leadership"
            }
        ],
        projects: [],
        skills: ["Business Strategy", "Financial Analysis", "Team Leadership", "Decision Making"],
        metrics: []
    }
};
