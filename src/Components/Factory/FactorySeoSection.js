import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const FactorySeoSection = () => {
  const { language } = useLanguage();

  return (
    <section className="factory-seo-section py-5 bg-white border-top border-bottom" id="factory-seo-block">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <span 
              className="d-inline-block text-uppercase fw-bold mb-2" 
              style={{ color: 'var(--primary-color)', fontSize: '14px', letterSpacing: '1.5px' }}
            >
              {language === 'ar' ? 'تصنيع وتصدير الأسماك المدخنة' : 'Smoked Fish Manufacturing & Export'}
            </span>
            
            <h2 className="fw-bold mb-4" style={{ color: 'var(--secondary-color)', fontSize: '32px' }}>
              {language === 'ar' 
                ? 'مصنع رنجة جولد فودز: الريادة في إنتاج الرنجة المدخنة الفاخرة' 
                : 'Gold Foods Herring Factory: Leaders in Premium Smoked Fish Production'}
            </h2>
            
            <p className="lead text-muted mb-4" style={{ fontSize: '17px', lineHeight: '1.8' }}>
              {language === 'ar' 
                ? 'يعتبر مصنع جولد فودز (Gold Foods) من رواد تصنيع الرنجة في مصر والشرق الأوسط. نقوم باستيراد أفضل أسماك الهيرينج (Herring) مباشرة من مياه المحيط الأطلسي الباردة والنظيفة، ليتم تجهيزها وتصنيعها داخل مصنع رنجة مجهز بأحدث التكنولوجيا الأوروبية لتدخين الأسماك.'
                : 'Gold Foods operates one of the leading herring factories in Egypt and the MENA region. We import premium Atlantic herring (Clupea harengus) directly from cold, clean waters to our specialized smoked herring factory.'}
            </p>
            
            <p className="text-muted mb-0" style={{ fontSize: '15px', lineHeight: '1.8' }}>
              {language === 'ar' 
                ? 'نهتم في مصنع رنجة جولد فودز بأدق تفاصيل الإنتاج، بدءاً من مرحلة غسيل وتمليح الرنجة بتمليح خفيف موزون يضمن سلامتها وقيمتها الغذائية، ثم مرحلة التدخين الطبيعي 100% باستخدام نشارة أخشاب الزان الطبيعية المستوردة، دون إضافة أي ألوان صناعية أو كيماويات أو مغلظات طعم. بصفتنا مصنع رنجة حاصل على شهادة الهيئة القومية لسلامة الغذاء (NFSA) وشهادات الجودة العالمية (HACCP & ISO)، نلتزم بتقديم منتجات رنجة مدخنة فاخرة (سيد البلد) تناسب السوق المحلي والتصدير الخارجي، لنكون المورد الأول لشركائنا التجاريين وموزعي الجملة الباحثين عن جودة تصنيع لا تقارن.'
                : 'At our herring factory, we use 100% natural oak and beechwood smoke to achieve a perfect golden color and authentic flavor, without using artificial colors or liquid smoke. As an ISO and HACCP certified food processing facility registered with the National Food Safety Authority (NFSA), we supply premium smoked herring (Seed El Balad) for wholesale and export partners who value compliance and world-class quality.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactorySeoSection;
