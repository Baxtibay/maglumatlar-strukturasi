const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "Bir xil tipdagi elementlar majmuasi",
    a: "#Massiv",
    b: "Yozuv",
    c: "Jadval",
    d: "To’plam"
  },
  {
    quostion: "Chiziqsiz iyerarxik bog’langan ma’lumotlar tuzilmasi – bu …",
    a: "#Daraxt",
    b: "Graf",
    c: "Lug’at",
    d: "Ro’yxat"
  },
  {
    quostion: "35, 27, 5,78, 29, 43 sonlaridan hosil qilingan binar daraxt balandligi nechaga teng",
    a: "#3",
    b: "4",
    c: "2",
    d: "1"
  },
  {
    quostion: "Qaysi biri false kalit so’ziga mos qiymatini aniqlaydi?",
    a: "#0",
    b: "1",
    c: "-1",
    d: "66"
  },
  {
    quostion: "Yarimstatik ma’lumotlar tuzilmasiga nimalar kiradi?",
    a: "#Stek, Dek, Navbat",
    b: "Stek, Massiv",
    c: "Graf. Vektor",
    d: "Yozuv, Jadva"
  },
  {
    quostion: "... – bu boshi va oxiri tutashuvchi tugundan iborat yo’l.",
    a: "#Halqa",
    b: "Yo’l",
    c: "Ilmoq",
    d: "Daraja"
  },
  {
    quostion: "Faylning ma’lumotlar tarkibini va dasturiy ta’minotini aniqlovchi ko’rsatkich",
    a: "#Kengaytma",
    b: "Ism",
    c: "Atribut",
    d: "Yo’l"
  },
  {
    quostion: "Shartli operator if tanasi qachon bajariladi?",
    a: "#rost (true)",
    b: "yolg’on (false)",
    c: "Doimo bajariladi",
    d: "Hyech qachon bajarilmaydi"
  },
  {
    quostion: "Qaysi kalit so’z butun sonli o’zgaruvchi faqat musbat qiymatlarni qabul qilishini ko’rsatadi?",
    a: "#unsigned",
    b: "positive",
    c: "extern",
    d: "signed"
  },
  {
    quostion: "Algoritm nima?",
    a: "#amallar ketma-ketligi",
    b: "Fayllarga murojaat",
    c: "Obyektlar majmuasini ifodalash",
    d: "To’plam elementlarini ifodalash"
  },
  {
    quostion: "C++ tilida tuzilmani yaratish uchun ishlatiladigan kalit so’zi",
    a: "#struct",
    b: "structure",
    c: "record",
    d: "object"
  },
  {
    quostion: "Ma’lumotlar tuzilmasi nima",
    a: "#bu ma’lumot elementlari va ular orasidagi munosabatlar majmuasi",
    b: "bu ma’lumot elementlari majmuasi",
    c: "bu elementlar orasidagi munosabatlar amali",
    d: "bu ma’lumot elementlari va ular orasidagi relyasion munosabatlar majmuasi"
  },
  {
    quostion: "Qaysi biri true kalit so’ziga mos qiymatini aniqlaydi?",
    a: "#1",
    b: "0",
    c: "-1",
    d: "66"
  },
  {
    quostion: "INT turi uchun qaysi amallar o’rinli",
    a: "#qo’shish, ayirish, butun sonli bo’lish, qoldiqli bo’lish",
    b: "qo’shish, ayirish, bo’lish, mod, konkatenasiya",
    c: "ko’paytirish, ayirish, konkatenasiya",
    d: "ko’paytirish, ayirish, div, konkatenasiya"
  },
  {
    quostion: "FLOAT turi uchun qaysi amallar o’rinli",
    a: "#qo’shish, ayrish, ko’paytirish, bo’lish",
    b: "qo’shish, ayrish, bo’lish, mod",
    c: "ko’paytirish, ayrish, konkatenasiya",
    d: "qo’shish, ayrish, div, mod"
  },
  {
    quostion: "Massivning oxirgi elemenning tartib raqami nimaga teng bo’ladi, agar massiv o’lchami 19 teng bo’lsa?",
    a: "#18",
    b: "19",
    c: "tartib raqami dasturchi aniqlaydi",
    d: "tartib raqami cheksiz bo’ladi"
  },
  {
    quostion: "Ma’lumotlarni kompyuter xotirasda akslantirish nechta bosqichdan iborat?",
    a: "#3",
    b: "4",
    c: "5",
    d: "6"
  },
  {
    quostion: "Ma’lumotlar tuzilmasi matematik bosqichda ...",
    a: "#konkret obyektning qayta ishlash, ularning xussusiyatlari va munosabatlarini tadqiq qilinadi.",
    b: "kompyuter xotirasida ma’lumotlarni aks ettirilishi tadqiq qilinadi.",
    c: "berilgan talabalar bo’yicha algoritmni ishlab chiqilishi tadqiq qilinadi.",
    d: "dasturni yaratish jarayoni tadqiq qilinadi."
  },
  {
    quostion: "Ma’lumotlar tuzilmalari tartibiga ko’ra qo’yidagilarga klassifikasiyalanadi",
    a: "#Chiziqli va chiziqsiz",
    b: "Statik, yarimstatik va dinamik",
    c: "Bog’lamli va bog’lamsiz",
    d: "Oddiy va murakkab"
  },
  {
    quostion: "Ma’lumotlar tuzilmasi mantiqiy bosqichda ...",
    a: "#berilgan talabalar bo’yicha algoritmni ishlab chiqilishi tadqiq qilinadi.",
    b: "kompyuter xotirasida ma’lumotlarni aks ettirilishi tadqiq qilinadi.",
    c: "konkret obyektning qayta ishlash, ularning xussusiyatlari va munosabatlarini tadqiq qilinadi.",
    d: "dasturni yaratish jarayoni tadqiq qilinadi."
  },
  {
    quostion: "Ma’lumotlar tuzilmasi fizik bosqichda ...",
    a: "#kompyuter xotirasida ma’lumotlarni aks ettirilishi tadqiq qilinadi.",
    b: "konkret obyektning qayta ishlash, ularning xussusiyatlari va munosabatlarini tadqiq qilinadi.",
    c: "berilgan talabalar bo’yicha algoritmni ishlab chiqilishi tadqiq qilinadi.",
    d: "dasturni yaratish jarayoni tadqiq qilinadi."
  },
  {
    quostion: "Bir xil tipdagi o’zaro takrorlanmaydigan elementlardan iborat majmua",
    a: "#To’plam",
    b: "Massiv",
    c: "Yozuv",
    d: "Jadval"
  },
  {
    quostion: "Turli tipdagi ma’lumotlardan qanday tuzilma xosil qilinadi?",
    a: "#Yozuv",
    b: "Massiv",
    c: "To’plam",
    d: "Jadval"
  },
  {
    quostion: "Turli tipdagi ma’lumot maydonlardan iborat tartibli tuzilmasi",
    a: "#Jadval",
    b: "Massiv",
    c: "Yozuv",
    d: "To’plam"
  },
  {
    quostion: "Xotirani dinamik ajratish uchun kalit so’zini ko’rsating",
    a: "#new",
    b: "create",
    c: "make",
    d: "value"
  },
  {
    quostion: "Dinamik xotirani bo’shatish uchun kalit so’zini ko’rsating",
    a: "#delete",
    b: "clear",
    c: "free",
    d: "cls"
  },
  {
    quostion: "Stekdan yuqori elementini o’qitib olish funksiyasi qanday belgilanadi",
    a: "#Top",
    b: "Pop",
    c: "Push",
    d: "Empty"
  },
  {
    quostion: "Ma’lumotlar tuzilmalari bog’lanishiga ko’ra qo’yidagilarga klassifikasiyalanadi",
    a: "#Bog’lamli va bog’lamsiz",
    b: "Statik, yarimstatik va dinamik",
    c: "Chiziqli va chiziqsiz",
    d: "Oddiy va murakkab"
  },
  {
    quostion: "Ma’lumotlar tuzilmalari vaqt o’zgaruvchanligi yoki dastur bajarilishi jarayoniga ko’ra qo’yidagilarga klassifikasiyalanadi",
    a: "#Statik, yarimstatik va dinamik",
    b: "Chiziqli va chiziqsiz",
    c: "Bog’lamli va bog’lamsiz",
    d: "Oddiy va murakkab"
  },
  {
    quostion: "Kompyuter xotirasida binar daraxtni qanday ko’rinishda tasvirlash qulay",
    a: "#bog’langan chiziqsiz ro’yxatlar",
    b: "massivlar",
    c: "jadvallar",
    d: "bog’langan chiziqli ro’yxatlar"
  },
  {
    quostion: "Dastur bajarilish jarayonida xotira xajmi bir xil bo’lgan oddiy va asosiy tuzilma to’plamlariga ... deyiladi.",
    a: "#Statik ma’lumotlar tuzilmasi",
    b: "Dinamik ma’lumotlar tuzilmasi",
    c: "Yarimstatik ma’lumotlar tuzilmasi",
    d: "Rekursiv ma’lumotlar tuzilmasi"
  },
  {
    quostion: "Stek tuzilmasida qanday hizmat ko’rsatish turi qullaniladi?",
    a: "#LIFO",
    b: "FIFO",
    c: "FILO",
    d: "LILO"
  },
  {
    quostion: "Navbat tuzilmasida qanday hizmat ko’rsatish turi qullaniladi?",
    a: "#FIFO",
    b: "LIFO",
    c: "FILO",
    d: "LILO"
  },
  {
    quostion: "Stekga yangi element qushish funksiyasi qanday belgilanadi",
    a: "#Push",
    b: "Pop",
    c: "Top",
    d: "Empty"
  },
  {
    quostion: "Stekdan yuqori elementini o’chirish funksiyasi qanday belgilanadi",
    a: "#Pop",
    b: "Push",
    c: "Top",
    d: "Empty"
  },
  {
    quostion: "Dastur bajarilish jarayonida xotira xajmi statik belgilanadi va deskriptor-ko’rsatkich orqali foydalanilgan tuzilma to’plamlariga ... deyiladi.",
    a: "#Yarimstatik ma’lumotlar tuzilmasi",
    b: "Statik ma’lumotlar tuzilmasi",
    c: "Dinamik ma’lumotlar tuzilmasi",
    d: "Rekursiv ma’lumotlar tuzilmasi"
  },
  {
    quostion: "Stek bu ...",
    a: "#chiziqli ma’lumotlar tuzilmasi bo’lib, ma’lumotlarni kiritish va chiqarish uning bir tomonidan amalga oshiriladi",
    b: "shunday tuzilmaki, u yelementlar qo’shilishi bilan kengayib boradi va elementlarni faqatgina bir tomondan qabul qiladi",
    c: "chiziqli ma’lumotlar tuzilmasi bo’lib, ma’lumotlarni kiritish va chiqarish uning ikki tomonlama amalga oshiriladi",
    d: "chiziqli ma’lumotlar tuzilmasi bo’lib, ma’lumotlarni kiritish va chiqarish uning faqat o’rtasiga amalga oshiriladi"
  },
  {
    quostion: "Navbat bu...",
    a: "#shunday tuzilmaki, u yelementlar qo’shilishi bilan kengayib boradi va elementlarni faqatgina bir tomondan qabul qiladi",
    b: "chiziqli ma’lumotlar tuzilmasi bo’lib, ma’lumotlarni kiritish va chiqarish uning bir tomonidan amalga oshiriladi",
    c: "chiziqli ma’lumotlar tuzilmasi bo’lib, ma’lumotlarni kiritish va chiqarish uning ikki tomonlama amalga oshiriladi",
    d: "chiziqli ma’lumotlar tuzilmasi bo’lib, ma’lumotlarni kiritish va chiqarish uning faqat o’rtasiga amalga oshiriladi"
  },
  {
    quostion: "Daraxt uzunligi – bu ...",
    a: "#tugunlar soni",
    b: "daraxt bosqichlari soni",
    c: "oraliq elementlari soni",
    d: "barglar soni"
  },
  {
    quostion: "Dek bu ...",
    a: "#chiziqli ma’lumotlar tuzilmasi bo’lib, ma’lumotlarni kiritish va chiqarish uning ikki tomonlama amalga oshiriladi",
    b: "shunday tuzilmaki, u yelementlar qo’shilishi bilan kengayib boradi va elementlarni faqatgina bir tomondan qabul qiladi",
    c: "chiziqli ma’lumotlar tuzilmasi bo’lib, ma’lumotlarni kiritish va chiqarish uning bir tomonidan amalga oshiriladi",
    d: "chiziqli ma’lumotlar tuzilmasi bo’lib, ma’lumotlarni kiritish va chiqarish uning faqat o’rtasiga amalga oshiriladi"
  },
  {
    quostion: "Qanday kalit so’zi yordamida nol havola (bo’sh manzil) belgilanadi",
    a: "#NULL",
    b: "NaN",
    c: "ERROR",
    d: "EMP"
  },
  {
    quostion: "Bir bog’lamli ro’yxatda nechta ko’rsatkichdan foydalaniladi",
    a: "#1",
    b: "2",
    c: "3",
    d: "4"
  },
  {
    quostion: "Ikki bog’lamli ro’yxatda nechta ko’rsatkichdan foydalaniladi",
    a: "#2",
    b: "1",
    c: "3",
    d: "4"
  },
  {
    quostion: "Dastur bajarilish jarayonida xotira xajmi aniqlangan yoki ularning soni ma’lum bo’lishi tuzilma to’plamlariga ... deyiladi.",
    a: "#Dinamik ma’lumotlar tuzilmasi",
    b: "Statik ma’lumotlar tuzilmasi",
    c: "Yarimstatik ma’lumotlar tuzilmasi",
    d: "Rekursiv ma’lumotlar tuzilmasi"
  },
  {
    quostion: "Bir bog’lamli ro’yxatlarda Next ko’rsatkichi nima uchun ishlatiladi",
    a: "#Keyingi elementni ko’rsatish uchun",
    b: "Oldingi elementni ko’rsatish uchun",
    c: "Ro’yxatning boshini ko’rsatish uchun",
    d: "Ro’yxatning oxirini ko’rsatish uchun"
  },
  {
    quostion: "Ikki bog’lamli ro’yxatlarda Next va Prev ko’rsatkichlari nima uchun ishlatiladi",
    a: "#Keyingi va oldingi elementlarini ko’rsatish uchun",
    b: "Faqat oldingi va undan keyingi elementlarini ko’rsatish uchun",
    c: "Ro’yxatning boshini ko’rsatish uchun",
    d: "Ro’yxatning oxirini ko’rsatish uchun"
  },
  {
    quostion: "Halqasimon ikki yo’nalishli ro’yxatda qaysi yo’nalishlar bo’yicha xarakatlanish mumkin?",
    a: "#ikkala",
    b: "chapga",
    c: "o’nga",
    d: "ro’yxat oxiriga"
  },
  {
    quostion: "… - obyektni mazkur obyektga murojaat qilish orqali aniqlashdir.",
    a: "#Rekursiya",
    b: "Algoritm",
    c: "Dastur",
    d: "Tuzilma"
  },
  {
    quostion: "Minimal balandlikka ega daraxt",
    a: "#HEAP TREE",
    b: "BINARY TREE",
    c: "Red Black Tree",
    d: "2-3 TREE"
  },
  {
    quostion: "Daraxt qanday nomlanadi, agar uning chiqish darajasi ikkidan oshmasa.",
    a: "#Binar",
    b: "Ternar",
    c: "Tetradli",
    d: "Ko’pqatlamli"
  },
  {
    quostion: "Bironta tugundan boshqa bir tugungacha bo’lgan yonma-yon joylashgan tugunlar ketma-ketligidir bu - ... deyiladi.",
    a: "#Yo’l",
    b: "Halqa",
    c: "Ilmoq",
    d: "Daraja"
  },
  {
    quostion: "Qidiruvni vazifasi nimadan iborat",
    a: "#berilgan argumentga mos keluvchi ma’lumotlarni massiv ichidan topish",
    b: "massivda ma’lumot yo’qligini aniqlash",
    c: "ma’lumotlar yordamida argumentni topish",
    d: "ma’lumot yordamida eng kichik elementni topish"
  },
  {
    quostion: "Berilgan argumentga mos keluvchi ma’lumotlarni massiv ichidan topish",
    a: "#Qidiruv",
    b: "Saralash",
    c: "Algoritmlash",
    d: "Uslubiyot"
  },
  {
    quostion: "Chiziqli qidiruv g’oyasi nimadan iborat",
    a: "#har bir element ketma-ket ko’rib chiqiladi",
    b: "elementlar ketma-ket jadval o’rtasidan boshlab ko’rib chiqiladi",
    c: "elementlarni ko’rib chiqish ketma-ket ravishda boshidan oxirigacha va aksincha, 2 ta element tashlab qaraladi",
    d: "binar daraxt barcha tugunlari ko’rib chiqiladi"
  },
  {
    quostion: "Noyob kalit nima",
    a: "#agar jadvalda kaliti mazkur kalitga teng ma’lumot yagona bo’lsa",
    b: "agar ikkita ma’lumot qiymatlari yig’indisi kalitga teng bo’lsa",
    c: "agar jadvalda bunday kalitli element mavjud bo’lmasa",
    d: "agar ikkita ma’lumot qiymatlari farqi kalitga teng bo’lsa"
  },
  {
    quostion: "Ketma-ket qidiruv algoritm tartibi qanday",
    a: "#Chiziqli",
    b: "Logarifmik",
    c: "Konstantali",
    d: "Eksponensial"
  },
  {
    quostion: "Binar qidiruv algoritm tartibi qanday",
    a: "#Logarifmik",
    b: "Chiziqli",
    c: "Konstantali",
    d: "Eksponensial"
  },
  {
    quostion: "Chiziqli qidiruv qachon samarali",
    a: "#massiv va ro’yxatda",
    b: "dekda",
    c: "daraxtda",
    d: "navbatda"
  },
  {
    quostion: "Ketma-ket yoki chiziqli qidiruv – bu …",
    a: "#Ma’lumotlar butun jadval bo’yicha operativ xotirada kichik adresdan boshlab, to katta adresgacha ketma-ket qarab chiqiladi",
    b: "Indekslar jadvalidan gurux topiladi, va unda ko’rsatilgan mos chegaralarda chiziqli algoritm oshiriladi",
    c: "Berilgan massiv o’rtasidagi element olinadi, ya’ni , va u qidiruv argumenti bilan taqqoslanadi. Topilmasa chegaralar mos ravishda o’zgartiriladi",
    d: "Funksiya yerdamida xesh-jadval to’ldiriladi va undan qidiriladi"
  },
  {
    quostion: "mass[] ko‘rinishida massiv e’lon qilinganda, uning yettinchi elementiga murojaat qanday amalga oshiriladi?==",
    a: "#mas[6];==",
    b: "mas[7];==",
    c: "mas(7);==",
    d: "mas(6);"
  },
  {
    quostion: "Binar qidiruv – bu …",
    a: "#Berilgan massiv o’rtasidagi element olinadi, ya’ni , va u qidiruv argumenti bilan taqqoslanadi. Topilmasa chegaralar mos ravishda o’zgartiriladi",
    b: "Ma’lumotlar butun jadval bo’yicha operativ xotirada kichik adresdan boshlab, to katta adresgacha ketma-ket qarab chiqiladi",
    c: "Indekslar jadvalidan gurux topiladi, va unda ko’rsatilgan mos chegaralarda chiziqli algoritm oshiriladi",
    d: "Funksiya yerdamida xesh-jadval to’ldiriladi va undan qidiriladi"
  },
  {
    quostion: "Xeshlash – bu …",
    a: "#Funksiya yerdamida xesh-jadval to’ldiriladi va undan qidiriladi",
    b: "Ma’lumotlar butun jadval bo’yicha operativ xotirada kichik adresdan boshlab, to katta adresgacha ketma-ket qarab chiqiladi",
    c: "Berilgan massiv o’rtasidagi element olinadi, ya’ni , va u qidiruv argumenti bilan taqqoslanadi. Topilmasa chegaralar mos ravishda o’zgartiriladi",
    d: "Indekslar jadvalidan gurux topiladi, va unda ko’rsatilgan mos chegaralarda chiziqli algoritm oshiriladi"
  },
  {
    quostion: "Operativ xotirada bajariladigan saralash qanday ataladi",
    a: "#ichki saralash",
    b: "to’liq saralash",
    c: "qo’shish orqali saralash",
    d: "adreslar jadvalini saralash"
  },
  {
    quostion: "Saralash usullari orasidan noto’g’risini toping.",
    a: "#dinamik",
    b: "yaxshilangan",
    c: "logarifmik",
    d: "qat’iy"
  },
  {
    quostion: "Berilgan to’plam elementlarini biror bir tartibda joylashtirish jarayoni",
    a: "#Saralash",
    b: "Qidiruv",
    c: "Algoritmlash",
    d: "Uslubiyot"
  },
  {
    quostion: "Saralash usuli … deyiladi, agar saralash jarayonida bir hil kalitli elementlar nisbiy joylashuvi o’zgarmasa",
    a: "#Turg’un (stable)",
    b: "Murakkab (difficult)",
    c: "Oddiy (typical)",
    d: "Turg’un emas (unstable)"
  },
  {
    quostion: "QuickSort usulining algoritm tartibini ko’rsating",
    a: "#Logarifmik",
    b: "Chiziqli",
    c: "Kvadratik",
    d: "Differensial"
  },
  {
    quostion: "Saralash samaradorligini qaysi mezonlar yordamida aniqlanadi",
    a: "#taqqoslashlar va almashtirishlar soni",
    b: "dastur yozishga ketgan vaqt",
    c: "ishlatilayotgan identifikatorlar soni va turlari",
    d: "amallar soni"
  },
  {
    quostion: "Bu ismga ega obyekt bo’lib, shu ism orqali ichidagi ma’lumotlar bilan ishlovchi obyektdir.",
    a: "#Fayl",
    b: "Katalog",
    c: "Xotira",
    d: "Ma’lumot tashuvchi"
  },
  {
    quostion: "Faylni aniqlovchi bir nechta ketma-ket bilgilar faylning ...",
    a: "#Ismi",
    b: "Kengaytmasi",
    c: "Atributi",
    d: "Yo’li"
  },
  // end
  {
    quostion: "INT túri ushın qaysı ámeller orınlı",
    a: "qosıw, alıw, pútin san bolıw, qaldıqlı bólıw",
    b: "qosıw, alıw, bolıw, mod, konkatenasiya",
    c: "kóbeytiw, alıw, konkatenasiya",
    d: "kóbeytiw, alıw, div, konkatenasiya"
  },
  {
    quostion: "FLOAT túri ushın qaysı ámeller orınlı",
    a: "qosıw, alıw, kóbeytiw, bóliw",
    b: "qosıw, alıw, bóliw, mod",
    c: "kóbeytiw, alıw, konkatenasiya",
    d: "qosıw, alıw, div, mod"
  },
  {
    quostion: "STRUCT gilt sózi járdeminde qanday struktura jaratıladı",
    a: "Jazıw",
    b: "Birlespe",
    c: "Matrisa",
    d: "Standart túr"
  },
  {
    quostion: "Algoritm ne?",
    a: "Ámeller izbe-izligi",
    b: "Fayllarǵa shaqırıq",
    c: "Obiektler kompleksin ańlatıw",
    d: "Kóplik elementlerin ańlatıw"
  },
  {
    quostion: "C++ tilinde strukturanı jaratıw ushın isletiletuǵın gilt sózi",
    a: "struct",
    b: "structure",
    c: "record",
    d: "object"
  },
  {
    quostion: "Maǵlıwmatlar strukturası ne",
    a: "bul maǵlıwmat elementleri hám olar arasındaǵı munasábetler kompleksi",
    b: "bul maǵlıwmat elementleri kompleksi",
    c: "bul elementler arasındaǵı munasábetler ámeli",
    d: "bul maǵlıwmat elementleri hám olar arasındaǵı relyasion munasábetler kompleksi"
  },
  {
    quostion: "Qaysı biri true gilt sózine sáykes ma`nisti anıqlaydı?",
    a: "1",
    b: "0",
    c: "-1",
    d: "66"
  },
  {
    quostion: "Qaysı biri true false sózine sáykes ma`nisti anıqlaydı??",
    a: "0",
    b: "1",
    c: "-1",
    d: "66"
  },
  {
    quostion: "Shártli operator if denesi qashan atqarıladı?",
    a: "ras (true)",
    b: "Jalǵan(false)",
    c: "Bárqulla atqarıladı",
    d: "Hech qashan atqarılmaydı"
  },
  {
    quostion: "Qaysı gilt sóz pútin sanlı ózgeriwshi tek oń mánisti qabıllawın kórsetedi?",
    a: "unsigned",
    b: "positive",
    c: "extern",
    d: "signed"
  },
  {
    quostion: "C++ tilinde maǵlıwmatlardı kiritiw",
    a: "cin >> X;",
    b: "cin  X;",
    c: "cout >> X;",
    d: "cout  X;"
  },
  {
    quostion: "C++ tilinde maǵlıwmatlardı shıǵarıw",
    a: "cout  X;",
    b: "cin  X;",
    c: "cout >> X;",
    d: "cin >> X;"
  },
  {
    quostion: "Massivtıń aqırǵı elemenning tártip nomeri nege teń boladı, eger massiv ólshemi 19 ǵa teń bolsa?",
    a: "18",
    b: "19",
    c: "tártip nomerin programmist anıqlaydı",
    d: "tártip nomeri sheksiz boladı"
  },
  {
    quostion: "Maǵlıwmatlar strukturası ústinde qanday tórt tiykarǵı ámel orınlanadı",
    a: "jaratıw, óshiriw, tańlaw (ruxsat alıw ), jańalaw.",
    b: "jaratıw, óshiriw, keńeytiw, jańalaw.",
    c: "jaratıw, tańlaw (ruxsat alıw ), keńeytiw, jańalaw.",
    d: "jaratıw, óshiriw, keńeytiw, tańlaw (ruxsat alıw )."
  },
  {
    quostion: "Maǵlıwmatlardı kompyuter yadında sáwlelendiriw neshe basqıshtan ibarat?",
    a: "3",
    b: "4",
    c: "5",
    d: "6"
  },
  {
    quostion: "Maǵlıwmatlar strukturası matematikalıq basqıshta...",
    a: "konkret obiekttiń qayta islew, olardıń ózgeshelikleri hám munasábetlerin izertlenedi.",
    b: "kompyuter yadında maǵlıwmatlardı sáwlelendiriliwi izertlenedi.",
    c: "berilgen talaplar boyınsha algoritmdı islep shıǵilıwı izertlenedi.",
    d: "programmanı jaratıw procesi izertlenedi."
  },
  {
    quostion: "Maǵlıwmatlar strukturası logikalıq basqıshta...",
    a: "berilgen talaplar boyınsha algoritmdı islep shıǵilıwı izertlenedi.",
    b: "kompyuter yadında maǵlıwmatlardı sáwlelendiriliwi izertlenedi.",
    c: "konkret obiekttiń qayta islew, olardıń xussusiyatlari hám munasábetlerin izertlenedi.",
    d: "programmanı jaratıw procesi izertlenedi."
  },
  {
    quostion: "Maǵlıwmatlar strukturası fizikalıq basqıshta...",
    a: "Kompyuter yadında maǵlıwmatlardı sáwlelendiriliwi izertlenedi.",
    b: "konkret obiekttiń qayta islew, olardıń xussusiyatlari hám munasábetlerin izertlenedi.",
    c: "berilgen studentler boyınsha algoritmdı islep shıǵilıwı izertlenedi.",
    d: "programmanı jaratıw procesi izertlenedi."
  },
  {
    quostion: "Birdey tipdagi óz-ara tákirarlanbaytuǵın elementlerden ibarat kompeksi",
    a: "Kóplik",
    b: "Massiv",
    c: "Jazıw",
    d: "Keste"
  },
  {
    quostion: "Birdey tiptegi elementler kompleksi",
    a: "Massiv",
    b: "Jazıw",
    c: "Keste",
    d: "Kóplik"
  },
  {
    quostion: "Túrli tipdagi maǵlıwmatlardan qanday struktura payda etiledi?",
    a: "Jazıw",
    b: "Massiv",
    c: "Kóplik",
    d: "Keste"
  },
  {
    quostion: "Túrli tipdagi maǵlıwmat maydanlardan ibarat tártipli strukturası",
    a: "Keste",
    b: "Massiv",
    c: "Jazıw",
    d: "Kóplik"
  },
  {
    quostion: "Maǵlıwmatlar strukturasın matematikalıq túrde qanday ańlatıw múmkin?",
    a: "S  D, R",
    b: "G  V , E",
    c: "A  D(1..n)",
    d: "BT  {K , L, R}"
  },
  {
    quostion: "Ápiwayı dúzilgen maǵlıwmatlar túrleri (atomlar) ǵa tómendegiler kiredi:",
    a: "logikalıq, pútin, haqiyqiy, belgili, kórsetkishli tur",
    b: "massiv, jazıw, rekursiv túrler, kóplik",
    c: "keste, stek, náwbet, dizim, dek",
    d: "terekler, graflar"
  },
  {
    quostion: "Dúzilgen strukturalıq MS (molekulalar) ǵa tómendegiler kiredi:",
    a: "massiv, jazıw, rekursiv túrler, kóplik",
    b: "keste, stek, náwbet, dizim, dek",
    c: "terekler, graflar",
    d: "logikalıq, pútin, haqiyqiy, belgili, kórsetkishli tur"
  },
  {
    quostion: "ENUM gilt sózi járdeminde qanday struktura jaratıladı",
    a: "Birlespe",
    b: "Jazıw",
    c: "Matrisa",
    d: "Standart túr"
  },
  {
    quostion: "C++ tilinde kórsetkish tuwrı járiyalanǵan varianttı kórsetiń",
    a: "int * x;",
    b: "int & x;",
    c: "int x;",
    d: "int []x;"
  },
  {
    quostion: "Yadtı dinamikalıq ajratiw uchın gilt sózdi kórsetiń",
    a: "New",
    b: "Create",
    c: "Make",
    d: "Value"
  },
  {
    quostion: "Dinamik xotirani bosatiw uchun kalit so’zini ko’rsating",
    a: "Delete",
    b: "clear",
    c: "free",
    d: "cls"
  },
  {
    quostion: "int mas[10]; kórinisinde massiv járiyalanǵanda, onıń jetinshi elementine shaqırıw qalay ámelge asıriladı?",
    a: "mas[6];",
    b: "mas[7];",
    c: "mas(7);",
    d: "mas(6);"
  },
  {
    quostion: "int function(char x1, float x2, double x3) funksiya ma`nisiniń qaytarıw túrin kórsetiń",
    a: "Int",
    b: "Char",
    c: "float",
    d: "double"
  },
  {
    quostion: "Túrlerdi keltiriwde maǵlıwmattıń bazı bir bólegin joytıw menen asıriladı",
    a: "float to int",
    b: "char to float",
    c: "char to int",
    d: "int to float"
  },
  {
    quostion: "Salıstırıwlaw ámelniń qaysı biri nadurıs berilgen",
    a: "!",
    b: "!",
    c: "",
    d: ""
  },
  {
    quostion: "Joqarı prioritetga iye bolǵan ámeldi kórsetiń",
    a: "()",
    b: "/",
    c: "",
    d: ""
  },
  {
    quostion: "Maǵlıwmatlardıń túrlerdi keltiriwde tuwrı juwabın tabıń",
    a: "(char) a",
    b: "to(char, a)",
    c: "a (char)",
    d: "char : a"
  },
  {
    quostion: "char a; ózgeriwshisi járiyalanǵan. Keltirilgen ańlatpalardıń qaysı biri nadurıs?",
    a: "a  '3' ;",
    b: "a  '3';",
    c: "a = #3;",
    d: "a = 3;"
  },
  {
    quostion: "Maǵlıwmatlar strukturaları baylanısıwına kóre tómendegishe klassifikasiyalanadi",
    a: "Baylamlı hám baylamsız",
    b: "Statikalıq, yarımstatikliq hám dinamikalıq",
    c: "Sızıqlı hám sızıqli emes",
    d: "Ápiwayı hám quramalı"
  },
  {
    quostion: "Maǵlıwmatlar strukturaları waqıt ózgeriwsheńligi yamasa programma atqarılıwı procesine kóre tómendegishe klassifikasiyalanadi",
    a: "Statikalıq, yarımstatikliq hám dinamikalıq",
    b: "Sızıqlı hám sızıqlı emes",
    c: "Baylamlı hám baylamsız",
    d: "Ápiwayı hám quramalı"
  },
  {
    quostion: "Maǵlıwmatlar strukturaları rejimine kóre tómendegishe klassifikasiyalanadi",
    a: "Sızıqlı hám sızıqsız",
    b: "Statikalıq, yarımstatikalıq hám dinamikalıq",
    c: "Baylamlı hám baylamsız",
    d: "Ápiwayı hám quramalı"
  },
  {
    quostion: "Maǵlıwmatlar strukturaları ushın yad ajıratıw ámeli qanday ataladı",
    a: "jaratıw",
    b: "joytıw",
    c: "tańlaw (ruxsat )",
    d: "jańalaw"
  },
  {
    quostion: "Maǵlıwmatlar strukturaları ushın ajıratılǵan yadtı óshiriw ámeli qanday ataladı",
    a: "joytıw",
    b: "jaratıw",
    c: "tańlaw (ruxsat )",
    d: "jańalaw"
  },
  {
    quostion: "Maǵlıwmatlar strukturaları ma`nisin ózgertiw ámeli qanday ataladı",
    a: "jańalaw",
    b: "joytıw",
    c: "jaratıw",
    d: "tańlaw (ruxsat )"
  },
  {
    quostion: "Maǵlıwmatlar strukturalarına ruxsat alıw ámeli qanday ataladı",
    a: "tańlaw (ruxsat )",
    b: "jańalaw",
    c: "joytıw",
    d: "jaratıw"
  },
  {
    quostion: "C++ tilinde ózgeriwshilerdi járiyalawıń qaysı biri massiv strukturasın ańlatadı?",
    a: "int A[100];",
    b: "struct{int P1, P 2; float P3;} A;",
    c: "struct{int P1, P 2; float P3;} A[100];",
    d: "int A;"
  },
  {
    quostion: "C++ tilinde ózgeriwshilerdi járiyalawıń qaysı biri jazıw strukturasın ańlatadı?",
    a: "struct{int P1, P 2; float P3;} A;",
    b: "int A[100];",
    c: "struct{int P1, P 2; float P3;} A[100];",
    d: "int A;"
  },
  {
    quostion: "C++ tilinde ózgeriwshilerdi járiyalawıń qaysı biri keste (tablica) strukturasın ańlatadı?",
    a: "struct{int P1, P 2; float P3;} A[100];",
    b: "int A[100];",
    c: "struct{int P1, P 2; float P3;} A;",
    d: "int A;"
  },
  {
    quostion: "X=3.1415; Haqiqiy sanınıń mantissasi nege teń boladı",
    a: "31415",
    b: "1415",
    c: "3",
    d: "51413"
  },
  {
    quostion: "Programma orınlanıw processinde yad kolemi birdey bolǵan ápiwayı hám tiykarǵı struktura jıynaqlarına... dep ataladı.",
    a: "Statikalıq maǵlıwmatlar strukturası",
    b: "Dinamikalıq maǵlıwmatlar strukturası",
    c: "Yarımstatik maǵlıwmatlar strukturası",
    d: "Rekursiv maǵlıwmatlar strukturası"
  },
  {
    quostion: "12 &10 Ańlatpanıń bıytlar ústindegi ámel nátiyjesin anıqlań",
    a: "8",
    b: "6",
    c: "14",
    d: "1"
  },
  {
    quostion: "12 | 10 Ańlatpanıń bıytlar ústindegi ámel nátiyjesin anıqlań",
    a: "14",
    b: "6",
    c: "8",
    d: "1"
  },
  {
    quostion: "12^10 Ańlatpanıń bitlar ústindegi ámel nátiyjesin anıqlań",
    a: "6",
    b: "14",
    c: "8",
    d: "1"
  },
  {
    quostion: "! 12 Ańlatpanıń bitlar ústindegi ámel nátiyjesin anıqlań",
    a: "3",
    b: "0",
    c: "21",
    d: "1"
  },
  {
    quostion: "~ 12 Ańlatpanıń bitlar ústindegi ámel nátiyjesin anıqlań",
    a: "-13",
    b: "-12",
    c: "13",
    d: "12"
  },
  {
    quostion: "char * a; a = new char[20]; berilgen. Iyelep turǵan yadtı qanday tuwrı óshiriw múmkin?",
    a: "delete []a;",
    b: "delete a[];",
    c: "delete a;",
    d: "a  NULL;"
  },
  {
    quostion: "Programma fragmentiniń natijsini anıqlań :",
    a: "1",
    b: "0",
    c: "NaN",
    d: "ERROR"
  },
  {
    quostion: "Programma fragmentiniń nátiyjesin anıqlań :",
    a: "0",
    b: "1",
    c: "NaN",
    d: "ERROR"
  },
  {
    quostion: "Programma fragmentiniń nátiyjesin anıqlań ::",
    a: "40",
    b: "53",
    c: "35",
    d: "0"
  },
  {
    quostion: "Programma fragmentiniń nátiyjesin anıqlań:",
    a: "0",
    b: "53",
    c: "35",
    d: "40"
  },
  {
    quostion: "Programma fragmentiniń nátiyjesin anıqlań : 1000 / 100 % 7 * 2",
    a: "6",
    b: "10",
    c: "0",
    d: "250"
  },
  {
    quostion: "Programma fragmentiniń nátiyjesin anıqlań :",
    a: "1000",
    b: "10",
    c: "0",
    d: "250"
  },
  {
    quostion: "Programma fragmentiniń nátiyjesin anıqlań: float X = 12,54; cout << ceil(X)<< ' '<< floor(X);",
    a: "13 12",
    b: "12 13",
    c: "12 12",
    d: "13 13"
  },
  {
    quostion: "Programma fragmentiniń nátiyjesin anıqlań:'x=y=5; z=++x+y++; coul<<x<<y<<z; '",
    a: "13 12",
    b: "12 13",
    c: "12 12",
    d: "13 13"
  },
  {
    quostion: "Programma fragmentiniń nátiyjesin anıqlań: cout <<22/5*3;",
    a: "12",
    b: "13,2",
    c: "1,47",
    d: "1"
  },
  {
    quostion: "Programma fragmentiniń nátiyjesin anıqlań: cout << 22.0 / 5.0 * 3;",
    a: "13,2",
    b: "12",
    c: "1,47",
    d: "1"
  },
  {
    quostion: "Programma fragmenti neni ańlatadı # define PI 3.14",
    a: "Programma kodinda Pidi 3.14 ge almastiriw qag’iydasi",
    b: "Jan’a tip PI di kiritedi",
    c: "Programma kodinda 3 qatardi o’shiriw",
    d: "Programma kodinda 3 ha’m 14 qatarlari o’z-ara almasadi"
  },
  {
    quostion: "Programma fragmenti neni ańlatadı Typedef unsigned char COD;",
    a: "COD jańa tur kiritedi",
    b: "Programma kodında CODni almastırıw qaǵıydası",
    c: "Programma kodında COD sózlerin óshiriw",
    d: "Programma tamamlang’anin anıqlaydı"
  },
  {
    quostion: "Eki qatardı óz-ara salıstırıwlaw funksiyasın kórsetiń",
    a: "strcmp();",
    b: "stringcompare();",
    c: "compare();",
    d: "cmp();"
  },
  {
    quostion: "Birinshi qatardıń dawamında ekinshi qatardı qosıw funksiyasın kórsetiń",
    a: "strcat ();",
    b: "stringadd ();",
    c: "append ();",
    d: "insert ();"
  },
  {
    quostion: "Stek strukturasında qanday xizmat kórsetiw túri qollaniladi?",
    a: "LIFO",
    b: "FIFO",
    c: "FILO",
    d: "LILO"
  },
  {
    quostion: "Nawbet strukturasinda qanday xizmet ko’rsetiw tu’ri qollaniladi?",
    a: "FIFO",
    b: "LIFO",
    c: "FILO",
    d: "LILO"
  },
  {
    quostion: "Stekqa jan’a element qosiw funksiyasi qanday belgilenedi",
    a: "Push",
    b: "Pop",
    c: "Top",
    d: "Empty"
  },
  {
    quostion: "Stekdan joqarı elementin óshiriw funksiyası qanday belgilenedi",
    a: "Pop",
    b: "Push",
    c: "Top",
    d: "Empty"
  },
  {
    quostion: "Stekdan joqarı elementin oqıtıp alıw funksiyası qanday belgilenedi",
    a: "Top",
    b: "Pop",
    c: "Push",
    d: "Empty"
  },
  {
    quostion: "Yarımstatik maǵlıwmatlar strukturasına neler kiredi?",
    a: "Stek, Dek, Nawbet",
    b: "Stek, Massiv",
    c: "Graf. Vektor",
    d: "String, Keste"
  },
  {
    quostion: "Listti massivten artiqmashliǵin kórsetiń",
    a: "Listtin’ uzinlig’ina shegara belgilenbeydi",
    b: "Olar arasinda sezilarli parq joq",
    c: "List elementleri tu’rli tipte boliwi mu’mkin",
    d: "List elementleri int tipinde boliwi kerek"
  },
  {
    quostion: "Programma atqarılıw processinde yad ko’lemi statikalıq belgilenedi hám deskriptorkórsetkish arqalı paydalanılǵan struktura toplamina... dep ataladı.",
    a: "Yarımstatik maǵlıwmatlar strukturası",
    b: "Statikalıq maǵlıwmatlar strukturası",
    c: "Dinamikalıq maǵlıwmatlar strukturası",
    d: "Rekursiv maǵlıwmatlar strukturası"
  },
  {
    quostion: "C++ tilinda standart standart kitapxana ja’rdeminde stekti qanday jariya qiliw mumkin",
    a: "stack < int > S ;",
    b: "queue < int > S ;",
    c: "deque < int > S ;",
    d: "list < int > S ;"
  },
  {
    quostion: "C++ tilinda standart standart kitapxana ja’rdeminde na’wbetti qanday jariya qiliw mumkin",
    a: "queue < int > S ;",
    b: "stack < int > S ;",
    c: "deque < int > S ;",
    d: "list < int > S ;"
  },
  {
    quostion: "C++ tilinda standart standart kitapxana ja’rdeminde dekti qanday jariya qiliw mumkin",
    a: "deque < int > S ;",
    b: "queue < int > S ;",
    c: "stack < int > S ;",
    d: "list < int > S ;"
  },
  {
    quostion: "Funksiyalardin’ qaysi biri kiritiw og’iminan 100 belgini x qatardaa oqitadi?",
    a: "cin.getline(x,100);",
    b: "gets(x,100);",
    c: "getline(cin, x,100);",
    d: "getch(x,100);"
  },
  {
    quostion: "Stek bul ...",
    a: "Sızıqlı maǵlıwmatlar strukturası bolıp, maǵlıwmatlardı kirgiziw hám shıǵarıw onıń bir tárepinen ámelge asıriladı",
    b: "Ol sonday struktura bolip, olda elementler qosiliwi menen ken’eyip baradi ha’m elementlerdi tek g’ana bir ta’repten qabil qiladi",
    c: "Sızıqlı maǵlıwmatlar strukturası bolıp, maǵlıwmatlardı kirgiziw hám shıǵarıw onıń eki ta’repi arqali ámelge asıriladı",
    d: "Sızıqlı maǵlıwmatlar strukturası bolıp, maǵlıwmatlardı kirgiziw hám shıǵarıw onıń tek ortası arqali ámelge asıriladı"
  },
  {
    quostion: "Na’wbet bu...",
    a: "Ol sonday struktura bolip, olda elementler qosiliwi menen ken’eyip baradi ha’m elementlerdi tek g’ana bir ta’repten qabil qiladi",
    b: "Sızıqlı maǵlıwmatlar strukturası bolıp, maǵlıwmatlardı kirgiziw hám shıǵarıw onıń bir tárepinen ámelge asıriladı",
    c: "Sızıqlı maǵlıwmatlar strukturası bolıp, maǵlıwmatlardı kirgiziw hám shıǵarıw onıń eki ta’repi arqali ámelge asıriladı",
    d: "Sızıqlı maǵlıwmatlar strukturası bolıp, maǵlıwmatlardı kirgiziw hám shıǵarıw onıń tek ortası arqali ámelge asıriladı"
  },
  {
    quostion: "Dek bul ...",
    a: "Sızıqlı maǵlıwmatlar strukturası bolıp, maǵlıwmatlardı kirgiziw hám shıǵarıw onıń eki ta’repi arqali ámelge asıriladı",
    b: "Ol sonday struktura bolip, olda elementler qosiliwi menen ken’eyip baradi ha’m elementlerdi tek g’ana bir ta’repten qabil qiladi",
    c: "Ol sonday struktura bolip, olda elementler qosiliwi menen ken’eyip baradi ha’m elementlerdi tek g’ana bir ta’repten qabil qiladi",
    d: "Sızıqlı maǵlıwmatlar strukturası bolıp, maǵlıwmatlardı kirgiziw hám shıǵarıw onıń tek ortası arqali ámelge asıriladı"
  },
  {
    quostion: "Qanday gilt sózi járdeminde nol silteme (bos mánzil) belgilenedi",
    a: "NULL",
    b: "NaN",
    c: "ERROR",
    d: "EMP"
  },
  {
    quostion: "Bir baylamlı dizimde neshe kórsetkishten paydalanıladı",
    a: "1",
    b: "2",
    c: "3",
    d: "4"
  },
  {
    quostion: "Eki baylamlı dizimde neshe kórsetkishten paydalanıladı",
    a: "2",
    b: "1",
    c: "3",
    d: "4"
  },
  {
    quostion: "Programma atqarılıw processinde yad kolemi anıqlanǵan yamasa olardıń sanı málim bolǵan struktura ... dep ataladı.",
    a: "Dinamikalıq maǵlıwmatlar strukturası",
    b: "Statikalıq maǵlıwmatlar strukturası",
    c: "Yarımstatik maǵlıwmatlar strukturası",
    d: "Rekursiv maǵlıwmatlar strukturası"
  },
  {
    quostion: "C++ tilida standart shablonlar kitapxanasi ja’rdeminde listti qanday ja’riya qiliwmu’mkin",
    a: "list < int > S ;",
    b: "queue < int > S ;",
    c: "deque < int > S ;",
    d: "stack < int > S ;"
  },
  {
    quostion: "Bir baylamlı dizimlerde Next kórsetkishi ne ushın isletiledi struct List{ int Data; List * Next;};",
    a: "Keyingi elementti kórsetiw ushın",
    b: "Aldınǵı elementti kórsetiw ushın",
    c: "Dizimdiń basın kórsetiw ushın",
    d: "Dizimdiń aqırın kórsetiw ushın"
  },
  {
    quostion: "Eki baylamlı dizimlerde Next hám Prev kórsetkishleri ne ushın isletiledi struct List{ int Data; List * Next, * Prev;};",
    a: "Keyingi hám aldınǵı elementlerin kórsetiw ushın",
    b: "Tek aldınǵı hám odan keyingi elementlerin kórsetiw ushın",
    c: "Dizimdiń basın kórsetiw ushın",
    d: "Dizimdiń aqırın kórsetiw ushın"
  },
  {
    quostion: "Shen’ber ta’rizli dizim elementi o’shirilgende …",
    a: "Dizim bir elementke qisqaradı",
    b: "Dizimde tesik payda boladı",
    c: "Dizim u’ziledi",
    d: "chiziqli ro’yxat hosil bo’ladi"
  },
  {
    quostion: "Shen’ber ta’rizli eki jónelisli dizimde qaysı jónelisler boyınsha háreketleniw múmkin?",
    a: "Eki ta’repleme",
    b: "Shepke",
    c: "On’g’a",
    d: "Dizim aqirina"
  },
  {
    quostion: "Dizim elementlerdiń dizimler bolıwı múmkin struktura qanday ataladı",
    a: "Sózlik",
    b: "Terek",
    c: "Graf",
    d: "Dizim"
  },
  {
    quostion: "… - obyektti usı obiektke shaqırıw arqalı anıqlaw bolıp tabıladı.",
    a: "Rekursiya",
    b: "Algoritm",
    c: "Programma",
    d: "Struktura"
  },
  {
    quostion: "Dúziwshi elementi sol maǵlıwmatlar strukturasına uqsas elementler bolsa ol halda… delinedi",
    a: "Rekursiv maǵlıwmatlar strukturası",
    b: "Dinamikalıq maǵlıwmatlar strukturası",
    c: "Yarımstatik maǵlıwmatlar strukturası",
    d: "Statikalıq maǵlıwmatlar strukturası"
  },
  {
    quostion: "Rekursiv funksiyalar apparatı kim tárepinen oylap tabilg’an",
    a: "A.Chyorch",
    b: "B.Mandelbrot",
    c: "A.Landis",
    d: "V.Velson"
  },
  {
    quostion: "Rekursiya máselesin sheshiwshi basqıshlar qanday ataladı",
    a: "Rekursiv triada",
    b: "Rekursiv algoritm",
    c: "Rekursiv qatnasiq",
    d: "Rekursiv obyekt"
  },
  {
    quostion: "Rekursiv triada qaysi bosqishlardan ibarat",
    a: "parametrizasiya, rekursiya bazasi ha’m dekompozisiya",
    b: "Anıqlaw, shaqırıw, ózgertiw",
    c: "Ańsat, orta, qıyın",
    d: "Qosıw, ayırıw, kóbeytiw"
  },
  {
    quostion: "Rekursiv triadaning qaysı basqıshında másele shártini klassifikaciyalaw jáne onı sheshiw ushın parametrler anıqlanadı.",
    a: "parametrizasiya",
    b: "rekursiya bazasi",
    c: "dekompozisiya",
    d: "shaqiriw"
  },
  {
    quostion: "Rekursiv triadaning qaysı basqıshında másele sheshimi anıq bolǵan trivial jaǵday anıqlanadı, yaǵnıy bul jaǵdayda funksiyanı ózine shaqırıq etiwi talap etilmeydi.",
    a: "rekursiya bazasi",
    b: "dekompozisiya",
    c: "parametrizasiya",
    d: "shaqiriw"
  },
  {
    quostion: "ózgergen parametrli bólim máseleler arqalı táriypleydi.",
    a: "dekompozisiya",
    b: "rekursiya bazasi",
    c: "parametrizasiya",
    d: "chaqiruv"
  },
  {
    quostion: "Terek strukturadaǵı sonday elementke múrajaat yamasa, ol... túyin esaplanadı.",
    a: "túbir",
    b: "aralıq",
    c: "sońǵı",
    d: "túbir bolmaǵan"
  },
  {
    quostion: "Terek strukturada basqa elementlerge múrajaat bolmasa, ol... túyin esaplanadı.",
    a: "japraq",
    b: "aralıq",
    c: "túbir",
    d: "terminal"
  },
  {
    quostion: "Qashan terek teń slmaqlılıq esaplanadı?",
    a: "eger onıń shep hám oń bólim terekleri biyikligi parqi 1 den kóp bolmasa",
    b: "eger onıń shep hám oń bólim terekleri keńligi parqlanbasa",
    c: "eger onıń shep hám oń bólim terekleri japraqları teń sanlı bolsa",
    d: "eger onıń aralıq túyinleri jup mánisli bolsa"
  },
  {
    quostion: "Sızıqlı maǵlıwmatlar strukturasına neler kiredi?",
    a: "Terek, graf",
    b: "Stek, Dek, Náwbet",
    c: "jazıw, keste",
    d: "Graf. Vektor"
  },
  {
    quostion: "Terek biyikligi – bul l ...",
    a: "terek basqishları sanı",
    b: "túyinler sanı",
    c: "aralıq elementleri sanı",
    d: "japıraqlar sanı"
  },
  {
    quostion: "Terek dárejesi – bul ...",
    a: "Terekke tiyisli túyinniń qatnasıqlar sanınıń maksimal mánisi",
    b: "Terekke tiyisli túyinnıń qatnasıqlar sanınıń minimal mánisi",
    c: "Terek basqıshları sanı",
    d: "Túyinler sanı"
  },
  {
    quostion: "Minimal biyiklikke iye terek",
    a: "HEAP TREE",
    b: "BINARY TREE",
    c: "Red Black Tree",
    d: "2-3 TREE"
  },
  {
    quostion: "B/\AC Binar terek ushın durıs (joqarıdan tómenge) kóriw ámeliniń nátiyjesin kórsetiń ",
    a: "BAC",
    b: "ACB",
    c: "ABC",
    d: "CAB"
  },
  {
    quostion: "B/\AC Binar terek ushın keri (tómennen joqarıǵa) kóriw ámeliniń nátiyjesin kórsetiń",
    a: "ACB",
    b: "BAC",
    c: "ABC",
    d: "CAB"
  },
  {
    quostion: "B/\AC Binar terek ushın simmetriyalıq (shepten ońǵa) kóriw ámeliniń nátiyjesin kórsetiń",
    a: "ABC",
    b: "ACB",
    c: "BAC",
    d: "CAB"
  },
  {
    quostion: "Terek qanday ataladı, eger onıń shıǵıw dárejesi ekiden aspasa.",
    a: "Binar",
    b: "Ternar",
    c: "Tetradli",
    d: "Kópqatlamlı"
  },
  {
    quostion: "Izlew terekte neshe hám qaysılar kóriw ámellerin táriypleydi",
    a: "Úsh (durıs, keri, simmetrik)",
    b: "Eki (enine hám túbine)",
    c: "Eki (enine hám uzılıǵına)",
    d: "Úsh (durıs, keri, akslanuvchi)"
  },
  {
    quostion: "Kompyuter yadında binar terekti qanday kóriniste sawlelendiriw qolay",
    a: "baylanǵan sızıqsız dizimler",
    b: "massivler",
    c: "Kesteler",
    d: "baylanǵan sızıqlı dizimler"
  },
  {
    quostion: "Terek uzunlıǵı – bul ...",
    a: "túyinler sanı",
    b: "terek basqıshları sanı",
    c: "aralıq elementleri sanı",
    d: "japıraqlar sanı"
  },
  {
    quostion: "Sıziqlı emes iyerarxik baylanǵan maǵlıwmatlar strukturası – bul …",
    a: "Terek",
    b: "Graf",
    c: "Sózlik",
    d: "Dizim"
  },
  {
    quostion: "Terek túyinler izbe-izligin tártiplesken halda shıǵarıw",
    a: "Kóriw ámeli",
    b: "Terek uzınlıǵı",
    c: "Terek biyikligi",
    d: "Terek keńligi"
  },
  {
    quostion: "Eger terekti sólkemlestiriwshi element (túyin)lerden tek ǵana eki túyin menen baylanǵan bolsa, ol jaǵdayda bunday binar terek ... deyiladi.",
    a: "tolıq",
    b: "Ekilik",
    c: "minimal biyiklikke iye terek",
    d: "Teń salmaqlastırılǵan"
  },
  {
    quostion: "56,34,60,23,40,65 sanlarınan payda bolǵan binar terek teń salmaqlastırılǵanba yamasa teń salmaqlastırılmaǵanba?",
    a: "Awa",
    b: "Yaq",
    c: "Ekewide bolıwı múmkin",
    d: "Ortasha teń salmaqlastırılǵan"
  },
  {
    quostion: "Eger elementler sanı 100 bolsa, onda minimal biyiklikke iye terek biyikligi neshege teń boladı?",
    a: "7",
    b: "8",
    c: "9",
    d: "10"
  },
  {
    quostion: "Eger minimal biyiklikke iye terek biyikligi 10 ǵa teń bolsa, onda maksimal elementler sanıneshege teń boladı",
    a: "1023",
    b: "1024",
    c: "2047",
    d: "2048"
  },
  {
    quostion: "Eger elementlar sanı 10 bolsa, onda minimal biyiklikke iye terek biyikligi neshege teń boladı?",
    a: "4",
    b: "1",
    c: "3",
    d: "2"
  },
  {
    quostion: "10,7, 12, 2, 5, 3, 11, 14 sanlarınan quralǵan binar terekte neshe aralıq túyin bar",
    a: "4",
    b: "2",
    c: "5",
    d: "8"
  },
  {
    quostion: "10,7, 12, 2, 5, 3, 11, 14 sanlarınan quralǵan binar terekte neshe aralıq túyin bar",
    a: "3",
    b: "2",
    c: "5",
    d: "8"
  },
  {
    quostion: "10,7, 12, 2, 5, 3, 11, 14 sanlarınan quralǵan binar terekte neshe aralıq túyin bar biyikligi neshege teń",
    a: "5",
    b: "3",
    c: "4",
    d: "8"
  },
  {
    quostion: "35, 27, 5,78, 29, 43 Sanlarınan payda etilgen binar terekte neshe japıraq bar",
    a: "3",
    b: "4",
    c: "5",
    d: "6"
  },
  {
    quostion: "35, 27, 5,78, 29, 43 Sanlarınan payda etilgen binar terekte neshe aralıq túyin bar",
    a: "2",
    b: "3",
    c: "4",
    d: "6"
  },
  {
    quostion: "35, 27, 5,78, 29, 43 Sanlarınan payda etilgen binar terek bálentligi neshege teń",
    a: "3",
    b: "4",
    c: "2",
    d: "1"
  },
  {
    quostion: "Quramali obiektlerdiń qasiyeti hám munasábetlerin sáwlelendiriwshi sızıqsız kóp baylamlı dinamikalıq strukturası",
    a: "Graf",
    b: "Sózlik",
    c: "Terek",
    d: "Dizim"
  },
  {
    quostion: "Graf strukturasın matematikalıq qanday ańlatıw múmkin?",
    a: "G {V,E}",
    b: "S {D,R}",
    c: "A {D(1..n)}",
    d: "BT {K,L,R}"
  },
  {
    quostion: "Eger graftin munasábetlerin súwretlewde qırlardan paydalanılsa, ol halda graf... dep ataladı.",
    a: "Bag’darlanmag’an",
    b: "Bag’darlang’an ",
    c: "Aralas ",
    d: "Salmaqqa iye"
  },
  {
    quostion: "Eger grafning munasábetlerin súwretlewde jaqlardan paydalanılsa, ol halda graf... dep ataladı.",
    a: "Bag’darlang’an ",
    b: "Bag’darlanmag’an",
    c: "Aralas ",
    d: "Salmaqqa iye"
  },
  {
    quostion: "Eger graftiń munasábetlerin súwretlewde jaqlardan hám qırlardan paydalanılsa, ol halda graf... dep ataladı.",
    a: "Aralas",
    b: "Bag’darlanmag’an",
    c: "Bag’darlang’an",
    d: "Salmaqqa iye"
  },
  {
    quostion: "Eger graftiń munasábetlerine salmaqlıq ma`nisi belgilensa, ol halda graf... dep ataladı.",
    a: "Salmaqqa iye",
    b: "Bag’darlanmag’an",
    c: "Bag’darlang’an",
    d: "Aralas"
  },
  {
    quostion: "Grafning tártibi nege teń",
    a: "Ushlar sanına ",
    b: "Qırlar sanına ",
    c: "Qır hám ushlar sanına ",
    d: "Qıstırıp qoyıwlar sanına"
  },
  {
    quostion: "Grafning ólshemi nege teń",
    a: "Qırlar sanına",
    b: "Ushlar sanına",
    c: "Qır hám ushlar sanına ",
    d: "Qıstırıp qoyıwlar sanına"
  },
  {
    quostion: "Graftiń túyin dárejesi bul ",
    a: "odan shıg’ıwshı qırlar sanı esaplanadi",
    b: "odan shıg’ıwshı túyinler sanı esaplanadi",
    c: "odan shıg’ıwshı qırlar orta arifmetik sanı esaplanadi",
    d: "odan shıg’ıwshı qırlar orta geometriyalıq sanı esaplanadi"
  },
  {
    quostion: "Grafda neshe hám qaysılar kóriw ámellerin ańlatadı",
    a: "Eki (enine hám tubine)",
    b: "Eki (enine hám uzınına )",
    c: "Ush (tuwrı, teris, sawleleniwshi)",
    d: "Ush (tuwrı, teris, simmetrik)"
  },
  {
    quostion: "Qanday konteyner járdeminde grafda tubine qaray kóriwde qollanıladı?",
    a: "Stek",
    b: "Nawbet",
    c: "Dizim",
    d: "Dek"
  },
  {
    quostion: "Qanday konteyner járdeminde grafda enine qaray kóriwde qollanıladı?",
    a: "Náwbet",
    b: "Stek",
    c: "Dizim",
    d: "Dek"
  },
  {
    quostion: "Kim tárepinen hám qaysı jılda graf túsinigin kirgizgen",
    a: "D.Kenig, 1936 ",
    b: "D.Ritchi, 1976",
    c: "A.Lovli, 1966",
    d: "Ch.Bebidj, 1946"
  },
  {
    quostion: "Eger grafda bası hám aqırı bir túyinde tutasatug’ın qır bar bolsa, og’an... dep ataladı.",
    a: "ilmek (petley)",
    b: "Dońgelek",
    c: "Jol",
    d: "Dáreje"
  },
  {
    quostion: "Qandayda bir túyinnen basqa bir túyinge shekem bolg’an qasında jaylasqan túyinler izbe-izligi bolıp tabıladı bul -... dep ataladı.",
    a: "Jol",
    b: "Dońgelek",
    c: "ilmek (petley)",
    d: "Dáreje"
  },
  {
    quostion: "... – bul bası hám aqırı tutasıwshı túyinnen ibarat jol.",
    a: "Dońgelek",
    b: "Jol",
    c: "Ilmek (petley)",
    d: "Dáreje"
  },
  {
    quostion: "Eger graftiń toying’anlig’i D dárejesi 0.5 dan úlken bolsa, ol halda graf... esaplanadı.",
    a: "Toying’an ",
    b: "Siyrek",
    c: "Ekilemshi",
    d: "Tolıq "
  },
  {
    quostion: "Eger graftiń toying’anlig’i D dárejesi 0.5 dan kishi bolsa, ol halda graf... esaplanadı.",
    a: "Siyrek",
    b: "Toying’an",
    c: "Ekilemshi",
    d: "Tolıq"
  },
  {
    quostion: "Eger graftiń toying’anlig’i D dárejesi 1 ge teń bolsa, ol halda graf... esaplanadi.",
    a: "Tolıq ",
    b: "Siyrek",
    c: "Toying’an",
    d: "Ekilemshi"
  },
  {
    quostion: "G grafti sawleleniwde n ólshemli A kvadrat matrisasi qanday ataladı ",
    a: "Qospa matrisa",
    b: "Munasábet matrisasi",
    c: "Qońsılıq dizimi",
    d: "Qırlar dizimi"
  },
  {
    quostion: "G grafti sawleleniwde n-ge m ólshemli B matrisasi qanday ataladı ",
    a: "Munasábet matrisasi",
    b: "Qospa matrisa ",
    c: "Qońsılıq dizimi",
    d: "Qırlar dizimi"
  },
  {
    quostion: "A[n] massiv bolıp, massivtiń xar bir elementi túyin menen qońsılas túyinler dizimi qanday ataladı ",
    a: "Qońsılıq dizimi",
    b: "Qospa matrisa",
    c: "Munasábet matrisasi",
    d: "Qırlar dizimi"
  },
  {
    quostion: "G grafni sawleleniwde qońsılas túyinler qırlarınan ibarat sızıqlı dizimi qanday ataladı ",
    a: "Qırlar dizimi ",
    b: "Qońsılıq dizimi",
    c: "Qospa matrisa",
    d: "Munasábet matrisasi"
  },
  {
    quostion: "Berilgen túyinnen baslap barlıq túyinlerdi kórip shıǵıw prosedurasi qanday ataladı.",
    a: "Aylanba",
    b: "Ciklli",
    c: "Jol",
    d: "Dárejeli"
  },
  {
    quostion: "Izlewdıń wazıypası neden ibarat ",
    a: "berilgen argumentga saykes keliwshi maǵlıwmatlardı massiv ishinen tabıw ",
    b: "massivte maǵlıwmat joq ekenligin anıqlaw ",
    c: "maǵlıwmatlar járdeminde argumentni tabıw ",
    d: "maǵlıwmat járdeminde eń kishi elementti tabıw"
  },
  {
    quostion: "Berilgen argumentga sáykes keliwshi maǵlıwmatlardı massiv ishinen tabıw ",
    a: "Izlew",
    b: "Sotrirovkalaw",
    c: "Algoritmlaw ",
    d: "Stilistika "
  },
  {
    quostion: "Kesteniń strukturasına qaray neshe izlew usılları bar",
    a: "4",
    b: "5",
    c: "6",
    d: "7"
  },
  {
    quostion: "Sızıqlı izlew ideyası neden ibarat ",
    a: "hár bir element izbe-iz kórip shıǵıladı ",
    b: "elementler izbe-iz keste ortasından baslap kórip shıǵıladı ",
    c: "elementlerdi kórip shıǵıw izbe-iz túrde basınan aqırıǵa shekem hám kerisinshe, 2 element tastap qaraladı ",
    d: "binar terek barlıq túyinleri kórip shıǵıladı"
  },
  {
    quostion: "Transpozisiya usılınıń mánisi ne?",
    a: "Tabılǵan element ózinden aldında turǵan element menen almastıriladi.",
    b: "Tabılǵan element ózinden keyingi turǵan element menen almastıriladi.",
    c: "Tabılǵan element strukturanıń 1-elementi menen almastıriladi.",
    d: "Tabılǵan element strukturanıń aqırǵı elementi menen almastıriladi."
  },
  {
    quostion: "Orınlastırıw usılınıń mánisi neden ibarat ",
    a: "tabılǵan element dizim basına jaylastırıladı ",
    b: "tabılǵan element dizim aqırına jaylastırıladı ",
    c: "tabılǵan element ózinden keyingi element menen orın almastırıladı ",
    d: "qońsılas elementler ornı almastırıladı"
  },
  {
    quostion: "Kem ushraytuǵın (noyob) gilt ne",
    a: "eger kestede gilti usı giltga teń maǵlıwmat birden-bir bolsa ",
    b: "eger eki maǵlıwmat bahaları jıyındısı giltga teń bolsa ",
    c: "eger kestede bunday giltli element ámeldegi bolmasa ",
    d: "eger eki maǵlıwmat bahaları ayırmashılıǵı giltga teń bolsa "
  },
  {
    quostion: "Úlken O notasiyada belgilengen sızıqlı izlew natiyjeliligin kórsetiń",
    a: "O(N)",
    b: "O(log2(N))",
    c: "O(1)",
    d: "O(koren:N)"
  },
  {
    quostion: "Úlken O notasiyada belgilengen binar izlew natiyjeliligin kórsetiń",
    a: "O(log2(N))",
    b: "O(N)",
    c: "O(1)",
    d: "O(koren:N)"
  },
  {
    quostion: "Úlken O notasiyada belgilengen indeksli-izbe-iz izlew natiyjeliligin kórsetiń",
    a: "O(koren:N)",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Úlken O notasiyada belgilengen xeshlew hám rexeshlew izlew natiyjeliligin kórsetiń",
    a: "O(1)",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Izbe-iz izlew algoritm tártibi qanday ",
    a: "Sızıqlı ",
    b: "Logarifmik ",
    c: "Konstantali",
    d: "Eksponensial"
  },
  {
    quostion: "Binar izlew algoritm tártibi qanday ",
    a: "Logarifmik",
    b: "Sızıqlı ",
    c: "Konstantali",
    d: "Eksponensial"
  },
  {
    quostion: "Xeshlestiriw algoritm tártibi qanday ",
    a: "Konstantali",
    b: "Sızıqlı ",
    c: "Logarifmik",
    d: "Eksponensial"
  },
  {
    quostion: "Sızıqlı izlew qashan nátiyjeli",
    a: "Massiv hám dizimde",
    b: "dekda",
    c: "terekte",
    d: "náwbette"
  },
  {
    quostion: "Izbe-iz yamasa sızıqlı izlew - bul …",
    a: "Maǵlıwmatlar pútkil keste boyınsha operativ yadta kishi adresten baslap, tap úlken adresge shekem izbe-iz qaray shıǵıladı",
    b: "Indeksler kesteinen gruppa tabıladı, hám ol jaǵdayda kórsetilgen sáykes shegaralarda sızıqlı algoritm asıriladı",
    c: "Berilgen massiv ortasındaǵı element alınadı, yaǵnıy m  (L  R)/ 2, hám ol izlew argumenti menen salıstırıwlanadı.Tabılmasa shegaralar sáykes túrde ózgertiriledi",
    d: "Funksiya jerdemida xesh-keste toldırıladı hám odan qıdırıladı "
  },
  {
    quostion: "Indeksli-izbe-iz izlew - bul …",
    a: "Indeksler kestesinen gruppa tabıladı, hám ol jaǵdayda kórsetilgen sáykes shegaralarda sızıqlı algoritm asıriladı",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Binar izlew - bul …",
    a: "Berilgen massiv ortasındaǵı element alınadı, yaǵnıy m = (L + R)/ 2 , hám ol izlew argumenti menen salıstırıwlanadı. Tabılmasa shegaralar sáykes túrde ózgertiriled",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Xeshlew - bul …",
    a: "Funksiya jerdemida xesh-keste toltırıladı hám odan izlenedi",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Operativ yadta orınlanatuǵın sortirovkalaw qanday ataladı ",
    a: "ishki sortirovkalaw",
    b: "tolıq sortirovkalaw",
    c: "qosıw arqalı sortirovkalaw",
    d: "adresler kestein sortirovkalaw"
  },
  {
    quostion: "Sortirovkalaw usılları arasınan nadurısın tabıń.",
    a: "dinamikalıq ",
    b: "jaqsılanǵan ",
    c: "logarifmik",
    d: "qatań"
  },
  {
    quostion: "Sortirovkalawdıń qaysı usılları, x(N2) giltlerdi salıstırıw rejimine iye?",
    a: "Qatań",
    b: "Binar",
    c: "Jaqsılanǵan",
    d: "logarifmik"
  },
  {
    quostion: "Berilgen toplam elementlerin qandayda bir bir tártipte jaylastırıw procesi ",
    a: "Sortirovkalaw",
    b: "Izlew",
    c: "Algoritmlaw ",
    d: "Stilistika"
  },
  {
    quostion: "Sortirovkalaw usılı … dep ataladı, eger sortirovkalaw processinde bir qıylı giltli elementler salıstırmalı jaylasıwı ózgermeytuǵına",
    a: "Turaqlı (stable)",
    b: "Quramalı (difficult)",
    c: "Ápiwayı (typical)",
    d: "Turaqlı emes (unstable)"
  },
  {
    quostion: "Qoyıw arqalı sortirovkalaw ideyası.",
    a: "Obiektler oyda tayın a (1),.. ., a (i-1) hám baslanǵısh izbe-izliklerge bólinedi. Hár bir qádemde (i=2 den baslap ) baslanǵısh izbe-izlilikden i -ne element ajıratıp alınıp tayın izbe-izliktiń kerekli jayına qosıladı.",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Tańlaw arqalı sortirovkalaw ideyası.",
    a: "Berilgen obiektler ishinen eń kishi giltga iye element saylanadı. Bul element baslanǵısh izbe izlilikdegi birinshi element menen orın almasadı. Odan keyin bul process qalǵan elementlerde ámelge asıriladı.",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Almastırıw arqalı sortirovkalaw ideyası.",
    a: "n - 1 ret massivte tómennen joqarıǵa qaray júrip giltler jup-jubi menen salıstırıladı. Eger tómengi gilt ma`nisi joqarıdaǵı jup giltten kishi bolsa, ol halda olar ornı almastırıladı",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "QuickSort usılınıń algoritm rejimin kórsetiń ",
    a: "Logarifmik",
    b: "Sızıqlı",
    c: "Kvadratik",
    d: "Differensial"
  },
  {
    quostion: "Qatań usıllardıń algoritmlar rejimin kórsetiń ",
    a: "Kvadratik",
    b: "Kubik",
    c: "Logarifmik",
    d: "Differensia"
  },
  {
    quostion: "Sortirovkalaw natiyjeliligin qaysı kriteryalar járdeminde anıqlanadı ",
    a: "salıstırıwlashlar hám almastırıwlar sanı ",
    b: "programma jazıwǵa ketken waqıt",
    c: "isletilinip atırǵan identifikatorlar sanı hám túrleri",
    d: "ámeller sanı "
  },
  {
    quostion: "Qanday sortirovkalaw usılları qatań usıllar dep belgilengen?",
    a: "tuwrıdan-tuwrı qosıw ; tuwrıdan-tuwrı tańlaw ; tuwrıdan-tuwrı almastırıw.",
    b: "Tez sortirovkalaw; Shella sortirovkalawı; Birlestiriw sortirovkalawı.",
    c: "Birlestiriw sortirovkalawı ; tuwrıdan-tuwrı tańlaw ; tuwrıdan-tuwrı almastırıw.",
    d: "Tez sortirovkalaw, tuwrıdan-tuwrı tańlaw ; tuwrıdan-tuwrı almastırıw."
  },
  {
    quostion: "Qanday sortirovkalaw usılları jaqsılanǵan usıllar dep belgilengen?",
    a: "Tez sortirovkalaw; Shella sortirovkalawı; Birlestiriw sortirovkalawı.",
    b: "tuwrıdan-tuwrı qosıw ; tuwrıdan-tuwrı tańlaw ; tuwrıdan-tuwrı almastırıw.",
    c: "Birlestiriw sortirovkalawı ; tuwrıdan-tuwrı tańlaw ; tuwrıdan-tuwrı almastırıw.",
    d: "Tez sortirovkalaw, tuwrıdan-tuwrı tańlaw ; tuwrıdan-tuwrı almastırıw."
  },
  {
    quostion: "Bul atqa iye obiekt bolıp, sol at arqalı ishindegi maǵlıwmatlar menen isleytuǵın obiekt bolıp tabıladı.",
    a: "Fayl",
    b: "Katalog ",
    c: "Yad ",
    d: "Maǵlıwmat tasıwshı "
  },
  {
    quostion: "Fayldı anıqlawshı bir neshe izbe-iz bilgilar fayldıń... ",
    a: "ati",
    b: "Keńeytpesi",
    c: "Atributı ",
    d: "Jolı "
  },
  {
    quostion: "Fayldıń maǵlıwmatlar quramın hám programmalıq támiynatın anıqlawshı kórsetkish",
    a: "Keńeytpe",
    b: "At",
    c: "Atribut ",
    d: "Jol"
  },
  {
    quostion: "Qanday klass járdeminde fayldan jazıw procesi basqarıladı?",
    a: "ofstream",
    b: "ifstream",
    c: "input_file",
    d: "output_file"
  },
  {
    quostion: "Qanday klass járdeminde fayldan oqıw procesi basqarıladı?",
    a: "ifstream",
    b: "ofstream",
    c: "input_file",
    d: "output_file"
  },
  {
    quostion: "Programmada fayl maǵlıwmatları ústinde ámel orınlawda oǵan qanday shaqırıq qılıw múmkin?",
    a: "kórsetkishler járdeminde",
    b: "Jańa jaratılǵan standart bolmaǵan tiptegi ózgeriwshi arqalı ",
    c: "Fayldı ózi tikkeley ekranda ashılıp ámel atqarıladı ",
    d: "Programmada fayl obyektlerine shaqırıq joq "
  },
  {
    quostion: "C++ tiliniń qaysı kitapxanasında fayl kiritiw/shiǵariw aǵımların ámelge asıriladı?",
    a: "fstream",
    b: "fylestream",
    c: "streamfyle",
    d: "iostream"
  },
];

answersDB().forEach((item, index) => {
  const container = document.createElement('div')

  container.innerHTML = `

      <ul class="test-list">
      <span class="quostion-text">${index + 1}. ${item.quostion}</span>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.a}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.b}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.c}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.d}
              </label>
            </li>
        </ul>
  `
  form.append(container)
})

// elHtml
const elButton = document.querySelector('#generate')
const elAnswerContent = document.querySelector('.result')
// const elsAnswers = document.querySelectorAll('.js-buttons')
// console.log(elsAnswers);

elAnswerContent.innerHTML = ''
const buttonNumber = []

headerContent()
counter(25)
createSendButton('div', 'button-submit', 'Yakunlash', elAnswerContent)
// When clicked, background changed other color
if(elButton) {
  elButton.addEventListener('click', () => {
    const button = document.createElement('button')
    button.classList.add('button-primary')
    button.textContent = 26

    elAnswerContent.appendChild(button)
  })
}

// Clicker function
if(elAnswerContent) {
  elAnswerContent.addEventListener('click', (evt) => {
    if(evt.target.matches('.button-primary')) {
      evt.target.classList.add('background-color')
    }
  })
}

// Generate 50 questions
if(elAnswerContent) {
  elAnswerContent.addEventListener('click', (evt) => {
    if(evt.target.matches('.button-submit')) {
      elAnswerContent.innerHTML = ''

      headerContent()
      counter(50)
      createSendButton('div',
        'button-submit',
        'Yakunlash',
        elAnswerContent
      )
    }
  })
}


// ------------------========= FUNCTIONS START =======-------------

// BUTTON counter
function counter(count) {
  for(let i = 1; i <= count; i++) {
    buttonNumber.push(i)
    createButton()
  }
}


// CREAT BUTTON FUNCTION
function createButton() {
  const button = document.createElement('button')
    button.classList.add('button-primary', 'js-buttons')
    elAnswerContent.appendChild(button)

  buttonNumber.forEach(item => {
    button.textContent = item
  })
}


// Content header maker
function headerContent() {
  const span = document.createElement('span')
  span.classList.add('answer')

  span.innerHTML = `
    <a href="file/tazasi.txt" class="answer__link" target="_blank">Javoblar
    </a>
  `
  elAnswerContent.appendChild(span)
}

// CREATE SEND BUTTON
function createSendButton(div, clasName, text, append) {
  div = document.createElement(div)
  div.classList.add(clasName)
  div.style.textAlign = 'center'
  div.textContent = text
  append.appendChild(div)
}

// ------------------========= FUNCTIONS END =======-------------