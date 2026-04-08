import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Типы для i18n
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources['en'];
  }
}

const GITHUB_URL = "https://github.com/Dani4-dev";
const CONTACT_EMAIL = "dahu4san500@gmail.com";

const resources = {
  en: {
    translation: {
      name: "Mager Daniil",
      role: "Fullstack Developer",
      about: "I am an aspiring full-stack engineer working on development with a holistic understanding of systems, using technologies such as Python, Django, React, and TypeScript.",
      cv_en_path: "Resume_Daniil.pdf",
      cv_ja_path: "履歴書_ダニイル.pdf",
      cv_modal_title: "Select Language",
      cv_en_label: "English Version",
      cv_ja_label: "Japanese Version",
      photo_path: "my-photo.png", // Добавьте путь к вашему фото здесь
      download_cv: "Download CV",
      resume_title: "Resume",
      projects_title: "Featured Projects",
      projects: [
        {
          title: "Portfolio Website",
          description: "A high-performance personal website built with Vite and Tailwind.",
          tags: ["React", "TypeScript", "Tailwind"],
          isInDevelopment: false
        },
        {
          title: "Online Store (Template)",
          description: "A group project to develop an online store using React and Node.js.",
          tags: ["React", "JavaScript", "Node.js"],
          isInDevelopment: false
        },
        {
          title: "Godot Game",
          description: "A game about a 24/7 convenience store made with Godot Engine.",
          tags: ["Godot"],
          isInDevelopment: true
        }
      ],
      experience_title: "Work Experience",
      experience: [
        {
          company: "Kamchatka State Technical University",
          title: "Software Technician",
          position: "IT Department",
          duration: "Dec 2022 - Sep 2023",
          description: "Management and maintenance of university IT infrastructure.",
          location: "Petropavlovsk-Kamchatsky, Kamchatka Krai, Russia"
        },
        {
          company: "Russian Youth Center",
          title: "Lead Specialist",
          position: "Event Organization Department",
          duration: "Sep 2021 - Sep 2022",
          description: "IT support for planning and managing cultural events.",
          location: "Petropavlovsk-Kamchatsky, Kamchatka Krai, Russia"
        },
        {
          company: "7-Eleven",
          title: "Sales Associate",
          position: "Part-time",
          duration: "Jun 2024 - Present",
          description: "Customer service and retail store operations management.",
          location: "Yokohama, Niigata, Japan"
        }
      ],
      nav_top: "About Me",
      skills_title: "Skills",
      skills: [
        {
          category: "Frontend",
          items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Bootstrap"]
        },
        {
          category: "Backend / DB",
          items: ["Python", "Django", "Node.js", "MySQL", "PostgreSQL", "MongoDB"]
        },
        {
          category: "Tools",
          items: ["Git", "Github", "Railway", "VS Code"]
        },
        {
          category: "Other",
          items: ["Godot", "MS Office"]
        }
      ],
      education_title: "Education",
      education: [
        {
          school: "Kamchatka State Technical University",
          degree: "IT Faculty",
          degreeTitle: "Bachelor's Degree",
          duration: "Sep 2017 - May 2021",
          location: "Petropavlovsk-Kamchatsky, Russia"
        },
        {
          school: "Forum Information Academy",
          degree: "Global IT Course",
          degreeTitle: "Professional Specialist",
          duration: "Apr 2025 - Mar 2027",
          location: "Niigata, Japan",
          isCurrent: true
        }
      ],
      certifications_title: "Certifications",
      certifications: [
        {
          title: "TOEIC Speaking Test (160 pts)",
          issuer: "ETS",
          date: "2024.10.20"
        },
        {
          title: "TOEIC Writing Test (150 pts)",
          issuer: "ETS",
          date: "2024.10.20"
        },
        {
          title: "TOEIC Listening & Reading (590 pts)",
          issuer: "ETS",
          date: "2024.09.14"
        },
        {
          title: "JLPT (N3)",
          issuer: "JEES / Japan Foundation",
          date: "2024.12.01"
        }
      ],
      hobbies_title: "Hobbies",
      hobbies: ["Guitar", "Game Development", "Learning Japanese", "Motion Graphics", "Graphic Design"],
      footer_built_with: "Built with React, Typescript & Tailwind",
      contact: "Contact Me",
      status_studying: "In Progress",
      status_open_to_work: "Open to work",
      self_promotion_title: "Why Work With Me?",
      self_promotion_text: "I am aiming to build a career in the IT field and am working on acquiring skills as a full-stack engineer. I have been learning both backend (Python/Django, Node.js) and frontend (HTML/CSS/JavaScript/React) technologies, and I find development with an understanding of the entire system very appealing. My strengths lie in logical problem-solving, and I have experience in API development, database design, and version control with Git. I want to grow as a team member and contribute to stable development.",
      github_link: GITHUB_URL,
      email: CONTACT_EMAIL,
      status_in_development: "In Development"
    }
  },
  ru: {
    translation: {
      name: "Магер Даниил",
      role: "Фуллстак-разработчик",
      about: "Я начинающий фулстек-разработчик, стремящийся к разработке с пониманием системы в целом, используя такие технологии, как Python, Django, React и TypeScript.",
      cv_en_path: "Resume_Daniil.pdf",
      cv_ja_path: "履歴書_ダニイル.pdf",
      cv_modal_title: "Выберите язык резюме",
      cv_en_label: "Английская версия",
      cv_ja_label: "Японская версия",
      photo_path: "my-photo.png", // Добавьте путь к вашему фото здесь
      download_cv: "Скачать резюме",
      resume_title: "Резюме",
      projects_title: "Проекты",
      projects: [
        {
          title: "Сайт-портфолио",
          description: "Высокопроизводительный личный сайт, созданный с помощью Vite и Tailwind.",
          tags: ["React", "TypeScript", "Tailwind"],
          isInDevelopment: false
        },
        {
          title: "Интернет-магазин (шаблон)",
          description: "Групповой проект по разработке интернет-магазина с использованием React и Node.js.",
          tags: ["React", "Javascript", "Node.js"],
          isInDevelopment: false
        },
        {
          title: "Игра на Godot",
          description: "Игра про круглосуточный магазин на движке Godot Engine.",
          tags: ["Godot"],
          isInDevelopment: true
        }
      ],
      experience_title: "Опыт работы",
      experience: [
        {
          company: "Камчатский государственный технический университет",
          title: "Техник-программист",
          position: "ИТ-отдел",
          duration: "Декабрь 2022 - Сентябрь 2023",
          description: "Сопровождение и администрирование ИТ-инфраструктуры университета.",
          location: "Петропавловск-Камчатский, Камчатский край, Россия"
        },
        {
          company: "Российский молодежный центр",
          title: "Главный специалист",
          position: "Отдел по организации мероприятий",
          duration: "Сентябрь 2021 - Сентябрь 2022",
          description: "Планирование и ИТ-поддержка проведения культурных мероприятий.",
          location: "Петропавловск-Камчатский, Камчатский край, Россия"
        },
        {
          company: "7-Eleven",
          title: "Продавец-консультант",
          position: "Подработка",
          duration: "Июнь 2024 - Настоящее время",
          description: "Обслуживание клиентов и управление операциями в магазине.",
          location: "Иокогама, Ниигата, Япония"
        }
      ],
      nav_top: "Обо мне",
      skills_title: "Навыки",
      skills: [
        {
          category: "Фронтенд",
          items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Bootstrap"]
        },
        {
          category: "Бэкенд / БД",
          items: ["Python", "Django", "Node.js", "MySQL", "PostgreSQL", "MongoDB"]
        },
        {
          category: "Инструменты",
          items: ["Git", "Github", "Railway", "VS Code"]
        },
        {
          category: "Прочее",
          items: ["Godot", "MS Office"]
        }
      ],
      education_title: "Образование",
      education: [
        {
          school: "Камчатский государственный технический университет",
          degree: "IT факультет",
          degreeTitle: "Бакалавр",
          duration: "Сентябрь 2017 - Май 2021",
          location: "Петропавловск-Камчатский, Россия"
        },
        {
          school: "Колледж Forum Information Academy",
          degree: "Глобальный IT курс",
          degreeTitle: "Специалист",
          duration: "Апрель 2025 - Март 2027",
          location: "Ниигата, Япония",
          isCurrent: true
        }
      ],
      certifications_title: "Сертификаты",
      certifications: [
        {
          title: "TOEIC Speaking Test (160 баллов)",
          issuer: "ETS",
          date: "20.10.2024"
        },
        {
          title: "TOEIC Writing Test (150 баллов)",
          issuer: "ETS",
          date: "20.10.2024"
        },
        {
          title: "TOEIC Listening & Reading (590 баллов)",
          issuer: "ETS",
          date: "14.09.2024"
        },
        {
          title: "JLPT (N3)",
          issuer: "JEES / Japan Foundation",
          date: "01.12.2024"
        }
      ],
      hobbies_title: "Хобби",
      hobbies: ["Игра на гитаре", "Разработка игр", "Изучение японского языка", "Моушн-графика", "Графический дизайн"],
      footer_built_with: "Сделано на React, Typescript и Tailwind",
      contact: "Связаться со мной",
      status_studying: "В процессе",
      status_open_to_work: "Открыт к предложениям",
      self_promotion_title: "Почему стоит работать со мной?",
      self_promotion_text: "Я стремлюсь построить карьеру в сфере ИТ и активно развиваю навыки фуллстак-разработчика. Я изучаю как бэкенд (Python/Django, Node.js), так и фронтенд (HTML/CSS/JavaScript/React), и меня привлекает разработка с пониманием всей системы целиком. Мои сильные стороны — логическое решение задач и опыт работы с API, проектированием баз данных и системами контроля версий (Git). Я хочу расти как часть команды и вносить вклад в стабильную разработку программных продуктов.",
      github_link: GITHUB_URL,
      email: CONTACT_EMAIL,
      status_in_development: "В разработке"
    }
  },
  ja: {
    translation: {
      name: "マゲル・ダニイル",
      role: "フルスタックエンジニア",
      about: "Python、Django、React、TypeScriptなどの技術を用いて、システム全体を俯瞰した開発に取り組んでいるフルスタックエンジニア志望です。",
      cv_en_path: "Resume_Daniil.pdf",
      cv_ja_path: "履歴書_ダニイル.pdf",
      cv_modal_title: "言語を選択してください",
      cv_en_label: "英語版",
      cv_ja_label: "日本語版",
      photo_path: "my-photo.png",
      download_cv: "履歴書をダウンロード",
      resume_title: "履歴書",
      projects_title: "プロジェクト",
      projects: [
        {
          title: "ポートフォリオサイト",
          description: "ViteとTailwind CSSを使用した、高速でモダンな個人ポートフォリオサイト。",
          tags: ["React", "TypeScript", "Tailwind"],
          isInDevelopment: false
        },
        {
          title: "オンラインショップ（テンプレート）",
          description: "ReactとNode.jsを使用したオンラインショップ開発のグループプロジェクト。",
          tags: ["React", "JavaScript", "Node.js"],
          isInDevelopment: false
        },
        {
          title: "Godotゲーム",
          description: "Godot Engineで制作された24時間営業のコンビニエンスストアに関するゲーム。",
          tags: ["Godot"],
          isInDevelopment: true
        }
      ],
      experience_title: "職務経歴",
      experience: [
        {
          company: "カムチャツカ工科大学",
          title: "プログラミング技術者",
          position: "IT部門",
          duration: "2022年12月 - 2023年09月",
          description: "大学内でのITインフラの管理・運用サポート。",
          location: "ロシア、カムチャツカ地方、ペトロパブロフスク・カムチャツキー"
        },
        {
          company: "ロシア青少年センター",
          title: "主任専門員",
          position: "文化イベント企画部",
          duration: "2021年09月 - 2022年09月",
          description: "文化イベントの企画・運営に関するITサポート業務。",
          location: "ロシア、カムチャツカ地方、ペトロパブロフスク・カムチャツキー"
        },
        {
          company: "セブンイレブン",
          title: "販売員",
          position: "アルバイト",
          duration: "2024年06月 - 現在",
          description: "接客および店舗運営業務。",
          location: "横浜市、新潟市"
        }
      ],
      nav_top: "自己紹介",
      skills_title: "スキル",
      skills: [
        {
          category: "フロントエンド",
          items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Bootstrap"]
        },
        {
          category: "バックエンド / DB",
          items: ["Python", "Django", "Node.js", "MySQL", "PostgreSQL", "MongoDB"]
        },
        {
          category: "ツール",
          items: ["Git", "Github", "Railway", "VS Code"]
        },
        {
          category: "その他",
          items: ["Godot", "MS Office"]
        }
      ],
      education_title: "学歴",
      education: [
        {
          school: "ロシアのカムチャツカ州立工科大学",
          degree: "IT学部",
          degreeTitle: "学士",
          duration: "2017年09月 - 2021年05月",
          location: "ロシア、カムチャツカ地方、ペトロパブロフスク・カムチャツキー"
        },
        {
          school: "フォーラム情報アカデミー専門学校",
          degree: "情報ソフトウェア科 グローバルITコース",
          degreeTitle: "専門士",
          duration: "2025年04月 - 2027年03月",
          location: "新潟県新潟市",
          isCurrent: true
        }
      ],
      certifications_title: "資格・証明書",
      certifications: [
        {
          title: "TOEIC Speaking Test (160点)",
          date: "2024.10.20"
        },
        {
          title: "TOEIC Writing Test (150点)",
          date: "2024.10.20"
        },
        {
          title: "TOEIC Listening & Reading (590点)",
          date: "2024.09.14"
        },
        {
          title: "日本語能力試験 (N3)",
          date: "2024.12.1"
        }
      ],
      hobbies_title: "趣味",
      hobbies: ["ギター演奏", "ゲーム開発", "日本語の学習", "モーショングラフィックス", "グラフィックデザイン"],
      footer_built_with: "React, Typescript & Tailwind CSSで制作",
      contact: "お問い合わせ",
      status_studying: "在学中",
      status_open_to_work: "お仕事募集中",
      self_promotion_title: "自己PR",
      self_promotion_text: "私はIT分野でのキャリア形成を目指し、フルスタックエンジニアとしてのスキル習得に取り組んでいます。Python・Django、Node.jsなどのバックエンドと、HTML・CSS・JavaScript・Reactのフロントエンドの両方を学び、システム全体を理解した開発に魅力を感じています。論理的な問題解決を強みとし、API開発やDB設計、Gitを用いた開発にも取り組んできました。チームの一員として成長し、安定した開発に貢献したいと考えています。",
      github_link: GITHUB_URL,
      email: CONTACT_EMAIL,
      status_in_development: "開発中"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
