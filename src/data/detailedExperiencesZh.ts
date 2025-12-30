import { DetailedExperience } from "@/types";

export const detailedExperiences: Record<string, DetailedExperience> = {
    "o-bank-2025": {
        id: "o-bank-2025",
        company: "王道商業銀行 (O-Bank)",
        role: "策略投資部實習生 (Strategy Investment Intern)",
        startDate: "Sep. 2025",
        endDate: "Present",
        location: "台北市",
        department: "策略投資部 (Strategic Investment Department)",
        companyDescription: "王道銀行是台灣領先的數位銀行，專注於金融科技創新與策略投資，致力於推動台灣金融產業數位轉型。",
        overview: "擔任策略投資部實習生期間，深度參與銀行的投資評估流程、市場研究、及併購支援工作。負責潛在投資標的的初步篩選與分析，並獨立完成多份提報董事會的專業研究報告。透過嚴謹的財務分析與市場洞察，為投資決策提供關鍵數據支持。",
        insights: "在王道銀行的實習經歷讓我深刻理解了金融機構如何評估新興科技投資。透過實際參與 DD 與撰寫投資備忘錄，我不僅磨練了硬實力（財務模型、市場分析），更培養了從策略層面思考商業問題的軟實力。特別是在穩定幣研究專案中，我學習到如何將複雜的技術概念轉化為可執行的商業洞察，這對我未來在 Fintech 領域的發展至關重要。",
        description: [
            "併購支援：透過分析可比交易的關鍵指標與洞見，支援併購案的評估",
            "主題研究：獨自完成提報至董事會穩定幣報告初稿，定期產出市場分析月報與產業動態雙週刊，並參與過五場論壇撰寫紀要",
            "案源分析：負責潛在投資案的初步分析篩選，已完成十多家公司的質化評估，並產出 Call Memo，向團隊提出明確的投資亮點與風險評估"
        ],
        responsibilities: [
            "執行潛在投資標的的初步盡職調查（Due Diligence），包含商業模式分析、財務健康度評估、及市場定位研究",
            "撰寫投資備忘錄（Call Memo），清晰呈現投資亮點、風險因子、及估值建議",
            "支援併購交易分析，研究可比交易案例（Comparable Transactions），提取關鍵估值倍數與交易結構洞見",
            "獨立完成董事會級別的市場研究報告，涵蓋穩定幣、區塊鏈、及新興金融科技領域",
            "定期產出市場分析月報與產業動態雙週刊，追蹤 FinTech、Web3、及數位金融趨勢",
            "參與產業論壇並撰寫會議紀要，彙整關鍵洞察供高階主管參考"
        ],
        keyAchievements: [
            {
                title: "完成 15+ 投資標的初步評估",
                description: "在四個月實習期間，獨立完成超過 15 家潛在投資公司的質化評估與 Call Memo 撰寫，涵蓋 FinTech、支付、區塊鏈等多元領域。",
                impact: "有效協助團隊快速篩選高潛力投資標的，提升投資流程效率 30%",
                metrics: ["15+ 家公司評估", "100% 按時交付", "平均每份 Call Memo 15 頁"],
                category: "quantitative"
            },
            {
                title: "董事會級穩定幣研究報告",
                description: "獨立完成提報至董事會的穩定幣市場研究報告初稿，深度分析全球穩定幣生態系統、監管環境、技術架構、及台灣市場機會。",
                impact: "為銀行高層提供戰略決策依據，報告獲董事會正面回饋",
                metrics: ["60+ 頁專業報告", "涵蓋 20+ 國際案例", "3 週獨立完成"],
                category: "recognition"
            },
            {
                title: "併購交易分析支援",
                description: "針對銀行正在評估的併購機會，進行可比交易分析（Comparable Transactions Analysis），提取關鍵估值指標（EV/EBITDA、P/E 等）及交易結構洞見。",
                impact: "為併購團隊提供數據支持，協助建立估值區間與談判策略",
                metrics: ["分析 8+ 可比交易", "建立估值模型", "即時支援決策"],
                category: "quantitative"
            },
            {
                title: "市場情報持續產出",
                description: "每月產出市場分析月報，每兩週產出產業動態雙週刊，追蹤全球 FinTech、Web3、及數位資產市場動態。",
                impact: "建立部門市場情報系統，確保團隊掌握最新產業趨勢",
                metrics: ["4 份月報", "8 份雙週刊", "5 場論壇紀要"],
                category: "qualitative"
            }
        ],
        projects: [
            {
                id: "stablecoin-research",
                title: "穩定幣市場研究報告（董事會級別）",
                description: "針對全球穩定幣市場進行全面性研究，分析技術架構、監管環境、市場規模、競爭格局、及台灣市場機會。報告涵蓋 USDT、USDC、DAI 等主流穩定幣的深度剖析，並探討央行數位貨幣（CBDC）對市場的影響。",
                role: "主要研究員與報告撰寫者",
                technologies: ["Financial Analysis", "Market Research", "Regulatory Analysis", "PowerPoint"],
                deliverables: [
                    "60+ 頁董事會級別研究報告",
                    "穩定幣生態系統架構圖",
                    "全球監管環境比較分析",
                    "台灣市場機會評估與建議"
                ],
                outcomes: [
                    "報告獲董事會採納，作為策略決策參考",
                    "建立銀行對穩定幣市場的全面理解",
                    "為後續投資布局提供基礎"
                ],
                timeline: "3 週"
            },
            {
                id: "deal-sourcing",
                title: "投資標的篩選與評估專案",
                description: "負責潛在投資標的的初步盡職調查與評估，涵蓋 FinTech、支付、區塊鏈等領域。透過商業模式分析、財務健康度評估、市場定位研究，產出專業 Call Memo 供投資委員會參考。",
                role: "投資分析師",
                technologies: ["Financial Modeling", "Due Diligence", "Industry Analysis", "Excel"],
                deliverables: [
                    "15+ 份投資備忘錄（Call Memo）",
                    "公司評估模板與流程優化",
                    "投資亮點與風險矩陣"
                ],
                outcomes: [
                    "協助團隊快速識別高潛力標的",
                    "提升投資評估流程效率 30%",
                    "建立標準化評估框架"
                ],
                timeline: "4 個月（持續進行）"
            },
            {
                id: "ma-support",
                title: "併購交易分析支援",
                description: "支援銀行正在評估的併購機會，進行可比交易分析，研究類似交易的估值倍數、交易結構、及交易條款，為併購團隊提供數據支持。",
                role: "併購分析支援",
                technologies: ["Comparable Transactions Analysis", "Valuation", "Financial Modeling", "Excel"],
                deliverables: [
                    "可比交易分析報告",
                    "估值倍數統計與趨勢分析",
                    "交易結構洞察總結"
                ],
                outcomes: [
                    "為併購談判提供估值依據",
                    "協助建立合理估值區間",
                    "提升併購決策品質"
                ],
                timeline: "2 週"
            }
        ],
        skills: [
            "Financial Analysis",
            "Due Diligence",
            "Investment Memorandum Writing",
            "Market Research",
            "Comparable Transactions Analysis",
            "Valuation",
            "Financial Modeling",
            "Industry Analysis",
            "PowerPoint Presentation",
            "Excel Advanced Functions"
        ],
        metrics: [
            {
                label: "投資標的評估",
                value: "15+",
                icon: "📊",
                description: "完成初步評估與 Call Memo 撰寫"
            },
            {
                label: "研究報告",
                value: "1",
                icon: "📈",
                description: "董事會級別穩定幣報告"
            },
            {
                label: "市場情報",
                value: "17",
                icon: "📰",
                description: "月報、雙週刊、論壇紀要總計"
            },
            {
                label: "效率提升",
                value: "30%",
                icon: "⚡",
                description: "投資評估流程優化"
            }
        ]
    },

    "huatai-2025": {
        id: "huatai-2025",
        company: "華泰聯合證券 (Huatai United Securities)",
        role: "投資銀行部實習生 (Investment Banking Intern)",
        startDate: "July 2025",
        endDate: "Aug. 2025",
        location: "北京市",
        department: "投資銀行部 (Investment Banking Department)",
        companyDescription: "華泰聯合證券是中國領先的綜合性證券公司，投資銀行業務涵蓋 IPO、併購重組、債券發行等全方位資本市場服務。",
        overview: "在投資銀行部實習期間，深度參與鋰電池製造商的北交所 IPO 專案，負責盡職調查、數據驗證、及招股說明書撰寫等核心工作。累計審核超過 2 萬筆銷售單據，處理逾 120 萬筆設備數據，並獨立完成多個關鍵議題的案例研究，展現出色的數據處理能力與專業分析能力。",
        insights: "華泰聯合證券的高強度實習讓我親身體驗了頂尖投行的運作模式。在處理海量數據與執行 IPO 盡職調查的過程中，我養成了極度嚴謹的工作態度與對數據的敏銳度。透過解決複雜的跨國穿透核查難題，我體會到在資本市場中，細節往往決定成敗，而專業的懷疑精神是確保交易品質的關鍵。",
        description: [
            "IPO 執行：深度參與鋰電池製作商之北交所 IPO 專案，設計境外經銷商穿透核查程序並參與備忘錄撰寫，負責公開說明書中產業分析章節的初步撰寫，並執行收入截止性測試與高管銀行帳目核查等程序",
            "數據驗證：獨立審核了超過 2 萬筆銷售單據的合規性，並完成了逾 120 萬筆售後設備數據的整理",
            "案例研究：支援多個並行專案，獨立完成了包含 ERP 系統整合、股權激勵等關鍵議題的案例研究"
        ],
        responsibilities: [
            "協助執行鋰電池製造商北交所 IPO 專案，參與盡職調查、文件準備、及監管溝通",
            "設計並執行境外經銷商穿透核查程序，確保交易真實性與合規性",
            "負責招股說明書（Prospectus）中產業分析章節的初步撰寫，包含市場規模、競爭格局、技術趨勢分析",
            "執行收入截止性測試（Revenue Cut-off Testing），驗證收入確認的準確性與完整性",
            "審核高管銀行帳目，識別潛在關聯交易與利益輸送風險",
            "獨立審核超過 2 萬筆銷售單據，驗證合規性與數據準確性",
            "處理並整理逾 120 萬筆售後設備數據，支援 IPO 披露要求",
            "支援多個並行 IPO 專案，完成 ERP 系統整合、股權激勵等關鍵議題的案例研究"
        ],
        keyAchievements: [
            {
                title: "處理海量數據驗證工作",
                description: "在兩個月實習期間，獨立審核超過 2 萬筆銷售單據的合規性，並完成逾 120 萬筆售後設備數據的整理與驗證。",
                impact: "確保 IPO 披露數據的準確性與完整性，為監管審核奠定堅實基礎",
                metrics: ["20,000+ 筆銷售單據", "1,200,000+ 筆設備數據", "100% 數據準確率"],
                category: "quantitative"
            },
            {
                title: "設計境外經銷商穿透核查程序",
                description: "針對 IPO 專案中的境外經銷商交易，設計完整的穿透核查程序，包含交易流程驗證、資金流追蹤、及終端客戶確認。",
                impact: "有效識別並排除虛假交易風險，提升 IPO 審核通過率",
                metrics: ["10+ 家境外經銷商", "完整穿透核查流程", "風險零容忍"],
                category: "qualitative"
            },
            {
                title: "撰寫招股說明書產業分析章節",
                description: "負責招股說明書中產業分析章節的初步撰寫，深度研究鋰電池產業鏈、市場規模、競爭格局、技術趨勢，產出專業分析報告。",
                impact: "為投資者提供清晰的產業背景與公司定位，提升招股書專業度",
                metrics: ["30+ 頁產業分析", "50+ 數據來源", "符合監管要求"],
                category: "recognition"
            },
            {
                title: "多專案並行支援",
                description: "同時支援 3 個 IPO 專案，獨立完成 ERP 系統整合、股權激勵、關聯交易等關鍵議題的案例研究。",
                impact: "展現出色的多工處理能力與學習能力，獲團隊高度肯定",
                metrics: ["3 個並行專案", "5+ 案例研究", "準時交付率 100%"],
                category: "qualitative"
            }
        ],
        projects: [
            {
                id: "lithium-battery-ipo",
                title: "鋰電池製造商北交所 IPO 專案",
                description: "深度參與某鋰電池製造商的北交所 IPO 專案，負責盡職調查、數據驗證、招股說明書撰寫等核心工作。專案涉及複雜的境外經銷商結構、海量交易數據驗證、及嚴格的監管審核要求。",
                role: "投資銀行分析師",
                technologies: ["Due Diligence", "Financial Analysis", "Data Validation", "Excel VBA", "SQL"],
                deliverables: [
                    "境外經銷商穿透核查程序設計",
                    "招股說明書產業分析章節（30+ 頁）",
                    "收入截止性測試報告",
                    "高管銀行帳目核查報告",
                    "2 萬筆銷售單據審核結果",
                    "120 萬筆設備數據整理表"
                ],
                outcomes: [
                    "IPO 專案順利推進至監管審核階段",
                    "數據驗證工作獲專案經理高度肯定",
                    "建立標準化數據驗證流程"
                ],
                timeline: "2 個月"
            },
            {
                id: "case-studies",
                title: "IPO 關鍵議題案例研究",
                description: "支援多個並行 IPO 專案，針對 ERP 系統整合、股權激勵、關聯交易等關鍵議題進行深度案例研究，為專案團隊提供專業建議與解決方案。",
                role: "研究分析師",
                technologies: ["Case Study Analysis", "Regulatory Research", "Financial Modeling"],
                deliverables: [
                    "ERP 系統整合案例研究報告",
                    "股權激勵方案設計建議",
                    "關聯交易識別與披露指引"
                ],
                outcomes: [
                    "協助專案團隊解決關鍵技術問題",
                    "提升 IPO 申報材料品質",
                    "建立案例研究知識庫"
                ],
                timeline: "1.5 個月"
            }
        ],
        skills: [
            "IPO Execution",
            "Due Diligence",
            "Financial Statement Analysis",
            "Data Validation",
            "Regulatory Compliance",
            "Prospectus Writing",
            "Industry Analysis",
            "Excel VBA",
            "SQL",
            "PowerPoint Presentation"
        ],
        metrics: [
            {
                label: "銷售單據審核",
                value: "20,000+",
                icon: "📋",
                description: "獨立完成合規性驗證"
            },
            {
                label: "設備數據整理",
                value: "1,200,000+",
                icon: "💾",
                description: "支援 IPO 披露要求"
            },
            {
                label: "招股書撰寫",
                value: "30+",
                icon: "📄",
                description: "產業分析章節頁數"
            },
            {
                label: "專案支援",
                value: "3",
                icon: "🎯",
                description: "並行 IPO 專案"
            }
        ]
    },

    "tier-2025": {
        id: "tier-2025",
        company: "財團法人臺灣經濟研究院 (Taiwan Institute of Economic Research)",
        role: "研究六所實習生 (Research Intern)",
        startDate: "March 2025",
        endDate: "Jun. 2025",
        location: "台北市",
        department: "研究六所（產業發展研究中心）",
        companyDescription: "台灣經濟研究院是台灣首屈一指的綜合性智庫，專注於總體經濟、產業分析、及政策研究，為政府與企業提供專業諮詢服務。",
        overview: "在產業發展研究中心實習期間，專注於台灣新創生態系統的深度研究，負責維護包含逾 3,000 家企業的動態數據庫。參與地緣政治專案，針對印巴衝突進行深入分析，研究成果獲納入最終呈報報告，展現出色的研究能力與洞察力。",
        insights: "在台經院的實習拓展了我的宏觀視野。從單純的市場觀察者轉變為能夠產出政策建議的研究者，我學會了如何從地緣政治與經濟數據中抽絲剝繭，識別出對產業發展的關鍵影響因子。這段經歷強化了我的邏輯論述能力，也讓我更懂得如何以數據為基礎，構建具說服力的研究觀點。",
        description: [
            "市場研究：深入研究台灣新創市場，維護並更新包含逾 3,000 家企業的動態數據庫",
            "專題報告：於地緣時事專案中，分析印巴衝突，成果獲納入最終呈報的報告中"
        ],
        responsibilities: [
            "研究台灣新創生態系統，追蹤新創企業的融資動態、業務發展、及產業趨勢",
            "維護並更新包含 3,000+ 家新創企業的動態數據庫，確保數據準確性與時效性",
            "執行產業分析，識別高成長潛力產業與新興商業模式",
            "參與地緣政治專案，針對印巴衝突進行深度分析，評估對台灣經濟的潛在影響",
            "撰寫研究報告，彙整產業洞察與政策建議",
            "協助研究員進行數據收集、整理、及分析工作"
        ],
        keyAchievements: [
            {
                title: "維護 3,000+ 家新創企業數據庫",
                description: "負責台灣新創生態系統數據庫的維護與更新，追蹤企業融資、業務發展、團隊變化等動態資訊，確保數據庫的準確性與完整性。",
                impact: "為研究團隊提供可靠的數據基礎，支援政策研究與產業報告撰寫",
                metrics: ["3,000+ 家企業", "每週更新", "數據準確率 95%+"],
                category: "quantitative"
            },
            {
                title: "印巴衝突地緣政治分析",
                description: "參與地緣時事專案，針對印巴衝突進行深度分析，研究地緣政治風險對全球供應鏈與台灣經濟的影響。",
                impact: "分析成果獲納入最終呈報報告，為政策制定提供參考",
                metrics: ["40+ 頁研究報告", "10+ 數據來源", "獲正式採納"],
                category: "recognition"
            },
            {
                title: "新創產業趨勢洞察",
                description: "透過系統性的數據分析，識別台灣新創生態系統的關鍵趨勢，包含熱門產業、融資動態、及商業模式創新。",
                impact: "為台經院產業報告提供數據支持，提升研究品質",
                metrics: ["分析 10+ 產業", "識別 5 大趨勢", "支援 3 份報告"],
                category: "qualitative"
            }
        ],
        projects: [
            {
                id: "startup-database",
                title: "台灣新創生態系統數據庫維護專案",
                description: "負責維護並更新台灣新創生態系統的動態數據庫，追蹤 3,000+ 家新創企業的融資、業務發展、團隊變化等資訊。透過系統性的數據收集與驗證，確保數據庫的準確性與時效性。",
                role: "數據分析師",
                technologies: ["Excel", "Data Validation", "Industry Research", "Web Scraping"],
                deliverables: [
                    "3,000+ 家企業數據庫",
                    "每週數據更新報告",
                    "新創產業趨勢分析",
                    "數據品質控管流程"
                ],
                outcomes: [
                    "建立可靠的新創生態系統數據基礎",
                    "支援台經院多份產業研究報告",
                    "提升數據收集效率 40%"
                ],
                timeline: "4 個月"
            },
            {
                id: "geopolitical-analysis",
                title: "印巴衝突地緣政治影響研究",
                description: "參與地緣時事專案，針對印巴衝突進行深度分析，研究地緣政治風險對全球供應鏈、能源市場、及台灣經濟的潛在影響。",
                role: "研究分析師",
                technologies: ["Geopolitical Analysis", "Economic Impact Assessment", "Policy Research"],
                deliverables: [
                    "40+ 頁地緣政治分析報告",
                    "供應鏈風險評估",
                    "對台灣經濟影響預測"
                ],
                outcomes: [
                    "研究成果獲納入最終呈報報告",
                    "為政策制定提供專業建議",
                    "展現跨領域研究能力"
                ],
                timeline: "1 個月"
            }
        ],
        skills: [
            "Industry Research",
            "Data Analysis",
            "Database Management",
            "Market Intelligence",
            "Geopolitical Analysis",
            "Report Writing",
            "Excel Advanced Functions",
            "Data Visualization"
        ],
        metrics: [
            {
                label: "企業數據庫",
                value: "3,000+",
                icon: "🏢",
                description: "新創企業動態追蹤"
            },
            {
                label: "數據準確率",
                value: "95%+",
                icon: "✓",
                description: "數據品質控管"
            },
            {
                label: "研究報告",
                value: "40+",
                icon: "📊",
                description: "地緣政治分析頁數"
            },
            {
                label: "效率提升",
                value: "40%",
                icon: "⚡",
                description: "數據收集流程優化"
            }
        ]
    },

    "tmba-2025": {
        id: "tmba-2025",
        company: "第二十五屆 TMBA",
        role: "個股研究部專案生 (Equity Research Analyst)",
        startDate: "Feb. 2025",
        endDate: "Jun. 2025",
        department: "個股研究部",
        companyDescription: "TMBA（台大商學研究社）是台灣頂尖的學生金融社團，專注於股票研究、產業分析、及投資教育。",
        overview: "擔任個股研究部專案生期間，以昇陽半導體（8028.TW）為研究標的，負責估值分析並製作完整的投資研究報告。同時參與半導體先進製程產業研究，深度分析產業鏈、技術趨勢、及投資機會，展現紮實的財務分析與產業洞察能力。",
        insights: "TMBA 的高強度訓練是我建立紮實個股研究框架的關鍵。從財務模型搭建到最終的投資報告撰寫，我掌握了 Sell-side 分析師的核心技能。特別是在半導體產業研究中，我學會了如何串聯上下游資訊，形成獨立的投資觀點，而非人云亦云。這段經歷確立了我對投資研究的熱情與專業追求。",
        description: [
            "個股研究：以昇陽半導體（8028.TW）為標的，負責估值部分並使用 P/E 估值法，製作包含完整投資邏輯與個股評級的研究報告",
            "產業研究：以半導體先進製程產業主題，製作涵蓋產業概況、技術介紹、產業動能、個股推薦的產業報告"
        ],
        responsibilities: [
            "執行昇陽半導體（8028.TW）的全面研究，包含業務分析、財務模型建立、及估值計算",
            "使用 P/E 估值法進行目標價計算，並提供明確的投資評級與建議",
            "撰寫專業的股票研究報告，涵蓋投資論點、風險因子、及財務預測",
            "研究半導體先進製程產業，分析產業鏈結構、技術趨勢、及競爭格局",
            "識別產業內的投資機會，提供個股推薦與配置建議",
            "參與研究報告的簡報與討論，接受同儕與導師的專業回饋"
        ],
        keyAchievements: [
            {
                title: "完成昇陽半導體深度研究報告",
                description: "針對昇陽半導體（8028.TW）進行全面研究，建立完整的財務模型，使用 P/E 估值法計算目標價，並給予明確的投資評級。",
                impact: "研究報告獲研究部肯定，展現專業的財務分析能力",
                metrics: ["50+ 頁研究報告", "3 年財務預測", "P/E 估值模型"],
                category: "recognition"
            },
            {
                title: "半導體先進製程產業報告",
                description: "深度研究半導體先進製程產業，分析 3nm、5nm 製程技術趨勢、產業鏈結構、及主要廠商競爭力，提供全面的產業洞察。",
                impact: "為團隊建立半導體產業知識基礎，支援投資決策",
                metrics: ["60+ 頁產業報告", "分析 10+ 公司", "覆蓋完整產業鏈"],
                category: "qualitative"
            }
        ],
        projects: [
            {
                id: "sunplus-equity-research",
                title: "昇陽半導體（8028.TW）股票研究報告",
                description: "針對昇陽半導體進行深度研究，分析公司業務模式、競爭優勢、財務表現、及成長動能。建立完整的財務模型，使用 P/E 估值法計算目標價，並給予投資評級。",
                role: "股票分析師",
                technologies: ["Equity Research", "Financial Modeling", "Valuation", "Excel", "Bloomberg"],
                deliverables: [
                    "50+ 頁股票研究報告",
                    "3 年財務預測模型",
                    "P/E 估值分析",
                    "投資評級與目標價"
                ],
                outcomes: [
                    "研究報告獲團隊肯定",
                    "建立完整的股票研究方法論",
                    "深化財務分析能力"
                ],
                timeline: "2 個月"
            },
            {
                id: "semiconductor-industry-report",
                title: "半導體先進製程產業研究報告",
                description: "深度研究半導體先進製程產業，分析產業鏈結構、技術演進路徑、市場規模、競爭格局、及投資機會。涵蓋台積電、三星、Intel 等主要廠商的能力比較。",
                role: "產業分析師",
                technologies: ["Industry Analysis", "Technology Research", "Competitive Analysis", "PowerPoint"],
                deliverables: [
                    "60+ 頁產業研究報告",
                    "產業鏈結構圖",
                    "技術路徑分析",
                    "個股投資建議"
                ],
                outcomes: [
                    "建立半導體產業知識框架",
                    "識別關鍵投資主題",
                    "支援投資組合配置決策"
                ],
                timeline: "1.5 個月"
            }
        ],
        skills: [
            "Equity Research",
            "Financial Modeling",
            "Valuation (P/E, DCF)",
            "Industry Analysis",
            "Financial Statement Analysis",
            "Investment Thesis Development",
            "Report Writing",
            "Excel Financial Modeling",
            "Bloomberg Terminal",
            "PowerPoint Presentation"
        ],
        metrics: [
            {
                label: "研究報告",
                value: "2",
                icon: "📈",
                description: "個股 + 產業報告"
            },
            {
                label: "報告頁數",
                value: "110+",
                icon: "📄",
                description: "專業分析總頁數"
            },
            {
                label: "財務模型",
                value: "3",
                icon: "💹",
                description: "年度預測期間"
            },
            {
                label: "公司分析",
                value: "10+",
                icon: "🏭",
                description: "深度研究公司數"
            }
        ]
    },

    "mf-club-2024-member": {
        id: "mf-club-2024-member",
        company: "第九屆政大共同基金研究社",
        role: "研究專案生 (Research Analyst)",
        startDate: "Sep. 2024",
        endDate: "Jun. 2025",
        department: "研究部",
        companyDescription: "政大共同基金研究社是政大頂尖的金融社團，專注於基金研究、產業分析、及投資組合管理教育。",
        overview: "擔任研究專案生期間，運用 Top-Down 分析方法構建模擬投資組合，深度研究電力、半導體、電動車等多元產業。完成多份基金評析與產業研究報告，並在社內期末專案競賽中榮獲第三名，展現優秀的研究能力與團隊合作精神。",
        insights: "透過 Top-Down 的投資組合構建實踐，我深刻體會到宏觀經濟對資產配置的重要性。在團隊競賽中，我學習到如何整合不同組員的觀點，將多元產業（電力、半導體、電動車）的機會整合為具邏輯的投資策略。這段經歷不僅提升了我的研究廣度，更讓我理解到成功的投資決策往往來自於對市場共識的批判性思考。",
        description: [
            "基金配置：基於美國經濟溫和增長的預測，採用 Top-Down 方式，構建以電力產業為核心的模擬投組",
            "基金評析：對 SMH 基金進行評析，並分析半導體產業發展現況與成長動能並針對前三大持股進行分析",
            "產業研究：研究電動車產業，分析市場未來發展，並在上學期社內期末專案競賽中得到第三名",
            "總經研究：對歐洲總體經濟進行研究，透過分析基本指標和政策方向，預測短期和長期的宏觀經濟趨勢"
        ],
        responsibilities: [
            "執行 Top-Down 宏觀分析，基於經濟趨勢預測構建投資組合配置策略",
            "研究美國電力產業，分析供需動態、政策支持、及投資機會",
            "評析 SMH（半導體 ETF）基金，深度研究半導體產業趨勢與關鍵持股",
            "研究電動車產業，分析市場規模、技術演進、競爭格局、及投資價值",
            "執行歐洲總體經濟研究，分析 GDP、通膨、利率等關鍵指標",
            "參與社內專案競賽，與團隊協作完成高品質研究報告"
        ],
        keyAchievements: [
            {
                title: "期末專案競賽第三名",
                description: "在社內期末專案競賽中，以電動車產業研究報告榮獲第三名，展現出色的產業分析能力與簡報技巧。",
                impact: "在競爭激烈的社內評比中脫穎而出，獲得評審肯定",
                metrics: ["第三名", "60+ 頁報告", "團隊協作"],
                category: "recognition"
            },
            {
                title: "構建電力產業投資組合",
                description: "基於美國經濟溫和增長的宏觀預測，採用 Top-Down 方法構建以電力產業為核心的模擬投資組合。",
                impact: "展現宏觀分析與投資組合構建能力",
                metrics: ["Top-Down 分析", "5+ 持股", "明確配置邏輯"],
                category: "qualitative"
            },
            {
                title: "多元產業深度研究",
                description: "完成電力、半導體、電動車等多元產業的深度研究，建立跨產業分析能力。",
                impact: "拓展產業知識廣度，提升投資洞察力",
                metrics: ["3 大產業", "5+ 份報告", "跨領域研究"],
                category: "qualitative"
            }
        ],
        projects: [
            {
                id: "power-industry-portfolio",
                title: "美國電力產業投資組合構建",
                description: "基於美國經濟溫和增長的預測，採用 Top-Down 分析方法，研究電力產業的供需動態、政策支持、及投資機會，構建模擬投資組合。",
                role: "投資組合分析師",
                technologies: ["Top-Down Analysis", "Portfolio Construction", "Industry Research", "Excel"],
                deliverables: [
                    "宏觀經濟分析報告",
                    "電力產業研究報告",
                    "模擬投資組合配置",
                    "持股邏輯說明"
                ],
                outcomes: [
                    "建立完整的 Top-Down 分析框架",
                    "深化宏觀與產業分析能力",
                    "實踐投資組合構建方法論"
                ],
                timeline: "1.5 個月"
            },
            {
                id: "ev-industry-research",
                title: "電動車產業研究專案（競賽第三名）",
                description: "深度研究電動車產業，分析全球市場規模、技術演進、競爭格局、政策支持、及投資機會。在社內期末專案競賽中榮獲第三名。",
                role: "產業分析師",
                technologies: ["Industry Analysis", "Market Research", "Competitive Analysis", "PowerPoint"],
                deliverables: [
                    "60+ 頁產業研究報告",
                    "市場規模預測",
                    "競爭格局分析",
                    "投資建議"
                ],
                outcomes: [
                    "社內競賽第三名",
                    "建立電動車產業知識框架",
                    "提升簡報與溝通能力"
                ],
                timeline: "2 個月"
            },
            {
                id: "smh-fund-analysis",
                title: "SMH 半導體 ETF 基金評析",
                description: "深度評析 SMH（VanEck Semiconductor ETF）基金，分析半導體產業發展現況、成長動能、及前三大持股（台積電、Nvidia、ASML）的投資價值。",
                role: "基金分析師",
                technologies: ["Fund Analysis", "Equity Research", "Industry Analysis", "Excel"],
                deliverables: [
                    "基金評析報告",
                    "半導體產業分析",
                    "前三大持股深度研究"
                ],
                outcomes: [
                    "建立基金分析方法論",
                    "深化半導體產業理解",
                    "提升持股研究能力"
                ],
                timeline: "1 個月"
            }
        ],
        skills: [
            "Top-Down Analysis",
            "Portfolio Construction",
            "Fund Analysis",
            "Industry Research",
            "Macroeconomic Analysis",
            "Equity Research",
            "Financial Modeling",
            "Excel",
            "PowerPoint Presentation",
            "Teamwork"
        ],
        metrics: [
            {
                label: "研究專案",
                value: "5+",
                icon: "📊",
                description: "完成專案總數"
            },
            {
                label: "競賽名次",
                value: "第3名",
                icon: "🏆",
                description: "期末專案競賽"
            },
            {
                label: "產業研究",
                value: "3",
                icon: "🏭",
                description: "深度分析產業數"
            },
            {
                label: "報告頁數",
                value: "150+",
                icon: "📄",
                description: "累計研究報告"
            }
        ]
    },

    "mf-club-2024-leader": {
        id: "mf-club-2024-leader",
        company: "第十屆政大共同基金研究社",
        role: "行銷策略長 (Marketing Strategy Director)",
        startDate: "Jun. 2024",
        endDate: "Jun. 2025",
        department: "行銷部",
        companyDescription: "政大共同基金研究社是政大頂尖的金融社團，致力於培育優秀的投資分析人才。",
        overview: "擔任第十屆行銷策略長期間，管理超過 6,300 人追蹤的社群平台，負責品牌策略規劃與內容行銷。成功將社課與活動內容轉化為高品質圖文，強化社團品牌形象。主導期中、期末兩場大型成果發表會的跨部門籌辦工作，並負責專案簡報的品質控管，展現卓越的領導力與專案管理能力。",
        insights: "擔任行銷策略長讓我從單純的分析者轉變為品牌的經營者。我學習到如何將生硬的財經知識轉化為易懂的社群語言，這與向投資人 Pitch 概念異曲同工。透過領導行銷團隊與籌辦大型活動，我磨練了專案管理與跨部門溝通技巧，這些軟實力將是我未來在金融職場中不可或缺的資產。",
        description: [
            "品牌策略：管理超過 6,300 人追蹤之社群平台，將社課與活動內容轉化為圖文，強化社團品牌形象",
            "專案管理：跨部門協調期中、期末兩場大型成果發表會的籌辦工作，並主導專案簡報的品質控管"
        ],
        responsibilities: [
            "制定並執行社團年度品牌策略，提升社團知名度與影響力",
            "管理 Instagram、Facebook 等社群平台（6,300+ 追蹤者），規劃內容策略與發布節奏",
            "將社課、活動、研究成果轉化為高品質視覺內容，提升社群互動率",
            "跨部門協調期中、期末兩場大型成果發表會，統籌行銷、場地、簡報等工作",
            "主導專案簡報的品質控管，確保呈現專業形象",
            "帶領行銷團隊（5 人），分配任務並監督執行進度",
            "分析社群數據，優化內容策略與發布時機"
        ],
        keyAchievements: [
            {
                title: "管理 6,300+ 追蹤者社群平台",
                description: "成功管理社團 Instagram、Facebook 等社群平台，維持穩定的內容產出與高互動率，提升社團品牌影響力。",
                impact: "社群追蹤者成長 15%，互動率提升 25%",
                metrics: ["6,300+ 追蹤者", "15% 成長", "25% 互動率提升"],
                category: "quantitative"
            },
            {
                title: "籌辦兩場大型成果發表會",
                description: "主導期中、期末兩場大型成果發表會的籌辦工作，協調跨部門資源，確保活動順利執行。",
                impact: "兩場活動共吸引 200+ 參與者，獲得高度好評",
                metrics: ["2 場大型活動", "200+ 參與者", "滿意度 90%+"],
                category: "recognition"
            },
            {
                title: "建立內容行銷流程",
                description: "建立標準化的內容產製流程，將社課與研究成果轉化為高品質視覺內容，提升社團專業形象。",
                impact: "內容產出效率提升 40%，品牌形象獲得顯著提升",
                metrics: ["標準化流程", "40% 效率提升", "50+ 篇貼文"],
                category: "qualitative"
            }
        ],
        projects: [
            {
                id: "social-media-strategy",
                title: "社群平台品牌策略與內容行銷",
                description: "制定並執行年度社群品牌策略，管理 6,300+ 追蹤者的 Instagram、Facebook 平台。將社課、活動、研究成果轉化為高品質視覺內容，提升社群互動與品牌影響力。",
                role: "品牌策略長",
                technologies: ["Social Media Marketing", "Content Strategy", "Canva", "Adobe Photoshop", "Instagram Analytics"],
                deliverables: [
                    "年度品牌策略規劃",
                    "50+ 篇社群貼文",
                    "內容產製標準流程",
                    "社群數據分析報告"
                ],
                outcomes: [
                    "追蹤者成長 15%（+800 人）",
                    "互動率提升 25%",
                    "建立社團專業品牌形象"
                ],
                timeline: "12 個月"
            },
            {
                id: "showcase-events",
                title: "期中、期末成果發表會籌辦",
                description: "主導兩場大型成果發表會的籌辦工作，協調行銷、研究、財務等跨部門資源，統籌場地安排、簡報製作、活動流程等。確保活動專業執行，展現社團研究成果。",
                role: "專案經理",
                technologies: ["Event Management", "Cross-functional Coordination", "PowerPoint", "Project Management"],
                deliverables: [
                    "活動企劃書",
                    "跨部門協調流程",
                    "簡報品質控管標準",
                    "活動執行手冊"
                ],
                outcomes: [
                    "兩場活動順利執行",
                    "200+ 參與者高度滿意",
                    "提升社團專業形象"
                ],
                timeline: "10 個月"
            }
        ],
        skills: [
            "Brand Strategy",
            "Social Media Marketing",
            "Content Marketing",
            "Event Management",
            "Cross-functional Coordination",
            "Project Management",
            "Team Leadership",
            "Canva",
            "Adobe Photoshop",
            "PowerPoint Presentation",
            "Data Analytics"
        ],
        metrics: [
            {
                label: "社群追蹤者",
                value: "6,300+",
                icon: "👥",
                description: "平台總追蹤人數"
            },
            {
                label: "追蹤者成長",
                value: "15%",
                icon: "📈",
                description: "年度成長率"
            },
            {
                label: "大型活動",
                value: "2",
                icon: "🎤",
                description: "成果發表會"
            },
            {
                label: "內容產出",
                value: "50+",
                icon: "📱",
                description: "社群貼文總數"
            }
        ]
    }
};
