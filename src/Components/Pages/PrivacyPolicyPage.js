import React, { useState } from 'react';
import PageHeader from '../Shared/PageHeader';
import { useLanguage } from '../../context/LanguageContext';
import './PrivacyPolicy.css';

const PrivacyPolicyPage = () => {
  const { language, t } = useLanguage();
  const [viewMode, setViewMode] = useState('visual'); // 'visual' or 'text'
  const [selectedSection, setSelectedSection] = useState(null);

  // Section details mapping for visual view
  const sectionsData = {
    en: [
      {
        id: 1,
        title: "1. Information We Collect",
        shortDesc: "Details on what information we gather when you interact with Gold Foods.",
        icon: "badge",
        content: (
          <div>
            <p>We may collect the following information:</p>
            <ul>
              <li>Full name</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Country</li>
              <li>Shipping or business address</li>
              <li>Information submitted through contact forms</li>
              <li>Communications with us via email, WhatsApp, Facebook, Instagram, or other social media platforms</li>
              <li>Technical information such as IP address, browser type, device information, cookies, and website usage statistics</li>
            </ul>
          </div>
        )
      },
      {
        id: 2,
        title: "2. How We Use Your Information",
        shortDesc: "How we process collected data to serve you and improve our products.",
        icon: "query_stats",
        content: (
          <div>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to inquiries and customer support requests</li>
              <li>Process quotations and business requests</li>
              <li>Improve our products and services</li>
              <li>Send updates, offers, or marketing communications, where permitted by law</li>
              <li>Improve website performance and user experience</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </div>
        )
      },
      {
        id: 3,
        title: "3. Cookies",
        shortDesc: "Information on how we use cookies to customize and optimize your experience.",
        icon: "cookie",
        content: (
          <div>
            <p>Our website may use cookies and similar technologies to improve your browsing experience, analyze website traffic, and enhance our services.</p>
            <p>You may disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.</p>
          </div>
        )
      },
      {
        id: 4,
        title: "4. Information Sharing",
        shortDesc: "Our strict policy regarding sharing data only with trusted partners.",
        icon: "share",
        content: (
          <div>
            <p>We do not sell, rent, or trade your personal information.</p>
            <p>We may share your information only with:</p>
            <ul>
              <li>Service providers assisting in operating our business</li>
              <li>Government authorities when required by law</li>
              <li>Business partners only when necessary to fulfill your request</li>
            </ul>
          </div>
        )
      },
      {
        id: 5,
        title: "5. Data Security",
        shortDesc: "The protective protocols we employ to keep your data safe.",
        icon: "verified_user",
        content: (
          <div>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            <p>While we strive to protect your information, no method of internet transmission or electronic storage is completely secure.</p>
          </div>
        )
      },
      {
        id: 6,
        title: "6. International Data Transfers",
        shortDesc: "How we handle data transfers across international borders.",
        icon: "public",
        content: (
          <div>
            <p>If your information is transferred outside your country of residence, we will take appropriate measures to ensure it remains protected in accordance with applicable laws.</p>
          </div>
        )
      },
      {
        id: 7,
        title: "7. Your Rights",
        shortDesc: "The rights you hold over your private information and how to execute them.",
        icon: "gavel",
        content: (
          <div>
            <p>Depending on your applicable local laws, you may have the right to:</p>
            <ul>
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent where applicable</li>
              <li>Object to certain processing activities</li>
            </ul>
            <p>To exercise these rights, please contact us using the information below.</p>
          </div>
        )
      },
      {
        id: 8,
        title: "8. Third Party Services",
        shortDesc: "Policy regarding links to third party sites on our website.",
        icon: "open_in_new",
        content: (
          <div>
            <p>Our website may contain links to third party websites or services. We are not responsible for their privacy practices or content.</p>
          </div>
        )
      },
      {
        id: 9,
        title: "9. Children’s Privacy",
        shortDesc: "Rules regarding protection of data for children under 13.",
        icon: "child_care",
        content: (
          <div>
            <p>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>
          </div>
        )
      },
      {
        id: 10,
        title: "10. Changes to This Policy",
        shortDesc: "How we announce updates and revisions to our privacy terms.",
        icon: "update",
        content: (
          <div>
            <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with the revised effective date.</p>
          </div>
        )
      },
      {
        id: 11,
        title: "11. Contact Us",
        shortDesc: "How to reach out to us with any questions or inquiries.",
        icon: "contact_mail",
        content: (
          <div>
            <p>If you have any questions regarding this Privacy Policy or how your information is handled, please contact:</p>
            <p className="mb-1 font-weight-bold">Gold Foods</p>
            <p className="mb-1">Website: <a href="https://www.gf-egypt.com" target="_blank" rel="noopener noreferrer" className="text-primary">https://www.gf-egypt.com</a></p>
            <p className="mb-0">Email: <a href="mailto:ceo@gf-egypt.com" className="text-primary">ceo@gf-egypt.com</a></p>
          </div>
        )
      }
    ],
    ar: [
      {
        id: 1,
        title: "1. المعلومات التي نجمعها",
        shortDesc: "تفاصيل حول المعلومات التي نجمعها عند تفاعلك مع جولد فودز.",
        icon: "badge",
        content: (
          <div>
            <p>قد نجمع المعلومات التالية:</p>
            <ul>
              <li>الاسم الكامل</li>
              <li>اسم الشركة</li>
              <li>عنوان البريد الإلكتروني</li>
              <li>رقم الهاتف</li>
              <li>الدولة</li>
              <li>عنوان الشحن أو العمل</li>
              <li>المعلومات المقدمة عبر نماذج الاتصال</li>
              <li>المراسلات معنا عبر البريد الإلكتروني، واتساب، فيسبوك، إنستغرام، أو منصات التواصل الاجتماعي الأخرى</li>
              <li>المعلومات التقنية مثل عنوان IP، نوع المتصفح، معلومات الجهاز، ملفات تعريف الارتباط (Cookies)، وإحصاءات استخدام الموقع</li>
            </ul>
          </div>
        )
      },
      {
        id: 2,
        title: "2. كيف نستخدم معلوماتك",
        shortDesc: "كيفية معالجة واستخدام البيانات المجمعة لتقديم الخدمة وتطوير منتجاتنا.",
        icon: "query_stats",
        content: (
          <div>
            <p>نستخدم معلوماتك من أجل:</p>
            <ul>
              <li>الرد على الاستفسارات وطلبات دعم العملاء</li>
              <li>معالجة عروض الأسعار والطلبات التجارية</li>
              <li>تحسين منتجاتنا وخدماتنا</li>
              <li>إرسال التحديثات أو العروض أو المراسلات التسويقية، حيثما يسمح القانون بذلك</li>
              <li>تحسين أداء الموقع وتجربة المستخدم</li>
              <li>الامتثال للالتزامات القانونية والتنظيمية</li>
            </ul>
          </div>
        )
      },
      {
        id: 3,
        title: "3. ملفات تعريف الارتباط (Cookies)",
        shortDesc: "معلومات حول كيفية استخدامنا لملفات تعريف الارتباط لتخصيص وتحسين تجربتك.",
        icon: "cookie",
        content: (
          <div>
            <p>قد يستخدم موقعنا ملفات تعريف الارتباط والتقنيات المشابهة لتحسين تجربة التصفح الخاصة بك، وتحليل حركة مرور الموقع، وتعزيز خدماتنا.</p>
            <p>يمكنك تعطيل ملفات تعريف الارتباط من خلال إعدادات متصفحك. قد لا تعمل بعض ميزات الموقع بشكل صحيح إذا تم تعطيل ملفات تعريف الارتباط.</p>
          </div>
        )
      },
      {
        id: 4,
        title: "4. مشاركة المعلومات",
        shortDesc: "سياستنا الصارمة بخصوص عدم بيع أو تأجير بياناتك ومشاركتها فقط مع الشركاء الموثوقين.",
        icon: "share",
        content: (
          <div>
            <p>نحن لا نبيع معلوماتك الشخصية أو نؤجرها أو نتاجر بها.</p>
            <p>قد نشارك معلوماتك فقط مع:</p>
            <ul>
              <li>مقدمي الخدمات الذين يساعدون في إدارة أعمالنا</li>
              <li>الجهات الحكومية عندما يقتضي القانون ذلك</li>
              <li>شركاء العمل فقط عندما يكون ذلك ضرورياً لتلبية طلبك</li>
            </ul>
          </div>
        )
      },
      {
        id: 5,
        title: "5. أمن البيانات",
        shortDesc: "بروتوكولات الحماية والتدابير التقنية والتنظيمية المطبقة لحفظ بياناتك.",
        icon: "verified_user",
        content: (
          <div>
            <p>نحن نطبق تدابير تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو الإتلاف.</p>
            <p>بينما نسعى جاهدين لحماية معلوماتك، لا توجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة 100%.</p>
          </div>
        )
      },
      {
        id: 6,
        title: "6. نقل البيانات الدولي",
        shortDesc: "طريقتنا في التعامل مع نقل المعلومات خارج حدود بلد إقامتك.",
        icon: "public",
        content: (
          <div>
            <p>إذا تم نقل معلوماتك خارج بلد إقامتك، فسنتخذ التدابير المناسبة لضمان بقائها محمية وفقاً للقوانين المعمول بها.</p>
          </div>
        )
      },
      {
        id: 7,
        title: "7. حقوقك القانونية",
        shortDesc: "الحقوق الممنوحة لك للتحكم في بياناتك الشخصية وكيفية ممارستها.",
        icon: "gavel",
        content: (
          <div>
            <p>بناءً على القوانين المحلية المعمول بها، قد يكون لديك الحق في:</p>
            <ul>
              <li>طلب الوصول إلى معلوماتك الشخصية</li>
              <li>طلب تصحيح المعلومات غير الدقيقة</li>
              <li>طلب حذف معلوماتك</li>
              <li>سحب الموافقة حيثما ينطبق ذلك</li>
              <li>الاعتراض على بعض أنشطة المعالجة</li>
            </ul>
            <p>لممارسة هذه الحقوق، يرجى الاتصال بنا باستخدام المعلومات أدناه.</p>
          </div>
        )
      },
      {
        id: 8,
        title: "8. خدمات الطرف الثالث",
        shortDesc: "إخلاء المسؤولية بخصوص روابط الخدمات والمواقع التابعة لجهات خارجية.",
        icon: "open_in_new",
        content: (
          <div>
            <p>قد يحتوي موقعنا على روابط لمواقع أو خدمات تابعة لأطراف ثالثة. نحن لسنا مسؤولين عن ممارسات الخصوصية أو المحتوى الخاص بهم.</p>
          </div>
        )
      },
      {
        id: 9,
        title: "9. خصوصية الأطفال",
        shortDesc: "تعهداتنا بخصوص عدم جمع معلومات شخصية لمن هم دون سن 13 عاماً.",
        icon: "child_care",
        content: (
          <div>
            <p>خدماتنا ليست موجهة للأطفال دون سن 13 عاماً. ونحن لا نجمع معلومات شخصية من الأطفال عن علم.</p>
          </div>
        )
      },
      {
        id: 10,
        title: "10. التغييرات على هذه السياسة",
        shortDesc: "آلية إشعارك بأي تحديثات أو تعديلات تطرأ على سياسة الخصوصية.",
        icon: "update",
        content: (
          <div>
            <p>قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر النسخة المحدثة على هذه الصفحة مع تاريخ النفاذ المحدث.</p>
          </div>
        )
      },
      {
        id: 11,
        title: "11. اتصل بنا",
        shortDesc: "طرق التواصل معنا لأي استفسارات تتعلق بسرية معلوماتك.",
        icon: "contact_mail",
        content: (
          <div>
            <p>إذا كان لديك أي أسئلة بخصوص سياسة الخصوصية هذه أو كيفية التعامل مع معلوماتك، يرجى الاتصال بـ:</p>
            <p className="mb-1 font-weight-bold">جولد فودز (Gold Foods)</p>
            <p className="mb-1">الموقع الإلكتروني: <a href="https://www.gf-egypt.com" target="_blank" rel="noopener noreferrer" className="text-primary">https://www.gf-egypt.com</a></p>
            <p className="mb-0">البريد الإلكتروني: <a href="mailto:ceo@gf-egypt.com" className="text-primary">ceo@gf-egypt.com</a></p>
          </div>
        )
      }
    ]
  };

  const currentSections = sectionsData[language] || sectionsData['en'];

  return (
    <div className="privacy-page-container pb-5">
      <PageHeader 
        topLinks={[{ title: t('home'), like: '/' }]} 
        pageTitle={t('privacyPolicy')} 
      />

      <div className="container py-5">
        {/* Toggle and Intro Row */}
        <div className="row align-items-center mb-5 justify-content-between g-4">
          <div className="col-md-7">
            <div className="intro-card p-4">
              <span className="text-primary fw-bold text-uppercase d-block mb-1" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                {language === 'en' ? 'Data Protection' : 'حماية البيانات'}
              </span>
              <p className="mb-0 text-muted" style={{ fontSize: '15px' }}>
                {language === 'en' 
                  ? "At Gold Foods, we value your privacy. Read our interactive policy below or switch to document view for the standard legal version."
                  : "نحن في جولد فودز نثمن خصوصيتك. يمكنك استعراض سياستنا التفاعلية أدناه أو التبديل لعرض المستند الكامل لقراءة النص القانوني القياسي."
                }
              </p>
            </div>
          </div>
          <div className="col-md-4 text-md-end">
            <div className="btn-group rounded-3 overflow-hidden shadow-sm" role="group">
              <button 
                type="button" 
                className={`btn view-toggle-btn d-flex align-items-center gap-2 ${viewMode === 'visual' ? 'active' : ''}`}
                onClick={() => setViewMode('visual')}
              >
                <span className="material-symbols-outlined fs-5">grid_view</span>
                {language === 'en' ? 'Interactive Guide' : 'دليل تفاعلي'}
              </button>
              <button 
                type="button" 
                className={`btn view-toggle-btn d-flex align-items-center gap-2 ${viewMode === 'text' ? 'active' : ''}`}
                onClick={() => setViewMode('text')}
              >
                <span className="material-symbols-outlined fs-5">description</span>
                {language === 'en' ? 'Full Document' : 'المستند الكامل'}
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'visual' ? (
          /* Visual Interactive Grid Mode */
          <div className="privacy-grid animate-fade-in">
            {currentSections.map((section, index) => (
              <div 
                key={section.id} 
                className={`card-animate-in card-delay-${(index % 6) + 1}`}
                onClick={() => setSelectedSection(section)}
              >
                <div className="visual-card">
                  <div className="icon-box">
                    <span className="material-symbols-outlined">{section.icon}</span>
                  </div>
                  <h3 className="visual-card-title fw-bold">{section.title}</h3>
                  <p className="visual-card-desc mb-0">{section.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Standard Full Document Mode */
          <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5 bg-white animate-fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="privacy-content" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <h1 className="fw-bold mb-3 fs-3 text-secondary">
                {language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
              </h1>
              <p className="text-muted mb-4">
                <strong>{language === 'en' ? 'Effective Date:' : 'تاريخ النفاذ:'}</strong> {language === 'en' ? 'August 2, 2026' : '2 أغسطس 2026'}
              </p>
              
              <p className="lead mb-5 text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                {language === 'en' 
                  ? 'Gold Foods (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, https://www.gf-egypt.com, interact with our brands, including Seed El Balad, contact us, or use our services.'
                  : 'تلتزم جولد فودز ("نحن" أو "الخاصة بنا") بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها والكشف عنها وحمايتها عند زيارتك لموقعنا الإلكتروني https://www.gf-egypt.com، أو التفاعل مع علاماتنا التجارية، بما في ذلك "سيد البلد"، أو الاتصال بنا، أو استخدام خدماتنا.'
                }
              </p>

              {currentSections.map((section) => (
                <div key={section.id} className="mb-5">
                  <h4 className="fw-bold text-dark mb-3 border-bottom pb-2" style={{ fontSize: '1.15rem' }}>
                    {section.title}
                  </h4>
                  <div className="text-muted pl-2" style={{ lineHeight: '1.8' }}>
                    {section.content}
                  </div>
                </div>
              ))}

              <hr className="my-4 text-muted opacity-25" />

              <p className="text-muted small mb-0 font-italic">
                {language === 'en' 
                  ? 'This Privacy Policy applies to Gold Foods and all of its brands, including Seed El Balad.'
                  : 'تنطبق سياسة الخصوصية هذه على جولد فودز وجميع علاماتها التجارية، بما في ذلك "سيد البلد".'
                }
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Details Lightbox Modal */}
      {selectedSection && (
        <div className="privacy-modal-overlay" onClick={() => setSelectedSection(null)}>
          <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
            <div className="privacy-modal-header d-flex justify-content-between align-items-center p-4">
              <h5 className="fw-bold text-secondary mb-0 d-flex align-items-center gap-2">
                <span className="material-symbols-outlined text-primary">{selectedSection.icon}</span>
                {selectedSection.title}
              </h5>
              <button 
                type="button" 
                className="btn-close shadow-none border-0 bg-transparent fs-5 text-muted" 
                onClick={() => setSelectedSection(null)}
                style={{ cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>
            <div className="privacy-modal-body p-4 text-muted">
              {selectedSection.content}
            </div>
            <div className="p-3 border-top text-end bg-light rounded-bottom-4">
              <button 
                type="button" 
                className="btn btn-secondary px-4 py-2 rounded-3 border-0 fw-semibold"
                onClick={() => setSelectedSection(null)}
                style={{ fontSize: '14px' }}
              >
                {language === 'en' ? 'Close' : 'إغلاق'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicyPage;
