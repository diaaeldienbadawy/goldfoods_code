import React from 'react';
import PageHeader from '../Shared/PageHeader';
import { useLanguage } from '../../context/LanguageContext';

const PrivacyPolicyPage = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <PageHeader 
        topLinks={[{ title: t('home'), like: '/' }]} 
        pageTitle={t('privacyPolicy')} 
      />
      <div className="container py-5 my-3" style={{ maxWidth: '900px' }}>
        <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5 bg-white">
          {language === 'en' ? (
            // English Version
            <div className="privacy-content font-inter">
              <h1 className="fw-bold mb-3 fs-3 text-secondary">Privacy Policy</h1>
              <p className="text-muted mb-4"><strong>Effective Date:</strong> August 2, 2026</p>
              
              <p className="lead mb-4 text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                Gold Foods (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, <a href="https://www.gf-egypt.com" target="_blank" rel="noopener noreferrer" className="text-primary fw-semibold">https://www.gf-egypt.com</a>, interact with our brands, including Seed El Balad, contact us, or use our services.
              </p>

              <hr className="my-4 text-muted opacity-25" />

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">1. Information We Collect</h4>
                <p className="text-muted">We may collect the following information:</p>
                <ul className="text-muted pl-4" style={{ lineHeight: '1.8' }}>
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

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">2. How We Use Your Information</h4>
                <p className="text-muted">We use your information to:</p>
                <ul className="text-muted pl-4" style={{ lineHeight: '1.8' }}>
                  <li>Respond to inquiries and customer support requests</li>
                  <li>Process quotations and business requests</li>
                  <li>Improve our products and services</li>
                  <li>Send updates, offers, or marketing communications, where permitted by law</li>
                  <li>Improve website performance and user experience</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">3. Cookies</h4>
                <p className="text-muted">
                  Our website may use cookies and similar technologies to improve your browsing experience, analyze website traffic, and enhance our services.
                </p>
                <p className="text-muted">
                  You may disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">4. Information Sharing</h4>
                <p className="text-muted">
                  We do not sell, rent, or trade your personal information.
                </p>
                <p className="text-muted">We may share your information only with:</p>
                <ul className="text-muted pl-4" style={{ lineHeight: '1.8' }}>
                  <li>Service providers assisting in operating our business</li>
                  <li>Government authorities when required by law</li>
                  <li>Business partners only when necessary to fulfill your request</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">5. Data Security</h4>
                <p className="text-muted">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p className="text-muted">
                  While we strive to protect your information, no method of internet transmission or electronic storage is completely secure.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">6. International Data Transfers</h4>
                <p className="text-muted">
                  If your information is transferred outside your country of residence, we will take appropriate measures to ensure it remains protected in accordance with applicable laws.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">7. Your Rights</h4>
                <p className="text-muted">Depending on your applicable local laws, you may have the right to:</p>
                <ul className="text-muted pl-4" style={{ lineHeight: '1.8' }}>
                  <li>Request access to your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Withdraw consent where applicable</li>
                  <li>Object to certain processing activities</li>
                </ul>
                <p className="text-muted">To exercise these rights, please contact us using the information below.</p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">8. Third Party Services</h4>
                <p className="text-muted">
                  Our website may contain links to third party websites or services. We are not responsible for their privacy practices or content.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">9. Children’s Privacy</h4>
                <p className="text-muted">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">10. Changes to This Policy</h4>
                <p className="text-muted">
                  We may update this Privacy Policy from time to time. The updated version will be posted on this page with the revised effective date.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">11. Contact Us</h4>
                <p className="text-muted">
                  If you have any questions regarding this Privacy Policy or how your information is handled, please contact:
                </p>
                <p className="text-muted mb-0 fw-semibold">Gold Foods</p>
                <p className="text-muted mb-1">Website: <a href="https://www.gf-egypt.com" target="_blank" rel="noopener noreferrer" className="text-primary">https://www.gf-egypt.com</a></p>
                <p className="text-muted mb-0">Email: <a href="mailto:ceo@gf-egypt.com" className="text-primary">ceo@gf-egypt.com</a></p>
              </div>

              <hr className="my-4 text-muted opacity-25" />

              <p className="text-muted small mb-0 font-italic">
                This Privacy Policy applies to Gold Foods and all of its brands, including Seed El Balad.
              </p>
            </div>
          ) : (
            // Arabic Version
            <div className="privacy-content font-outfit" dir="rtl">
              <h1 className="fw-bold mb-3 fs-3 text-secondary">سياسة الخصوصية</h1>
              <p className="text-muted mb-4"><strong>تاريخ النفاذ:</strong> 2 أغسطس 2026</p>
              
              <p className="lead mb-4 text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                تلتزم جولد فودز ("نحن" أو "الخاصة بنا") بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها والكشف عنها وحمايتها عند زيارتك لموقعنا الإلكتروني <a href="https://www.gf-egypt.com" target="_blank" rel="noopener noreferrer" className="text-primary fw-semibold">https://www.gf-egypt.com</a>، أو التفاعل مع علاماتنا التجارية، بما في ذلك "سيد البلد"، أو الاتصال بنا، أو استخدام خدماتنا.
              </p>

              <hr className="my-4 text-muted opacity-25" />

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">1. المعلومات التي نجمعها</h4>
                <p className="text-muted">قد نجمع المعلومات التالية:</p>
                <ul className="text-muted pr-4" style={{ lineHeight: '1.8' }}>
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

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">2. كيف نستخدم معلوماتك</h4>
                <p className="text-muted">نستخدم معلوماتك من أجل:</p>
                <ul className="text-muted pr-4" style={{ lineHeight: '1.8' }}>
                  <li>الرد على الاستفسارات وطلبات دعم العملاء</li>
                  <li>معالجة عروض الأسعار والطلبات التجارية</li>
                  <li>تحسين منتجاتنا وخدماتنا</li>
                  <li>إرسال التحديثات أو العروض أو المراسلات التسويقية، حيثما يسمح القانون بذلك</li>
                  <li>تحسين أداء الموقع وتجربة المستخدم</li>
                  <li>الامتثال للالتزامات القانونية والتنظيمية</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">3. ملفات تعريف الارتباط (Cookies)</h4>
                <p className="text-muted">
                  قد يستخدم موقعنا ملفات تعريف الارتباط والتقنيات المشابهة لتحسين تجربة التصفح الخاصة بك، وتحليل حركة مرور الموقع، وتعزيز خدماتنا.
                </p>
                <p className="text-muted">
                  يمكنك تعطيل ملفات تعريف الارتباط من خلال إعدادات متصفحك. قد لا تعمل بعض ميزات الموقع بشكل صحيح إذا تم تعطيل ملفات تعريف الارتباط.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">4. مشاركة المعلومات</h4>
                <p className="text-muted">
                  نحن لا نبيع معلوماتك الشخصية أو نؤجرها أو نتاجر بها.
                </p>
                <p className="text-muted">قد نشارك معلوماتك فقط مع:</p>
                <ul className="text-muted pr-4" style={{ lineHeight: '1.8' }}>
                  <li>مقدمي الخدمات الذين يساعدون في إدارة أعمالنا</li>
                  <li>الجهات الحكومية عندما يقتضي القانون ذلك</li>
                  <li>شركاء العمل فقط عندما يكون ذلك ضرورياً لتلبية طلبك</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">5. أمن البيانات</h4>
                <p className="text-muted">
                  نحن نطبق تدابير تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو الإتلاف.
                </p>
                <p className="text-muted">
                  بينما نسعى جاهدين لحماية معلوماتك، لا توجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة 100%.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">6. نقل البيانات الدولي</h4>
                <p className="text-muted">
                  إذا تم نقل معلوماتك خارج بلد إقامتك، فسنتخذ التدابير المناسبة لضمان بقائها محمية وفقاً للقوانين المعمول بها.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">7. حقوقك</h4>
                <p className="text-muted">بناءً على القوانين المحلية المعمول بها، قد يكون لديك الحق في:</p>
                <ul className="text-muted pr-4" style={{ lineHeight: '1.8' }}>
                  <li>طلب الوصول إلى معلوماتك الشخصية</li>
                  <li>طلب تصحيح المعلومات غير الدقيقة</li>
                  <li>طلب حذف معلوماتك</li>
                  <li>سحب الموافقة حيثما ينطبق ذلك</li>
                  <li>الاعتراض على بعض أنشطة المعالجة</li>
                </ul>
                <p className="text-muted">لممارسة هذه الحقوق، يرجى الاتصال بنا باستخدام المعلومات أدناه.</p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">8. خدمات الطرف الثالث</h4>
                <p className="text-muted">
                  قد يحتوي موقعنا على روابط لمواقع أو خدمات تابعة لأطراف ثالثة. نحن لسنا مسؤولين عن ممارسات الخصوصية أو المحتوى الخاص بهم.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">9. خصوصية الأطفال</h4>
                <p className="text-muted">
                  خدماتنا ليست موجهة للأطفال دون سن 13 عاماً. ونحن لا نجمع معلومات شخصية من الأطفال عن علم.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">10. التغييرات على هذه السياسة</h4>
                <p className="text-muted">
                  قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر النسخة المحدثة على هذه الصفحة مع تاريخ النفاذ المحدث.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="fw-bold text-dark mb-3">11. اتصل بنا</h4>
                <p className="text-muted">
                  إذا كان لديك أي أسئلة بخصوص سياسة الخصوصية هذه أو كيفية التعامل مع معلوماتك، يرجى الاتصال بـ:
                </p>
                <p className="text-muted mb-0 fw-semibold">جولد فودز (Gold Foods)</p>
                <p className="text-muted mb-1">الموقع الإلكتروني: <a href="https://www.gf-egypt.com" target="_blank" rel="noopener noreferrer" className="text-primary">https://www.gf-egypt.com</a></p>
                <p className="text-muted mb-0">البريد الإلكتروني: <a href="mailto:ceo@gf-egypt.com" className="text-primary">ceo@gf-egypt.com</a></p>
              </div>

              <hr className="my-4 text-muted opacity-25" />

              <p className="text-muted small mb-0 font-italic">
                تنطبق سياسة الخصوصية هذه على جولد فودز وجميع علاماتها التجارية، بما في ذلك "سيد البلد".
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
