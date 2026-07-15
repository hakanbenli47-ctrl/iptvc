export type Lang = "tr" | "de" | "fr" | "nl" | "uk";

export const languages: { code: Lang; label: string }[] = [
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
  { code: "nl", label: "NL" },
  { code: "uk", label: "UK" },
];

const categoryImages = {
  sport: "/sport.jpg",
  movie: "/movie.jpg",
  series: "/series.jpg",
  documentary: "/documentary.jpg",
  kids: "/kids.jpg",
  adult: "/adult.jpg",
};

export const content = {
  tr: {
    brand: "IPTV",
    nav: {
      home: "Ana Sayfa",
      experience: "Deneyim",
      categories: "Kategoriler",
      devices: "Cihazlar",
      setup: "Kurulum",
      pricing: "Paketler",
      reseller: "Bayilik",
      faq: "SSS",
      contact: "İletişim",
    },
    hero: {
      badge: "Premium IPTV Servisi",
      title: "Sınırsız eğlence. Üst seviye yayın deneyimi.",
      subtitle:
        "Yüksek kaliteli yayın, güçlü altyapı ve takılma-donma yaşamadan daha stabil bir IPTV deneyimi sunar.",
      primary: "WhatsApp Destek",
      secondary: "Bayilik Al",
      note:
        "Perakende paket fiyatları sitede yer alır. Bayilik ve özel kurulum detayları WhatsApp üzerinden paylaşılır.",
    },
    popup: {
      title: "Kendi bayilik sisteminizi başlatın",
      text:
        "Bayilik sisteminizi ihtiyaçlarınıza göre planlamak ve başvuru sürecini başlatmak için bizimle iletişime geçin.",
      button: "WhatsApp ile iletişime geç",
      close: "Kapat",
    },
    strip: [
      "10.000+ canlı kanal",
      "100.000+ VOD içerik",
      "Takılma yok",
      "Donma yok",
      "HD • FHD • 4K kalite",
      "7/24 destek",
      "Tüm cihazlarla uyumlu",
      "Anında aktivasyon",
    ],
    experience: {
      badge: "Premium Deneyim",
      title: "Kesintisiz ve stabil IPTV deneyimi",
      text:
        "IPTV; Smart TV, Android TV, Fire TV, telefon, tablet ve bilgisayarda hızlı, stabil ve premium bir eğlence deneyimi isteyen kullanıcılar için hazırlanmıştır.",
      cards: [
        {
          title: "10.000+ canlı kanal",
          text:
            "Farklı ülke ve ilgi alanlarına uygun geniş canlı TV kanal seçenekleriyle güçlü bir izleme deneyimi.",
        },
        {
          title: "100.000+ VOD & film",
          text:
            "Film, dizi ve eğlence içeriklerinden oluşan geniş VOD arşiviyle günlük kullanıma uygun içerik zenginliği.",
        },
        {
          title: "Takılma yok, donma yok",
          text:
            "Daha akıcı oynatma, hızlı tepki ve stabil kullanım için güçlü altyapı ile hazırlanmış yayın deneyimi.",
        },
        {
          title: "HD, FHD ve 4K kalite",
          text:
            "Modern ekranlar, Smart TV'ler ve ev sineması deneyimi için yüksek görüntü kalitesi.",
        },
      ],
    },
    categories: {
      badge: "Kategoriler",
      title: "Tek ekranda ihtiyaç duyulan tüm içerikler",
      text:
        "Spor kanalları, film kanalları, diziler, belgeseller, çocuk kanalları ve yetişkin içerikleri premium IPTV deneyimi içinde sunulur.",
      items: [
        {
          title: "Spor Kanalları",
          text:
            "Canlı spor, önemli maçlar ve spor yayınları tek ekranda izlenebilir.",
          image: categoryImages.sport,
        },
        {
          title: "Film Kanalları",
          text:
            "Film geceleri, sinema atmosferi ve farklı zevklere uygun eğlence içerikleri.",
          image: categoryImages.movie,
        },
        {
          title: "Diziler",
          text:
            "Popüler diziler ve uzun izleme sürelerine uygun günlük eğlence içerikleri.",
          image: categoryImages.series,
        },
        {
          title: "Belgeseller",
          text:
            "Bilgi, doğa, tarih ve dikkat çekici belgesel içerikleri.",
          image: categoryImages.documentary,
        },
        {
          title: "Çocuk Kanalları",
          text: "Aile kullanımına uygun çocuk içerikleri ve eğlenceli yayınlar.",
          image: categoryImages.kids,
        },
        {
          title: "Yetişkin İçerikleri",
          text: "Ek olarak yetişkinlere özel içerikler de mevcuttur.",
          image: categoryImages.adult,
        },
      ],
    },
    devices: {
      badge: "Cihazlar",
      title: "Popüler cihazların tamamıyla uyumlu",
      text:
        "IPTV, kullanıcıların evde veya dışarıda hâlihazırda kullandığı cihazlara kurulabilir.",
      items: [
        "Samsung Smart TV",
        "LG Smart TV",
        "Android TV",
        "Fire TV Stick",
        "iPhone & iPad",
        "Android Telefon",
        "Windows PC",
        "MacBook",
      ],
    },
    setup: {
      badge: "Kurulum",
      title: "İletişimden aktivasyona hızlı süreç",
      steps: [
        {
          title: "Cihaz bilgilerinizi gönderin",
          text:
            "WhatsApp üzerinden kullandığınız cihazı ve ihtiyaç duyduğunuz desteği yazın.",
        },
        {
          title: "Uygun kurulum yönlendirmesini alın",
          text:
            "Smart TV, Android TV, Fire TV, telefon veya bilgisayar için size uygun kurulum yöntemi paylaşılır.",
        },
        {
          title: "Anında aktivasyon",
          text:
            "Kurulumdan sonra erişiminiz hızlıca aktif edilir ve izlemeye başlayabilirsiniz.",
        },
      ],
    },
    pricing: {
      badge: "Kampanyalı Perakende Paketler",
      title: "Net paketler ve kampanyalı fiyatlar",
      text:
        "Rakip IPTV sitelerinde kullanıcıyı en çok ikna eden yapı; net süre, net fiyat, kurulum desteği ve memnuniyet güvencesidir. Bu yüzden perakende paketleri açık, sade ve doğrudan iletişime yönlendiren şekilde sunuyoruz.",
      campaignLabel: "En Çok Tercih Edilen",
      plans: [
        {
          name: "6 Aylık Paket",
          duration: "6 Ay",
          oldPrice: "",
          price: "30€",
          highlight: false,
          text:
            "Kısa süreli kullanım, cihaz testi ve perakende başlangıç için uygun paket.",
          features: [
            "7/24 destek",
            "Kurulum desteği",
            "Tüm cihazlarla uyumlu",
            "Memnuniyet desteği",
          ],
          button: "6 aylık paketi sor",
        },
        {
          name: "12 + 3 Ay Kampanya",
          duration: "15 Ay",
          oldPrice: "12 ay fiyatına",
          price: "50€",
          highlight: true,
          text:
            "12 ay alana 3 ay hediye kampanyası. Perakende kullanıcılar için en güçlü seçenek.",
          features: [
            "12 + 3 ay kullanım",
            "7/24 hizmet",
            "Kurulum desteği dahil",
            "Memnun kalmazsan para iadesi",
          ],
          button: "Kampanyalı paketi al",
        },
        {
          name: "2 Yıllık Paket",
          duration: "24 Ay",
          oldPrice: "",
          price: "90€",
          highlight: false,
          text:
            "Uzun süreli kullanım ve daha avantajlı toplam fiyat isteyenler için hazırlanmıştır.",
          features: [
            "24 ay kullanım",
            "En avantajlı uzun paket",
            "7/24 destek",
            "Kurulum yardımı",
          ],
          button: "2 yıllık paketi sor",
        },
      ],
      trust: [
        "7/24 hizmet",
        "Kurulum desteği",
        "Tüm cihazlarla uyumlu",
        "Memnun kalmazsan para iadesi",
      ],
    },
    reseller: {
      badge: "Bayilik Programı",
      title: "Kendi IPTV bayilik sisteminizi kurun",
      text:
        "Müşteri taleplerini, aktivasyonları ve desteği profesyonel şekilde yönetmek isteyenler için özel partner sistemi.",
      points: [
        "Özel bayilik başvurusu",
        "Esnek hesap ve bağlantı seçenekleri",
        "Bayilik fiyatı özel",
        "10.000+ canlı kanal",
        "100.000+ VOD içerik",
        "HD / FHD / 4K kalite",
        "7/24 destek sistemi",
        "Tüm cihazlarla uyumlu",
        "Anında aktivasyon",
        "Stabil sunucu yapısı",
        "Premium marka sunumu",
      ],
      primary: "Bayilik erişimi iste",
      secondary: "İletişime geç",
    },
    why: {
      badge: "Neden IPTV",
      title: "Kalite tesadüf değildir",
      items: [
        {
          title: "Yüksek performans",
          text:
            "Hızlı tepki, akıcı kullanım ve temiz bir eğlence deneyimi için güçlü altyapı.",
        },
        {
          title: "%99.9 uptime",
          text:
            "Daha az kesinti için stabilite ve sürekli kullanıma odaklanan yapı.",
        },
        {
          title: "Güvenli iletişim",
          text:
            "İletişim, kurulum ve aktivasyon süreci destek üzerinden özel ve kontrollü şekilde yürütülür.",
        },
        {
          title: "7/24 canlı destek",
          text:
            "Kurulum, cihaz yönlendirmesi, aktivasyon ve genel sorular için destek sağlanır.",
        },
        {
          title: "Tüm cihazlar",
          text:
            "Smart TV, Android, iOS, MAG, Enigma2, PC ve daha fazla cihaz desteklenir.",
        },
        {
          title: "Premium görünüm",
          text:
            "Sayfa ciddi, kaliteli ve ziyaretçiyi doğrudan iletişime yönlendiren bir yapı sunar.",
        },
      ],
    },
    faq: {
      badge: "SSS",
      title: "Sık sorulan sorular",
      items: [
        {
          q: "Sitede fiyatlar gösteriliyor mu?",
          a:
            "Evet. Perakende paketler sitede gösterilir. Bayilik ve özel kurulum detayları WhatsApp üzerinden paylaşılır.",
        },
        {
          q: "Takılma veya donma olur mu?",
          a:
            "Yapı stabil kullanım için hazırlanmıştır. Cihaz veya bağlantı kaynaklı durumlarda destek ekibi kurulum için yardımcı olur.",
        },
        {
          q: "Hangi içerikler var?",
          a:
            "Spor kanalları, film kanalları, diziler, belgeseller, çocuk kanalları, VOD içerikleri ve ek yetişkin içerikleri mevcuttur.",
        },
        {
          q: "Ne kadar içerik sunuluyor?",
          a:
            "Sunumda 10.000+ canlı kanal ve 100.000+ VOD içerik öne çıkarılır.",
        },
        {
          q: "Hangi cihazlar destekleniyor?",
          a:
            "Smart TV, Android TV, Fire TV Stick, iPhone, iPad, Android, Windows, Mac, MAG ve Enigma2 desteklenir.",
        },
      ],
    },
    reviews: {
      badge: "Yorumlar",
      title: "Kullanıcılar ve partnerler için premium deneyim",
      items: [
        {
          name: "Almanya'dan kullanıcı",
          text: "Kurulum netti ve sunum oldukça kaliteli görünüyordu.",
        },
        {
          name: "Fransa'dan müşteri",
          text:
            "Cihazımı gönderdim ve kısa sürede doğru kurulum yönlendirmesini aldım.",
        },
        {
          name: "Hollanda'dan partner",
          text:
            "Bayilik sunumu profesyonel ve güven veren bir yapıda.",
        },
      ],
    },
    contact: {
      badge: "İletişim",
      title: "IPTV kurulumu veya bayilik erişimi için hazır mısınız?",
      text:
        "Cihazınızı veya bayilik talebinizi WhatsApp üzerinden gönderin. Size en uygun sonraki adımı paylaşalım.",
      button: "WhatsApp mesajı gönder",
    },
    whatsapp:
      "Merhaba, IPTV hakkında bilgi almak istiyorum. Cihazım ...",
    popupWhatsapp:
      "Merhaba, IPTV bayilik sistemi hakkında bilgi almak istiyorum.",
  },

  de: {
    brand: "IPTV",
    nav: {
      home: "Start",
      experience: "Erlebnis",
      categories: "Kategorien",
      devices: "Geräte",
      setup: "Einrichtung",
      pricing: "Pakete",
      reseller: "Reseller",
      faq: "FAQ",
      contact: "Kontakt",
    },
    hero: {
      badge: "Premium IPTV Service",
      title: "Grenzenlose Unterhaltung. Ein Erlebnis auf höchstem Niveau.",
      subtitle:
        "Erleben Sie hochwertige Übertragung, starke Infrastruktur und einen stabilen Service ohne Hängenbleiben oder Einfrieren.",
      primary: "WhatsApp Support",
      secondary: "Reseller werden",
      note:
        "Retail-Paketpreise sind auf der Website sichtbar. Reseller- und Sonderdetails erhalten Sie über WhatsApp.",
    },
    popup: {
      title: "Starten Sie Ihr eigenes Reseller-System",
      text:
        "Kontaktieren Sie uns, um Ihr Reseller-System nach Ihren Anforderungen zu planen und den Antragsprozess zu starten.",
      button: "Per WhatsApp kontaktieren",
      close: "Schließen",
    },
    strip: [
      "10.000+ Live-Sender",
      "100.000+ VOD Inhalte",
      "Kein Hängenbleiben",
      "Kein Einfrieren",
      "HD • FHD • 4K Qualität",
      "24/7 Support",
      "Alle Geräte kompatibel",
      "Sofortige Aktivierung",
    ],
    experience: {
      badge: "Premium Erlebnis",
      title: "Stabiles IPTV-Erlebnis ohne Unterbrechung",
      text:
        "IPTV ist für Nutzer vorbereitet, die eine stabile, schnelle und hochwertige Unterhaltungserfahrung auf Smart TV, Android TV, Fire TV, Smartphone, Tablet und Computer wünschen.",
      cards: [
        {
          title: "10.000+ Live-Sender",
          text:
            "Ein breites Live-TV-Erlebnis mit vielen Senderoptionen für unterschiedliche Interessen und Länder.",
        },
        {
          title: "100.000+ VOD & Filme",
          text:
            "Umfangreiche VOD-Auswahl mit Filmen, Serien und Entertainment-Inhalten für den täglichen Gebrauch.",
        },
        {
          title: "Kein Hängenbleiben, kein Einfrieren",
          text:
            "Starke Infrastruktur für ein flüssiges Erlebnis mit stabilerer Wiedergabe und schneller Reaktion.",
        },
        {
          title: "HD, FHD und 4K Qualität",
          text:
            "Hochwertige Bildqualität für moderne Bildschirme, Smart TVs und Heimkino-Erlebnisse.",
        },
      ],
    },
    categories: {
      badge: "Kategorien",
      title: "Alles, was Sie auf einem Bildschirm brauchen",
      text:
        "Sportkanäle, Filmkanäle, Serien, Dokumentationen, Kinderkanäle und Inhalte für Erwachsene sind in einer stabilen und hochwertigen IPTV-Erfahrung verfügbar.",
      items: [
        {
          title: "Sportkanäle",
          text:
            "Live-Sport, wichtige Spiele und Sportübertragungen auf einem Bildschirm.",
          image: categoryImages.sport,
        },
        {
          title: "Filmkanäle",
          text:
            "Filmabende, Kino-Atmosphäre und Unterhaltung für jeden Geschmack.",
          image: categoryImages.movie,
        },
        {
          title: "Serien",
          text:
            "Beliebte Serien und tägliche Unterhaltung für lange Bildschirmzeiten.",
          image: categoryImages.series,
        },
        {
          title: "Dokumentationen",
          text:
            "Wissen, Natur, Geschichte und spannende Dokumentar-Inhalte.",
          image: categoryImages.documentary,
        },
        {
          title: "Kinderkanäle",
          text: "Familienfreundliche Inhalte und Unterhaltung für Kinder.",
          image: categoryImages.kids,
        },
        {
          title: "Erwachseneninhalte",
          text: "Zusätzliche Inhalte für Erwachsene sind ebenfalls verfügbar.",
          image: categoryImages.adult,
        },
      ],
    },
    devices: {
      badge: "Geräte",
      title: "Kompatibel mit allen beliebten Geräten",
      text:
        "IPTV kann auf den Geräten eingerichtet werden, die Nutzer bereits zu Hause oder unterwegs verwenden.",
      items: [
        "Samsung Smart TV",
        "LG Smart TV",
        "Android TV",
        "Fire TV Stick",
        "iPhone & iPad",
        "Android Smartphone",
        "Windows PC",
        "MacBook",
      ],
    },
    setup: {
      badge: "Einrichtung",
      title: "Schneller Ablauf vom Kontakt bis zur Aktivierung",
      steps: [
        {
          title: "Geräteinformationen senden",
          text:
            "Schreiben Sie uns per WhatsApp, welches Gerät Sie nutzen und welche Unterstützung Sie benötigen.",
        },
        {
          title: "Passende Einrichtung erhalten",
          text:
            "Sie erhalten die passende Anleitung für Smart TV, Android TV, Fire TV, Smartphone oder Computer.",
        },
        {
          title: "Sofortige Aktivierung",
          text:
            "Nach der Einrichtung wird Ihr Zugang schnell aktiviert und Sie können direkt starten.",
        },
      ],
    },
    pricing: {
      badge: "Retail-Angebote",
      title: "Klare Pakete und Aktionspreise",
      text:
        "Die stärksten IPTV-Angebote überzeugen mit klarer Laufzeit, sichtbarem Preis, Einrichtungshilfe und Zufriedenheitsgarantie. Deshalb werden die Retail-Pakete einfach, direkt und vertrauenswürdig präsentiert.",
      campaignLabel: "Am beliebtesten",
      plans: [
        {
          name: "6-Monats-Paket",
          duration: "6 Monate",
          oldPrice: "",
          price: "40€",
          highlight: false,
          text:
            "Geeignet für kürzere Nutzung, Gerätetest und einen einfachen Retail-Einstieg.",
          features: [
            "24/7 Support",
            "Einrichtungshilfe",
            "Alle Geräte kompatibel",
            "Zufriedenheits-Support",
          ],
          button: "6 Monate anfragen",
        },
        {
          name: "12 + 3 Monate Aktion",
          duration: "15 Monate",
          oldPrice: "Zum 12-Monats-Preis",
          price: "70€",
          highlight: true,
          text:
            "12 Monate kaufen und 3 Monate gratis erhalten. Die stärkste Option für Retail-Kunden.",
          features: [
            "12 + 3 Monate Nutzung",
            "24/7 Service",
            "Einrichtung inklusive",
            "Geld zurück bei Unzufriedenheit",
          ],
          button: "Aktionspaket anfragen",
        },
        {
          name: "2-Jahres-Paket",
          duration: "24 Monate",
          oldPrice: "",
          price: "120€",
          highlight: false,
          text:
            "Für langfristige Nutzung und einen besseren Gesamtpreis vorbereitet.",
          features: [
            "24 Monate Nutzung",
            "Vorteilhaftes Langzeitpaket",
            "24/7 Support",
            "Einrichtungshilfe",
          ],
          button: "2 Jahre anfragen",
        },
      ],
      trust: [
        "24/7 Service",
        "Einrichtungshilfe",
        "Alle Geräte kompatibel",
        "Geld zurück bei Unzufriedenheit",
      ],
    },
    reseller: {
      badge: "Reseller Programm",
      title: "Bauen Sie Ihr eigenes IPTV Reseller-Geschäft auf",
      text:
        "Ein privates Partner-System für Personen, die Kundenanfragen, Aktivierungen und Support professionell verwalten möchten.",
      points: [
        "Private Reseller-Anfrage",
        "Flexible Konto- und Verbindungsoptionen",
        "Reseller-Preise privat",
        "10.000+ Live-Sender",
        "100.000+ VOD Inhalte",
        "HD / FHD / 4K Qualität",
        "24/7 Support-System",
        "Alle Geräte kompatibel",
        "Sofortige Aktivierung",
        "Stabile Serverstruktur",
        "Premium Markenauftritt",
      ],
      primary: "Reseller-Zugang anfragen",
      secondary: "Kontakt aufnehmen",
    },
    why: {
      badge: "Warum IPTV",
      title: "Qualität ist kein Zufall",
      items: [
        {
          title: "Hohe Performance",
          text:
            "Starke Infrastruktur für schnelle Reaktion, flüssige Nutzung und ein sauberes Unterhaltungserlebnis.",
        },
        {
          title: "%99.9 Uptime",
          text:
            "Auf Stabilität und kontinuierlichen Betrieb ausgelegte Struktur für weniger Unterbrechungen.",
        },
        {
          title: "Sichere Verbindung",
          text:
            "Der Kontakt, die Einrichtung und die Aktivierung laufen privat und kontrolliert über Support.",
        },
        {
          title: "24/7 Live Support",
          text:
            "Unterstützung bei Einrichtung, Gerät, Aktivierung und allgemeinen Fragen.",
        },
        {
          title: "Alle Geräte",
          text:
            "Smart TV, Android, iOS, MAG, Enigma2, PC und weitere Geräte werden unterstützt.",
        },
        {
          title: "Premium Darstellung",
          text:
            "Die Seite wirkt seriös, hochwertig und führt Besucher direkt zur Kontaktaufnahme.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Häufige Fragen",
      items: [
        {
          q: "Werden Preise auf der Website angezeigt?",
          a:
            "Ja. Retail-Pakete werden auf der Website angezeigt. Reseller- und Sonderdetails werden über WhatsApp besprochen.",
        },
        {
          q: "Gibt es Hängenbleiben oder Einfrieren?",
          a:
            "Die Struktur ist auf stabile Nutzung ausgelegt. Bei Geräte- oder Verbindungsthemen hilft der Support bei der Einrichtung.",
        },
        {
          q: "Welche Inhalte gibt es?",
          a:
            "Sportkanäle, Filmkanäle, Serien, Dokumentationen, Kinderkanäle, VOD-Inhalte und zusätzliche Erwachseneninhalte sind verfügbar.",
        },
        {
          q: "Wie viele Inhalte gibt es?",
          a:
            "Die Präsentation hebt 10.000+ Live-Sender und 100.000+ VOD-Inhalte hervor.",
        },
        {
          q: "Welche Geräte werden unterstützt?",
          a:
            "Smart TV, Android TV, Fire TV Stick, iPhone, iPad, Android, Windows, Mac, MAG und Enigma2 werden unterstützt.",
        },
      ],
    },
    reviews: {
      badge: "Bewertungen",
      title: "Premium Erfahrung für Nutzer und Partner",
      items: [
        {
          name: "Nutzer aus Deutschland",
          text: "Die Einrichtung war klar und die Darstellung wirkte hochwertig.",
        },
        {
          name: "Kunde aus Frankreich",
          text:
            "Ich habe mein Gerät gesendet und schnell die passende Anleitung bekommen.",
        },
        {
          name: "Partner aus den Niederlanden",
          text:
            "Die Reseller-Präsentation sieht professionell und vertrauenswürdig aus.",
        },
      ],
    },
    contact: {
      badge: "Kontakt",
      title: "Bereit für IPTV Einrichtung oder Reseller-Zugang?",
      text:
        "Senden Sie Ihr Gerät oder Ihre Reseller-Anfrage per WhatsApp. Wir leiten Sie zum passenden nächsten Schritt.",
      button: "WhatsApp Nachricht senden",
    },
    whatsapp:
      "Hallo, ich möchte Informationen zu IPTV. Mein Gerät ist ...",
    popupWhatsapp:
      "Hallo, ich möchte Informationen zum IPTV Reseller-System.",
  },

  uk: {
    brand: "IPTV",
    nav: {
      home: "Home",
      experience: "Experience",
      categories: "Categories",
      devices: "Devices",
      setup: "Setup",
      pricing: "Packages",
      reseller: "Reseller",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Premium IPTV Service",
      title: "Unlimited entertainment. A next-level experience.",
      subtitle:
        "Enjoy high-quality streaming, strong infrastructure and a stable service with no freezing or buffering issues.",
      primary: "WhatsApp Support",
      secondary: "Become a Reseller",
      note:
        "Retail package prices are shown on the website. Reseller and custom setup details are shared on WhatsApp.",
    },
    popup: {
      title: "Start your own reseller system",
      text:
        "Contact us to plan a reseller setup around your needs and start the application process.",
      button: "Contact on WhatsApp",
      close: "Close",
    },
    strip: [
      "10,000+ live channels",
      "100,000+ VOD contents",
      "No freezing",
      "No buffering",
      "HD • FHD • 4K quality",
      "24/7 support",
      "All devices compatible",
      "Instant activation",
    ],
    experience: {
      badge: "Premium Experience",
      title: "Stable IPTV experience without interruptions",
      text:
        "IPTV is prepared for users who want a stable, fast and premium entertainment experience on Smart TV, Android TV, Fire TV, mobile, tablet and desktop.",
      cards: [
        {
          title: "10,000+ live channels",
          text:
            "A wide live TV experience with many channel options for different interests and countries.",
        },
        {
          title: "100,000+ VOD & movies",
          text:
            "A large VOD selection with movies, series and entertainment content for daily use.",
        },
        {
          title: "No freezing, no buffering",
          text:
            "Strong infrastructure for smoother playback, faster response and a more stable experience.",
        },
        {
          title: "HD, FHD and 4K quality",
          text:
            "High-quality picture experience for modern screens, Smart TVs and home entertainment.",
        },
      ],
    },
    categories: {
      badge: "Categories",
      title: "Everything users need on one screen",
      text:
        "Sports channels, movie channels, series, documentaries, kids channels and adult content are available in a premium IPTV experience.",
      items: [
        {
          title: "Sports Channels",
          text: "Live sports, important matches and sports broadcasts on one screen.",
          image: categoryImages.sport,
        },
        {
          title: "Movie Channels",
          text: "Movie nights, cinema atmosphere and entertainment for every taste.",
          image: categoryImages.movie,
        },
        {
          title: "Series",
          text: "Popular series and daily entertainment for longer screen time.",
          image: categoryImages.series,
        },
        {
          title: "Documentaries",
          text: "Knowledge, nature, history and interesting documentary content.",
          image: categoryImages.documentary,
        },
        {
          title: "Kids Channels",
          text: "Family-friendly content and entertainment for children.",
          image: categoryImages.kids,
        },
        {
          title: "Adult Content",
          text: "Additional adult content is also available.",
          image: categoryImages.adult,
        },
      ],
    },
    devices: {
      badge: "Devices",
      title: "Compatible with all popular devices",
      text:
        "IPTV can be set up on the devices people already use at home or while travelling.",
      items: [
        "Samsung Smart TV",
        "LG Smart TV",
        "Android TV",
        "Fire TV Stick",
        "iPhone & iPad",
        "Android Phone",
        "Windows PC",
        "MacBook",
      ],
    },
    setup: {
      badge: "Setup",
      title: "Fast flow from contact to activation",
      steps: [
        {
          title: "Send your device details",
          text:
            "Message us on WhatsApp with your device and the support you need.",
        },
        {
          title: "Receive the correct setup path",
          text:
            "You receive the suitable guide for Smart TV, Android TV, Fire TV, mobile or desktop.",
        },
        {
          title: "Instant activation",
          text:
            "After setup, your access is activated quickly and you can start using your screen.",
        },
      ],
    },
    pricing: {
      badge: "Retail Campaign Packages",
      title: "Clear packages and campaign prices",
      text:
        "The strongest IPTV offers use clear duration, clear price, setup support and a satisfaction promise. The retail packages are presented in a direct, premium and conversion-focused way.",
      campaignLabel: "Most Popular",
      plans: [
        {
          name: "6 Month Package",
          duration: "6 Months",
          oldPrice: "",
          price: "40€",
          highlight: false,
          text:
            "A good option for short-term use, device testing and a simple retail start.",
          features: [
            "24/7 support",
            "Setup support",
            "Compatible with all devices",
            "Satisfaction support",
          ],
          button: "Ask for 6 months",
        },
        {
          name: "12 + 3 Month Campaign",
          duration: "15 Months",
          oldPrice: "For the price of 12 months",
          price: "70€",
          highlight: true,
          text:
            "Buy 12 months and get 3 months extra. The strongest retail option for new customers.",
          features: [
            "12 + 3 months access",
            "24/7 service",
            "Setup support included",
            "Money back if not satisfied",
          ],
          button: "Get campaign package",
        },
        {
          name: "2 Year Package",
          duration: "24 Months",
          oldPrice: "",
          price: "120€",
          highlight: false,
          text:
            "Prepared for long-term users who want a better total price and stable support.",
          features: [
            "24 months access",
            "Best long-term value",
            "24/7 support",
            "Setup help",
          ],
          button: "Ask for 2 years",
        },
      ],
      trust: [
        "24/7 service",
        "Setup support",
        "Compatible with all devices",
        "Money back if not satisfied",
      ],
    },
    reseller: {
      badge: "Reseller Program",
      title: "Build your own IPTV reseller business",
      text:
        "A private partner system for people who want to manage customer requests, activations and support professionally.",
      points: [
        "Private reseller request",
        "Flexible account and connection options",
        "Private reseller pricing",
        "10,000+ live channels",
        "100,000+ VOD contents",
        "HD / FHD / 4K quality",
        "24/7 support system",
        "All devices compatible",
        "Instant activation",
        "Stable server structure",
        "Premium brand presentation",
      ],
      primary: "Request reseller access",
      secondary: "Contact us",
    },
    why: {
      badge: "Why IPTV",
      title: "Quality is not a coincidence",
      items: [
        {
          title: "High performance",
          text:
            "Strong infrastructure for fast response, smooth usage and a clean entertainment experience.",
        },
        {
          title: "99.9% uptime",
          text:
            "A structure focused on stability and continuous usage with fewer interruptions.",
        },
        {
          title: "Secure connection",
          text:
            "Contact, setup and activation are handled privately and carefully through support.",
        },
        {
          title: "24/7 live support",
          text: "Support for setup, device guidance, activation and general questions.",
        },
        {
          title: "All devices",
          text:
            "Smart TV, Android, iOS, MAG, Enigma2, PC and more devices are supported.",
        },
        {
          title: "Premium presentation",
          text:
            "The page looks serious, premium and guides visitors directly to contact.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "Are prices shown on the website?",
          a:
            "Yes. Retail packages are shown on the website. Reseller and custom setup details are discussed on WhatsApp.",
        },
        {
          q: "Is there freezing or buffering?",
          a:
            "The structure is prepared for stable usage. For device or connection issues, support helps with setup.",
        },
        {
          q: "Which content categories are available?",
          a:
            "Sports channels, movie channels, series, documentaries, kids channels, VOD contents and additional adult content are available.",
        },
        {
          q: "How much content is presented?",
          a:
            "The presentation highlights 10,000+ live channels and 100,000+ VOD contents.",
        },
        {
          q: "Which devices are supported?",
          a:
            "Smart TV, Android TV, Fire TV Stick, iPhone, iPad, Android, Windows, Mac, MAG and Enigma2 are supported.",
        },
      ],
    },
    reviews: {
      badge: "Reviews",
      title: "Premium experience for users and partners",
      items: [
        {
          name: "User from Germany",
          text: "The setup was clear and the presentation felt premium.",
        },
        {
          name: "Customer from France",
          text: "I sent my device and quickly received the correct guidance.",
        },
        {
          name: "Partner from Netherlands",
          text:
            "The reseller presentation looks professional and trustworthy.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Ready for IPTV setup or reseller access?",
      text:
        "Send your device or reseller request on WhatsApp. We will guide you to the right next step.",
      button: "Send WhatsApp Message",
    },
    whatsapp:
      "Hello, I want information about IPTV. My device is ...",
    popupWhatsapp:
      "Hello, I want information about the IPTV reseller system.",
  },

  fr: {
    brand: "IPTV",
    nav: {
      home: "Accueil",
      experience: "Expérience",
      categories: "Catégories",
      devices: "Appareils",
      setup: "Installation",
      pricing: "Forfaits",
      reseller: "Revendeur",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Service IPTV Premium",
      title: "Divertissement illimité. Expérience haut niveau.",
      subtitle:
        "Profitez d’une diffusion de qualité, d’une infrastructure solide et d’un service stable sans blocage ni coupure.",
      primary: "Support WhatsApp",
      secondary: "Devenir revendeur",
      note:
        "Les prix des forfaits particuliers sont visibles sur le site. Les détails revendeur sont partagés sur WhatsApp.",
    },
    popup: {
      title: "Lancez votre propre système revendeur",
      text:
        "Contactez-nous pour organiser un système revendeur adapté à vos besoins et lancer votre demande.",
      button: "Contact WhatsApp",
      close: "Fermer",
    },
    strip: [
      "10.000+ chaînes live",
      "100.000+ contenus VOD",
      "Sans blocage",
      "Sans coupure",
      "Qualité HD • FHD • 4K",
      "Support 24/7",
      "Tous les appareils",
      "Activation instantanée",
    ],
    experience: {
      badge: "Expérience Premium",
      title: "Expérience IPTV stable sans interruption",
      text:
        "IPTV est préparé pour les utilisateurs qui veulent une expérience stable, rapide et premium sur Smart TV, Android TV, Fire TV, mobile, tablette et ordinateur.",
      cards: [
        {
          title: "10.000+ chaînes live",
          text:
            "Une large expérience TV live avec de nombreuses options pour différents pays et intérêts.",
        },
        {
          title: "100.000+ VOD & films",
          text:
            "Une grande sélection VOD avec films, séries et contenus de divertissement.",
        },
        {
          title: "Sans blocage, sans coupure",
          text:
            "Infrastructure solide pour une lecture plus fluide et une expérience plus stable.",
        },
        {
          title: "Qualité HD, FHD et 4K",
          text:
            "Qualité d’image premium pour écrans modernes, Smart TV et usage familial.",
        },
      ],
    },
    categories: {
      badge: "Catégories",
      title: "Tout ce qu’il faut sur un seul écran",
      text:
        "Chaînes sportives, chaînes cinéma, séries, documentaires, chaînes enfants et contenus pour adultes sont disponibles dans une expérience IPTV premium.",
      items: [
        {
          title: "Chaînes sportives",
          text:
            "Sport en direct, grands matchs et diffusions sportives sur un seul écran.",
          image: categoryImages.sport,
        },
        {
          title: "Chaînes cinéma",
          text:
            "Soirées films, ambiance cinéma et divertissement pour tous les goûts.",
          image: categoryImages.movie,
        },
        {
          title: "Séries",
          text:
            "Séries populaires et divertissement quotidien pour de longues sessions.",
          image: categoryImages.series,
        },
        {
          title: "Documentaires",
          text:
            "Savoir, nature, histoire et contenus documentaires intéressants.",
          image: categoryImages.documentary,
        },
        {
          title: "Chaînes enfants",
          text: "Contenus familiaux et divertissement adapté aux enfants.",
          image: categoryImages.kids,
        },
        {
          title: "Contenus adultes",
          text:
            "Des contenus supplémentaires pour adultes sont également disponibles.",
          image: categoryImages.adult,
        },
      ],
    },
    devices: {
      badge: "Appareils",
      title: "Compatible avec les appareils populaires",
      text:
        "IPTV peut être configuré sur les appareils déjà utilisés à la maison ou en déplacement.",
      items: [
        "Samsung Smart TV",
        "LG Smart TV",
        "Android TV",
        "Fire TV Stick",
        "iPhone & iPad",
        "Téléphone Android",
        "PC Windows",
        "MacBook",
      ],
    },
    setup: {
      badge: "Installation",
      title: "Processus rapide du contact à l’activation",
      steps: [
        {
          title: "Envoyez les informations sur votre appareil",
          text:
            "Contactez-nous sur WhatsApp avec votre appareil et le type d’assistance souhaité.",
        },
        {
          title: "Recevez le bon guide",
          text:
            "Vous recevez la méthode adaptée pour Smart TV, Android TV, Fire TV, mobile ou ordinateur.",
        },
        {
          title: "Activation instantanée",
          text:
            "Après l’installation, l’accès est activé rapidement et vous pouvez commencer.",
        },
      ],
    },
    pricing: {
      badge: "Forfaits particuliers en promotion",
      title: "Forfaits clairs et prix promotionnels",
      text:
        "Les offres IPTV les plus efficaces présentent une durée claire, un prix visible, une aide à l’installation et une garantie de satisfaction. Les forfaits particuliers sont donc affichés de manière simple et premium.",
      campaignLabel: "Le plus choisi",
      plans: [
        {
          name: "Forfait 6 mois",
          duration: "6 mois",
          oldPrice: "",
          price: "40€",
          highlight: false,
          text:
            "Un choix adapté pour une utilisation courte, un test d’appareil et un démarrage simple.",
          features: [
            "Support 7j/7 24h/24",
            "Aide à l’installation",
            "Compatible tous appareils",
            "Assistance satisfaction",
          ],
          button: "Demander 6 mois",
        },
        {
          name: "Promotion 12 + 3 mois",
          duration: "15 mois",
          oldPrice: "Au prix de 12 mois",
          price: "70€",
          highlight: true,
          text:
            "12 mois achetés et 3 mois offerts. L’option la plus forte pour les particuliers.",
          features: [
            "Accès 12 + 3 mois",
            "Service 24h/24 7j/7",
            "Installation incluse",
            "Remboursement si non satisfait",
          ],
          button: "Choisir la promotion",
        },
        {
          name: "Forfait 2 ans",
          duration: "24 mois",
          oldPrice: "",
          price: "120€",
          highlight: false,
          text:
            "Préparé pour une utilisation longue durée avec un meilleur prix total.",
          features: [
            "Accès 24 mois",
            "Meilleure valeur long terme",
            "Support 7j/7 24h/24",
            "Aide à l’installation",
          ],
          button: "Demander 2 ans",
        },
      ],
      trust: [
        "Service 24h/24 7j/7",
        "Aide à l’installation",
        "Compatible tous appareils",
        "Remboursement si non satisfait",
      ],
    },
    reseller: {
      badge: "Programme revendeur",
      title: "Développez votre activité revendeur IPTV",
      text:
        "Un système partenaire privé pour gérer les demandes clients, activations et support de façon professionnelle.",
      points: [
        "Demande revendeur privée",
        "Options de compte et de connexion flexibles",
        "Prix revendeur privé",
        "10.000+ chaînes live",
        "100.000+ contenus VOD",
        "Qualité HD / FHD / 4K",
        "Support 24/7",
        "Tous les appareils compatibles",
        "Activation instantanée",
        "Structure serveur stable",
        "Présentation premium",
      ],
      primary: "Demander accès revendeur",
      secondary: "Nous contacter",
    },
    why: {
      badge: "Pourquoi IPTV",
      title: "La qualité n’est pas un hasard",
      items: [
        {
          title: "Haute performance",
          text:
            "Infrastructure solide pour une utilisation rapide, fluide et propre.",
        },
        {
          title: "99.9% uptime",
          text:
            "Structure orientée stabilité et utilisation continue avec moins d’interruptions.",
        },
        {
          title: "Connexion sécurisée",
          text:
            "Contact, installation et activation sont gérés en privé via le support.",
        },
        {
          title: "Support live 24/7",
          text: "Support pour installation, appareil, activation et questions générales.",
        },
        {
          title: "Tous les appareils",
          text:
            "Smart TV, Android, iOS, MAG, Enigma2, PC et plus sont pris en charge.",
        },
        {
          title: "Présentation premium",
          text:
            "La page paraît sérieuse, premium et dirige directement vers le contact.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Questions fréquentes",
      items: [
        {
          q: "Les prix sont-ils affichés ?",
          a:
            "Oui. Les forfaits particuliers sont affichés sur le site. Les détails revendeur sont partagés sur WhatsApp.",
        },
        {
          q: "Y a-t-il des blocages ou coupures ?",
          a:
            "La structure est préparée pour une utilisation stable. Le support aide pour les problèmes d’appareil ou de connexion.",
        },
        {
          q: "Quelles catégories sont disponibles ?",
          a:
            "Chaînes sportives, chaînes cinéma, séries, documentaires, chaînes enfants, VOD et contenus supplémentaires pour adultes sont disponibles.",
        },
        {
          q: "Combien de contenus sont présentés ?",
          a:
            "La présentation met en avant 10.000+ chaînes live et 100.000+ contenus VOD.",
        },
        {
          q: "Quels appareils sont compatibles ?",
          a:
            "Smart TV, Android TV, Fire TV Stick, iPhone, iPad, Android, Windows, Mac, MAG et Enigma2.",
        },
      ],
    },
    reviews: {
      badge: "Avis",
      title: "Expérience premium pour utilisateurs et partenaires",
      items: [
        {
          name: "Utilisateur en Allemagne",
          text: "L’installation était claire et la présentation paraît premium.",
        },
        {
          name: "Client en France",
          text: "J’ai envoyé mon appareil et reçu rapidement la bonne aide.",
        },
        {
          name: "Partenaire aux Pays-Bas",
          text: "La présentation revendeur est professionnelle et rassurante.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Prêt pour IPTV ou accès revendeur ?",
      text:
        "Envoyez votre appareil ou demande revendeur sur WhatsApp. Nous vous guidons vers la bonne étape.",
      button: "Envoyer un message WhatsApp",
    },
    whatsapp:
      "Bonjour, je souhaite des informations sur IPTV. Mon appareil est ...",
    popupWhatsapp:
      "Bonjour, je souhaite des informations sur le système revendeur IPTV.",
  },

  nl: {
    brand: "IPTV",
    nav: {
      home: "Home",
      experience: "Ervaring",
      categories: "Categorieën",
      devices: "Apparaten",
      setup: "Installatie",
      pricing: "Pakketten",
      reseller: "Reseller",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Premium IPTV Service",
      title: "Onbeperkt entertainment. Ervaring op topniveau.",
      subtitle:
        "Geniet van hoge kwaliteit, sterke infrastructuur en een stabiele service zonder vastlopen of bevriezen.",
      primary: "WhatsApp Support",
      secondary: "Reseller worden",
      note:
        "Retail pakketprijzen staan op de website. Reseller- en speciale setupdetails worden via WhatsApp gedeeld.",
    },
    popup: {
      title: "Start je eigen reseller-systeem",
      text:
        "Neem contact op om een reseller-systeem op maat te plannen en je aanvraag te starten.",
      button: "Contact via WhatsApp",
      close: "Sluiten",
    },
    strip: [
      "10.000+ live kanalen",
      "100.000+ VOD content",
      "Geen vastlopen",
      "Geen bevriezen",
      "HD • FHD • 4K kwaliteit",
      "24/7 support",
      "Alle apparaten",
      "Directe activatie",
    ],
    experience: {
      badge: "Premium Ervaring",
      title: "Stabiele IPTV-ervaring zonder onderbreking",
      text:
        "IPTV is voorbereid voor gebruikers die een stabiele, snelle en premium entertainmentervaring willen op Smart TV, Android TV, Fire TV, mobiel, tablet en desktop.",
      cards: [
        {
          title: "10.000+ live kanalen",
          text:
            "Een brede live TV-ervaring met veel kanaalopties voor verschillende landen en interesses.",
        },
        {
          title: "100.000+ VOD & films",
          text:
            "Een grote VOD-selectie met films, series en entertainmentcontent voor dagelijks gebruik.",
        },
        {
          title: "Geen vastlopen, geen bevriezen",
          text:
            "Sterke infrastructuur voor vloeiender kijken, snelle reactie en stabielere ervaring.",
        },
        {
          title: "HD, FHD en 4K kwaliteit",
          text:
            "Hoge beeldkwaliteit voor moderne schermen, Smart TV’s en home entertainment.",
        },
      ],
    },
    categories: {
      badge: "Categorieën",
      title: "Alles wat gebruikers nodig hebben op één scherm",
      text:
        "Sportkanalen, filmkanalen, series, documentaires, kinderkanalen en volwassen content zijn beschikbaar binnen een premium IPTV-ervaring.",
      items: [
        {
          title: "Sportkanalen",
          text:
            "Live sport, belangrijke wedstrijden en sportuitzendingen op één scherm.",
          image: categoryImages.sport,
        },
        {
          title: "Filmkanalen",
          text: "Filmavonden, bioscoopgevoel en entertainment voor elke smaak.",
          image: categoryImages.movie,
        },
        {
          title: "Series",
          text: "Populaire series en dagelijks entertainment voor langere kijktijd.",
          image: categoryImages.series,
        },
        {
          title: "Documentaires",
          text: "Kennis, natuur, geschiedenis en interessante documentaire content.",
          image: categoryImages.documentary,
        },
        {
          title: "Kinderkanalen",
          text: "Gezinsvriendelijke content en entertainment voor kinderen.",
          image: categoryImages.kids,
        },
        {
          title: "Volwassen content",
          text: "Aanvullende content voor volwassenen is ook beschikbaar.",
          image: categoryImages.adult,
        },
      ],
    },
    devices: {
      badge: "Apparaten",
      title: "Compatibel met populaire apparaten",
      text:
        "IPTV kan worden ingesteld op apparaten die mensen thuis of onderweg gebruiken.",
      items: [
        "Samsung Smart TV",
        "LG Smart TV",
        "Android TV",
        "Fire TV Stick",
        "iPhone & iPad",
        "Android Telefoon",
        "Windows PC",
        "MacBook",
      ],
    },
    setup: {
      badge: "Installatie",
      title: "Snelle flow van contact naar activatie",
      steps: [
        {
          title: "Stuur je apparaatgegevens",
          text:
            "Stuur via WhatsApp welk apparaat je gebruikt en welke ondersteuning je nodig hebt.",
        },
        {
          title: "Ontvang de juiste installatie",
          text:
            "Je ontvangt de juiste methode voor Smart TV, Android TV, Fire TV, mobiel of desktop.",
        },
        {
          title: "Directe activatie",
          text:
            "Na installatie wordt je toegang snel geactiveerd en kun je starten.",
        },
      ],
    },
    pricing: {
      badge: "Retail actie pakketten",
      title: "Duidelijke pakketten en actieprijzen",
      text:
        "Sterke IPTV-aanbiedingen werken met een duidelijke looptijd, duidelijke prijs, installatiehulp en tevredenheidsgarantie. Daarom worden de retail pakketten direct, premium en overzichtelijk getoond.",
      campaignLabel: "Meest gekozen",
      plans: [
        {
          name: "6 maanden pakket",
          duration: "6 maanden",
          oldPrice: "",
          price: "40€",
          highlight: false,
          text:
            "Geschikt voor kort gebruik, apparaattest en een eenvoudige retail start.",
          features: [
            "24/7 support",
            "Installatiehulp",
            "Compatibel met alle apparaten",
            "Tevredenheidssupport",
          ],
          button: "Vraag 6 maanden aan",
        },
        {
          name: "12 + 3 maanden actie",
          duration: "15 maanden",
          oldPrice: "Voor de prijs van 12 maanden",
          price: "70€",
          highlight: true,
          text:
            "12 maanden kopen en 3 maanden cadeau. De sterkste retail optie voor nieuwe klanten.",
          features: [
            "12 + 3 maanden toegang",
            "24/7 service",
            "Installatie inbegrepen",
            "Geld terug bij ontevredenheid",
          ],
          button: "Kies actie pakket",
        },
        {
          name: "2 jaar pakket",
          duration: "24 maanden",
          oldPrice: "",
          price: "120€",
          highlight: false,
          text:
            "Voor langdurig gebruik en een betere totaalprijs met stabiele ondersteuning.",
          features: [
            "24 maanden toegang",
            "Beste langetermijnwaarde",
            "24/7 support",
            "Installatiehulp",
          ],
          button: "Vraag 2 jaar aan",
        },
      ],
      trust: [
        "24/7 service",
        "Installatiehulp",
        "Compatibel met alle apparaten",
        "Geld terug bij ontevredenheid",
      ],
    },
    reseller: {
      badge: "Reseller Programma",
      title: "Bouw je eigen IPTV reseller business",
      text:
        "Een privé partnersysteem voor mensen die klantvragen, activaties en support professioneel willen beheren.",
      points: [
        "Privé reseller-aanvraag",
        "Flexibele account- en verbindingsopties",
        "Private resellerprijzen",
        "10.000+ live kanalen",
        "100.000+ VOD content",
        "HD / FHD / 4K kwaliteit",
        "24/7 support systeem",
        "Alle apparaten compatibel",
        "Directe activatie",
        "Stabiele serverstructuur",
        "Premium merkpresentatie",
      ],
      primary: "Reseller toegang aanvragen",
      secondary: "Contact opnemen",
    },
    why: {
      badge: "Waarom IPTV",
      title: "Kwaliteit is geen toeval",
      items: [
        {
          title: "Hoge performance",
          text:
            "Sterke infrastructuur voor snelle reactie, vloeiend gebruik en een nette entertainmentervaring.",
        },
        {
          title: "99.9% uptime",
          text:
            "Een structuur gericht op stabiliteit en continue werking met minder onderbrekingen.",
        },
        {
          title: "Veilige verbinding",
          text:
            "Contact, installatie en activatie verlopen privé en zorgvuldig via support.",
        },
        {
          title: "24/7 live support",
          text: "Support voor installatie, apparaten, activatie en algemene vragen.",
        },
        {
          title: "Alle apparaten",
          text:
            "Smart TV, Android, iOS, MAG, Enigma2, PC en meer apparaten worden ondersteund.",
        },
        {
          title: "Premium presentatie",
          text:
            "De pagina oogt serieus, premium en leidt bezoekers direct naar contact.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Veelgestelde vragen",
      items: [
        {
          q: "Worden prijzen op de website getoond?",
          a:
            "Ja. Retail pakketten staan op de website. Reseller- en speciale setupdetails worden via WhatsApp besproken.",
        },
        {
          q: "Is er vastlopen of bevriezen?",
          a:
            "De structuur is voorbereid op stabiel gebruik. Bij apparaat- of verbindingsproblemen helpt support met installatie.",
        },
        {
          q: "Welke categorieën zijn beschikbaar?",
          a:
            "Sportkanalen, filmkanalen, series, documentaires, kinderkanalen, VOD-content en aanvullende volwassen content zijn beschikbaar.",
        },
        {
          q: "Hoeveel content wordt gepresenteerd?",
          a:
            "De presentatie benadrukt 10.000+ live kanalen en 100.000+ VOD content.",
        },
        {
          q: "Welke apparaten worden ondersteund?",
          a:
            "Smart TV, Android TV, Fire TV Stick, iPhone, iPad, Android, Windows, Mac, MAG en Enigma2.",
        },
      ],
    },
    reviews: {
      badge: "Reviews",
      title: "Premium ervaring voor gebruikers en partners",
      items: [
        {
          name: "Gebruiker uit Duitsland",
          text: "De installatie was duidelijk en de presentatie voelde premium.",
        },
        {
          name: "Klant uit Frankrijk",
          text: "Ik stuurde mijn apparaat en kreeg snel de juiste begeleiding.",
        },
        {
          name: "Partner uit Nederland",
          text:
            "De resellerpresentatie ziet er professioneel en betrouwbaar uit.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Klaar voor IPTV installatie of reseller toegang?",
      text:
        "Stuur je apparaat of reseller-aanvraag via WhatsApp. Wij begeleiden je naar de juiste stap.",
      button: "WhatsApp bericht sturen",
    },
    whatsapp:
      "Hallo, ik wil informatie over IPTV. Mijn apparaat is ...",
    popupWhatsapp:
      "Hallo, ik wil informatie over het IPTV reseller-systeem.",
  },
} as const;
