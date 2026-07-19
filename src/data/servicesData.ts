export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingItem {
  planName: string;
  price: string;
  duration: string;
  features: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  location: string;
  stars: number;
}

export interface ServiceData {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  bannerImage: string;
  icon: string;
  introduction: string;
  clinicalImportance: string;
  whoNeedsThis: string[];
  benefits: string[];
  proceduresAndChecklist: string[];
  pricing: PricingItem[];
  faqs: FaqItem[];
  testimonials: TestimonialItem[];
  areasServed: string[];
}

export const servicesData: Record<string, ServiceData> = {
  "icu-at-home": {
    slug: "icu-at-home",
    title: "ICU Setup & Critical Care at Home",
    h1: "Professional ICU Setup at Home in Jaipur",
    metaTitle: "ICU Setup at Home Jaipur | Best Critical Care Caretaker | DRx",
    metaDescription: "Get hospital-like critical care at home with DRx Home Care's ICU setup in Jaipur. Fully equipped with ventilators, patient monitors, oxygen, and 24/7 ICU nurses.",
    keywords: ["ICU Setup at Home", "ICU Care Jaipur", "Home ICU Setup Jaipur", "Ventilator Rental Jaipur", "Best Caretaker Jaipur"],
    bannerImage: "/images/icu_homecare.png",
    icon: "🏥",
    introduction: "DRx Home Care specializes in bringing hospital-quality ICU and Critical Care services directly to the safety and comfort of your home. A Home ICU setup is a specialized service designed for patients who are critically ill, require continuous respiratory support, or are recovering from major surgeries or organ failures but are clinically stable enough to be managed outside a hospital environment under expert medical supervision.",
    clinicalImportance: "Managing critical patients at home requires a combination of high-tech medical machinery, specialized critical care nursing staff, and direct coordination with specialist doctors. Our Home ICU packages are customized to replicate the safety protocols, infection control guidelines, and diagnostic monitoring systems of standard hospital ICUs, leading to improved recovery rates, reduced risks of hospital-acquired infections, and significant cost savings for families.",
    whoNeedsThis: [
      "Patients requiring mechanical ventilation or advanced respiratory support (BiPAP, CPAP, HFNC).",
      "Post-operative patients recovering from major cardiac, neuro, or orthopedic surgeries.",
      "Terminally ill patients requiring continuous palliative care and pain management.",
      "Elderly patients with multi-organ disorders requiring continuous vitals monitoring.",
      "Tracheostomy or gastrostomy-dependent patients requiring frequent clinical intervention."
    ],
    benefits: [
      "Infection Control: Minimizes exposure to drug-resistant pathogens common in corporate hospital environments.",
      "Painless Monitoring: Real-time Multipara monitors track ECG, Heart Rate, SpO2, and Blood Pressure 24/7.",
      "Cost Efficiency: Replicating ICU setups at home reduces active hospitalization expenses by up to 60%.",
      "Emotional Comfort: Patients recover faster when surrounded by family members in their familiar domestic space.",
      "Professional Supervision: Daily virtual and physical audits by MD physicians and clinical coordinators."
    ],
    proceduresAndChecklist: [
      "Installation of clinical equipment including ICU Electric Beds, Multipara Monitors, Oxygen Concentrators, and Suction Machines.",
      "24/7 deployment of ICU-trained nursing staff for medication, Vitals tracking, and airway management.",
      "Strict daily charting of intake, output, lung sounds, and neurological responses.",
      "Preventive therapies including passive physiotherapy, DVT pump sleeves, and routine body positioning to prevent pressure sores.",
      "Instant access to 24/7 medical coordinators and emergency ambulance transport if vitals fluctuate."
    ],
    pricing: [
      {
        planName: "Basic ICU Monitoring Setup",
        price: "Rs. 15,000",
        duration: "per month",
        features: ["Multipara Vitals Monitor", "Oxygen Concentrator (5L)", "Manual Fowler Bed", "Daily Nursing Attendant Visits"]
      },
      {
        planName: "Advanced Ventilator Setup",
        price: "Rs. 45,000",
        duration: "per month",
        features: ["ICU Grade Ventilator / BiPAP", "ICU Electric Bed", "Cardiac Monitor + Suction Pump", "24/7 ICU Nurse Supervision"]
      }
    ],
    faqs: [
      {
        question: "Can an ICU really be set up at home safely?",
        answer: "Yes. With hospital-grade equipment, 24/7 trained ICU nurses, and regular doctor audits, we recreate a highly controlled and sterile ICU environment at your home that meets clinical safety standards."
      },
      {
        question: "What equipment is included in a home ICU setup?",
        answer: "A standard setup includes a multi-functional ICU bed, multipara monitor, oxygen system, suction machine, syringe pumps, and, if required, a ventilator or BiPAP machine."
      },
      {
        question: "Who coordinates the treatment of a home ICU patient?",
        answer: "The care is led by our specialist doctors (like Dr. Kapil Khandelwal) and coordinated by our 24/7 medical desk which supervises the on-site nurses."
      }
    ],
    testimonials: [
      {
        quote: "DRx Home Care set up an ICU at home for my father. The staff is extremely caring and professional. We are highly satisfied with their services.",
        author: "Rajesh Sharma",
        location: "Durgapura, Jaipur",
        stars: 5
      }
    ],
    areasServed: ["Durgapura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Jagatpura", "C-Scheme", "Bani Park", "Sodala", "Tonk Road"]
  },
  "nursing-care": {
    slug: "nursing-care",
    title: "Professional Nursing Care at Home",
    h1: "Best Home Nursing Services in Jaipur",
    metaTitle: "Nursing Care Jaipur | Best Home Nursing Services | DRx",
    metaDescription: "Book qualified and experienced home nurses in Jaipur. DRx Home Care offers professional nursing for post-surgical recovery, injections, and IV infusions 24/7.",
    keywords: ["Nursing Care Jaipur", "Home Nursing Jaipur", "Best Nurse in Jaipur", "Injection at Home Jaipur", "Wound Dressing Jaipur"],
    bannerImage: "/images/nursing_care.png",
    icon: "👩‍⚕️",
    introduction: "Professional Nursing Care at Home brings licensed, qualified, and clinical nurses to your doorstep. This service is designed to bridge the gap between hospital discharge and complete rehabilitation. Recovering from illnesses, injuries, or surgeries requires clinical precision that only trained medical professionals can administer, ensuring medications and therapies are delivered correctly.",
    clinicalImportance: "Home nursing reduces the burden of frequent hospital visits for basic clinical procedures. Our registered nurses are trained in critical clinical protocols, including aseptic wound care, IV catheter management, medication calculation, and emergency resuscitation (BLS/ACLS). This level of professional care reduces complication rates and accelerates post-operative wound healing.",
    whoNeedsThis: [
      "Patients recently discharged from hospitals after complex surgeries.",
      "Individuals requiring daily injections, IV infusions, or catheterization.",
      "Chronic disease patients needing insulin management or blood pressure control.",
      "Patients needing specialized feeding tube (Ryle's Tube) maintenance.",
      "Palliative care patients requiring terminal pain relief support."
    ],
    benefits: [
      "Clinical Accuracy: Safe and correct administration of prescription drugs, reducing medication errors.",
      "Surgical Recovery: Expert wound care prevents surgical site infections (SSIs) and promotes tissue healing.",
      "Convenience: Saves travel time and reduces distress for mobility-impaired patients.",
      "Continuous Tracking: Nurses monitor vitals daily, detecting early warning signs of complications.",
      "Custom Care Plans: Personalized home care plans formulated in coordination with the patient's surgeon."
    ],
    proceduresAndChecklist: [
      "Thorough clinical assessment of the patient's vitals, physical state, and prescription sheets upon arrival.",
      "Administration of medications via oral, intramuscular (IM), subcutaneous, or intravenous (IV) routes.",
      "Aseptic dressing changes for surgical wounds, diabetic ulcers, and pressure bedsores.",
      "Catheter care, tracheostomy suctioning, and enteral feeding tubes management.",
      "Education of family members on infection control, hygiene practices, and basic emergency indicators."
    ],
    pricing: [
      {
        planName: "12-Hour Nursing Shift",
        price: "Rs. 1,200",
        duration: "per day",
        features: ["Registered GNM/B.Sc. Nurse", "Medication & Injections", "Vitals Monitoring", "Basic Wound Dressing"]
      },
      {
        planName: "24-Hour Nursing Support",
        price: "Rs. 2,200",
        duration: "per day",
        features: ["Continuous Nurse Rotation", "Complete ICU/Critical Monitoring", "Ryle's Tube & Catheter Care", "Direct Doctor Coordination"]
      }
    ],
    faqs: [
      {
        question: "Are your home nurses qualified and registered?",
        answer: "Yes. All our home nurses hold GNM or B.Sc. Nursing degrees, are registered with state nursing councils, and undergo background checks."
      },
      {
        question: "Can a home nurse administer IV injections at home?",
        answer: "Yes, our nurses are fully trained and equipped to insert IV cannulas and administer IV infusions or injections at home under prescription."
      },
      {
        question: "Do you provide daily dressing services for surgical wounds?",
        answer: "Yes, we provide specialized wound care and dressing services to ensure surgical wounds heal cleanly without infections."
      }
    ],
    testimonials: [
      {
        quote: "We needed nursing care for my mother. The nurse from DRx was excellent, arrived on time, and carried out her duties with complete responsibility.",
        author: "Priya Kumari",
        location: "Shanti Nagar, Jaipur",
        stars: 5
      }
    ],
    areasServed: ["Durgapura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Jagatpura", "Gopalpura", "Shastri Nagar", "Raja Park"]
  },
  "caretaker": {
    slug: "caretaker",
    title: "Patient Caretaker & Attendant Services",
    h1: "Best Patient Caretaker in Jaipur",
    metaTitle: "Caretaker Jaipur | Best Patient Caretaker & Attendant | DRx",
    metaDescription: "Hire background-verified patient caretakers and home attendants in Jaipur. DRx Home Care provides 24/7 compassionate caretaker support for patients & seniors.",
    keywords: ["Caretaker Jaipur", "Patient Caretaker Jaipur", "Best Caretaker in Jaipur", "Home Caretaker Jaipur", "Nursing Attendant Jaipur"],
    bannerImage: "/images/hero_homecare.png",
    icon: "🤝",
    introduction: "Our Patient Caretaker and Attendant services provide non-clinical supportive care for patients, seniors, and recovering individuals. A caretaker or nursing attendant helps with Activities of Daily Living (ADLs) such as bathing, grooming, feeding, and mobility, helping patients maintain dignity and comfort during recovery.",
    clinicalImportance: "While nurses handle medical procedures, caretakers ensure the patient's daily physical environment is clean, comfortable, and safe. A dedicated attendant prevents accidental falls, ensures timely medicine administration, and helps maintain hygiene, which reduces the risk of skin infections and bedsores.",
    whoNeedsThis: [
      "Seniors who live alone and need support with daily activities.",
      "Post-surgery patients who need help moving or managing hygiene.",
      "Bedridden patients who need assistance with turning and feeding.",
      "Dementia or Alzheimer's patients who require constant supervision.",
      "Chronically ill patients needing help with routine tasks."
    ],
    benefits: [
      "ADL Support: Dedicated assistance with bathing, dressing, grooming, and toilet hygiene.",
      "Fall Prevention: Active help during transfers and walks, reducing slip and fall risks.",
      "Timely Medication: Regular reminders for oral medications as per prescriptions.",
      "Hygiene Maintenance: Regular cleaning, sheet changing, and bedpan management.",
      "Companionship: Friendly presence that supports the patient's mental well-being."
    ],
    proceduresAndChecklist: [
      "Assistance with morning routines, including oral hygiene, bathing, and hair care.",
      "Preparation and serving of nutritionally appropriate meals, and feeding support if needed.",
      "Turn scheduling for bedridden patients every 2 hours to prevent pressure sores.",
      "Bedpan emptying and diaper replacement, maintaining hygiene.",
      "Daily recording of basic parameters like temperature, pulse, and bowel movement logs."
    ],
    pricing: [
      {
        planName: "12-Hour Attendant Shift",
        price: "Rs. 600",
        duration: "per day",
        features: ["Hygiene & Grooming Support", "Mobility Assistance", "Meal Serving & Feeding", "Medication Reminders"]
      },
      {
        planName: "24-Hour Attendant Support",
        price: "Rs. 1,100",
        duration: "per day",
        features: ["Round-the-clock Caregiver", "Bedridden Positioning (Turns)", "Diaper & Bathing Care", "Routine Vitals Log"]
      }
    ],
    faqs: [
      {
        question: "What is the difference between a nurse and a caretaker?",
        answer: "Nurses perform clinical tasks like injections, IVs, and dressings. Caretakers provide non-clinical support for activities of daily living like feeding, bathing, and mobility."
      },
      {
        question: "Are your caretakers background-verified?",
        answer: "Yes, every caretaker in our team undergoes verification, identity checks, and training."
      },
      {
        question: "Can I get a caretaker for 24 hours at home?",
        answer: "Yes, we offer 24/7 caretaker services where attendants work in shifts to provide round-the-clock support."
      }
    ],
    testimonials: [
      {
        quote: "The caretaker provided by DRx was very helpful and assisted my grandfather in his daily routine with care. Highly recommended.",
        author: "Amit Meena",
        location: "Mansarovar, Jaipur",
        stars: 5
      }
    ],
    areasServed: ["Durgapura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Jagatpura", "C-Scheme", "Adarsh Nagar", "Lalkothi"]
  },
  "elder-care": {
    slug: "elder-care",
    title: "Elder Care & Senior Care Services",
    h1: "Best Elder Care Services in Jaipur",
    metaTitle: "Elder Care Jaipur | Best Caretaker for Seniors | DRx",
    metaDescription: "Compassionate elder care caretaker services in Jaipur. DRx Home Care provides dedicated senior care assistants for daily needs, hygiene, and medical support 24/7.",
    keywords: ["Elder Care Jaipur", "Senior Care Services", "Caretaker for Seniors Jaipur", "Elderly Care Jaipur", "Best Caretaker Jaipur"],
    bannerImage: "/images/elder_care.png",
    icon: "👴",
    introduction: "Our Elder Care and Senior Care services provide compassionate, dedicated daily support for senior citizens. As individuals age, managing daily activities and complex health conditions can become challenging. We assist seniors with daily tasks, medication management, and mobility support, helping them remain active and safe at home.",
    clinicalImportance: "Geriatric care requires patience and a specialized understanding of senior health needs. Our senior care attendants are trained to identify age-related emergency indicators, assist with mobility challenges, manage medications, and provide physical and emotional support, which helps promote overall well-being.",
    whoNeedsThis: [
      "Seniors who live alone and need support with daily activities.",
      "Elderly individuals recovering from illness or orthopedic injuries.",
      "Seniors needing help with routine health tracking.",
      "Patients with dementia, Parkinson's, or age-related mobility issues."
    ],
    benefits: [
      "Custom Support: Assistance tailored to the senior's health requirements.",
      "Medication Safety: Regular reminders to ensure prescriptions are followed.",
      "Fall Prevention: Support with standing, sitting, and walking.",
      "Hygiene Support: Help with bathing, grooming, and clothing changes.",
      "Mental Well-being: Companionship that helps reduce feelings of isolation."
    ],
    proceduresAndChecklist: [
      "Daily checking and logging of vital signs like blood pressure and pulse.",
      "Assistance with daily mobility, grooming, and bathing.",
      "Coordinating doctor home visits or telemedicine consultations.",
      "Organizing prescriptions and providing timely reminders.",
      "Maintaining a clean, comfortable, and safe room environment."
    ],
    pricing: [
      {
        planName: "Elderly Care Daytime Support",
        price: "Rs. 18,000",
        duration: "per month",
        features: ["12-Hour Attendant Assist", "Bathing & Grooming Support", "Nutritious Meal Serving", "Active Walks & Exercises"]
      },
      {
        planName: "24-Hour Senior Care Package",
        price: "Rs. 32,000",
        duration: "per month",
        features: ["Full-time Attendant Rotation", "Medication Management", "Companion Support", "Doctor Audit Coordination"]
      }
    ],
    faqs: [
      {
        question: "Do you provide caretakers who specialize in elder care?",
        answer: "Yes, we have attendants specifically trained in geriatric care who understand how to support senior patients."
      },
      {
        question: "Can your senior caretakers manage medication?",
        answer: "Attendants provide reminders for oral medications. If injections or IV therapy are required, we can schedule a nurse."
      }
    ],
    testimonials: [
      {
        quote: "The senior caretaker provided by DRx was very helpful for my parents. They managed the medicines and routine checks beautifully.",
        author: "Sanjay Gupta",
        location: "Vaishali Nagar, Jaipur",
        stars: 5
      }
    ],
    areasServed: ["Durgapura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Jagatpura", "Raja Park", "Civic Lines", "C-Scheme"]
  },
  "doctor-visit": {
    slug: "doctor-visit",
    title: "Specialist Doctor Home Visit",
    h1: "Doctor Visit at Home in Jaipur",
    metaTitle: "Doctor Visit at Home Jaipur | 24x7 Home Doctor Consultation | DRx",
    metaDescription: "Consult experienced specialist doctors at home in Jaipur. DRx Home Care offers general physician and specialist home visits for patients 24/7.",
    keywords: ["Doctor Visit at Home", "Home Doctor Jaipur", "General Physician Home Visit", "Neurologist Home Visit Jaipur", "Doctor Consultation Home"],
    bannerImage: "/images/doctor_visit.png",
    icon: "🩺",
    introduction: "Our Doctor Visit at Home service brings qualified general physicians and specialists to your doorstep. This service is designed for seniors, post-operative patients, and mobility-challenged individuals who find traveling to clinics difficult, ensuring they receive quality medical consultations in comfort.",
    clinicalImportance: "Consulting a physician at home provides a comprehensive clinical assessment of the patient in their home environment. This helps doctors evaluate environmental health factors, review prescriptions, and create customized care plans, reducing the risk of complications.",
    whoNeedsThis: [
      "Elderly patients who find hospital travel difficult.",
      "Post-operative patients requiring professional review.",
      "Individuals with acute, non-emergency illnesses.",
      "Chronic disease patients needing regular monitoring.",
      "Home ICU patients requiring clinical checkups."
    ],
    benefits: [
      "Comfort: Avoid travel stress and long clinic waiting times.",
      "Comprehensive Care: In-depth consultation in your own space.",
      "Reduced Exposure: Lowers the risk of hospital-acquired infections.",
      "Family Involvement: Allows family members to discuss the care plan directly.",
      "Flexible Scheduling: Visits can be coordinated based on your requirements."
    ],
    proceduresAndChecklist: [
      "Detailed clinical consultation, including reviews of medical history and current records.",
      "Physical examination checking blood pressure, pulse, temperature, and chest sounds.",
      "Reviewing current prescriptions to avoid drug interactions.",
      "Writing prescriptions or ordering home lab tests.",
      "Providing guidance to home care nurses or attendants."
    ],
    pricing: [
      {
        planName: "General Physician Visit",
        price: "Rs. 1,000",
        duration: "per visit",
        features: ["General Health Checkup", "Prescription Review", "Diagnostic Recommendations", "Dietary Guidance"]
      },
      {
        planName: "Specialist Doctor Consultation",
        price: "Rs. 2,000",
        duration: "per visit",
        features: ["Specialist Consult (Neuro, Cardiac, etc.)", "ICU Setup Audit", "Advanced Medical Review", "Direct Medical Coordination"]
      }
    ],
    faqs: [
      {
        question: "How do I book a doctor visit at home?",
        answer: "You can call us directly or book via WhatsApp. Our team will understand the patient's condition and schedule a visit."
      },
      {
        question: "Is this service available for medical emergencies?",
        answer: "For life-threatening emergencies, patients should be taken to a hospital. Our home visits are for clinical care and non-emergency support."
      }
    ],
    testimonials: [
      {
        quote: "Dr. Kapil Khandelwal visited my home to check on my father's recovery. His advice was excellent and helped us immensely.",
        author: "Nitin Vyas",
        location: "Jagatpura, Jaipur",
        stars: 5
      }
    ],
    areasServed: ["Durgapura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Jagatpura", "C-Scheme", "Bani Park", "Sodala"]
  },
  "lab-test": {
    slug: "lab-test",
    title: "Blood & Diagnostic Lab Tests at Home",
    h1: "Lab Tests & Blood Collection at Home in Jaipur",
    metaTitle: "Lab Test at Home Jaipur | Blood Collection at Home | DRx",
    metaDescription: "Book diagnostic lab tests and blood collection at home in Jaipur. DRx Home Care offers certified testing with quick, accurate online reports.",
    keywords: ["Lab Test at Home", "Blood Collection at Home", "Home Diagnostic Test Jaipur", "Blood Test Home Collection", "Lab Test Jaipur"],
    bannerImage: "/images/nursing_care.png",
    icon: "🔬",
    introduction: "Our Lab Test at Home service brings diagnostic blood collection to your doorstep. This service is designed to make regular health screenings convenient, helping patients avoid hospital visits for simple tests.",
    clinicalImportance: "Regular diagnostic tests are essential for tracking chronic health conditions. Our home collection service ensures samples are collected using aseptic techniques and transported to certified labs, helping guarantee accurate reports.",
    whoNeedsThis: [
      "Patients needing regular diagnostic tracking.",
      "Elderly individuals who find clinic visits challenging.",
      "Individuals with busy schedules seeking convenient testing.",
      "Patients requiring regular blood monitoring."
    ],
    benefits: [
      "Convenience: Get tested at home, at a time that suits you.",
      "Aseptic Collection: Safe blood collection by trained phlebotomists.",
      "Accurate Reports: Samples are processed at NABL-accredited partner labs.",
      "Online Delivery: Access test reports via email or WhatsApp.",
      "Comprehensive Panels: Choose from individual tests to full health packages."
    ],
    proceduresAndChecklist: [
      "Reviewing the doctor's test prescription.",
      "Aseptic sample collection using sterile vacutainers.",
      "Correct labeling and temperature-controlled storage of samples.",
      "Timely transport to partner laboratories for processing.",
      "Sending reports to the patient and their doctor."
    ],
    pricing: [
      {
        planName: "Basic Health Screening Panel",
        price: "Rs. 999",
        duration: "per test",
        features: ["Complete Blood Count (CBC)", "Diabetes (HbA1c)", "Kidney Function Test (KFT)", "Liver Function Test (LFT)"]
      },
      {
        planName: "Comprehensive Cardiac Panel",
        price: "Rs. 2,499",
        duration: "per test",
        features: ["Lipid Profile", "Thyroid Profile", "Cardiac Markers Test", "Electrolyte Panel"]
      }
    ],
    faqs: [
      {
        question: "How long does it take to get the test reports?",
        answer: "Most blood test reports are delivered via email or WhatsApp within 12 to 24 hours of sample collection."
      },
      {
        question: "Is fasting required for blood tests?",
        answer: "Certain tests, like lipid profiles and fasting blood sugar, require 8 to 12 hours of fasting. Our team will guide you when you book."
      }
    ],
    testimonials: [
      {
        quote: "The phlebotomist arrived on time and collected the blood sample smoothly. Got reports on WhatsApp by evening. Great service.",
        author: "Meenakshi Joshi",
        location: "Durgapura, Jaipur",
        stars: 5
      }
    ],
    areasServed: ["Durgapura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Jagatpura", "Sodala", "Tonk Road", "Raja Park"]
  },
  "medical-equipment": {
    slug: "medical-equipment",
    title: "Medical Equipment Rental & Sale",
    h1: "Medical Equipment on Rent in Jaipur",
    metaTitle: "Medical Equipment Rent Jaipur | Hospital Bed & Oxygen Concentrator | DRx",
    metaDescription: "Rent or buy hospital beds, oxygen concentrators, BiPAP, CPAP, ventilators, and vital monitors in Jaipur. DRx Home Care offers sanitized medical equipment.",
    keywords: ["Medical Equipment Rent", "Oxygen Concentrator Jaipur", "Hospital Bed Rent Jaipur", "BiPAP Machine Rent Jaipur", "Medical Equipment Jaipur"],
    bannerImage: "/images/medical_equipment.png",
    icon: "🔬",
    introduction: "Our Medical Equipment Rental and Sale service provides sanitized, clinical-grade medical devices for home care. Setting up home ICU care or supporting recovering patients requires access to the right medical equipment, which we deliver and install.",
    clinicalImportance: "Clinical medical equipment must be sanitized and checked for calibration before use. We inspect all equipment to help ensure it functions correctly, providing safe support for home care patients.",
    whoNeedsThis: [
      "Patients transitioning from hospital care to home ICU setup.",
      "Individuals recovering from orthopedic injuries.",
      "Chronic respiratory patients requiring oxygen or ventilation.",
      "Elderly individuals needing mobility support at home."
    ],
    benefits: [
      "Sanitized Devices: Every piece of equipment is sanitized before delivery.",
      "Installation Support: Guided setup by trained technicians.",
      "Cost Effective: Flexible monthly rentals avoid large upfront purchases.",
      "Quality Brands: Certified equipment from leading medical brands.",
      "Continuous Service: Dedicated maintenance support."
    ],
    proceduresAndChecklist: [
      "Sanitization and calibration check of equipment at our center.",
      "Delivery to the patient's home.",
      "Installation and check of settings.",
      "Demonstration of correct usage and safety guidelines to caregivers.",
      "Routine maintenance checks during the rental period."
    ],
    pricing: [
      {
        planName: "Oxygen Concentrator Rental",
        price: "Rs. 4,500",
        duration: "per month",
        features: ["5L Continuous Flow", "Sanitized Machine", "Free Delivery in Jaipur", "24/7 Technical Support"]
      },
      {
        planName: "ICU Electric Bed Rental",
        price: "Rs. 6,000",
        duration: "per month",
        features: ["5-Function Motorized Control", "Side Railings & Saline Stand", "Sanitized Mattress", "Installation Support"]
      }
    ],
    faqs: [
      {
        question: "Is there a security deposit for rented medical equipment?",
        answer: "Depending on the equipment model, a minimal refundable security deposit may be required. Contact us for details."
      },
      {
        question: "Do you provide delivery and setup services?",
        answer: "Yes, we provide home delivery, installation, and a usage demonstration by trained technicians in Jaipur."
      }
    ],
    testimonials: [
      {
        quote: "Rented an electric ICU bed and oxygen concentrator for my mother. The delivery was fast, and the setup was completed professionally.",
        author: "Rahul Verma",
        location: "Mansarovar, Jaipur",
        stars: 5
      }
    ],
    areasServed: ["Durgapura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Jagatpura", "C-Scheme", "Gopalpura", "Tonk Road"]
  },
  "ambulance": {
    slug: "ambulance",
    title: "24x7 Emergency Ambulance Service",
    h1: "24x7 Emergency Ambulance Service in Jaipur",
    metaTitle: "Ambulance Service Jaipur | 24x7 Emergency Ambulance | DRx",
    metaDescription: "Need an emergency ambulance in Jaipur? Call DRx Home Care's 24/7 ambulance service. Fully equipped ICU, Cardiac, and Oxygen ambulances available.",
    keywords: ["Ambulance Service Jaipur", "24x7 Ambulance", "Emergency Ambulance", "ICU Ambulance Jaipur", "Cardiac Ambulance"],
    bannerImage: "/images/ambulance_service.png",
    icon: "🚑",
    introduction: "Our 24x7 Emergency Ambulance Service provides rapid and safe medical transport for patients. Whether you require transfer to a hospital or inter-city medical transit, our ambulances are equipped to provide clinical support.",
    clinicalImportance: "Emergency patient transport requires the presence of trained medical staff and life-support equipment. Our cardiac and ICU ambulances are staffed by trained paramedics who can manage patient care during transit.",
    whoNeedsThis: [
      "Patients requiring transfer to hospitals.",
      "Critically ill patients needing ICU transport.",
      "Seniors requiring supportive medical transit.",
      "Patients needing inter-state clinical transfers."
    ],
    benefits: [
      "24/7 Availability: Continuous service dispatch.",
      "Life Support: ICU, Cardiac, and Basic Oxygen setups available.",
      "Trained Staff: Experienced paramedics and drivers.",
      "Timely Dispatch: Swift response to coordination calls.",
      "Safe Transit: Clean, sanitarily maintained vehicles."
    ],
    proceduresAndChecklist: [
      "Understanding the patient's clinical state during booking.",
      "Dispatching the appropriate category of ambulance.",
      "Continuous monitoring of vitals during transit by paramedics.",
      "Maintaining contact with the destination hospital.",
      "Safe, smooth patient transfer to the medical facility."
    ],
    pricing: [
      {
        planName: "Basic Oxygen Ambulance",
        price: "Rs. 1,500",
        duration: "base charge",
        features: ["Oxygen Cylinder Setup", "Trained Paramedic", "Basic Life Support Kit", "Jaipur City Limits Transit"]
      },
      {
        planName: "Advanced Cardiac ICU Ambulance",
        price: "Rs. 4,500",
        duration: "base charge",
        features: ["Ventilator & Multipara Monitor", "ACLS Medical Kit", "Critical Care Doctor Boarding Option", "Advanced Patient Transport"]
      }
    ],
    faqs: [
      {
        question: "What types of ambulances do you provide?",
        answer: "We provide Basic Life Support (BLS) ambulances, Cardiac ICU ambulances with ventilators, and standard oxygen patient transport vehicles."
      },
      {
        question: "Do you offer inter-city patient transport?",
        answer: "Yes, we provide outstation and inter-city patient transit services from Jaipur to other cities in Rajasthan and Delhi NCR."
      }
    ],
    testimonials: [
      {
        quote: "Excellent ambulance coordination. They arrived within 20 minutes and transported my grandfather safely to the hospital.",
        author: "Devendra Singh",
        location: "Malviya Nagar, Jaipur",
        stars: 5
      }
    ],
    areasServed: ["Durgapura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Jagatpura", "C-Scheme", "Sodala", "Tonk Road", "Bani Park"]
  },
  "physiotherapy": {
    slug: "physiotherapy",
    title: "Physiotherapy at Home",
    h1: "Professional Physiotherapy at Home in Jaipur",
    metaTitle: "Physiotherapy at Home Jaipur | Best Physiotherapist | DRx",
    metaDescription: "Get expert physiotherapy at home in Jaipur. DRx Home Care offers specialized therapists for orthopedics, neuro-rehab, paralysis, and post-surgery recovery.",
    keywords: ["Physiotherapy at Home", "Physiotherapist in Jaipur", "Home Physiotherapy Jaipur", "Neurological Physiotherapy", "Orthopedic Physiotherapy"],
    bannerImage: "/images/physiotherapy.png",
    icon: "💪",
    introduction: "Our Physiotherapy at Home service provides rehabilitation and pain management. Our physiotherapists design custom exercise programs to support mobility and recovery.",
    clinicalImportance: "Physiotherapy is essential for recovery after orthopedic surgeries, neurological events, or sports injuries. Home therapy provides care in a comfortable space, helping patients maintain consistent treatment.",
    whoNeedsThis: [
      "Patients recovering from joint replacements.",
      "Individuals with neurological conditions like stroke or paralysis.",
      "Seniors needing balance and mobility exercises.",
      "Chronic pain patients seeking relief support."
    ],
    benefits: [
      "Personalized Sessions: One-on-one therapy tailored to your needs.",
      "Comfort: Exercises performed in a comfortable, home setting.",
      "Recovery Support: Exercises designed to improve strength and range of motion.",
      "Reduced Pain: Active therapy targeting pain relief.",
      "Consistent Care: Avoids the stress of traveling to clinics."
    ],
    proceduresAndChecklist: [
      "Initial assessment of joint mobility, muscle strength, and pain levels.",
      "Designing a custom rehabilitation exercise plan.",
      "Guided therapy sessions using active and passive movements.",
      "Using therapeutic modalities like TENS or ultrasound if required.",
      "Tracking progress and adjusting the exercises accordingly."
    ],
    pricing: [
      {
        planName: "Single Orthopedic Rehab Session",
        price: "Rs. 500",
        duration: "per session",
        features: ["Initial Assessment Checkup", "Joint Mobilization Exercises", "Therapeutic Modalities (TENS)", "Home Exercise Program Chart"]
      },
      {
        planName: "Monthly Neuro Rehabilitation Package",
        price: "Rs. 12,000",
        duration: "per month",
        features: ["Daily Dedicated Sessions", "Neuro-Developmental Therapy", "Balance & Gait Re-education", "Progress Tracking Reviews"]
      }
    ],
    faqs: [
      {
        question: "What conditions can home physiotherapy treat?",
        answer: "We treat conditions including knee osteoarthritis, post-surgical stiffness, stroke rehabilitation, back pain, and geriatric mobility issues."
      },
      {
        question: "How long does a home physiotherapy session last?",
        answer: "A standard therapy session lasts between 45 and 60 minutes, depending on the patient's condition."
      }
    ],
    testimonials: [
      {
        quote: "Physiotherapy sessions at home were excellent. The therapist was very knowledgeable and my knee recovery was much faster than expected.",
        author: "Anil Joshi",
        location: "Bajrang Vihar, Jaipur",
        stars: 5
      }
    ],
    areasServed: ["Durgapura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Jagatpura", "C-Scheme", "Raja Park", "Gopalpura"]
  },
  "injection-services": {
    slug: "injection-services",
    title: "Injection Administration at Home",
    h1: "Injection Service at Home in Jaipur",
    metaTitle: "Injection at Home Jaipur | Injection Nurse Service | DRx",
    metaDescription: "Need an injection at home in Jaipur? Book DRx Home Care's certified nurses for safe intramuscular (IM) and intravenous (IV) injections under prescription.",
    keywords: ["Injection at Home", "Injection Service Jaipur", "Nurse for Injection", "IM Injection at Home", "IV Injection Service"],
    bannerImage: "/images/nursing_care.png",
    icon: "💉",
    introduction: "Our Injection Administration at Home service brings trained nurses to your doorstep for safe medicine delivery. This service is designed to make regular injections convenient, helping patients avoid hospital visits.",
    clinicalImportance: "Administering injections requires proper clinical training to avoid complications. Our registered nurses follow safety protocols, checking prescriptions and using sterile equipment.",
    whoNeedsThis: [
      "Patients requiring daily prescribed injections.",
      "Individuals needing subcutaneous or IM injections.",
      "Seniors who find travel to clinics difficult.",
      "Patients requiring regular clinical administration."
    ],
    benefits: [
      "Convenience: Save travel time for routine injections.",
      "Safety: Intramuscular or intravenous administration by trained nurses.",
      "Aseptic Technique: Use of sterile syringes and needles.",
      "Compliance: Supports regular medicine schedules.",
      "Peace of Mind: Avoid the hassle of clinic queues."
    ],
    proceduresAndChecklist: [
      "Reviewing the doctor's injection prescription sheet.",
      "Verifying patient details and checking for medication allergies.",
      "Preparing the injection site with antiseptic solution.",
      "Administering the injection via the prescribed route (IM/IV/SC).",
      "Monitoring the patient for any immediate adverse reactions."
    ],
    pricing: [
      {
        planName: "Single IM Injection Visit",
        price: "Rs. 250",
        duration: "per visit",
        features: ["GNM Nurse Home Visit", "Prescription Verification", "Sterile Syringe Usage", "Injection Site Care"]
      },
      {
        planName: "Intravenous (IV) Injection Visit",
        price: "Rs. 400",
        duration: "per visit",
        features: ["Registered GNM/B.Sc. Nurse Visit", "IV Cannula Insertion if needed", "Safe Drug Administration", "Vitals Checking before/after"]
      }
    ],
    faqs: [
      {
        question: "Do I need a doctor's prescription for home injection services?",
        answer: "Yes, our nurses only administer injections under a valid medical prescription from a qualified doctor."
      },
      {
        question: "Are syringes and needles included in the service charge?",
        answer: "Basic disposable syringes are typically included, but specific prescribed medications must be purchased beforehand."
      }
    ],
    testimonials: [
      {
        quote: "Very polite nurse who administered my daily injection without pain. Booking was simple. Highly satisfied.",
        author: "Vikram Rathore",
        location: "Vaishali Nagar, Jaipur",
        stars: 5
      }
    ],
    areasServed: ["Durgapura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Jagatpura", "C-Scheme", "Sodala", "Adarsh Nagar"]
  },
  "iv-infusion": {
    slug: "iv-infusion",
    title: "IV Infusion Setup at Home",
    h1: "IV Drip & Infusion Setup at Home in Jaipur",
    metaTitle: "IV Infusion at Home Jaipur | IV Drip Nurse Service | DRx",
    metaDescription: "Get safe intravenous (IV) drip and infusion setup at home in Jaipur. DRx Home Care offers trained clinical nurses for hydration & IV antibiotic therapy.",
    keywords: ["IV Infusion at Home", "IV Drip Service Jaipur", "Nurse for IV Drip", "Intravenous Drip Home", "Antibiotic Infusion Home"],
    bannerImage: "/images/nursing_care.png",
    icon: "💧",
    introduction: "Our IV Infusion Setup at Home service brings hydration and antibiotic therapy to your doorstep. This service is designed for patients requiring intravenous medication without hospital stays.",
    clinicalImportance: "IV infusions must be monitored to ensure correct flow rates and prevent fluid overload or reactions. Our nurses monitor the patient throughout the infusion to support safe administration.",
    whoNeedsThis: [
      "Patients requiring intravenous antibiotic therapy.",
      "Individuals needing hydration therapy.",
      "Chronic pain patients on prescribed IV therapy.",
      "Patients requiring home nutritional support."
    ],
    benefits: [
      "Clinical Care: Safe cannula insertion and monitoring by GNM nurses.",
      "Convenience: Get IV therapy at home, saving travel hassle.",
      "Flow Control: Accurate flow monitoring during administration.",
      "Sterile Techniques: Use of sterile cannulas and infusion sets.",
      "Comfortable Environment: Recover in your own space."
    ],
    proceduresAndChecklist: [
      "Reviewing the doctor's IV infusion prescription.",
      "Verifying patient details and checking drug compatibility.",
      "Inserting the IV cannula under aseptic conditions.",
      "Monitoring flow rates and patient vitals during the infusion.",
      "Safe removal of the cannula after the infusion is complete."
    ],
    pricing: [
      {
        planName: "Single IV Drip Session",
        price: "Rs. 600",
        duration: "per session",
        features: ["Registered GNM Nurse Visit", "IV Cannula Insertion", "Fluid/Drip Setup", "Continuous Monitoring (up to 2 hrs)"]
      },
      {
        planName: "Advanced IV Antibiotic Drip",
        price: "Rs. 900",
        duration: "per session",
        features: ["Registered B.Sc. Nurse Visit", "Antibiotic Drug Administration", "Vitals Log", "Catheter Care & Flush"]
      }
    ],
    faqs: [
      {
        question: "Can I get an IV drip set up for weakness at home?",
        answer: "We set up IV hydration drips for weakness only under a valid doctor's prescription stating the fluid type and dosage."
      },
      {
        question: "Do you supply the IV fluids and sets?",
        answer: "Basic IV sets and cannulas are brought by our nurses, but the specific prescribed fluids and medications should be purchased beforehand."
      }
    ],
    testimonials: [
      {
        quote: "The nurse managed my daily IV antibiotic therapy professionally at home. Saved us multiple hospital visits.",
        author: "Meera Bai",
        location: "Durgapura, Jaipur",
        stars: 5
      }
    ],
    areasServed: ["Durgapura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Jagatpura", "C-Scheme", "Gopalpura", "Raja Park"]
  },
  "wound-dressing": {
    slug: "wound-dressing",
    title: "Surgical Wound Dressing at Home",
    h1: "Wound Dressing & Surgical Care at Home in Jaipur",
    metaTitle: "Wound Dressing at Home Jaipur | Surgical Dressing Nurse | DRx",
    metaDescription: "Get surgical wound dressing at home in Jaipur. DRx Home Care offers trained clinical nurses for sterile dressings of post-surgery wounds and bedsores.",
    keywords: ["Wound Dressing at Home", "Surgical Dressing Jaipur", "Nurse for Wound Care", "Bedsore Dressing Jaipur", "Diabetic Ulcer Dressing"],
    bannerImage: "/images/nursing_care.png",
    icon: "🩹",
    introduction: "Our Surgical Wound Dressing at Home service brings sterile wound care to your doorstep. This service is designed to help patients manage post-operative wounds or bedsores cleanly and safely.",
    clinicalImportance: "Surgical wounds and ulcers require sterile dressings to prevent infections and promote healing. Our nurses use aseptic techniques to clean wounds and apply dressings, helping support a clean recovery.",
    whoNeedsThis: [
      "Post-surgery patients requiring dressing changes.",
      "Individuals with diabetic foot ulcers or chronic wounds.",
      "Bedridden patients needing bedsore care.",
      "Patients recovering from burns or traumatic injuries."
    ],
    benefits: [
      "Sterile Care: Use of sterile kits and aseptic dressing techniques.",
      "Saves Travel: Avoid painful transit to clinics for dressing changes.",
      "Healing Support: Professional cleaning promotes tissue recovery.",
      "Early Detection: Nurses check for signs of infection (redness, pus).",
      "Specialist Products: Access to advanced dressing supplies."
    ],
    proceduresAndChecklist: [
      "Assessing the wound site for healing progress or infection.",
      "Cleaning the wound using sterile saline and antiseptics.",
      "Applying the appropriate dressing layer (dry/wet/moisture-retentive).",
      "Securing the dressing with sterile bandages or tapes.",
      "Educating family members on keeping the dressing dry and clean."
    ],
    pricing: [
      {
        planName: "Basic Post-Surgical Dressing",
        price: "Rs. 350",
        duration: "per session",
        features: ["Sterile Dressing Kit", "Antiseptic Cleaning", "Standard Surgical Dressing", "GNM Nurse Visit"]
      },
      {
        planName: "Advanced Bedsore/Ulcer Dressing",
        price: "Rs. 600",
        duration: "per session",
        features: ["Clean Debridement support", "Advanced Antimicrobial Dressing", "Pressure Area Offloading Guidance", "Detailed Wound Log"]
      }
    ],
    faqs: [
      {
        question: "How often should surgical dressings be changed?",
        answer: "The frequency depends on the wound type and the doctor's instructions. Standard surgical wounds are dressed every 2 to 3 days."
      },
      {
        question: "Do your nurses perform debridement for chronic ulcers?",
        answer: "Our nurses assist with basic cleaning and surface debridement. Deep surgical debridement must be done by a surgeon."
      }
    ],
    testimonials: [
      {
        quote: "The nurse did a great job dressing my post-op wound. She used sterile gloves and clean kits. Very satisfied.",
        author: "Karan Johar",
        location: "Mansarovar, Jaipur",
        stars: 5
      }
    ],
    areasServed: ["Durgapura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Jagatpura", "Sodala", "C-Scheme", "Raja Park"]
  },
  "bedridden-care": {
    slug: "bedridden-care",
    title: "Bedridden Patient Care & Attendant Services",
    h1: "Bedridden Patient Care at Home in Jaipur",
    metaTitle: "Bedridden Patient Care Jaipur | Home Caretaker & Attendant | DRx",
    metaDescription: "Get specialized bedridden patient care in Jaipur. DRx Home Care offers trained caretakers and attendants for hygiene, positioning, and bedsore prevention.",
    keywords: ["Bedridden Patient Care", "Caretaker for Bedridden Patient", "Bedsore Prevention Jaipur", "Patient Attendant Jaipur", "Home Caretaker Jaipur"],
    bannerImage: "/images/nursing_care.png",
    icon: "🛌",
    introduction: "Our Bedridden Patient Care service provides physical and hygiene support for long-term bedridden individuals. Managing care at home requires attention to positioning, hygiene, and nutrition to support overall patient comfort.",
    clinicalImportance: "Long-term bedridden patients are at risk for complications like pressure sores, muscle atrophy, and joint stiffness. Our attendants are trained in turns scheduling, diaper management, and range-of-motion exercises, helping keep patients clean, comfortable, and safe.",
    whoNeedsThis: [
      "Patients with severe paralysis or stroke conditions.",
      "Individuals in a coma or semi-conscious states.",
      "Patients with advanced stages of dementia or Parkinson's.",
      "Seniors recovering from major fractures or surgeries."
    ],
    benefits: [
      "Hygiene Support: Help with diaper changes, sponge bathing, and mouth care.",
      "Bedsore Prevention: Turn scheduling every 2 hours to relieve pressure.",
      "Feeding Assist: Support with enteral (Ryle's Tube) or oral feeding.",
      "Active Assist: Regular range-of-motion exercises to support joints.",
      "Companionship: Supportive care to help improve quality of life."
    ],
    proceduresAndChecklist: [
      "Daily sponge bathing, skin care, and clothes changes.",
      "Turning schedule log to reposition the patient regularly.",
      "Diaper checks every 4 hours and prompt cleaning.",
      "Assistance with prescribed tube feeding or soft diets.",
      "Passive limb movements to support blood flow and joint mobility."
    ],
    pricing: [
      {
        planName: "12-Hour Bedridden Care Attendant",
        price: "Rs. 700",
        duration: "per day",
        features: ["Sponge Bath & Grooming", "Repositioning (Turns)", "Diaper Changes & Cleaning", "Feed Preparation & Serving"]
      },
      {
        planName: "24-Hour Bedridden Care Attendant",
        price: "Rs. 1,200",
        duration: "per day",
        features: ["Round-the-clock Attendant Care", "Ryle's Tube Feeding Assist", "Bedsore Risk Management", "Vitals Checking Log"]
      }
    ],
    faqs: [
      {
        question: "How do you prevent bedsores in long-term patients?",
        answer: "We use alternating pressure air mattresses and have our attendants turn the patient every 2 hours to help relieve skin pressure."
      },
      {
        question: "Do your caretakers handle tube feeding?",
        answer: "Yes, our attendants are trained to assist with administering Ryle's tube feeds under clinical guidance."
      }
    ],
    testimonials: [
      {
        quote: "Very supportive attendant who took great care of my bedridden mother. Diaper changes and bathing were managed with respect.",
        author: "Sunita Devi",
        location: "Malviya Nagar, Jaipur",
        stars: 5
      }
    ],
    areasServed: ["Durgapura", "Malviya Nagar", "Mansarovar", "Vaishali Nagar", "Jagatpura", "C-Scheme", "Raja Park", "Gopalpura"]
  }
};
