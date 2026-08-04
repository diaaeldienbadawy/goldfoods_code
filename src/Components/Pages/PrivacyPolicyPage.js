import React from 'react';
import PageHeader from '../Shared/PageHeader';
import { useLanguage } from '../../context/LanguageContext';
import './PrivacyPolicy.css';

const PrivacyPolicyPage = () => {
  const { language, t } = useLanguage();

  return (
    <div className="privacy-page-wrapper pb-5">
      <PageHeader 
        topLinks={[{ title: t('home'), like: '/' }]} 
        pageTitle={t('privacyPolicy')} 
      />

      <div className="container privacy-container py-5">
        
        {/* Section 1: Page Header & Intro Section */}
        <div className="privacy-page-header-intro p-4 p-md-5 mb-5 bg-white">
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>verified</span>
            <span className="text-primary fw-bold text-uppercase" style={{ fontSize: '12px', letterSpacing: '1px' }}>
              {language === 'en' ? 'Official Policy Statement' : 'بيان السياسة الرسمية'}
            </span>
          </div>
          <h2 className="fw-bold mb-3 fs-3 text-secondary" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
          </h2>
          <span className="badge bg-light text-secondary border py-2 px-3 rounded-pill mb-4" style={{ fontSize: '13px' }}>
            <strong>{language === 'en' ? 'Effective Date:' : 'تاريخ النفاذ:'}</strong> {language === 'en' ? 'August 2, 2026' : '2 أغسطس 2026'}
          </span>
          <p className="lead mb-0 text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
            {language === 'en' 
              ? 'Gold Foods (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, https://www.gf-egypt.com, interact with our brands, including Seed El Balad, contact us, or use our services.'
              : 'تلتزم جولد فودز ("نحن" أو "الخاصة بنا") بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها والكشف عنها وحمايتها عند زيارتك لموقعنا الإلكتروني https://www.gf-egypt.com، أو التفاعل مع علاماتنا التجارية، بما في ذلك "سيد البلد"، أو الاتصال بنا، أو استخدام خدماتنا.'
            }
          </p>
        </div>

        {/* Section 2: Data Collection Section (البنود 1 و 3) */}
        <div className="privacy-card-section bg-white">
          <div className="section-icon-header">
            <div className="icon-container">
              <span className="material-symbols-outlined">badge</span>
            </div>
            <div>
              <h3 className="section-title-text">{language === 'en' ? 'Data Collection & Cookies' : 'جمع البيانات وملفات تعريف الارتباط'}</h3>
              <p className="section-subtitle-text mb-0">{language === 'en' ? 'Items 1 & 3' : 'البنود 1 و 3'}</p>
            </div>
          </div>

          <div className="section-split-grid align-items-stretch">
            {/* Info we collect */}
            <div>
              <h4 className="fw-bold text-dark mb-3" style={{ fontSize: '16px' }}>
                {language === 'en' ? '1. Information We Collect' : '1. المعلومات التي نجمعها'}
              </h4>
              <p className="text-muted small mb-3">
                {language === 'en' ? 'We may collect the following details during your interactions:' : 'قد نقوم بجمع التفاصيل التالية أثناء تفاعلك معنا:'}
              </p>
              <ul className="custom-privacy-list">
                <li>{language === 'en' ? 'Full name' : 'الاسم الكامل'}</li>
                <li>{language === 'en' ? 'Company name' : 'اسم الشركة'}</li>
                <li>{language === 'en' ? 'Email address and Phone number' : 'عنوان البريد الإلكتروني ورقم الهاتف'}</li>
                <li>{language === 'en' ? 'Country and Business address' : 'الدولة وعنوان العمل أو الشحن'}</li>
                <li>{language === 'en' ? 'Information submitted through contact forms' : 'المعلومات المقدمة عبر نماذج الاتصال'}</li>
                <li>{language === 'en' ? 'Communications via Email, WhatsApp & Social Media' : 'المراسلات معنا عبر البريد الإلكتروني، واتساب، ومنصات السوشيال ميديا'}</li>
                <li>{language === 'en' ? 'Technical stats (IP address, Browser, Device, Cookies)' : 'الإحصاءات التقنية (عنوان IP، نوع المتصفح، معلومات الجهاز، والكوكيز)'}</li>
              </ul>
            </div>

            {/* Cookies block */}
            <div className="d-flex flex-column justify-content-between">
              <div className="callout-info-box h-100 d-flex flex-column justify-content-center">
                <h4 className="fw-bold text-dark mb-2 d-flex align-items-center gap-2" style={{ fontSize: '16px' }}>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>cookie</span>
                  {language === 'en' ? '3. Cookies & Traffic Analysis' : '3. ملفات تعريف الارتباط وتحليل حركة الزوار'}
                </h4>
                <p className="text-muted small mb-3" style={{ lineHeight: '1.6' }}>
                  {language === 'en' 
                    ? 'Our website may use cookies and similar technologies to improve your browsing experience, analyze website traffic, and enhance our services.'
                    : 'قد يستخدم موقعنا ملفات تعريف الارتباط والتقنيات المشابهة لتحسين تجربة التصفح الخاصة بك، وتحليل حركة مرور الموقع، وتعزيز خدماتنا.'
                  }
                </p>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
                  {language === 'en'
                    ? 'You may disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.'
                    : 'يمكنك تعطيل ملفات تعريف الارتباط من خلال إعدادات متصفحك. قد لا تعمل بعض ميزات الموقع بشكل صحيح إذا تم تعطيل ملفات تعريف الارتباط.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Usage & Sharing Section (البنود 2 و 4 و 6) */}
        <div className="privacy-card-section bg-white">
          <div className="section-icon-header">
            <div className="icon-container">
              <span className="material-symbols-outlined">query_stats</span>
            </div>
            <div>
              <h3 className="section-title-text">{language === 'en' ? 'Data Usage, Sharing & Transfers' : 'استخدام البيانات ومشاركتها ونقلها'}</h3>
              <p className="section-subtitle-text mb-0">{language === 'en' ? 'Items 2, 4 & 6' : 'البنود 2 و 4 و 6'}</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <h4 className="fw-bold text-dark mb-3" style={{ fontSize: '16px' }}>
                {language === 'en' ? '2. How We Use Your Information' : '2. كيف نستخدم معلوماتك'}
              </h4>
              <ul className="custom-privacy-list">
                <li>{language === 'en' ? 'Respond to inquiries and support requests' : 'الرد على الاستفسارات وطلبات دعم العملاء'}</li>
                <li>{language === 'en' ? 'Process quotations and business requests' : 'معالجة عروض الأسعار والطلبات التجارية'}</li>
                <li>{language === 'en' ? 'Improve our products and services' : 'تحسين منتجاتنا وخدماتنا'}</li>
                <li>{language === 'en' ? 'Send updates, offers, or marketing communications' : 'إرسال التحديثات أو العروض أو المراسلات التسويقية'}</li>
                <li>{language === 'en' ? 'Improve website performance & user experience' : 'تحسين أداء الموقع وتجربة المستخدم'}</li>
                <li>{language === 'en' ? 'Comply with legal and regulatory obligations' : 'الامتثال للالتزامات القانونية والتنظيمية'}</li>
              </ul>
            </div>
            
            <div className="col-md-6">
              <h4 className="fw-bold text-dark mb-3" style={{ fontSize: '16px' }}>
                {language === 'en' ? '4. Information Sharing Policy' : '4. سياسة مشاركة المعلومات'}
              </h4>
              <p className="text-muted small mb-3">
                <strong>{language === 'en' ? 'We do not sell, rent, or trade your personal information.' : 'نحن لا نبيع معلوماتك الشخصية أو نؤجرها أو نتاجر بها.'}</strong>
              </p>
              <p className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>
                {language === 'en' 
                  ? 'We may share your information only with trusted service providers assisting in our operations, government authorities when required by law, or business partners to fulfill your requests.'
                  : 'قد نشارك معلوماتك فقط مع مقدمي الخدمات الموثوقين الذين يساعدون في إدارة أعمالنا، أو الجهات الحكومية عند الاقتضاء، أو شركاء العمل لتلبية طلبك.'
                }
              </p>
              
              <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '16px' }}>
                {language === 'en' ? '6. International Data Transfers' : '6. نقل البيانات الدولي'}
              </h4>
              <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
                {language === 'en'
                  ? 'If your information is transferred outside your country of residence, we will take appropriate measures to ensure it remains protected in accordance with applicable laws.'
                  : 'إذا تم نقل معلوماتك خارج بلد إقامتك، فسنتخذ التدابير المناسبة لضمان بقائها محمية وفقاً للقوانين المعمول بها.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Security & User Rights Section (البنود 5 و 7 و 8 و 9) */}
        <div className="privacy-card-section bg-white">
          <div className="section-icon-header">
            <div className="icon-container">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <div>
              <h3 className="section-title-text">{language === 'en' ? 'Security Protocols & User Rights' : 'بروتوكولات الأمان وحقوق المستخدمين'}</h3>
              <p className="section-subtitle-text mb-0">{language === 'en' ? 'Items 5, 7, 8 & 9' : 'البنود 5 و 7 و 8 و 9'}</p>
            </div>
          </div>

          <div className="section-split-grid">
            {/* User Rights */}
            <div>
              <h4 className="fw-bold text-dark mb-3" style={{ fontSize: '16px' }}>
                {language === 'en' ? '7. Your Rights' : '7. حقوقك القانونية'}
              </h4>
              <p className="text-muted small mb-3">
                {language === 'en' ? 'Depending on your local laws, you may exercise these rights:' : 'بناءً على القوانين المحلية المعمول بها، يمكنك ممارسة هذه الحقوق:'}
              </p>
              <ul className="custom-privacy-list mb-3">
                <li>{language === 'en' ? 'Request access to your personal information' : 'طلب الوصول إلى معلوماتك الشخصية'}</li>
                <li>{language === 'en' ? 'Request correction of inaccurate information' : 'طلب تصحيح المعلومات غير الدقيقة'}</li>
                <li>{language === 'en' ? 'Request deletion of your personal data' : 'طلب حذف معلوماتك الشخصية'}</li>
                <li>{language === 'en' ? 'Withdraw consent where applicable' : 'سحب الموافقة حيثما ينطبق ذلك'}</li>
                <li>{language === 'en' ? 'Object to certain processing activities' : 'الاعتراض على بعض أنشطة معالجة البيانات'}</li>
              </ul>
            </div>

            {/* Security, Third Party, Children */}
            <div className="d-flex flex-column gap-4">
              <div>
                <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '16px' }}>
                  {language === 'en' ? '5. Data Security Measures' : '5. تدابير أمن البيانات'}
                </h4>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
                  {language === 'en'
                    ? 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
                    : 'نحن نطبق تدابير تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو الإتلاف.'
                  }
                </p>
              </div>

              <div>
                <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '16px' }}>
                  {language === 'en' ? '8. Third Party Services' : '8. خدمات الطرف الثالث'}
                </h4>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
                  {language === 'en'
                    ? 'Our website may contain links to third party websites or services. We are not responsible for their privacy practices or content.'
                    : 'قد يحتوي موقعنا على روابط لمواقع أو خدمات تابعة لأطراف ثالثة. نحن لسنا مسؤولين عن ممارسات الخصوصية أو المحتوى الخاص بهم.'
                  }
                </p>
              </div>

              <div>
                <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '16px' }}>
                  {language === 'en' ? '9. Children’s Privacy' : '9. خصوصية الأطفال'}
                </h4>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
                  {language === 'en'
                    ? 'Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children.'
                    : 'خدماتنا ليست موجهة للأطفال دون سن 13 عاماً. ونحن لا نجمع معلومات شخصية من الأطفال عن علم.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Updates & Contact Section (البنود 10 و 11) */}
        <div className="contact-callout-card p-4 p-md-5 bg-white">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '22px' }}>contact_support</span>
                <span className="text-primary fw-bold text-uppercase" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                  {language === 'en' ? '10 & 11. Policy Changes & Contact' : '10 و 11. التحديثات والتواصل المباشر'}
                </span>
              </div>
              <h3 className="contact-badge-title fw-bold mb-3">
                {language === 'en' ? 'Have Questions? Contact Gold Foods' : 'لديك أي استفسارات؟ تواصل مع جولد فودز'}
              </h3>
              <p className="text-muted mb-0" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                {language === 'en'
                  ? 'We may update this Privacy Policy from time to time. The updated version will be posted on this page with the revised effective date. If you have questions regarding this policy or data safety, please reach out to us directly.'
                  : 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر النسخة المحدثة على هذه الصفحة مع تاريخ النفاذ المحدث. إذا كان لديك أسئلة بخصوص حماية بياناتك، يرجى التواصل معنا مباشرة.'
                }
              </p>
            </div>
            
            <div className="col-lg-5">
              <div className="callout-info-box bg-white border rounded-4 p-4 shadow-sm">
                <h5 className="fw-bold text-secondary mb-3" style={{ fontSize: '16px' }}>Gold Foods</h5>
                <div className="d-flex flex-column gap-2 text-muted small">
                  <div className="d-flex align-items-center gap-2">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>public</span>
                    <span>Website: <a href="https://www.gf-egypt.com" target="_blank" rel="noopener noreferrer" className="contact-interactive-link">https://www.gf-egypt.com</a></span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>mail</span>
                    <span>Email: <a href="mailto:ceo@gf-egypt.com" className="contact-interactive-link">ceo@gf-egypt.com</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5 text-muted opacity-25" />

        <p className="text-muted text-center small mb-0 font-italic" style={{ lineHeight: '1.6' }}>
          {language === 'en' 
            ? 'This Privacy Policy applies to Gold Foods and all of its brands, including Seed El Balad.'
            : 'تنطبق سياسة الخصوصية هذه على جولد فودز وجميع علاماتها التجارية، بما في ذلك "سيد البلد".'
          }
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
